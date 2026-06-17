import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

const ALLOWED_INTERESTS = ["recorded", "personal", "consult"];

const INTEREST_LABELS: Record<string, string> = {
  recorded: "קורס מוקלט",
  personal: "קורס פרונטלי 1-on-1",
  consult: "ייעוץ עסקה ספציפית",
};

type Lead = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "גוף הבקשה לא תקין" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const interest = typeof body.interest === "string" ? body.interest : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || name.length < 2) {
    return NextResponse.json({ error: "נא למלא שם" }, { status: 400 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'דוא"ל לא תקין' }, { status: 400 });
  }
  if (!ALLOWED_INTERESTS.includes(interest)) {
    return NextResponse.json({ error: "נא לבחור תחום עניין" }, { status: 400 });
  }

  const lead: Lead = { name, email, phone, interest, message };

  // Fan out to all configured destinations. Failures are logged but never
  // block the user — once any one destination succeeds we have the lead.
  const results = await Promise.allSettled([
    deliverToWebhook(lead),
    deliverToSupabase(lead),
  ]);

  const stored = results.some((r) => r.status === "fulfilled" && r.value === true);

  // Log failures for visibility during early operations
  results.forEach((r, i) => {
    const name = ["webhook", "supabase"][i];
    if (r.status === "rejected") {
      console.warn(`[lead] ${name} delivery failed:`, r.reason);
    } else if (r.status === "fulfilled" && r.value === false) {
      console.info(`[lead] ${name} not configured (skipped)`);
    }
  });

  if (!stored) {
    // No destination accepted the lead. Log everything so we can recover.
    console.error("[lead] NO destination accepted, raw payload:", lead);
  }

  return NextResponse.json({ ok: true, stored });
}

// --- Destination: Google Apps Script webhook (writes to Sheet + emails) ---
async function deliverToWebhook(lead: Lead): Promise<boolean> {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return false;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...lead,
      interestLabel: INTEREST_LABELS[lead.interest] ?? lead.interest,
      timestamp: new Date().toISOString(),
      source: "school.landing",
    }),
    // Keep this snappy — the user is waiting on the form submit response
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) {
    throw new Error(`webhook HTTP ${res.status}`);
  }
  return true;
}

// --- Destination: Supabase table (optional backup) ---
async function deliverToSupabase(lead: Lead): Promise<boolean> {
  if (!supabaseAdmin) return false;
  const { error } = await supabaseAdmin.from("leads").insert({
    name: lead.name,
    email: lead.email,
    phone: lead.phone || null,
    interest: lead.interest,
    message: lead.message || null,
    source: "landing",
  });
  if (error) {
    throw new Error(`supabase: ${error.message}`);
  }
  return true;
}

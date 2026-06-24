import { NextResponse } from "next/server";

// Map the form's interest values to Scalla's cf_2662 dropdown options.
// Form has two options matching Scalla's exactly.
const INTEREST_TO_SCALLA: Record<string, string> = {
  course: "לימודי קרקעות",
  consult: "ייעוץ לעסקה",
};

const ALLOWED_INTERESTS = Object.keys(INTEREST_TO_SCALLA);

const SCALLA_URL =
  process.env.SCALLA_CAPTURE_URL ||
  "https://api.scallacrm.co.il/modules/Webforms/capture.php";
const SCALLA_PUBLIC_ID = process.env.SCALLA_PUBLIC_ID;
const SCALLA_VTRFTK = process.env.SCALLA_VTRFTK;
const SCALLA_FORM_NAME = process.env.SCALLA_FORM_NAME || "טופס ייעוץ או לימודים";

type Payload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  consent: boolean;
};

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "גוף הבקשה לא תקין" }, { status: 400 });
  }

  const firstName = typeof body.firstName === "string" ? body.firstName.trim() : "";
  const lastName = typeof body.lastName === "string" ? body.lastName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const interest = typeof body.interest === "string" ? body.interest : "";
  const consent = body.consent === true;

  if (!firstName) {
    return NextResponse.json({ error: "נא למלא שם פרטי" }, { status: 400 });
  }
  if (!lastName) {
    return NextResponse.json({ error: "נא למלא שם משפחה" }, { status: 400 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'דוא"ל לא תקין' }, { status: 400 });
  }
  if (!phone) {
    return NextResponse.json({ error: "נא למלא טלפון" }, { status: 400 });
  }
  if (!ALLOWED_INTERESTS.includes(interest)) {
    return NextResponse.json({ error: "נא לבחור תחום עניין" }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json(
      { error: "יש לאשר את תנאי השימוש כדי לשלוח" },
      { status: 400 }
    );
  }

  const payload: Payload = { firstName, lastName, email, phone, interest, consent };
  const result = await forwardToScalla(payload);

  if (!result.ok) {
    console.error("[lead] Scalla rejected lead:", result.detail, payload);
    return NextResponse.json(
      { error: "שגיאה זמנית בשליחה. נסו שוב בעוד רגע." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

async function forwardToScalla(
  p: Payload
): Promise<{ ok: true } | { ok: false; detail: string }> {
  if (!SCALLA_PUBLIC_ID || !SCALLA_VTRFTK) {
    // Misconfiguration — better to fail loud so we don't silently swallow leads
    return { ok: false, detail: "Scalla env vars not configured" };
  }

  const form = new URLSearchParams();
  form.append("publicid", SCALLA_PUBLIC_ID);
  form.append("__vtrftk", SCALLA_VTRFTK);
  form.append("urlencodeenable", "1");
  form.append("name", SCALLA_FORM_NAME);
  form.append("lastname", p.lastName);
  form.append("firstname", p.firstName);
  form.append("email", p.email);
  form.append("mobile", p.phone);
  form.append("cf_2465", "כן"); // consent — only true reaches here
  form.append("cf_2662", INTEREST_TO_SCALLA[p.interest] ?? p.interest);

  try {
    const res = await fetch(SCALLA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Accept: "text/html, application/xhtml+xml, */*",
      },
      body: form.toString(),
      // Don't follow redirects; Scalla returns a redirect on success that
      // we don't need to chase.
      redirect: "manual",
      signal: AbortSignal.timeout(10_000),
    });

    // Scalla returns either 200 OK or a 302 redirect on success.
    // 4xx/5xx → failure.
    if (res.status === 200 || res.status === 302 || res.status === 303) {
      return { ok: true };
    }
    return { ok: false, detail: `HTTP ${res.status}` };
  } catch (err) {
    return {
      ok: false,
      detail: err instanceof Error ? err.message : String(err),
    };
  }
}

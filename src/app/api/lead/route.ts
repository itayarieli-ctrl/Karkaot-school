import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

const ALLOWED_INTERESTS = ["course", "community", "consult"];

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

  if (!supabaseAdmin) {
    console.warn("Supabase not configured — lead received:", {
      name,
      email,
      phone,
      interest,
      message,
    });
    return NextResponse.json({ ok: true, stored: false });
  }

  const { error } = await supabaseAdmin.from("leads").insert({
    name,
    email,
    phone: phone || null,
    interest,
    message: message || null,
    source: "landing",
  });

  if (error) {
    console.error("Supabase insert failed:", error);
    return NextResponse.json(
      { error: "שגיאה זמנית, נסו שוב בעוד רגע" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, stored: true });
}

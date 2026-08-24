import { NextResponse } from "next/server";

// Each landing page posts to its OWN Scalla webform, so leads are separated
// at the CRM level (own pipeline / notifications / reporting) instead of by a
// dropdown the visitor has to pick. The page decides — never the visitor.
//
// publicid values are public by design (they ship in any page embedding the
// form), so they're safe as in-repo defaults. __vtrftk is a per-form token
// that can expire, so it lives in env vars and can be rotated without a code
// change.
type FormKey = "course" | "consult";

type ScallaForm = {
  publicId?: string;
  vtrftk?: string;
  formName: string;
  // Scalla custom-field id for the marketing-consent field on THIS form.
  // Consent is a legal record (Israeli spam law) and is unrelated to which
  // product the lead wants — it's still needed even with separate forms.
  consentFieldId?: string;
  // Optional lead-type field. Currently unset: neither webform defines such
  // a field, so anything sent here is discarded by Scalla. The better place
  // to solve this is in Scalla itself — add a lead-type field to each webform
  // with a fixed "ביטול ערך" (override value) per form, and the CRM tags
  // every lead by origin with no involvement from the website at all.
  // Kept configurable in case a field is added later.
  typeFieldId?: string;
  typeValue?: string;
};

const SCALLA_FORMS: Record<FormKey, ScallaForm> = {
  course: {
    publicId:
      process.env.SCALLA_COURSE_PUBLIC_ID ||
      "d5e856cc8012c8fa4abbe5f1000d7541",
    vtrftk: process.env.SCALLA_COURSE_VTRFTK,
    // Exact webform name as configured in Scalla — must match.
    formName: process.env.SCALLA_COURSE_FORM_NAME || "טופס לימודים",
    // Required on the form. This one also has a Scalla-side override value,
    // so Scalla fills it regardless, but we send the visitor's real answer.
    consentFieldId: process.env.SCALLA_COURSE_CONSENT_FIELD || "cf_2465",
    typeFieldId: process.env.SCALLA_TYPE_FIELD,
    typeValue: process.env.SCALLA_COURSE_TYPE_VALUE,
  },
  consult: {
    publicId:
      process.env.SCALLA_CONSULT_PUBLIC_ID ||
      "167912713aaee7b119d3f8cbd45886d6",
    vtrftk: process.env.SCALLA_CONSULT_VTRFTK,
    // Exact webform name as configured in Scalla — must match.
    formName: process.env.SCALLA_CONSULT_FORM_NAME || "טופס ייעוץ או לימודים",
    // Required on the form and, unlike the course form, it has NO Scalla-side
    // override value — so the submission is rejected unless we send it.
    consentFieldId: process.env.SCALLA_CONSULT_CONSENT_FIELD || "cf_2465",
    typeFieldId: process.env.SCALLA_TYPE_FIELD,
    typeValue: process.env.SCALLA_CONSULT_TYPE_VALUE,
  },
};

const ALLOWED_INTERESTS = Object.keys(SCALLA_FORMS);

const SCALLA_URL =
  process.env.SCALLA_CAPTURE_URL ||
  "https://api.scallacrm.co.il/modules/Webforms/capture.php";

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
  const cfg = SCALLA_FORMS[p.interest as FormKey];
  if (!cfg) {
    return { ok: false, detail: `No Scalla form mapped for "${p.interest}"` };
  }
  if (!cfg.publicId) {
    // Misconfiguration — better to fail loud so we don't silently swallow leads
    return {
      ok: false,
      detail: `Scalla ${p.interest} form not configured (missing publicid)`,
    };
  }

  const form = new URLSearchParams();
  form.append("publicid", cfg.publicId);
  // __vtrftk is Vtiger's anti-forgery token from the generated webform HTML.
  // Whether Scalla's capture endpoint actually enforces it is unverified, so
  // it's optional: sent when configured, omitted otherwise. If leads are
  // rejected without it, grab a fresh value and set the env var.
  if (cfg.vtrftk) {
    form.append("__vtrftk", cfg.vtrftk);
  }
  form.append("urlencodeenable", "1");
  form.append("name", cfg.formName);
  form.append("lastname", p.lastName);
  form.append("firstname", p.firstName);
  form.append("email", p.email);
  form.append("mobile", p.phone);
  // Consent is only recorded when we know this form's field id; only
  // consented leads reach this point.
  if (cfg.consentFieldId) {
    form.append(cfg.consentFieldId, "כן");
  }
  // Lead type, so the CRM record shows what this lead is actually about.
  if (cfg.typeFieldId && cfg.typeValue) {
    form.append(cfg.typeFieldId, cfg.typeValue);
  }

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
    // Include a snippet of the response so a rejection tells us WHY
    // (e.g. a missing/expired __vtrftk) instead of just a status code.
    let snippet = "";
    try {
      snippet = (await res.text()).slice(0, 300).replace(/\s+/g, " ").trim();
    } catch {
      /* body unavailable — status alone will have to do */
    }
    return {
      ok: false,
      detail: `HTTP ${res.status}${snippet ? ` — ${snippet}` : ""}`,
    };
  } catch (err) {
    return {
      ok: false,
      detail: err instanceof Error ? err.message : String(err),
    };
  }
}

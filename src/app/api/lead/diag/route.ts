import { NextResponse } from "next/server";

// TEMPORARY DIAGNOSTIC ENDPOINT — delete once lead delivery is confirmed.
//
// Submitting the real form only ever tells us "ok" or "temporary error";
// the actual reason Scalla accepts or rejects a lead is invisible from the
// browser and (without Vercel MCP authorization) invisible to Claude too.
// This route performs the exact same POST the real form does and returns
// Scalla's raw status and response body, so a single URL visit reveals what
// is really happening instead of another round of guessing.
//
// Guarded by a shared key so it isn't publicly triggerable.

const DIAG_KEY = process.env.DIAG_KEY || "karkaot-diag-7f3a91";

const SCALLA_URL =
  process.env.SCALLA_CAPTURE_URL ||
  "https://api.scallacrm.co.il/modules/Webforms/capture.php";

const FORMS = {
  course: {
    publicId:
      process.env.SCALLA_COURSE_PUBLIC_ID ||
      "d5e856cc8012c8fa4abbe5f1000d7541",
    formName: process.env.SCALLA_COURSE_FORM_NAME || "טופס לימודים",
  },
  consult: {
    publicId:
      process.env.SCALLA_CONSULT_PUBLIC_ID ||
      "167912713aaee7b119d3f8cbd45886d6",
    formName: process.env.SCALLA_CONSULT_FORM_NAME || "טופס ייעוץ או לימודים",
  },
} as const;

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);

  if (url.searchParams.get("key") !== DIAG_KEY) {
    return NextResponse.json({ error: "bad key" }, { status: 401 });
  }

  const which = url.searchParams.get("form") === "consult" ? "consult" : "course";
  const cfg = FORMS[which];

  // Unique by default so Scalla's duplicate detection can't mask a result.
  const stamp = Date.now().toString().slice(-6);
  const email = url.searchParams.get("email") || `diag${stamp}@example.com`;
  const phone = url.searchParams.get("phone") || `05500${stamp}`;
  // Send the consent field only when asked, so we can isolate whether it is
  // what Scalla is rejecting on.
  const withConsent = url.searchParams.get("consent") !== "0";

  const form = new URLSearchParams();
  form.append("publicid", cfg.publicId);
  form.append("urlencodeenable", "1");
  form.append("name", cfg.formName);
  form.append("lastname", "אבחון");
  form.append("firstname", `בדיקה${stamp}`);
  form.append("email", email);
  form.append("mobile", phone);
  if (withConsent) form.append("cf_2465", "כן");

  const sent = Object.fromEntries(form.entries());

  let status: number | null = null;
  let body = "";
  let error: string | null = null;
  let location: string | null = null;

  try {
    const res = await fetch(SCALLA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Accept: "text/html, application/xhtml+xml, */*",
      },
      body: form.toString(),
      redirect: "manual",
      signal: AbortSignal.timeout(15_000),
    });
    status = res.status;
    location = res.headers.get("location");
    body = (await res.text()).slice(0, 1500);
  } catch (err) {
    error = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
  }

  return NextResponse.json(
    {
      form: which,
      scallaUrl: SCALLA_URL,
      sent,
      response: { status, location, error, body },
      hint:
        "status 200/302/303 = Scalla accepted. Anything else, or an error, is the real failure reason.",
    },
    { status: 200 }
  );
}

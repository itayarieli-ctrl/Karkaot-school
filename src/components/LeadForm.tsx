"use client";

import { useState } from "react";
import copy from "../../content/copy.json";

type Status = "idle" | "loading" | "ok" | "error";

// Interest VALUES are the API contract (must match the server-side mapping
// in src/app/api/lead/route.ts). Only the LABELS are user-editable, via
// content/copy.json under "lead.interest_labels".
const interestValues: ("course" | "consult")[] = ["course", "consult"];

const inputStyle: React.CSSProperties = {
  backgroundColor: "#FCFBF7",
  border: "1px solid #E8E2DA",
  borderRadius: "8px",
  padding: "12px 14px",
  fontSize: "16px",
  color: "#0D1C16",
  outline: "none",
  width: "100%",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "14px",
  fontWeight: 500,
  color: "#4A3E36",
  marginBottom: "6px",
};

type LeadData = {
  title: string;
  subtitle: string;
  contact_email: string;
  consent: string;
  success: string;
};

export default function LeadForm({
  data,
  fixedInterest,
  id = "lead",
}: {
  // On a dedicated landing page, pass the page's own copy + a fixed
  // interest value. When fixedInterest is set the interest dropdown is
  // hidden and its value is submitted as a hidden field — the lead is
  // pre-tagged by which page it came from.
  data?: LeadData;
  fixedInterest?: "course" | "consult";
  id?: string;
}) {
  const t = data ?? copy.lead;
  const interests = interestValues.map((v) => ({
    value: v,
    label: copy.lead.interest_labels[v as keyof typeof copy.lead.interest_labels],
  }));

  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) {
      setStatus("error");
      setMessage("יש לאשר את תנאי השימוש");
      return;
    }
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = {
      firstName: String(form.get("firstName") || "").trim(),
      lastName: String(form.get("lastName") || "").trim(),
      email: String(form.get("email") || "").trim(),
      phone: String(form.get("phone") || "").trim(),
      interest: fixedInterest ?? String(form.get("interest") || ""),
      consent: true,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "שגיאה בשליחה");
      setStatus("ok");
      setMessage(t.success);
      (e.target as HTMLFormElement).reset();
      setConsent(false);
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "שגיאה בשליחה");
    }
  }

  return (
    <section id={id} className="py-20 md:py-28" style={{ backgroundColor: "#4A3E36" }}>
      <div className="mx-auto max-w-6xl px-5">
        <div
          className="grid gap-8 overflow-hidden rounded-[32px] p-8 shadow-xl md:grid-cols-2 md:p-12"
          style={{ backgroundColor: "#FCFBF7" }}
        >
          {/* Side panel — title + contact info */}
          <div className="flex flex-col justify-center md:order-2">
            <h2
              className="text-4xl font-extrabold tracking-tight md:text-5xl"
              style={{ color: "#4A3E36" }}
            >
              {t.title}
            </h2>
            <div className="section-divider !justify-start mt-3">
              <span className="dot" />
            </div>
            <p
              className="mt-6 text-lg leading-relaxed"
              style={{ color: "#0D1C16" }}
            >
              {t.subtitle}
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="md:order-1"
            noValidate
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="firstName" style={labelStyle}>
                  שם פרטי <span style={{ color: "#B91C1C" }}>*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="lastName" style={labelStyle}>
                  שם משפחה <span style={{ color: "#B91C1C" }}>*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  style={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="phone" style={labelStyle}>
                  מספר טלפון <span style={{ color: "#B91C1C" }}>*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  style={inputStyle}
                />
              </div>
              {!fixedInterest && (
                <div>
                  <label htmlFor="interest" style={labelStyle}>
                    במה מתעניינים? <span style={{ color: "#B91C1C" }}>*</span>
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    defaultValue=""
                    required
                    style={{ ...inputStyle, appearance: "auto" }}
                  >
                    <option value="" disabled>
                      בחרו אפשרות
                    </option>
                    {interests.map((i) => (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className={fixedInterest ? undefined : "md:col-span-2"}>
                <label htmlFor="email" style={labelStyle}>
                  אימייל <span style={{ color: "#B91C1C" }}>*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  style={inputStyle}
                />
              </div>
            </div>

            <label
              className="mt-5 flex items-start gap-2 text-sm"
              style={{ color: "#4A3E36" }}
            >
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                style={{ marginTop: "4px", accentColor: "#18362A" }}
              />
              <span>{t.consent}</span>
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-5 w-full rounded-md px-6 py-3.5 text-base font-semibold transition hover:opacity-90 disabled:opacity-50"
              style={{ backgroundColor: "#18362A", color: "#FCFBF7" }}
            >
              {status === "loading" ? "שולח..." : "שלח"}
            </button>

            {status === "ok" && (
              <p
                className="mt-4 rounded-md p-3 text-sm font-medium"
                style={{ backgroundColor: "rgba(159, 199, 148, 0.3)", color: "#18362A" }}
              >
                {message}
              </p>
            )}
            {status === "error" && (
              <p
                className="mt-4 rounded-md p-3 text-sm font-medium"
                style={{ backgroundColor: "#FEE2E2", color: "#991B1B" }}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

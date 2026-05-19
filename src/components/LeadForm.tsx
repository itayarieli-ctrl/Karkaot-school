"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "ok" | "error";

const interests = [
  { value: "course", label: "קורס דיגיטלי" },
  { value: "community", label: "קהילה חודשית" },
  { value: "consult", label: "ייעוץ עסקה ספציפית" },
];

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      phone: String(form.get("phone") || "").trim(),
      interest: String(form.get("interest") || ""),
      message: String(form.get("message") || "").trim(),
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
      setMessage("תודה! קיבלנו את הפנייה ונחזור אליכם בימים הקרובים.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "שגיאה בשליחה");
    }
  }

  return (
    <section
      id="lead"
      className="bg-gradient-to-b from-green-900 to-green-800 py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center text-stone-50">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            הצטרפו לרשימת ההמתנה
          </h2>
          <p className="mt-3 text-lg text-green-50/90">
            השאירו פרטים ונחזור אליכם עם פתיחת ההרשמה, מידע מעמיק על הקורס,
            או לתיאום שיחת ייעוץ. ללא דיוור שיווקי אגרסיבי. ללא דחיפת מכירות.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-10 grid gap-4 rounded-2xl bg-white p-6 shadow-xl md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field name="name" label="שם מלא" required />
            <Field name="email" label='דוא"ל' type="email" required />
            <Field name="phone" label="טלפון (אופציונלי)" type="tel" />
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-stone-700">
                במה התעניינתם?
              </span>
              <select
                name="interest"
                defaultValue=""
                required
                className="rounded-md border border-stone-300 bg-white px-3 py-2.5 text-base outline-none focus:border-green-700 focus:ring-2 focus:ring-green-700/20"
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
            </label>
          </div>
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-stone-700">
              משהו שאתם רוצים שנדע (אופציונלי)
            </span>
            <textarea
              name="message"
              rows={3}
              className="rounded-md border border-stone-300 bg-white px-3 py-2.5 text-base outline-none focus:border-green-700 focus:ring-2 focus:ring-green-700/20"
            />
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 rounded-md bg-green-800 px-6 py-3 text-base font-semibold text-stone-50 transition hover:bg-green-900 disabled:opacity-50"
          >
            {status === "loading" ? "שולח..." : "שליחה"}
          </button>

          {status === "ok" && (
            <p className="rounded-md bg-green-50 p-3 text-sm font-medium text-green-900">
              {message}
            </p>
          )}
          {status === "error" && (
            <p className="rounded-md bg-red-50 p-3 text-sm font-medium text-red-900">
              {message}
            </p>
          )}

          <p className="mt-2 text-xs leading-relaxed text-stone-500">
            בהשארת הפרטים אתם מאשרים שנפנה אליכם לגבי הקורס/הקהילה/הייעוץ.
            לא נעביר את פרטיכם לצד שלישי. תוכלו להסיר עצמכם מרשימת התפוצה
            בכל עת.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-stone-700">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-md border border-stone-300 bg-white px-3 py-2.5 text-base outline-none focus:border-green-700 focus:ring-2 focus:ring-green-700/20"
      />
    </label>
  );
}

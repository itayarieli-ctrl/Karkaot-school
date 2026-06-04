const services = [
  {
    badge: "ללומדים",
    title: "קורס דיגיטלי",
    subtitle: "לימוד עצמי, מאפס ועד הבנת עסקה",
    bullets: [
      "6 שיעורים מוקלטים + תרגולים",
      "2 וובינרים: השקעה בזמן משבר, ניתוח עשור הנדל\"ן",
      "מפגש פרונטלי + קבוצת WhatsApp סגורה",
      "גישה ל-6 חודשים",
    ],
    cta: "פרטים על הקורס",
    href: "#syllabus",
  },
  {
    badge: "למתקדמים",
    title: "קהילת לומדים",
    subtitle: "מנוי חודשי לליווי שוטף",
    bullets: [
      "מענה שוטף על שאלות שבוע-שבוע",
      "ניתוחי מקרה מהשטח בזמן אמת",
      "עדכוני רגולציה ומגמות שוק",
      "פורום סגור של חברי הקהילה",
    ],
    cta: "בקרוב — הצטרפו לרשימה",
    href: "#lead",
  },
  {
    badge: "לבשלים להחלטה",
    title: "ייעוץ עסקה",
    subtitle: "ניתוח מקצועי של עסקה ספציפית",
    bullets: [
      "בחנו עסקה שמוצגת לכם על ידי גורם חיצוני",
      "ניתוח תכנוני, מיסויי וכלכלי על בסיס מידע ציבורי",
      "דוח כתוב + שיחת היוועצות",
      "בלי תיווך — רק ניתוח מקצועי לטובתכם",
    ],
    cta: "תיאום פנייה",
    href: "#lead",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            שלוש דרכים ללמוד ולקבל החלטות חכמות יותר על קרקעות
          </h2>
          <p className="mt-4 text-lg text-stone-700">
            בוחרים את הרמה שמתאימה לכם — מלימוד עצמי, דרך ליווי קבוצתי שוטף,
            ועד ניתוח מקצועי של עסקה ספציפית שאתם שוקלים.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-xl border border-stone-200 bg-white p-7 shadow-sm transition hover:shadow-md"
            >
              <span className="self-start rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-700">
                {s.badge}
              </span>
              <h3 className="mt-4 text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 text-stone-600">{s.subtitle}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-stone-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-green-800" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={s.href}
                className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-green-900 hover:text-green-700"
              >
                {s.cta} ←
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

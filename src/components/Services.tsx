import SectionTitle from "./SectionTitle";

const services = [
  {
    badge: "ללומדים",
    title: "קורס דיגיטלי",
    subtitle: "לימוד עצמי, מאפס ועד הבנת עסקה",
    bullets: [
      "6 שיעורים מוקלטים + תרגולים",
      "2 וובינרים: השקעה בזמן משבר, ניתוח עשור הנדל\"ן",
      "מפגש פרונטלי + קבוצת WhatsApp סגורה",
    ],
    cta: "פרטים על הקורס",
    href: "#syllabus",
  },
  {
    badge: "לבשלים להחלטה",
    title: "ייעוץ עסקה",
    subtitle: "ניתוח מקצועי של עסקה ספציפית",
    bullets: [
      "בחנו עסקה שמוצגת לכם על ידי גורם חיצוני",
      "ניתוח תכנוני, מיסויי וכלכלי על בסיס מידע ציבורי",
      "דוח כתוב + שיחת היוועצות",
      "ניתוח מקצועי אובייקטיבי רק לטובתכם",
    ],
    cta: "תיאום שיחה",
    href: "#lead",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28" style={{ backgroundColor: "#FCFBF7" }}>
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle align="center">
          שתי דרכים ללמוד ולקבל החלטות חכמות יותר על קרקעות
        </SectionTitle>
        <p
          className="mx-auto mt-6 max-w-2xl text-center text-lg"
          style={{ color: "#0D1C16" }}
        >
          בוחרים את הרמה שמתאימה לכם — מלימוד עצמי, דרך ליווי שוטף,
          ועד ניתוח מקצועי של עסקה ספציפית שאתם שוקלים.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:max-w-4xl md:mx-auto">
          {services.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-xl p-7 shadow-sm transition hover:shadow-md"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E8E2DA",
              }}
            >
              <span
                className="self-start rounded px-2.5 py-1 text-xs font-semibold"
                style={{
                  backgroundColor: "rgba(159, 199, 148, 0.45)",
                  color: "#18362A",
                }}
              >
                {s.badge}
              </span>
              <h3 className="mt-4 text-2xl font-bold" style={{ color: "#4A3E36" }}>
                {s.title}
              </h3>
              <p className="mt-2" style={{ color: "#9E846E" }}>
                {s.subtitle}
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm" style={{ color: "#0D1C16" }}>
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span
                      className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: "#436B38" }}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={s.href}
                className="mt-7 inline-flex items-center gap-1 text-sm font-semibold hover:opacity-70"
                style={{ color: "#18362A" }}
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

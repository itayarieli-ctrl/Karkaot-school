const lessons = [
  {
    n: "01",
    title: "יסודות ההשקעה בקרקעות בישראל",
    desc: "איך בנוי שוק הקרקעות, מי השחקנים, ומה מבדיל קרקע מהשקעה בנדל\"ן בנוי.",
  },
  {
    n: "02",
    title: "קריאת תכניות מתאר ותהליך ההפשרה",
    desc: "ת\"מ\"א, ראתמ\"א, ת\"בע — בעברית פשוטה. איך לפענח מסמך תכנון, ומה זה בכלל אומר על הקרקע.",
  },
  {
    n: "03",
    title: "זיהוי מחירי קרקע אמיתיים",
    desc: "ההבדל בין מחיר שיווקי למחיר אמיתי. איך לבנות תזרים והערכת שווי לפני שאתם שוקלים לחתום.",
  },
  {
    n: "04",
    title: "סיכונים ומלכודות בהשקעה בקרקע",
    desc: "תקנות 2016, חוק המתווכים, סוגי בעלות, מושעא, מסים נסתרים, ועד מתי כדאי להתחרט.",
  },
  {
    n: "05",
    title: "מגמות עתידיות והשפעות מאקרו-כלכליות",
    desc: "ריבית, אינפלציה, רגולציה, הגירה, ביקושים אזוריים. מה מזיז את שוק הקרקעות באמת.",
  },
  {
    n: "06",
    title: "מיסוי קרקע ואפשרויות מימון",
    desc: "מס שבח, מס רכישה, היטל השבחה. ומה בכל הקשור למימון פרטי לעומת בנקאי.",
  },
];

const webinars = [
  {
    n: "וובינר",
    title: "השקעות נדל\"ן בזמן משבר",
    desc: "מה קורה לקרקעות במלחמות, ירידות ריבית, וזעזועי שוק. ניתוח של תקופות עבר.",
  },
  {
    n: "וובינר",
    title: "ניתוח הנדל\"ן בישראל בעשור האחרון",
    desc: "מה אפשר ללמוד מהמספרים של 2014–2024 — ומה מהם רלוונטי לעתיד.",
  },
];

export default function Syllabus() {
  return (
    <section id="syllabus" className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          תוכנית הקורס
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-stone-700">
          6 שיעורים מוקלטים + 2 וובינרים. כל שיעור עומד בפני עצמו ובנוי
          לדוגמאות אמיתיות מהשטח — לא תיאוריה.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {lessons.map((l) => (
            <article
              key={l.n}
              className="rounded-xl border border-stone-200 bg-white p-6"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-green-800">
                  {l.n}
                </span>
                <h3 className="text-lg font-bold leading-snug">{l.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {l.desc}
              </p>
            </article>
          ))}
        </div>

        <h3 className="mt-12 text-xl font-bold">בנוסף — וובינרים</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {webinars.map((w) => (
            <article
              key={w.title}
              className="rounded-xl border border-green-900/20 bg-green-50/40 p-6"
            >
              <span className="text-xs font-semibold text-green-900">
                {w.n}
              </span>
              <h4 className="mt-1 text-lg font-bold">{w.title}</h4>
              <p className="mt-2 text-sm text-stone-700">{w.desc}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-stone-500">
          * המחיר ומועד פתיחת הקורס יוצגו לנרשמים לרשימת ההמתנה ברגע שייקבעו.
        </p>
      </div>
    </section>
  );
}

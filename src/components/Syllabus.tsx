import SectionTitle from "./SectionTitle";

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
    title: "השקעות נדל\"ן בזמן משבר",
    desc: "מה קורה לקרקעות במלחמות, ירידות ריבית, וזעזועי שוק. ניתוח של תקופות עבר.",
  },
  {
    title: "ניתוח הנדל\"ן בישראל בעשור האחרון",
    desc: "מה אפשר ללמוד מהמספרים של 2014–2024 — ומה מהם רלוונטי לעתיד.",
  },
  {
    title: "וובינרים נוספים מתעדכנים מעת לעת",
    desc: "סדרת וובינרים פתוחה לתלמידי הקורס. נושאים חדשים מתווספים בהתאם לאירועי השוק והרגולציה.",
  },
];

export default function Syllabus() {
  return (
    <section id="syllabus" className="py-20 md:py-28" style={{ backgroundColor: "#FCFBF7" }}>
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle align="center">תוכנית הקורס</SectionTitle>
        <p
          className="mx-auto mt-6 max-w-3xl text-center text-lg"
          style={{ color: "#0D1C16" }}
        >
          6 שיעורים מוקלטים + 2 וובינרים. כל שיעור עומד בפני עצמו ובנוי
          לדוגמאות אמיתיות מהשטח — לא תיאוריה.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {lessons.map((l) => (
            <article
              key={l.n}
              className="rounded-xl p-6"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E2DA" }}
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="text-3xl font-extrabold"
                  style={{ color: "#18362A" }}
                >
                  {l.n}
                </span>
                <h3
                  className="text-lg font-bold leading-snug"
                  style={{ color: "#4A3E36" }}
                >
                  {l.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "#0D1C16" }}>
                {l.desc}
              </p>
            </article>
          ))}
        </div>

        <h3 className="mt-14 text-center text-xl font-bold" style={{ color: "#4A3E36" }}>
          <span className="marker-bg">סדרת וובינרים — דוגמאות</span>
        </h3>
        <p className="mt-3 text-center text-sm" style={{ color: "#9E846E" }}>
          חברי הקורס מקבלים גישה לכל הוובינרים הקיימים ולחדשים שייפתחו בהמשך
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {webinars.map((w) => (
            <article
              key={w.title}
              className="rounded-xl p-6"
              style={{
                backgroundColor: "rgba(159, 199, 148, 0.18)",
                border: "1px solid rgba(67, 107, 56, 0.35)",
              }}
            >
              <h4 className="text-lg font-bold" style={{ color: "#4A3E36" }}>
                {w.title}
              </h4>
              <p className="mt-2 text-sm" style={{ color: "#0D1C16" }}>
                {w.desc}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm" style={{ color: "#9E846E" }}>
          * המחיר ומועד פתיחת הקורס יוצגו לנרשמים לרשימת ההמתנה ברגע שייקבעו.
        </p>
      </div>
    </section>
  );
}

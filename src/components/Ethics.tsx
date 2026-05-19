const principles = [
  {
    title: "גילוי קשרים מסחריים",
    desc: "אלעד ואיתי בעלים של חברת איש אדמה (שיווק קרקעות). זה גלוי בכל עמוד, בתחילת כל שיעור, ובכל שיחת ייעוץ.",
  },
  {
    title: "אי-מכירה בתוך הקורס",
    desc: "בשיעורים, בוובינרים ובקהילה לא תוצע לכם השקעה של איש אדמה או של גורם אחר. הקורס מלמד עקרונות — לא מקדם עסקה.",
  },
  {
    title: "פסילת ניגוד עניינים בייעוץ",
    desc: "בייעוץ עסקה ספציפית, אם הקרקע שייכת או קשורה לאיש אדמה — נחזיר את התשלום ונפנה אתכם ליועץ אחר.",
  },
  {
    title: "בלי הבטחות תשואה",
    desc: "אנחנו לא מבטיחים אחוזי תשואה, לא מציגים תחזיות עתידיות כוודאות, ולא משתמשים בקופי מטעה.",
  },
  {
    title: "תקופת המתנה",
    desc: "בוגרי קורס לא מקבלים פולואפ מכירות אקטיבי. רק מי שמבקש מיוזמתו מקבל מידע על הזדמנויות של איש אדמה — באמצעות opt-in מפורש.",
  },
  {
    title: "בכפוף לרגולציה",
    desc: "אנחנו פועלים בהתאם לתקנות הגנת הצרכן (גילוי במכירת קרקע שאינה זמינה לבנייה) תשע\"ז-2016 ולתקנות המתווכים במקרקעין תשפ\"ד-2024.",
  },
];

export default function Ethics() {
  return (
    <section
      id="ethics"
      className="bg-gradient-to-b from-stone-50 to-stone-100 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
            ההבדל המרכזי שלנו
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">
            אתיקה ושקיפות — לא סלוגן, מבנה תפעולי
          </h2>
          <p className="mt-4 text-lg text-stone-700">
            שוק הקרקעות בישראל סבל מהרבה הבטחות שלא קוימו. עיצומים על 17
            חברות בסך 2.35 מיליון ש&quot;ח, כתבי אישום, וכתבות תקשורת —
            כולם הזכירו את אותו דפוס. אנחנו בנינו את קרקע 101 כדי לעבוד
            הפוך מהדפוס הזה.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <article
              key={p.title}
              className="rounded-xl border border-stone-200 bg-white p-6"
            >
              <h3 className="text-base font-bold text-stone-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-700">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

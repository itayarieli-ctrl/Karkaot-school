const faqs = [
  {
    q: "האם אתם מוכרים קרקע?",
    a: "לא דרך קרקע 101. החברה השנייה שלנו, איש אדמה, עוסקת בשיווק קרקעות — וזה גלוי. הקורס, הקהילה והייעוץ הם פעילות נפרדת שאינה מוכרת השקעות.",
  },
  {
    q: "מי אמור להירשם לקורס?",
    a: "מי שמתעניין בהבנה אמיתית של שוק הקרקעות בישראל — מתחילים שמכירים נדל\"ן באופן כללי, וגם מי שמתעניין ספציפית בקרקעות חקלאיות, הפשרה, ותכנון.",
  },
  {
    q: "מה הקורס לא יתן לי?",
    a: "הוא לא יבטיח לכם תשואה, לא יהפוך אתכם לשמאים או עורכי דין, ולא יספק רשימה של קרקעות מומלצות לרכישה. הוא ילמד אתכם איך לחשוב על קרקע — כדי שתבחרו בעצמכם בצורה מושכלת.",
  },
  {
    q: "מתי הקורס נפתח? כמה הוא עולה?",
    a: "אנחנו בשלבי גמר. ההרשמה תיפתח ראשונה לנרשמי רשימת ההמתנה, עם הנחת השקה לחברי הרשימה.",
  },
  {
    q: "מה ההבדל בין הקורס לייעוץ עסקה?",
    a: "הקורס מלמד עקרונות ושיטות לאורך 6 שיעורים. ייעוץ עסקה הוא חד פעמי — מקבלים דעה מקצועית על עסקה ספציפית שכבר מוצגת לכם. אפשר אחד מהם, אפשר שניהם.",
  },
  {
    q: "האם הייעוץ הוא ייעוץ משפטי או שמאות?",
    a: "לא ולא. הייעוץ הוא ניתוח מקצועי על בסיס מידע ציבורי ומסמכים שאתם מספקים. אנו ממליצים תמיד גם להיוועץ בעורך דין מקרקעין ובשמאי מוסמך לפני חתימה.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          שאלות נפוצות
        </h2>
        <dl className="mt-10 divide-y divide-stone-200 border-y border-stone-200">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-stone-900 hover:text-green-900">
                {f.q}
                <span className="text-2xl text-stone-400 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <dd className="mt-3 leading-relaxed text-stone-700">{f.a}</dd>
            </details>
          ))}
        </dl>
      </div>
    </section>
  );
}

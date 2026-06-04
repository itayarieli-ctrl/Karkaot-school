import SectionTitle from "./SectionTitle";

const faqs = [
  {
    q: "למי הקורס מתאים?",
    a: "למי שמתעניין בשוק הקרקעות בישראל ורוצה להבין אותו לעומק — בין אם אתם בתחילת הדרך, מחזיקים כבר בנדל\"ן בנוי ושוקלים להרחיב לקרקע, או סתם רוצים להבין על מה כולם מדברים. אין צורך ברקע מקדים.",
  },
  {
    q: "מה אני אדע אחרי הקורס?",
    a: "תדעו לקרוא תכניות מתאר ותהליכי הפשרה, להעריך מחיר אמיתי של קרקע, לזהות סיכונים נפוצים, להבין את משטר המיסוי, ולחשוב על קרקע ככלי השקעה לטווח ארוך — כדי לקבל החלטות מושכלות בעצמכם.",
  },
  {
    q: "מתי הקורס נפתח? כמה הוא עולה?",
    a: "אנחנו בשלבי גמר. ההרשמה תיפתח ראשונה לנרשמי רשימת ההמתנה, עם הנחת השקה לחברי הרשימה.",
  },
  {
    q: "מה ההבדל בין הקורס, הקהילה והייעוץ?",
    a: "הקורס מלמד את היסודות לאורך 6 שיעורים מובנים. הקהילה מספקת ליווי שוטף ועדכוני שוק לאורך זמן. ייעוץ עסקה הוא חד פעמי — מקבלים ניתוח מקצועי על עסקה ספציפית שמוצגת לכם. אפשר אחד מהם, אפשר את שלושתם.",
  },
  {
    q: "האם הייעוץ הוא ייעוץ משפטי או שמאות?",
    a: "לא. הייעוץ הוא ניתוח מקצועי של העסקה על בסיס הניסיון שלנו והמסמכים שתספקו. אנו ממליצים תמיד גם להיוועץ בעורך דין מקרקעין ובשמאי מוסמך לפני חתימה — וזה חלק מתהליך הייעוץ עצמו.",
  },
  {
    q: "אני יכול לרכוש קרקע דרככם?",
    a: "קרקע 101 הוא פלטפורמת לימוד וייעוץ — לא משווק קרקעות. אלעד מנהל בנפרד את חברת איש אדמה העוסקת בשיווק קרקעות; אם תהיו מעוניינים להכיר את הפעילות הזו אחרי הקורס, נשמח להציג, אבל זה לא חלק מההצעה כאן.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28" style={{ backgroundColor: "#FCFBF7" }}>
      <div className="mx-auto max-w-3xl px-5">
        <SectionTitle align="center">שאלות נפוצות</SectionTitle>
        <dl
          className="mt-10 divide-y"
          style={{
            borderTop: "1px solid #E8E2DA",
            borderBottom: "1px solid #E8E2DA",
            borderColor: "#E8E2DA",
          }}
        >
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary
                className="flex cursor-pointer items-center justify-between text-lg font-semibold hover:opacity-80"
                style={{ color: "#4A3E36" }}
              >
                {f.q}
                <span
                  className="text-2xl transition group-open:rotate-45"
                  style={{ color: "#9E846E" }}
                >
                  +
                </span>
              </summary>
              <dd className="mt-3 leading-relaxed" style={{ color: "#0D1C16" }}>
                {f.a}
              </dd>
            </details>
          ))}
        </dl>
      </div>
    </section>
  );
}

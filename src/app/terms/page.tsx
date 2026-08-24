import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "תקנון שימוש | לימודי קרקעות",
  description: "תקנון השימוש ותנאי הרכישה של לימודי קרקעות — איש אדמה.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main
        className="flex-1 py-16 md:py-24"
        style={{ backgroundColor: "#FCFBF7" }}
      >
        <article className="mx-auto max-w-3xl px-5">
          <h1
            className="text-4xl font-bold tracking-tight md:text-5xl"
            style={{ color: "#4A3E36" }}
          >
            תקנון שימוש ורכישה
          </h1>
          <p className="mt-3 text-sm" style={{ color: "#9E846E" }}>
            עודכן לאחרונה: <Today />
          </p>

          <div
            className="mt-4 rounded-md border-r-4 p-4 text-sm"
            style={{
              backgroundColor: "rgba(197, 148, 89, 0.12)",
              borderColor: "#C59459",
              color: "#4A3E36",
            }}
          >
            <strong>טיוטה — דורש בדיקת עו״ד.</strong> נוסח זה הוא נקודת
            פתיחה אחראית; אין בו תחליף לחוות דעת משפטית. לפני העלאה
            לפרודקשן יש להעביר לעו״ד צרכנות.
          </div>

          <div className="prose mt-10 max-w-none leading-relaxed" style={{ color: "#0D1C16" }}>
            <Section title="1. כללי">
              תקנון זה מסדיר את היחסים בין החברה (איש אדמה, להלן{" "}
              <strong>״החברה״</strong>) לבין משתמשי האתר, נרשמים לרשימת
              התפוצה, ורוכשי שירותים (להלן <strong>״המשתמש״</strong>).
              שימוש באתר ו/או רכישת שירות מהווים אישור לתקנון זה.
            </Section>

            <Section title="2. השירותים המוצעים">
              <ul className="list-disc pr-5 space-y-1">
                <li>
                  <strong>קורס מוקלט</strong>: גישה לסדרת שיעורים מוקלטים
                  ולחומרי לימוד נלווים. לימוד עצמאי בקצב המשתמש.
                </li>
                <li>
                  <strong>קורס פרונטלי 1-on-1</strong>: סדרה של 5 מפגשים
                  אישיים עם מנחה הקורס. כולל גישה גם לחומר המוקלט.
                </li>
                <li>
                  <strong>ייעוץ עסקה ספציפית</strong> (בהמשך, דף נפרד):
                  ניתוח מקצועי של עסקת קרקע שהמשתמש מציג בפני החברה.
                </li>
              </ul>
            </Section>

            <Section title="3. אופי התוכן — מה הוא כן ומה הוא לא">
              <p>
                תוכן הקורסים ושירות הייעוץ הינם חינוכיים ומידעיים. הם
                נועדו להעמיק את הבנת המשתמש בשוק הקרקעות בישראל ולעזור לו
                לקבל החלטות מושכלות בעצמו.
              </p>
              <p className="mt-2">
                <strong>התוכן אינו מהווה</strong>: ייעוץ השקעות לפי חוק
                הסדרת העיסוק בייעוץ השקעות; ייעוץ משפטי; שמאות מקרקעין;
                חוות דעת אישית על נכס ספציפי שלא הוצג לחברה (למעט במסגרת
                שירות ייעוץ העסקה הנפרד). אין באמור באתר ובקורסים משום
                הבטחה לתשואה כלשהי.
              </p>
            </Section>

            <Section title="4. רכישה ותשלום">
              <ul className="list-disc pr-5 space-y-1">
                <li>
                  המחירים מתואמים מול המשתמש ישירות בשיחת היכרות או דרך
                  טופס ההרשמה. כל המחירים כוללים מע״מ אלא אם צוין אחרת.
                </li>
                <li>
                  תשלום מתבצע בהעברה בנקאית או בכל אמצעי תשלום אחר שיוסכם
                  בין הצדדים.
                </li>
                <li>
                  לכל רכישה תופק חשבונית מס כדין.
                </li>
                <li>
                  גישה לקורס תינתן עם קבלת התשלום ואישורו.
                </li>
              </ul>
            </Section>

            <Section title="5. ביטול עסקה והחזר כספי">
              <p>
                בהתאם לתקנות הגנת הצרכן (ביטול עסקה), תשע״א-2010:
              </p>
              <ul className="list-disc pr-5 space-y-1 mt-2">
                <li>
                  <strong>קורס מוקלט</strong>: ניתן לבטל את העסקה בתוך
                  14 ימים מיום הרכישה, ובלבד שצפיתם בלא יותר משיעור אחד.
                  במצב כזה יוחזר מלוא הסכום, בהפחתת דמי ביטול בשיעור 5%
                  או 100 ש״ח (הנמוך מביניהם).
                </li>
                <li>
                  <strong>קורס פרונטלי 1-on-1</strong>: ניתן לבטל בכתב עד
                  14 ימים לפני המפגש הראשון. לאחר תחילת הקורס לא יתקיים
                  החזר על מפגשים שטרם נערכו, אלא בהסכמה.
                </li>
                <li>
                  פנייה לביטול:{" "}
                  <a
                    href="mailto:info@ishadama.co.il"
                    style={{ color: "#18362A", textDecoration: "underline" }}
                  >
                    info@ishadama.co.il
                  </a>
                  .
                </li>
              </ul>
            </Section>

            <Section title="6. גישה לתוכן וזכויות יוצרים">
              <ul className="list-disc pr-5 space-y-1">
                <li>
                  התוכן (סרטונים, מסמכים, תרגולים) מוגן בזכויות יוצרים של
                  החברה.
                </li>
                <li>
                  הגישה לתוכן היא אישית בלבד. אסור להעתיק, להפיץ, לשתף
                  קישורים, או לאפשר לאחרים גישה לחומר.
                </li>
                <li>
                  הפרת סעיף זה תוביל לחסימה מיידית של הגישה, ולפעולות לפי
                  חוק זכויות יוצרים.
                </li>
              </ul>
            </Section>

            <Section title="7. אחריות ושיפוי">
              <p>
                החברה משקיעה מאמץ באיכות התוכן ובדיוקו, אך לא תישא באחריות
                להחלטות השקעה של המשתמש ולתוצאותיהן. ההחלטה הסופית על כל
                פעולת השקעה היא של המשתמש בלבד.
              </p>
              <p className="mt-2">
                המשתמש מתחייב לשפות את החברה בגין כל נזק שייגרם לה
                כתוצאה מהפרת תקנון זה.
              </p>
            </Section>

            <Section title="8. שינויים בתקנון">
              החברה רשאית לעדכן את התקנון מעת לעת. תאריך העדכון מופיע בראש
              העמוד. הנוסח התקף הוא הנוסח המתפרסם באתר במועד הרכישה.
            </Section>

            <Section title="9. דין ושיפוט">
              הדין החל הוא דין מדינת ישראל. סמכות שיפוט בלעדית נתונה לבתי
              המשפט המוסמכים במחוז תל-אביב.
            </Section>
          </div>

          <p className="mt-12 text-sm">
            <a
              href="/"
              style={{ color: "#18362A", textDecoration: "underline" }}
            >
              חזרה לעמוד הבית
            </a>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold" style={{ color: "#4A3E36" }}>
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Today() {
  const d = new Date();
  return <>{d.toLocaleDateString("he-IL")}</>;
}

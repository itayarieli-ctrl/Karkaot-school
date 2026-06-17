import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "מדיניות פרטיות | לימודי קרקעות",
  description: "מדיניות הפרטיות של אתר לימודי קרקעות — איש אדמה.",
};

export default function PrivacyPage() {
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
            מדיניות פרטיות
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
            לפרודקשן יש להעביר את הטקסט הזה ואת תנאי השימוש לעו״ד צרכנות
            ופרטיות.
          </div>

          <div className="prose mt-10 max-w-none leading-relaxed" style={{ color: "#0D1C16" }}>
            <Section title="1. מי אנחנו">
              אתר זה (להלן: <strong>״האתר״</strong>) מופעל על ידי
              <em> איש אדמה</em>, ומציע תוכן לימודי וייעוץ בתחום השקעות
              בקרקעות בישראל (להלן: <strong>״החברה״</strong>). פניות בנושאי
              פרטיות:{" "}
              <a
                href="mailto:info@ishadama.co.il"
                style={{ color: "#18362A", textDecoration: "underline" }}
              >
                info@ishadama.co.il
              </a>
              .
            </Section>

            <Section title="2. איזה מידע אנחנו אוספים">
              <ul className="list-disc pr-5 space-y-1">
                <li>
                  <strong>מידע שהמשתמש מוסר ביוזמתו</strong>: שם, דוא״ל,
                  טלפון, תחום עניין, והודעה חופשית — דרך טופס יצירת הקשר.
                </li>
                <li>
                  <strong>מידע טכני</strong>: כתובת IP, סוג מכשיר, סוג
                  דפדפן, ודפים שנצפו. מידע זה נאסף לצורך תפעול ושיפור האתר.
                </li>
              </ul>
              איננו אוספים מידע רגיש לפי חוק הגנת הפרטיות (כגון מצב בריאותי,
              דעות פוליטיות, וכד׳).
            </Section>

            <Section title="3. למה אנחנו אוספים את המידע">
              <ul className="list-disc pr-5 space-y-1">
                <li>כדי לחזור אליכם בעקבות פנייה דרך הטופס.</li>
                <li>
                  כדי לשלוח לכם מידע על הקורסים, וובינרים ועדכוני שוק
                  רלוונטיים — בכפוף לזכותכם להסיר עצמכם מרשימת התפוצה בכל
                  עת.
                </li>
                <li>לצרכי תפעול, אבטחה, ושיפור האתר.</li>
              </ul>
            </Section>

            <Section title="4. שיתוף עם צדדים שלישיים">
              איננו מוכרים ולא משכירים את המידע שלכם. אנו עשויים להעבירו
              לספקי שירות שמסייעים בתפעול האתר (אחסון, ניהול לידים, שירותי
              דיוור), בכפוף להתחייבותם לשמור על המידע ולעשות בו שימוש לטובת
              מתן השירות בלבד. נמסור מידע לרשויות במקרה של חובת דיווח לפי
              דין.
            </Section>

            <Section title="5. אבטחת מידע">
              אנו נוקטים באמצעי אבטחה מקובלים להגנה על המידע שלכם, אך אין
              מערכת חסינה ב-100%. במקרה של תקרית אבטחה רלוונטית, נפעל
              בהתאם לחובת ההודעה לפי חוק הגנת הפרטיות.
            </Section>

            <Section title="6. עוגיות (Cookies)">
              האתר עשוי לעשות שימוש בעוגיות תפעוליות וניתוחיות. ניתן לבטל
              עוגיות דרך הגדרות הדפדפן; ביטול עוגיות תפעוליות עשוי לפגוע
              בחוויית השימוש.
            </Section>

            <Section title="7. זכויותיכם">
              <ul className="list-disc pr-5 space-y-1">
                <li>
                  <strong>זכות עיון</strong>: לבקש לדעת איזה מידע אישי
                  שלכם מצוי בידינו.
                </li>
                <li>
                  <strong>זכות תיקון</strong>: לבקש לתקן מידע שגוי או לא
                  מעודכן.
                </li>
                <li>
                  <strong>זכות מחיקה</strong>: לבקש למחוק את פרטיכם
                  מהמערכת.
                </li>
                <li>
                  <strong>זכות הסרה מדיוור</strong>: לבקש הסרה מרשימת
                  התפוצה בכל עת.
                </li>
              </ul>
              לפנייה בכל אחד מהנושאים:{" "}
              <a
                href="mailto:info@ishadama.co.il"
                style={{ color: "#18362A", textDecoration: "underline" }}
              >
                info@ishadama.co.il
              </a>
              .
            </Section>

            <Section title="8. שינויים במדיניות">
              אנו עשויים לעדכן מדיניות זו מעת לעת. תאריך העדכון האחרון
              מופיע בראש העמוד. שימוש מתמשך באתר לאחר עדכון מהווה הסכמה
              למדיניות המעודכנת.
            </Section>

            <Section title="9. דין חל">
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

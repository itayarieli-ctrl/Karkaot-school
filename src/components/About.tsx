export default function About() {
  return (
    <section id="about" className="border-y border-stone-200 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          מי עומד מאחורי קרקע 101
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-stone-700">
          שני יזמים ומשקיעים פעילים שפועלים בשוק הקרקעות בישראל מעל לעשור.
          הקמנו את הפלטפורמה כי הבנו שחסר בשוק מקום שמלמד באמת — בלי לדחוף מוצר.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <article className="rounded-xl border border-stone-200 bg-stone-50 p-7">
            <h3 className="text-2xl font-bold">אלעד אדליס מנצור</h3>
            <p className="mt-1 text-sm font-semibold text-green-900">
              יזם, משקיע, מרצה
            </p>
            <p className="mt-4 leading-relaxed text-stone-700">
              משקיע ויזם נדל&quot;ן מ-2009. למד את התחום על גווני הנדל&quot;ן
              המניב, עסקאות השבחה ומינוף. השקיע בארה&quot;ב בעסקאות השבחה בשיקגו
              עם תשואות ממוצעות של 23% בשנה. מנהל כיום קרקעות עבור עשרות
              משקיעים פרטיים בישראל.
            </p>
            <p className="mt-3 leading-relaxed text-stone-700">
              נשוי לעדי, אב לדורי ולדויד. אוהב להפוך תכנון מורכב לשפה פשוטה.
            </p>
          </article>

          <article className="rounded-xl border border-stone-200 bg-stone-50 p-7">
            <h3 className="text-2xl font-bold">איתי אריאלי</h3>
            <p className="mt-1 text-sm font-semibold text-green-900">
              שותף ומנהל פיתוח
            </p>
            <p className="mt-4 leading-relaxed text-stone-700">
              איש משפחה, במקור קיבוצניק. תואר ראשון בפיזיקה, שני במנהל עסקים.
              עבד שנים רבות בתעשייה הביטחונית ובמשרד הביטחון. החיבור לקרקע
              הפך לחזון: השקעה היום משמעותה הורשה לדור הבא.
            </p>
          </article>
        </div>

        <div className="mt-10 rounded-lg border-r-4 border-amber-500 bg-amber-50 p-5 text-sm leading-relaxed text-stone-800">
          <strong>גילוי נאות:</strong> אלעד ואיתי הם גם הבעלים של חברת{" "}
          <a
            href="https://ishadama.co.il"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            איש אדמה
          </a>
          , העוסקת באיתור ושיווק קרקעות. הקורס, הקהילה והייעוץ של קרקע 101
          הם פעילות נפרדת מבחינה ערכית ותפעולית. בייעוץ אישי לא נדון
          בעסקאות שאיש אדמה היא צד בהן. ראו פירוט מלא בעמוד{" "}
          <a href="#ethics" className="underline hover:no-underline">
            אתיקה ושקיפות
          </a>
          .
        </div>
      </div>
    </section>
  );
}

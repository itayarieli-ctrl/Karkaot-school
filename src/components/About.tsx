export default function About() {
  return (
    <section id="about" className="border-y border-stone-200 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          מי עומד מאחורי קרקע 101
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-stone-700">
          שני יזמים ומשקיעים פעילים בשוק הקרקעות בישראל. הקמנו את הפלטפורמה
          כדי להעביר הלאה את הידע והניסיון שצברנו לאורך השנים.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <article className="rounded-xl border border-stone-200 bg-stone-50 p-7">
            <h3 className="text-2xl font-bold">אלעד אדליס מנצור</h3>
            <p className="mt-1 text-sm font-semibold text-green-900">
              יזם, משקיע, מרצה
            </p>
            <p className="mt-4 leading-relaxed text-stone-700">
              משקיע ויזם נדל&quot;ן מ-2009. למד את התחום על גווני הנדל&quot;ן
              המניב, עסקאות השבחה ומינוף. השקיע בארה&quot;ב בעסקאות השבחה
              בשיקגו עם תשואות ממוצעות של 23% בשנה. מייסד ומנכ&quot;ל חברת{" "}
              <a
                href="https://ishadama.co.il"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-900 underline hover:no-underline"
              >
                איש אדמה
              </a>
              {" "}לאיתור ושיווק קרקעות, ומנהל כיום קרקעות עבור עשרות
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
      </div>
    </section>
  );
}

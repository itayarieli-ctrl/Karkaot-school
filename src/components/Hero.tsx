export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-b from-stone-100 to-stone-50">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-green-800/10 px-3 py-1 text-xs font-semibold text-green-900">
            פלטפורמת לימוד בלתי תלויה לעולם הקרקעות בישראל
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-stone-900 md:text-6xl">
            ללמוד קרקעות לעומק.
            <br />
            <span className="text-green-800">בלי הבטחות. עם שקיפות.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-700 md:text-xl">
            קורס דיגיטלי, קהילת לומדים, וייעוץ אישי לעסקאות קונקרטיות —
            מאלעד אדליס מנצור, יזם ומשקיע נדל&quot;ן עם 15 שנות ניסיון
            בקרקעות בישראל ובחו&quot;ל.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#lead"
              className="rounded-md bg-green-800 px-6 py-3 text-center text-base font-semibold text-stone-50 transition hover:bg-green-900"
            >
              הצטרפו לרשימת ההמתנה
            </a>
            <a
              href="#services"
              className="rounded-md border border-stone-300 bg-stone-50 px-6 py-3 text-center text-base font-semibold text-stone-800 transition hover:bg-stone-100"
            >
              מה השירותים שלנו →
            </a>
          </div>

          <p className="mt-6 text-sm text-stone-500">
            * הצטרפות לרשימה לא מחייבת ברכישה. אין דחיפת מכירות.
          </p>
        </div>
      </div>
    </section>
  );
}

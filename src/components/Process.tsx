const steps = [
  {
    n: "1",
    title: "פנייה ראשונית",
    desc: "תיאום שיחת היכרות קצרה ללא עלות. נשמע ממכם על העסקה שאתם שוקלים, הקרקע, והעמדה שאתם נמצאים בה.",
  },
  {
    n: "2",
    title: "מסירת מסמכים",
    desc: "אתם מעבירים את החומרים שיש בידכם: שמאות, נסח, תכניות, הצעה. אנחנו בודקים שאין ניגוד עניינים מצידנו.",
  },
  {
    n: "3",
    title: "ניתוח מקצועי",
    desc: "ניתוח תכנוני, מיסויי וכלכלי על בסיס מידע ציבורי ומסמכים שמסרתם. בלי לקבל החלטה בשמכם.",
  },
  {
    n: "4",
    title: "דו\"ח ושיחה",
    desc: "מקבלים דו\"ח כתוב + שיחת היוועצות של עד 90 דקות. ההחלטה הסופית — שלכם בלבד.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="border-y border-stone-200 bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          תהליך ייעוץ עסקה ספציפית — איך זה עובד
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-stone-700">
          מתאים למי שכבר זיהה הזדמנות ומחזיק בידיו הצעה מגורם חיצוני
          (יזם/מתווך/חברה אחרת), ומחפש דעה מקצועית עצמאית לפני חתימה.
        </p>

        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-xl border border-stone-200 bg-stone-50 p-6"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-green-800 text-stone-50 font-bold">
                {s.n}
              </span>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-700">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-sm text-stone-500">
          * הייעוץ אינו חוות דעת משפטית, אינו שמאות מקרקעין, ואינו ייעוץ
          השקעות לפי חוק הסדרת העיסוק בייעוץ השקעות. ההחלטה הסופית באחריות
          הלקוח בלבד.
        </p>
      </div>
    </section>
  );
}

import SectionTitle from "./SectionTitle";

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
      className="py-20 md:py-28"
      style={{
        backgroundColor: "#F2EEE9",
        borderTop: "1px solid #E8E2DA",
        borderBottom: "1px solid #E8E2DA",
      }}
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle align="center">
          תהליך ייעוץ עסקה ספציפית — איך זה עובד
        </SectionTitle>
        <p
          className="mx-auto mt-6 max-w-3xl text-center text-lg"
          style={{ color: "#0D1C16" }}
        >
          מתאים למי שכבר זיהה הזדמנות ומחזיק בידיו הצעה מגורם חיצוני
          (יזם/מתווך/חברה אחרת), ומחפש דעה מקצועית עצמאית לפני חתימה.
        </p>

        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-xl p-6"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E2DA" }}
            >
              <span
                className="grid h-10 w-10 place-items-center rounded-full font-bold"
                style={{ backgroundColor: "#18362A", color: "#FCFBF7" }}
              >
                {s.n}
              </span>
              <h3 className="mt-4 text-lg font-bold" style={{ color: "#4A3E36" }}>
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#0D1C16" }}>
                {s.desc}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-center text-sm" style={{ color: "#9E846E" }}>
          * הייעוץ אינו תחליף לחוות דעת משפטית או שמאות מקרקעין. ההחלטה
          הסופית באחריות הלקוח.
        </p>
      </div>
    </section>
  );
}

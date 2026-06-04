import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28"
      style={{
        backgroundColor: "#F2EEE9",
        borderTop: "1px solid #E8E2DA",
        borderBottom: "1px solid #E8E2DA",
      }}
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle align="center">מי עומד מאחורי קרקע 101</SectionTitle>
        <p
          className="mx-auto mt-6 max-w-3xl text-center text-lg"
          style={{ color: "#0D1C16" }}
        >
          שני יזמים ומשקיעים פעילים בשוק הקרקעות בישראל. הקמנו את הפלטפורמה
          כדי להעביר הלאה את הידע והניסיון שצברנו לאורך השנים.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <article
            className="rounded-xl p-7"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E2DA" }}
          >
            {/* Image placeholder */}
            <div
              className="mb-5 aspect-square w-24 overflow-hidden rounded-full border"
              style={{ backgroundColor: "#F2EEE9", borderColor: "#E8E2DA" }}
              data-image-slot="about-elad"
            >
              <div
                className="flex h-full w-full items-center justify-center text-xs"
                style={{ color: "#9E846E" }}
              >
                תמונה
              </div>
            </div>
            <h3 className="text-2xl font-bold" style={{ color: "#4A3E36" }}>
              <span className="marker-bg">אלעד אדליס מנצור</span>
            </h3>
            <p className="mt-2 text-sm font-semibold" style={{ color: "#18362A" }}>
              יזם, משקיע, מרצה
            </p>
            <p className="mt-4 leading-relaxed" style={{ color: "#0D1C16" }}>
              משקיע ויזם נדל&quot;ן מ-2009. למד את התחום על גווני הנדל&quot;ן
              המניב, עסקאות השבחה ומינוף. השקיע בארה&quot;ב בעסקאות השבחה
              בשיקגו עם תשואות ממוצעות של 23% בשנה. מייסד ומנכ&quot;ל חברת{" "}
              <a
                href="https://ishadama.co.il"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline hover:no-underline"
                style={{ color: "#18362A" }}
              >
                איש אדמה
              </a>
              {" "}לאיתור ושיווק קרקעות, ומנהל כיום קרקעות עבור עשרות
              משקיעים פרטיים בישראל.
            </p>
            <p className="mt-3 leading-relaxed" style={{ color: "#0D1C16" }}>
              נשוי לעדי, אב לדורי ולדויד. אוהב להפוך תכנון מורכב לשפה פשוטה.
            </p>
          </article>

          <article
            className="rounded-xl p-7"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E2DA" }}
          >
            <div
              className="mb-5 aspect-square w-24 overflow-hidden rounded-full border"
              style={{ backgroundColor: "#F2EEE9", borderColor: "#E8E2DA" }}
              data-image-slot="about-itai"
            >
              <div
                className="flex h-full w-full items-center justify-center text-xs"
                style={{ color: "#9E846E" }}
              >
                תמונה
              </div>
            </div>
            <h3 className="text-2xl font-bold" style={{ color: "#4A3E36" }}>
              <span className="marker-bg">איתי אריאלי</span>
            </h3>
            <p className="mt-2 text-sm font-semibold" style={{ color: "#18362A" }}>
              שותף ומנהל פיתוח
            </p>
            <p className="mt-4 leading-relaxed" style={{ color: "#0D1C16" }}>
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

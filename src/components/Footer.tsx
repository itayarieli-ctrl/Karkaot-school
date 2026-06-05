import IshAdamaLogo from "./IshAdamaLogo";

const ISH_ADAMA = "https://ishadama.co.il";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#4A3E36", color: "#FCFBF7" }}>
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <div className="h-16 w-32">
            <IshAdamaLogo variant="light" />
          </div>
          <p className="mt-4 text-sm" style={{ color: "rgba(252, 251, 247, 0.75)" }}>
            לימודי קרקעות — קורסים, קהילה וייעוץ אישי לעסקאות קרקע בישראל.
          </p>
        </div>

        <div className="text-sm">
          <h4 className="font-semibold" style={{ color: "#C59459" }}>
            ניווט
          </h4>
          <ul className="mt-3 space-y-2" style={{ color: "rgba(252, 251, 247, 0.85)" }}>
            <li><a href="#services" className="hover:opacity-70">שירותים</a></li>
            <li><a href="#syllabus" className="hover:opacity-70">תוכן הקורס</a></li>
            <li><a href="#process" className="hover:opacity-70">ייעוץ עסקה</a></li>
            <li><a href="#faq" className="hover:opacity-70">שאלות נפוצות</a></li>
            <li><a href={ISH_ADAMA} className="hover:opacity-70">חזרה לאיש אדמה ←</a></li>
          </ul>
        </div>

        <div className="text-sm">
          <h4 className="font-semibold" style={{ color: "#C59459" }}>
            צרו קשר
          </h4>
          <ul className="mt-3 space-y-2" style={{ color: "rgba(252, 251, 247, 0.85)" }}>
            <li>
              דוא&quot;ל:{" "}
              <a href="mailto:info@ishadama.co.il" className="hover:opacity-70">
                info@ishadama.co.il
              </a>
            </li>
            <li><a href="#lead" className="hover:opacity-70">טופס יצירת קשר</a></li>
          </ul>
        </div>
      </div>

      <div
        className="mx-auto max-w-6xl border-t px-5 py-5 text-xs"
        style={{ borderColor: "rgba(252, 251, 247, 0.12)", color: "rgba(252, 251, 247, 0.55)" }}
      >
        © {new Date().getFullYear()} איש אדמה. כל הזכויות שמורות. ט.ל.ח.
      </div>
    </footer>
  );
}

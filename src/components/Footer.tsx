import IshAdamaLogo from "./IshAdamaLogo";
import copy from "../../content/copy.json";

const ISH_ADAMA = "https://ishadama.co.il";

export default function Footer() {
  const t = copy.footer;
  return (
    <footer style={{ backgroundColor: "#4A3E36", color: "#FCFBF7" }}>
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <div className="h-20">
            <IshAdamaLogo variant="light" />
          </div>
          <p className="mt-4 text-sm" style={{ color: "rgba(252, 251, 247, 0.75)" }}>
            {t.tagline}
          </p>
        </div>

        <div className="text-sm">
          <h4 className="font-semibold" style={{ color: "#C59459" }}>
            ניווט
          </h4>
          <ul className="mt-3 space-y-2" style={{ color: "rgba(252, 251, 247, 0.85)" }}>
            <li><a href="/" className="hover:opacity-70">הקורס הדיגיטלי</a></li>
            <li><a href="/#syllabus" className="hover:opacity-70">תוכן הקורס</a></li>
            <li><a href="/#faq" className="hover:opacity-70">שאלות נפוצות</a></li>
            <li><a href="/consult" className="hover:opacity-70">{t.consultation_soon}</a></li>
            <li><a href={ISH_ADAMA} className="hover:opacity-70">{t.back_to_ishadama}</a></li>
          </ul>
        </div>

        <div className="text-sm">
          <h4 className="font-semibold" style={{ color: "#C59459" }}>
            צרו קשר
          </h4>
          <ul className="mt-3 space-y-2" style={{ color: "rgba(252, 251, 247, 0.85)" }}>
            <li>
              דוא&quot;ל:{" "}
              <a href={`mailto:${t.contact_email}`} className="hover:opacity-70">
                {t.contact_email}
              </a>
            </li>
            <li><a href="/#lead" className="hover:opacity-70">טופס יצירת קשר</a></li>
          </ul>
        </div>
      </div>

      <div
        className="mx-auto max-w-6xl border-t px-5 py-5 text-xs"
        style={{ borderColor: "rgba(252, 251, 247, 0.12)", color: "rgba(252, 251, 247, 0.55)" }}
      >
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} איש אדמה. כל הזכויות שמורות. ט.ל.ח.
          </span>
          <span className="flex gap-4">
            <a href="/privacy" className="hover:opacity-90">
              מדיניות פרטיות
            </a>
            <a href="/terms" className="hover:opacity-90">
              תקנון שימוש
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

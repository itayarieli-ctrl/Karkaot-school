export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100 py-10">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-green-800 text-stone-50 text-sm font-bold">
              ק
            </span>
            <span className="text-base font-bold">קרקע 101</span>
          </div>
          <p className="mt-3 text-sm text-stone-600">
            המקום ללמוד על קרקעות בישראל. בלי הבטחות, עם שקיפות מלאה.
          </p>
        </div>
        <div className="text-sm text-stone-700">
          <h4 className="font-semibold text-stone-900">ניווט</h4>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="#services" className="hover:text-green-900">
                שירותים
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-900">
                מי אנחנו
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-green-900">
                שאלות נפוצות
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm text-stone-700">
          <h4 className="font-semibold text-stone-900">צרו קשר</h4>
          <ul className="mt-3 space-y-2">
            <li>
              דוא&quot;ל:{" "}
              <a
                href="mailto:hello@karka101.co.il"
                className="hover:text-green-900"
              >
                hello@karka101.co.il
              </a>
            </li>
            <li>
              <a href="#lead" className="hover:text-green-900">
                טופס יצירת קשר
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-stone-200 px-5 pt-5 text-xs text-stone-500">
        © {new Date().getFullYear()} קרקע 101. כל הזכויות שמורות. ט.ל.ח.
      </div>
    </footer>
  );
}

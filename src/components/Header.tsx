export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-stone-50/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-green-800 text-stone-50 text-sm font-bold">
            ק
          </span>
          <span className="text-lg font-bold tracking-tight">קרקע 101</span>
        </a>
        <nav className="hidden gap-7 text-sm font-medium text-stone-700 md:flex">
          <a href="#services" className="hover:text-green-800">
            שירותים
          </a>
          <a href="#about" className="hover:text-green-800">
            מי אנחנו
          </a>
          <a href="#syllabus" className="hover:text-green-800">
            תוכן הקורס
          </a>
          <a href="#process" className="hover:text-green-800">
            ייעוץ עסקה
          </a>
          <a href="#faq" className="hover:text-green-800">
            שאלות נפוצות
          </a>
        </nav>
        <a
          href="#lead"
          className="rounded-md bg-green-800 px-4 py-2 text-sm font-semibold text-stone-50 transition hover:bg-green-900"
        >
          הצטרפו לרשימה
        </a>
      </div>
    </header>
  );
}

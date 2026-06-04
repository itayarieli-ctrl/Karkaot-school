export default function Header() {
  return (
    <header
      className="sticky top-0 z-40 backdrop-blur"
      style={{
        backgroundColor: "rgba(252, 251, 247, 0.92)",
        borderBottom: "1px solid #E8E2DA",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-2">
          <span
            className="grid h-9 w-9 place-items-center rounded-md text-sm font-bold"
            style={{ backgroundColor: "#4A3E36", color: "#FCFBF7" }}
          >
            ק
          </span>
          <span className="text-lg font-bold tracking-tight" style={{ color: "#4A3E36" }}>
            קרקע 101
          </span>
        </a>
        <nav
          className="hidden gap-7 text-sm font-medium md:flex"
          style={{ color: "#4A3E36" }}
        >
          <a href="#services" className="hover:opacity-70">
            שירותים
          </a>
          <a href="#about" className="hover:opacity-70">
            מי אנחנו
          </a>
          <a href="#syllabus" className="hover:opacity-70">
            תוכן הקורס
          </a>
          <a href="#process" className="hover:opacity-70">
            ייעוץ עסקה
          </a>
          <a href="#faq" className="hover:opacity-70">
            שאלות נפוצות
          </a>
        </nav>
        <a
          href="#lead"
          className="rounded-md px-4 py-2 text-sm font-semibold transition hover:opacity-90"
          style={{ backgroundColor: "#18362A", color: "#FCFBF7" }}
        >
          הצטרפו לרשימה
        </a>
      </div>
    </header>
  );
}

import IshAdamaLogo from "./IshAdamaLogo";

const ISH_ADAMA = "https://ishadama.co.il";

const navItems = [
  { label: "דוגמאות מהשטח", href: `${ISH_ADAMA}/דוגמאות-מהשטח/` },
  { label: "מאמרים וכתבות", href: `${ISH_ADAMA}/מאמרים-וכתבות/` },
  { label: "משקיעים ממליצים", href: `${ISH_ADAMA}/משקיעים-ממליצים/` },
  { label: "לימודי קרקעות", href: "#top", active: true },
  { label: "אודותינו", href: `${ISH_ADAMA}/אודותינו/` },
];

export default function Header() {
  return (
    <header
      id="top"
      className="sticky top-0 z-40 backdrop-blur"
      style={{
        backgroundColor: "rgba(252, 251, 247, 0.92)",
        borderBottom: "1px solid #E8E2DA",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3">
        <a href={ISH_ADAMA} className="block h-12 w-28 shrink-0">
          <IshAdamaLogo variant="dark" />
        </a>

        <nav
          className="hidden flex-1 items-center justify-center gap-7 text-sm font-medium md:flex"
          style={{ color: "#4A3E36" }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:opacity-70"
              style={
                item.active
                  ? { color: "#18362A", fontWeight: 600 }
                  : undefined
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#lead"
          className="shrink-0 rounded-md px-4 py-2 text-sm font-semibold transition hover:opacity-90"
          style={{ backgroundColor: "#18362A", color: "#FCFBF7" }}
        >
          צרו קשר
        </a>
      </div>
    </header>
  );
}

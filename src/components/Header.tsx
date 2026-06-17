"use client";

import { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      id="top"
      className="sticky top-0 z-40 backdrop-blur"
      style={{
        backgroundColor: "rgba(252, 251, 247, 0.92)",
        borderBottom: "1px solid #E8E2DA",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href={ISH_ADAMA} className="flex h-10 items-center shrink-0">
          <IshAdamaLogo variant="dark" />
        </a>

        {/* Desktop nav */}
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

        {/* Desktop CTA */}
        <a
          href="#lead"
          className="hidden shrink-0 rounded-md px-4 py-2 text-sm font-semibold transition hover:opacity-90 md:inline-block"
          style={{ backgroundColor: "#18362A", color: "#FCFBF7" }}
        >
          צרו קשר
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="פתח תפריט"
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-md md:hidden"
          style={{ color: "#4A3E36" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col md:hidden"
          style={{ backgroundColor: "#FCFBF7" }}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="flex items-center justify-between px-5 py-3"
            style={{ borderBottom: "1px solid #E8E2DA" }}
          >
            <a href={ISH_ADAMA} className="flex h-10 items-center" onClick={() => setOpen(false)}>
              <IshAdamaLogo variant="dark" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="סגור תפריט"
              className="grid h-10 w-10 place-items-center rounded-md"
              style={{ color: "#4A3E36" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-stretch gap-1 px-5 py-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-lg font-medium"
                style={
                  item.active
                    ? { color: "#18362A", fontWeight: 700, backgroundColor: "rgba(159, 199, 148, 0.25)" }
                    : { color: "#4A3E36" }
                }
              >
                {item.label}
              </a>
            ))}
            <a
              href="#lead"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-md px-4 py-3 text-center text-base font-semibold"
              style={{ backgroundColor: "#18362A", color: "#FCFBF7" }}
            >
              צרו קשר
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

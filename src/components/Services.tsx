import SectionTitle from "./SectionTitle";
import copy from "../../content/copy.json";

// Card hrefs are not user-editable — they point to page anchors and
// should not change without also moving the target sections.
const CARD_HREFS = ["#syllabus", "#lead"];

export default function Services() {
  const t = copy.services;
  return (
    <section id="services" className="py-20 md:py-28" style={{ backgroundColor: "#FCFBF7" }}>
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle align="center">{t.title}</SectionTitle>
        <p
          className="mx-auto mt-6 max-w-2xl text-center text-lg"
          style={{ color: "#0D1C16" }}
        >
          {t.subtitle}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:max-w-4xl md:mx-auto">
          {t.cards.map((s, i) => (
            <article
              key={s.title}
              className="flex flex-col rounded-xl p-7 shadow-sm transition hover:shadow-md"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E8E2DA",
              }}
            >
              <span
                className="self-start rounded px-2.5 py-1 text-xs font-semibold"
                style={{
                  backgroundColor: "rgba(159, 199, 148, 0.45)",
                  color: "#18362A",
                }}
              >
                {s.badge}
              </span>
              <h3 className="mt-4 text-2xl font-bold" style={{ color: "#4A3E36" }}>
                {s.title}
              </h3>
              <p className="mt-2" style={{ color: "#9E846E" }}>
                {s.subtitle}
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm" style={{ color: "#0D1C16" }}>
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span
                      className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: "#436B38" }}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={CARD_HREFS[i] || "#lead"}
                className="mt-7 inline-flex items-center gap-1 text-sm font-semibold hover:opacity-70"
                style={{ color: "#18362A" }}
              >
                {s.cta} ←
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

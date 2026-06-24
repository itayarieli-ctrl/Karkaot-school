import SectionTitle from "./SectionTitle";
import copy from "../../content/copy.json";

export default function Syllabus() {
  const t = copy.syllabus;
  return (
    <section id="syllabus" className="py-20 md:py-28" style={{ backgroundColor: "#FCFBF7" }}>
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle align="center">{t.title}</SectionTitle>
        <p
          className="mx-auto mt-6 max-w-3xl text-center text-lg"
          style={{ color: "#0D1C16" }}
        >
          {t.subtitle}
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {t.lessons.map((l) => (
            <article
              key={l.n}
              className="rounded-xl p-6"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E2DA" }}
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="text-3xl font-extrabold"
                  style={{ color: "#18362A" }}
                >
                  {l.n}
                </span>
                <h3
                  className="text-lg font-bold leading-snug"
                  style={{ color: "#4A3E36" }}
                >
                  {l.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "#0D1C16" }}>
                {l.desc}
              </p>
            </article>
          ))}
        </div>

        <h3 className="mt-14 text-center text-xl font-bold" style={{ color: "#4A3E36" }}>
          <span className="marker-bg">{t.webinars_title}</span>
        </h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {t.webinars.map((w) => (
            <article
              key={w.title}
              className="rounded-xl p-6"
              style={{
                backgroundColor: "rgba(159, 199, 148, 0.18)",
                border: "1px solid rgba(67, 107, 56, 0.35)",
              }}
            >
              <h4 className="text-lg font-bold" style={{ color: "#4A3E36" }}>
                {w.title}
              </h4>
              <p className="mt-2 text-sm" style={{ color: "#0D1C16" }}>
                {w.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

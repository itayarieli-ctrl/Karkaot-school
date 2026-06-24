import copy from "../../content/copy.json";

export default function Hero() {
  const t = copy.hero;
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #F2EEE9, #FCFBF7)",
        borderBottom: "1px solid #E8E2DA",
      }}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image placeholder — replace with actual photo when provided */}
          <div
            className="order-2 aspect-[4/3] w-full overflow-hidden rounded-2xl border md:order-1"
            style={{
              backgroundColor: "#F2EEE9",
              borderColor: "#E8E2DA",
            }}
            data-image-slot="hero"
          >
            <div
              className="flex h-full w-full items-center justify-center text-sm font-medium"
              style={{ color: "#9E846E" }}
            >
              {t.image_placeholder}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                backgroundColor: "rgba(159, 199, 148, 0.35)",
                color: "#18362A",
              }}
            >
              {t.badge}
            </span>
            <h1
              className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
              style={{ color: "#4A3E36" }}
            >
              {t.h1_line1}
              <br />
              <span style={{ color: "#18362A" }}>{t.h1_line2}</span>
            </h1>
            <p
              className="mt-6 text-lg leading-relaxed md:text-xl"
              style={{ color: "#0D1C16" }}
            >
              {t.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#lead"
                className="rounded-md px-6 py-3 text-center text-base font-semibold transition hover:opacity-90"
                style={{ backgroundColor: "#18362A", color: "#FCFBF7" }}
              >
                {t.cta_primary}
              </a>
              <a
                href="#services"
                className="rounded-md border px-6 py-3 text-center text-base font-semibold transition hover:bg-white"
                style={{
                  borderColor: "#9E846E",
                  color: "#4A3E36",
                  backgroundColor: "transparent",
                }}
              >
                {t.cta_secondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

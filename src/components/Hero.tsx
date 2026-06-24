export default function Hero() {
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
              [ תמונה — אלעד בשדה / נוף קרקע ]
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
              לימוד מעשי של עולם הקרקעות בישראל
            </span>
            <h1
              className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
              style={{ color: "#4A3E36" }}
            >
              ללמוד קרקעות
              <br />
              <span style={{ color: "#18362A" }}>
                ממי שעושה את זה כל יום.
              </span>
            </h1>
            <p
              className="mt-6 text-lg leading-relaxed md:text-xl"
              style={{ color: "#0D1C16" }}
            >
              קורס דיגיטלי וייעוץ אישי לעסקאות קונקרטיות — מאלעד אדליס
              מנצור, יזם ומשקיע נדל&quot;ן עם 15 שנות ניסיון בקרקעות
              בישראל ובחו&quot;ל.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#lead"
                className="rounded-md px-6 py-3 text-center text-base font-semibold transition hover:opacity-90"
                style={{ backgroundColor: "#18362A", color: "#FCFBF7" }}
              >
                הצטרפו אלינו
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
                מה השירותים שלנו
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

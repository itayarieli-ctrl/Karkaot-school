// A soft, subordinate link between the two landing pages. Deliberately NOT
// a button — it must never intercept a visitor who's ready to act on the
// page they're already on. Sits below the primary CTA in reading order.
export default function CrossLink({
  prompt,
  cta,
  href,
}: {
  prompt: string;
  cta: string;
  href: string;
}) {
  return (
    <section style={{ backgroundColor: "#F2EEE9" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 py-10 text-center sm:flex-row sm:justify-center sm:gap-4">
        <span className="text-base" style={{ color: "#4A3E36" }}>
          {prompt}
        </span>
        <a
          href={href}
          className="text-base font-semibold underline underline-offset-4 hover:opacity-70"
          style={{ color: "#18362A" }}
        >
          {cta} ←
        </a>
      </div>
    </section>
  );
}

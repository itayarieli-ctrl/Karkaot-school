import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Faq from "@/components/Faq";
import CrossLink from "@/components/CrossLink";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import copy from "../../../content/copy.json";

export const metadata: Metadata = {
  title: "ייעוץ עסקת קרקע | לימודי קרקעות - איש אדמה",
  description:
    "מציעים לכם קרקע? קבלו חוות דעת מקצועית ואובייקטיבית לפני שאתם חותמים - ניתוח תכנוני וכלכלי של העסקה הספציפית, דוח כתוב ושיחת היוועצות.",
  openGraph: {
    title: "ייעוץ עסקת קרקע | לימודי קרקעות",
    description:
      "חוות דעת אובייקטיבית על עסקת קרקע ספציפית - לפני שאתם חותמים.",
    locale: "he_IL",
    type: "website",
  },
};

// CONSULTATION landing page (/consult) — deliberately a LEAN booking page,
// not a full high-ticket LP. High-ticket proof (testimonials, sample report,
// deliverable spec, price) doesn't exist yet, so this page stays honest:
// stakes → what you get → independence → objections → book a call.
export default function ConsultPage() {
  const c = copy.consult;
  return (
    <>
      <Header ctaHref="#consult-lead" />
      <main className="flex-1">
        <Hero
          data={c.hero}
          ctaPrimaryHref="#consult-lead"
          ctaSecondaryHref="/"
        />

        {/* When it's for you — 3 trigger scenarios */}
        <section className="py-20 md:py-28" style={{ backgroundColor: "#FCFBF7" }}>
          <div className="mx-auto max-w-5xl px-5">
            <SectionTitle align="center">{c.triggers.title}</SectionTitle>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {c.triggers.items.map((item, i) => (
                <article
                  key={i}
                  className="rounded-xl p-6 text-center"
                  style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E2DA" }}
                >
                  <span
                    className="mx-auto flex h-10 w-10 items-center justify-center rounded-full text-lg font-extrabold"
                    style={{ backgroundColor: "rgba(159, 199, 148, 0.45)", color: "#18362A" }}
                  >
                    {i + 1}
                  </span>
                  <p className="mt-4 leading-relaxed" style={{ color: "#0D1C16" }}>
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What you get — deliverable, on the darker forest band for premium feel */}
        <section className="py-20 md:py-28" style={{ backgroundColor: "#18362A" }}>
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2
              className="text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: "#FCFBF7" }}
            >
              {c.deliverable.title}
            </h2>
            <ul className="mt-10 space-y-4 text-right">
              {c.deliverable.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl p-5"
                  style={{ backgroundColor: "rgba(252, 251, 247, 0.06)" }}
                >
                  <span
                    className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: "#9FC794" }}
                  />
                  <span className="text-lg" style={{ color: "#FCFBF7" }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Independence / no conflict of interest — the core differentiator */}
        <section className="py-16" style={{ backgroundColor: "#F2EEE9" }}>
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h3 className="text-2xl font-bold" style={{ color: "#4A3E36" }}>
              <span className="marker-bg">{c.independence.title}</span>
            </h3>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: "#0D1C16" }}>
              {c.independence.text}
            </p>
          </div>
        </section>

        <Faq title={c.faq.title} items={c.faq.items} id="consult-faq" />

        <CrossLink
          prompt={copy.cross_links.to_course}
          cta={copy.cross_links.to_course_cta}
          href="/"
        />

        <LeadForm data={c.lead} fixedInterest="consult" id="consult-lead" />
      </main>
      <Footer />
    </>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Syllabus from "@/components/Syllabus";
import Faq from "@/components/Faq";
import CrossLink from "@/components/CrossLink";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import copy from "../../content/copy.json";

// COURSE landing page (/). Single-intent: everything points at one action —
// signing up for the course. Consultation is reachable only via the soft
// cross-link near the bottom, never a competing CTA.
export default function Home() {
  return (
    <>
      <Header ctaHref="#lead" />
      <main className="flex-1">
        <Hero
          data={copy.hero}
          ctaPrimaryHref="#lead"
          ctaSecondaryHref="#syllabus"
        />
        <Syllabus />
        <Faq />
        <CrossLink
          prompt={copy.cross_links.to_consult}
          cta={copy.cross_links.to_consult_cta}
          href="/consult"
        />
        <LeadForm data={copy.lead} fixedInterest="course" id="lead" />
      </main>
      <Footer />
    </>
  );
}

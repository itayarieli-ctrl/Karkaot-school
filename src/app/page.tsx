import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Syllabus from "@/components/Syllabus";
import Faq from "@/components/Faq";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Syllabus />
        <Faq />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}

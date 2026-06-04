import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Syllabus from "@/components/Syllabus";
import Process from "@/components/Process";
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
        <About />
        <Syllabus />
        <Process />
        <Faq />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}

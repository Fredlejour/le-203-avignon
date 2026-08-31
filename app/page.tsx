import Header from "@/components/Header";
import AgentIntro from "@/components/AgentIntro";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import KeyFigures from "@/components/KeyFigures";
import Activites from "@/components/Activites";
import WhyHere from "@/components/WhyHere";
import Scenarios from "@/components/Scenarios";
import LeCentre from "@/components/LeCentre";
import VirtualTour from "@/components/VirtualTour";
import PricingExamples from "@/components/PricingExamples";
import PricingBlock from "@/components/PricingBlock";
import Location from "@/components/Location";
import WhySelling from "@/components/WhySelling";
import AcquisitionSCI from "@/components/AcquisitionSCI";
import AcquisitionModes from "@/components/AcquisitionModes";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";
import AgentContact from "@/components/AgentContact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AgentIntro />
        <Hero />
        <Concept />
        <KeyFigures />
        <Activites />
        <WhyHere />
        <PricingBlock />
        <Scenarios />
        <PricingExamples />
        <LeCentre />
        <VirtualTour />
        <Location />
        <WhySelling />
        <AcquisitionSCI />
        <AcquisitionModes />
        <FAQ />
        <FinalCTA />
        <ContactForm />
        <AgentContact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

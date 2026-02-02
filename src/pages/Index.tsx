import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogisticsJourney from "@/components/LogisticsJourney";
import Benefits from "@/components/Benefits";
import Platform from "@/components/Platform";
import Solutions from "@/components/Solutions";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <LogisticsJourney />
      <Benefits />
      <Platform />
      <Solutions />
      <HowItWorks />
      <Stats />
      <CTA />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
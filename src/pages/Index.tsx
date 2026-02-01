import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
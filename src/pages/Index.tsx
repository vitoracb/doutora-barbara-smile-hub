import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // SEO optimization
    document.title = "Dra. Bárbara Queiroz - Cirurgiã Dentista | Odontologia Integral São Paulo";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Dra. Bárbara Queiroz - Cirurgiã Dentista especializada em odontologia integral. Tratamento de canal, clareamento, restaurações e botox. Agende sua consulta em São Paulo.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TreatmentsSection />
      <TestimonialsSection />
      <BeforeAfterSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

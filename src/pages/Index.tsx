
import Hero from "@/components/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ServiceAreasSection />
      <CTA />
    </div>
  );
};

export default Index;

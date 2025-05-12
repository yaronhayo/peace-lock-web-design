
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import ServicesList from "@/components/home/ServicesList";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import ServiceAreas from "@/components/home/ServiceAreas";
import TrustBadges from "@/components/home/TrustBadges";
import type { LucideProps } from "lucide-react";
import * as LucideIcons from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Residential Locksmith",
      description: "Protect your home and loved ones with our comprehensive residential locksmith solutions.",
      icon: "Home" as keyof typeof LucideIcons,
      features: ["Quick Lock Installation & Repair", "Precision Key Duplication", "Advanced Home Security Upgrades", "Smart Lock Installation"],
      link: "/services#residential"
    },
    {
      title: "Commercial Locksmith",
      description: "Safeguard your business with high-security commercial locksmith expertise.",
      icon: "Building" as keyof typeof LucideIcons,
      features: ["Custom Master Key Systems", "Modern Access Control", "Reliable Door Repair", "Expert Security Consultation"],
      link: "/services#commercial"
    },
    {
      title: "Automotive Locksmith",
      description: "Back on the road in minutes with our fast, reliable automotive locksmith services.",
      icon: "Car" as keyof typeof LucideIcons,
      features: ["Emergency Car Lockouts", "Immediate Key Replacement", "Professional Ignition Repair", "Advanced Transponder Programming"],
      link: "/services#automotive"
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency locksmith response when security matters most.",
      icon: "ShieldCheck" as keyof typeof LucideIcons,
      features: ["24/7 Emergency Assistance", "Immediate Lockout Assistance", "Expert Lock Repairs", "Break-in Damage Remediation"],
      link: "/services#emergency"
    }
  ];

  const locationServed = [
    "Newark", "Jersey City", "Paterson", "Elizabeth", "Clifton", 
    "Trenton", "Camden", "Passaic", "Union City", "Bayonne",
    "East Orange", "Vineland", "New Brunswick", "Hoboken", "Perth Amboy"
  ];

  return (
    <div className="animate-fade-in">
      <Hero />
      <TrustBadges />
      <ServicesList services={services} />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <ServiceAreas locations={locationServed} />
      <CTA />
    </div>
  );
};

export default Index;

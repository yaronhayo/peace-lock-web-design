
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Residential Locksmith",
    description: "Keep your home secure with our comprehensive residential locksmith services.",
    icon: "🏠",
    features: ["Lock Installation & Repair", "Key Duplication", "Home Security Upgrades", "Smart Lock Installation"],
    link: "/services#residential"
  },
  {
    title: "Commercial Locksmith",
    description: "Protect your business with high-security commercial locksmith solutions.",
    icon: "🏢",
    features: ["Master Key Systems", "Access Control", "Commercial Door Repair", "Business Security Consultation"],
    link: "/services#commercial"
  },
  {
    title: "Automotive Locksmith",
    description: "Back on the road quickly with our fast, reliable automotive locksmith services.",
    icon: "🚗",
    features: ["Car Lockouts", "Key Replacement", "Ignition Repair", "Transponder Key Programming"],
    link: "/services#automotive"
  },
  {
    title: "Emergency Services",
    description: "24/7 emergency locksmith services when you need them most.",
    icon: "🔓",
    features: ["Rapid Response", "Lockout Assistance", "Lock Repairs", "Break-in Damage Repair"],
    link: "/services#emergency"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Our Professional Locksmith Services</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            From emergency lockouts to high-security installations, Peace & Lock offers comprehensive locksmith solutions for residential, commercial, and automotive needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="btn-secondary text-gray-800" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

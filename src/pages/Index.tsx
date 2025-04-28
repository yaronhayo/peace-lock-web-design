import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import ServicesList from "@/components/home/ServicesList";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import ServiceAreas from "@/components/home/ServiceAreas";

const Index = () => {
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

  const testimonials = [
    {
      quote: "Peace & Lock saved me when I was locked out of my apartment at 2am. The locksmith arrived in 15 minutes and got me back in quickly without damaging my door.",
      author: "Sarah Johnson",
      location: "Newark, NJ",
      rating: 5
    },
    {
      quote: "I've used them multiple times for my business security needs. They're always professional, prompt and provide excellent service at reasonable prices.",
      author: "Michael Rodriguez",
      location: "Jersey City, NJ",
      rating: 5
    },
    {
      quote: "After losing my car keys at the beach, these guys came to the rescue and made me a new key on the spot. Couldn't recommend them more highly!",
      author: "Jennifer Williams",
      location: "Hoboken, NJ",
      rating: 5
    },
    {
      quote: "Upgraded my home security system with smart locks, and the installer was knowledgeable and efficient. Everything works perfectly!",
      author: "David Chen",
      location: "Trenton, NJ",
      rating: 4
    },
    {
      quote: "Fast response time when our office needed an emergency lock replacement. Great service and fair pricing.",
      author: "Amanda Taylor",
      location: "Camden, NJ", 
      rating: 5
    },
    {
      quote: "Helped me with a complex master key system for my rental properties. Their expertise made managing multiple properties much easier.",
      author: "Robert Garcia",
      location: "Passaic, NJ",
      rating: 5
    },
    {
      quote: "My car key fob stopped working and they fixed it in minutes. Saved me hundreds compared to the dealership quote!",
      author: "Emily Wilson",
      location: "Union City, NJ",
      rating: 5
    },
    {
      quote: "They installed a keypad entry system for our retail store that has worked flawlessly. Great upgrade from traditional keys.",
      author: "Thomas Lee",
      location: "Bayonne, NJ",
      rating: 4
    }
  ];

  const locationServed = [
    "Newark", "Jersey City", "Paterson", "Elizabeth", "Clifton", 
    "Trenton", "Camden", "Passaic", "Union City", "Bayonne",
    "East Orange", "Vineland", "New Brunswick", "Hoboken", "Perth Amboy"
  ];

  return (
    <div>
      <Hero />
      <ServicesList services={services} />
      <WhyChooseUs />
      <TestimonialsCarousel testimonials={testimonials} />
      <ServiceAreas locations={locationServed} />
      <CTA />
    </div>
  );
};

export default Index;

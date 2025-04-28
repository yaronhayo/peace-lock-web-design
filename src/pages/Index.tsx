import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
      quote: "Had my locks changed after moving into a new home. The service was efficient, professional, and the price was very reasonable. Great experience!",
      author: "David Thompson",
      location: "Paterson, NJ",
      rating: 5
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
      
      {/* Services Section */}
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

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why Choose Peace & Lock</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              With years of experience and a commitment to excellence, we provide reliable locksmith services you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-navy-500 rounded-full flex items-center justify-center text-white text-2xl mb-6 mx-auto">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-navy-600 mb-3 text-center">Fast Response Time</h3>
              <p className="text-gray-600">
                We understand that lockouts and security issues require immediate attention. Our average response time is just 15-30 minutes.
              </p>
            </div>
            
            {/* Reason 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-navy-500 rounded-full flex items-center justify-center text-white text-2xl mb-6 mx-auto">
                🔒
              </div>
              <h3 className="text-xl font-bold text-navy-600 mb-3 text-center">Licensed & Insured</h3>
              <p className="text-gray-600">
                Peace & Lock is a fully licensed, bonded, and insured locksmith company serving New Jersey with the highest standards.
              </p>
            </div>
            
            {/* Reason 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-navy-500 rounded-full flex items-center justify-center text-white text-2xl mb-6 mx-auto">
                💰
              </div>
              <h3 className="text-xl font-bold text-navy-600 mb-3 text-center">Competitive Pricing</h3>
              <p className="text-gray-600">
                We offer transparent pricing with no hidden fees. Get high-quality locksmith services at affordable rates.
              </p>
            </div>
            
            {/* Reason 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-navy-500 rounded-full flex items-center justify-center text-white text-2xl mb-6 mx-auto">
                🛠️
              </div>
              <h3 className="text-xl font-bold text-navy-600 mb-3 text-center">Advanced Technology</h3>
              <p className="text-gray-600">
                We stay updated with the latest locksmith tools and technologies to provide you with modern security solutions.
              </p>
            </div>
            
            {/* Reason 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-navy-500 rounded-full flex items-center justify-center text-white text-2xl mb-6 mx-auto">
                👨‍🔧
              </div>
              <h3 className="text-xl font-bold text-navy-600 mb-3 text-center">Experienced Locksmiths</h3>
              <p className="text-gray-600">
                Our team consists of highly trained and experienced locksmiths who can handle any lock and key issue.
              </p>
            </div>
            
            {/* Reason 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-navy-500 rounded-full flex items-center justify-center text-white text-2xl mb-6 mx-auto">
                ✅
              </div>
              <h3 className="text-xl font-bold text-navy-600 mb-3 text-center">Satisfaction Guarantee</h3>
              <p className="text-gray-600">
                We're not satisfied until you are. Our work comes with a 100% satisfaction guarantee for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">What Our Customers Say</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Don't just take our word for it. See what our satisfied customers have to say about our locksmith services.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
              duration: 2000,
              autoplay: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
      
      {/* Areas We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Areas We Serve in New Jersey</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Our mobile locksmith service covers all of New Jersey, providing fast and reliable locksmith services wherever you need us.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {locationServed.map((location, index) => (
              <div key={index} className="bg-navy-50 px-6 py-3 rounded-full text-navy-600 font-medium">
                {location}, NJ
              </div>
            ))}
            <div className="bg-navy-50 px-6 py-3 rounded-full text-navy-600 font-medium">
              And Many More...
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default Index;

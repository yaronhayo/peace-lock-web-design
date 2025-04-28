
import { Button } from "@/components/ui/button";

const ServicesHero = () => {
  return (
    <section className="hero-gradient py-32 pt-40">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Locksmith Services
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Comprehensive locksmith solutions for all your residential, commercial, and automotive needs.
          </p>
          <Button className="bg-lime-600 text-white font-bold py-3 px-6 rounded-md hover:bg-lime-500 transition-colors" asChild>
            <a href="tel:+18001234567">Call for Emergency Service</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;


import ServiceCard from "@/components/ServiceCard";

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  link: string;
}

interface ServicesListProps {
  services: Service[];
}

const ServicesList = ({ services }: ServicesListProps) => {
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
      </div>
    </section>
  );
};

export default ServicesList;

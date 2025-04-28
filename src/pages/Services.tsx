
import ServicesHero from "@/components/services/ServicesHero";
import ResidentialServices from "@/components/services/ResidentialServices";
import CommercialServices from "@/components/services/CommercialServices";
import AutomotiveServices from "@/components/services/AutomotiveServices";
import EmergencyServices from "@/components/services/EmergencyServices";

const Services = () => {
  return (
    <div className="animate-fade-in">
      <ServicesHero />
      <ResidentialServices />
      <CommercialServices />
      <AutomotiveServices />
      <EmergencyServices />
    </div>
  );
};

export default Services;

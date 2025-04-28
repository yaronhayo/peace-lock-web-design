
const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Why Choose Peace & Lock</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            With years of experience and a commitment to excellence, we provide reliable locksmith services you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="⚡"
            title="Fast Response Time"
            description="We understand that lockouts and security issues require immediate attention. Our average response time is just 15-30 minutes."
          />
          <FeatureCard
            icon="🔒"
            title="Licensed & Insured"
            description="Peace & Lock is a fully licensed, bonded, and insured locksmith company serving New Jersey with the highest standards."
          />
          <FeatureCard
            icon="💰"
            title="Competitive Pricing"
            description="We offer transparent pricing with no hidden fees. Get high-quality locksmith services at affordable rates."
          />
          <FeatureCard
            icon="🛠️"
            title="Advanced Technology"
            description="We stay updated with the latest locksmith tools and technologies to provide you with modern security solutions."
          />
          <FeatureCard
            icon="👨‍🔧"
            title="Experienced Locksmiths"
            description="Our team consists of highly trained and experienced locksmiths who can handle any lock and key issue."
          />
          <FeatureCard
            icon="✅"
            title="Satisfaction Guarantee"
            description="We're not satisfied until you are. Our work comes with a 100% satisfaction guarantee for your peace of mind."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <div className="w-14 h-14 bg-navy-500 rounded-full flex items-center justify-center text-white text-2xl mb-6 mx-auto">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-navy-600 mb-3 text-center">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default WhyChooseUs;

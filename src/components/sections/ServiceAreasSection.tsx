
const locationServed = [
  "Newark", "Jersey City", "Paterson", "Elizabeth", "Clifton", 
  "Trenton", "Camden", "Passaic", "Union City", "Bayonne",
  "East Orange", "Vineland", "New Brunswick", "Hoboken", "Perth Amboy"
];

const ServiceAreasSection = () => {
  return (
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
  );
};

export default ServiceAreasSection;


import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceAreasProps {
  locations: string[];
}

const ServiceAreas = ({ locations }: ServiceAreasProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-4">Your Local Security Experts</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Our mobile locksmith teams provide rapid response and professional service throughout New Jersey, arriving at your location promptly when you need us.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {locations.map((location, index) => (
            <motion.div 
              key={index} 
              className="bg-navy-50 px-6 py-3 rounded-full text-navy-600 font-medium flex items-center gap-2"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-4 h-4" />
              {location}, NJ
            </motion.div>
          ))}
          <motion.div 
            className="bg-navy-50 px-6 py-3 rounded-full text-navy-600 font-medium flex items-center gap-2"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <MapPin className="w-4 h-4" />
            And Many More...
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-navy-500 text-lg">
            Don't see your location? We likely serve it! <a href="/contact" className="text-lime font-bold hover:underline">Contact us</a> to confirm service in your area.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreas;

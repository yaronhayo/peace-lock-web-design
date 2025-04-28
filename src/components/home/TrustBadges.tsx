
import { motion } from "framer-motion";
import { Shield, Award, BadgeCheck, Star } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    { 
      icon: <Star className="w-8 h-8" />, 
      title: "4.9/5 Rating", 
      subtitle: "Based on 500+ reviews" 
    },
    { 
      icon: <BadgeCheck className="w-8 h-8" />, 
      title: "Licensed & Certified", 
      subtitle: "NJ Locksmith License #12345" 
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: "Fully Insured", 
      subtitle: "$2M liability coverage" 
    },
    { 
      icon: <Award className="w-8 h-8" />, 
      title: "15+ Years Experience", 
      subtitle: "Trusted by 10,000+ customers" 
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };
  
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {badges.map((badge, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="text-navy-500 mb-3">
                {badge.icon}
              </div>
              <h3 className="text-navy-600 font-bold text-xl mb-1">{badge.title}</h3>
              <p className="text-gray-500 text-sm">{badge.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;


import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award, Zap, Users, ThumbsUp } from "lucide-react";

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyChooseUs = () => {
  const reasons: Reason[] = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Reliable Service",
      description: "We provide dependable service in emergency situations, ensuring minimal disruption to your day."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Licensed & Insured",
      description: "Every technician is fully licensed, bonded, and insured, guaranteeing quality service and your peace of mind."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Service",
      description: "Transparent upfront service with no hidden fees. Quality security solutions from professionals."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Advanced Technology",
      description: "We invest in the latest locksmith tools and security technology to provide modern, effective solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Experienced Technicians",
      description: "Our team brings years of specialized training and field experience to every job, large or small."
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: "Satisfaction Guarantee",
      description: "Your satisfaction is our priority. We stand behind our work with a 100% satisfaction guarantee."
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why Customers Choose Peace & Lock
          </motion.h2>
          <motion.p 
            className="section-subtitle max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            With thousands of satisfied customers and decades of combined experience, we're the trusted security partner for homes and businesses across New Jersey.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-14 h-14 bg-navy-500 rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-600 mb-3 text-center">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

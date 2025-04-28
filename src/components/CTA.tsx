
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div className="bg-navy-500 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Locked Out? We're On Our Way
            </h2>
            <p className="text-gray-300 text-lg max-w-lg">
              Our emergency locksmith technicians are standing by 24/7, ready to respond to your call within minutes. Don't stay locked out.
            </p>
            <div className="mt-4 flex items-center text-lime">
              <Clock className="mr-2" size={18} />
              <span>Average response time: 15-30 minutes</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-lime text-navy-600 hover:bg-lime-400 font-bold transition-colors" asChild>
              <a href="tel:+18001234567">
                <Phone className="mr-2 text-navy-600" size={18} strokeWidth={2.5} />
                Call Now
              </a>
            </Button>
            <Button className="bg-navy-600 text-white hover:bg-lime hover:text-navy-600 border border-white transition-colors" asChild>
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTA;

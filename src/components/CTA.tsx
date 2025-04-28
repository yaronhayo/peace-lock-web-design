
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTA = () => {
  const revealRef = useScrollReveal({ threshold: 0.2 });
  
  return (
    <div className="bg-navy-500 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between scroll-reveal"
          ref={revealRef}
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
              Our emergency locksmith technicians are standing by 24/7, ready to assist whenever you need us. Don't stay locked out.
            </p>
            <div className="mt-4 flex items-center text-lime-600">
              <Clock className="mr-2" size={18} />
              <span>Available 24/7 for emergency service</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-lime-600 text-[#071d38] hover:bg-lime-400 font-bold transition-colors hover-scale" asChild>
              <a href="tel:+18001234567">
                <Phone className="mr-2 text-[#071d38]" size={18} strokeWidth={2.5} />
                Call Now
              </a>
            </Button>
            <Button className="bg-navy-600 text-white hover:bg-lime-600 hover:text-[#071d38] border border-white transition-colors hover-scale" asChild>
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

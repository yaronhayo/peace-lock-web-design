
import { useState } from "react";
import { AlertCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const EmergencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="bg-lime py-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-navy-600 mr-2 animate-pulse-lime" />
                <p className="text-navy-600 font-medium">
                  <span className="font-bold">Emergency Service Available:</span> 24/7 locksmith response within 15-30 minutes
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button size="sm" className="bg-navy-600 text-white text-sm py-1 px-3 hover:bg-navy-700" asChild>
                  <a href="tel:+18001234567">Call Now</a>
                </Button>
                <button 
                  onClick={() => setIsVisible(false)} 
                  className="text-navy-600 hover:text-navy-800"
                  aria-label="Close banner"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmergencyBanner;

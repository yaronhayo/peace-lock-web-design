
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const CTA = () => {
  return (
    <div className="bg-navy-500 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Locksmith Right Now?
            </h2>
            <p className="text-gray-300 text-lg max-w-lg">
              Our professional locksmiths are available 24/7 for all your emergency needs. Don't wait in frustration - get help fast.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-lime text-navy-600 hover:bg-lime-400 font-bold transition-colors" asChild>
              <a href="tel:+18001234567">
                <Phone className="mr-2 text-navy-600" size={18} strokeWidth={2.5} />
                Call Now
              </a>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;


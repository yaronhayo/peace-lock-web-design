
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import CTA from "../CTA";

const EmergencyServices = () => {
  return (
    <section id="emergency" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="section-title">Emergency Locksmith Services</h2>
            <p className="text-lg text-gray-600 mb-6">
              Locked out? Break-in damage? Our emergency locksmith services are available 24/7 to help you when you need it most.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-lime-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-medium text-navy-500">24/7 Availability</h3>
                  <p className="text-gray-600">Help whenever you need it</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-lime-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-medium text-navy-500">Home Lockouts</h3>
                  <p className="text-gray-600">Professional entry without damage</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-lime-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-medium text-navy-500">Break-in Damage Repair</h3>
                  <p className="text-gray-600">Quick security restoration</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-lime-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-medium text-navy-500">Lock Replacements</h3>
                  <p className="text-gray-600">Immediate security upgrades</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-lime-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-medium text-navy-500">Eviction Services</h3>
                  <p className="text-gray-600">Legal lock changes</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-lime-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-medium text-navy-500">Broken Key Extraction</h3>
                  <p className="text-gray-600">Remove keys from locks</p>
                </div>
              </div>
            </div>
            <Button className="btn-secondary" asChild>
              <Link to="/contact">Learn More</Link>
            </Button>
          </div>
          <div className="lg:w-1/2 bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-navy-600 mb-4">When Should You Call Emergency Locksmith?</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-lime-500 mt-1 shrink-0" />
                <span>You're locked out of your home, business, or vehicle</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-lime-500 mt-1 shrink-0" />
                <span>Your property has been broken into and locks need immediate replacement</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-lime-500 mt-1 shrink-0" />
                <span>A key has broken in a lock and you need it extracted</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-lime-500 mt-1 shrink-0" />
                <span>You've just moved into a new home and want to change the locks quickly</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-navy-50 rounded-md">
              <h4 className="font-bold text-navy-600">Emergency Service Tip</h4>
              <p className="text-gray-600">
                When calling for emergency service, try to provide as much information as possible about your lock type and situation to help us bring the right tools and equipment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <CTA />
      </div>
    </section>
  );
};

export default EmergencyServices;

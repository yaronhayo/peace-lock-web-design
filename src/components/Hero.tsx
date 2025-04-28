
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative hero-gradient">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-8 h-8 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-40 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-40 right-40 w-6 h-6 border-2 border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 py-32 lg:py-40 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Secure Your Peace of Mind with <span className="text-lime">Expert</span> Locksmith Service
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-lg">
              Fast, reliable, and professional locksmith services available 24/7 throughout New Jersey. Your security is our top priority.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-lime text-navy-600 font-bold hover:bg-lime-400 transition-colors" asChild>
                <Link to="/services">View Services</Link>
              </Button>
              <Button variant="outline" className="border-white text-white bg-navy-400 hover:bg-lime hover:text-navy-600 transition-colors" asChild>
                <a href="tel:+18001234567"><Phone className="mr-2" /> 800-123-4567</a>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-navy-400/30 rounded-lg backdrop-blur-sm">
                <div className="text-lime text-3xl font-bold mb-1">24/7</div>
                <div className="text-white text-sm">Emergency Service</div>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-navy-400/30 rounded-lg backdrop-blur-sm">
                <div className="text-lime text-3xl font-bold mb-1">15m</div>
                <div className="text-white text-sm">Response Time</div>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-navy-400/30 rounded-lg backdrop-blur-sm">
                <div className="text-lime text-3xl font-bold mb-1">100%</div>
                <div className="text-white text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-navy-400/50 backdrop-blur-sm p-8 rounded-lg border border-navy-300/20">
              <h2 className="text-2xl font-bold text-white mb-6">Get Emergency Service Now</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-200 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 bg-navy-200/20 text-white rounded-md border border-navy-300/30 focus:outline-none focus:ring-2 focus:ring-lime"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-200 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 bg-navy-200/20 text-white rounded-md border border-navy-300/30 focus:outline-none focus:ring-2 focus:ring-lime"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="service" className="block text-gray-200 mb-2">Service Needed</label>
                  <select 
                    id="service"
                    className="w-full px-4 py-2 bg-navy-200/20 text-white rounded-md border border-navy-300/30 focus:outline-none focus:ring-2 focus:ring-lime"
                  >
                    <option value="">Select service</option>
                    <option value="residential">Residential Lockout</option>
                    <option value="commercial">Commercial Security</option>
                    <option value="automotive">Car Lockout</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-200 mb-2">Details</label>
                  <textarea 
                    id="message" 
                    rows={3}
                    className="w-full px-4 py-2 bg-navy-200/20 text-white rounded-md border border-navy-300/30 focus:outline-none focus:ring-2 focus:ring-lime"
                    placeholder="Please describe your emergency"
                  ></textarea>
                </div>
                <Button className="bg-lime text-navy-600 font-bold hover:bg-lime-400 transition-colors w-full" type="submit">
                  Request Emergency Service
                </Button>
              </form>
              <p className="text-center text-gray-300 mt-4 text-sm">
                Or call us directly: <a href="tel:+18001234567" className="text-lime font-bold hover:text-lime-400 transition-colors">800-123-4567</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

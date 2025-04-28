
import { Button } from "@/components/ui/button";

const AutomotiveServices = () => {
  return (
    <section id="automotive" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-navy-600 mb-6">Automotive Locksmith Services</h2>
            <p className="text-lg text-gray-600 mb-6">
              Locked out of your vehicle or need a replacement key? Our automotive locksmith services will get you back on the road quickly and affordably.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="font-medium text-navy-500">Car Lockouts</h3>
                  <p className="text-gray-600">Fast, damage-free entry service</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="font-medium text-navy-500">Car Key Replacement</h3>
                  <p className="text-gray-600">For all makes and models</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="font-medium text-navy-500">Transponder Key Programming</h3>
                  <p className="text-gray-600">Advanced electronic key service</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="font-medium text-navy-500">Key Fob Repair</h3>
                  <p className="text-gray-600">Fix or replace broken fobs</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="font-medium text-navy-500">Ignition Repair</h3>
                  <p className="text-gray-600">Fix ignition switch problems</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="font-medium text-navy-500">Broken Key Extraction</h3>
                  <p className="text-gray-600">Remove keys stuck in ignition/door</p>
                </div>
              </div>
            </div>
            <Button className="btn-secondary" asChild>
              <a href="tel:+18001234567">Call for Roadside Service</a>
            </Button>
          </div>
          <div className="lg:w-1/2 bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-navy-600 mb-4">Why Choose Us for Automotive Locksmith Needs</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Professional roadside assistance throughout New Jersey</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Skilled technicians who can work with any make and model vehicle</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Advanced equipment for programming modern electronic keys and key fobs</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Non-damaging methods for car lockouts that protect your vehicle</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-navy-50 rounded-md">
              <h4 className="font-bold text-navy-600">Automotive Locksmith Fact</h4>
              <p className="text-gray-600">
                Modern vehicles often require specialized equipment to program keys due to advanced anti-theft systems. Our technicians have the latest tools and training to work with these systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomotiveServices;

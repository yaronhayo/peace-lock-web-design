
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ResidentialServices = () => {
  return (
    <section id="residential" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-navy-600 mb-6">Residential Locksmith Services</h2>
            <p className="text-lg text-gray-600 mb-6">
              Secure your home and family with our comprehensive residential locksmith services. From standard lock installations to advanced security systems, we provide solutions tailored to your specific needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="font-medium text-navy-500">Home Lockouts</h3>
                  <p className="text-gray-600">Quick, damage-free entry to your home</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="font-medium text-navy-500">Lock Installation</h3>
                  <p className="text-gray-600">Standard and high-security locks</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="font-medium text-navy-500">Rekeying Services</h3>
                  <p className="text-gray-600">Change locks without replacement</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="font-medium text-navy-500">Key Duplication</h3>
                  <p className="text-gray-600">For standard and specialty keys</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="font-medium text-navy-500">Smart Lock Installation</h3>
                  <p className="text-gray-600">Modern keyless entry solutions</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="font-medium text-navy-500">Security Assessments</h3>
                  <p className="text-gray-600">Identify vulnerabilities in your home</p>
                </div>
              </div>
            </div>
            <Button className="btn-secondary" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>
          <div className="lg:w-1/2 bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-navy-600 mb-4">Why Choose Professional Residential Locksmith Service?</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Expert installation ensures your locks work properly and provide maximum security</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Professional locksmiths can recommend the right security solutions for your specific needs and budget</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Avoid costly damage that can occur with DIY lock installations or lockout solutions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Professional service in emergency situations like lockouts or break-ins</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-navy-50 rounded-md">
              <h4 className="font-bold text-navy-600">Did you know?</h4>
              <p className="text-gray-600">
                Approximately 34% of burglars enter through the front door. Having secure, properly installed locks is your first line of defense.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialServices;

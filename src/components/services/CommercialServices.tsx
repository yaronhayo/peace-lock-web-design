
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CommercialServices = () => {
  return (
    <section id="commercial" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-navy-600 mb-6">Commercial Locksmith Services</h2>
            <p className="text-lg text-gray-600 mb-6">
              Protect your business with our comprehensive commercial locksmith services. We provide high-security solutions designed to safeguard your assets and employees.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="font-medium text-navy-500">Master Key Systems</h3>
                  <p className="text-gray-600">Controlled access for all areas</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="font-medium text-navy-500">High-Security Locks</h3>
                  <p className="text-gray-600">Tamper-resistant lock solutions</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="font-medium text-navy-500">Access Control Systems</h3>
                  <p className="text-gray-600">Electronic entry solutions</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="font-medium text-navy-500">Panic Bars & Exit Devices</h3>
                  <p className="text-gray-600">Emergency exit security</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="font-medium text-navy-500">File Cabinet & Desk Locks</h3>
                  <p className="text-gray-600">Secure sensitive materials</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="font-medium text-navy-500">Safe Installation & Repair</h3>
                  <p className="text-gray-600">Protecting valuable assets</p>
                </div>
              </div>
            </div>
            <Button className="btn-secondary" asChild>
              <Link to="/contact">Request Business Service</Link>
            </Button>
          </div>
          <div className="lg:w-1/2 bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-navy-600 mb-4">Business Security Solutions</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Customized master key and sub-master key systems to control access throughout your facility</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Modern electronic access control systems that allow you to monitor and control who enters your business</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>High-security lock systems that are resistant to picking, bumping, and other common break-in methods</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Emergency exit devices that comply with fire codes while maintaining security</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-navy-50 rounded-md">
              <h4 className="font-bold text-navy-600">Business Security Fact</h4>
              <p className="text-gray-600">
                Businesses with proper access control systems experience 67% fewer internal theft incidents and significantly reduced unauthorized entry events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialServices;

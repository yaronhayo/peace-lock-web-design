
import CTA from "@/components/CTA";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient py-32 pt-40">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Locksmith Services
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Comprehensive locksmith solutions for all your residential, commercial, and automotive needs.
            </p>
            <Button className="btn-primary">
              <a href="tel:+18001234567">Call for Emergency Service</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Residential Services */}
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
                  <span>Fast response times for emergency situations like lockouts or break-ins</span>
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

      {/* Commercial Services */}
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

      {/* Automotive Services */}
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
                  <span>Fast 15-30 minute response time for roadside emergencies throughout New Jersey</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Equipped to handle all makes and models, including luxury and foreign vehicles</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Advanced tools and technology for modern vehicle key programming and repair</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Typically 40-60% cheaper than dealer rates for key replacement and programming</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-navy-50 rounded-md">
                <h4 className="font-bold text-navy-600">Did you know?</h4>
                <p className="text-gray-600">
                  Our mobile locksmith service can create new car keys on the spot for most vehicles, even if you've lost all your keys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section id="emergency" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-600 mb-4">24/7 Emergency Locksmith Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Locked out in the middle of the night? Dealing with a broken key or lock? Our emergency locksmith service is available 24 hours a day, 7 days a week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center text-navy-500 text-3xl mb-4">
                🏠
              </div>
              <h3 className="text-xl font-bold text-navy-600 mb-3">Residential Emergencies</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Home Lockouts</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Broken Keys in Locks</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Lock Malfunctions</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Post-Break-In Repairs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center text-navy-500 text-3xl mb-4">
                🏢
              </div>
              <h3 className="text-xl font-bold text-navy-600 mb-3">Commercial Emergencies</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Office Lockouts</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Safe Unlocking</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>File Cabinet Unlocking</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Emergency Rekeying</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center text-navy-500 text-3xl mb-4">
                🚗
              </div>
              <h3 className="text-xl font-bold text-navy-600 mb-3">Automotive Emergencies</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Car Lockouts</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Trunk Unlocking</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Ignition Key Replacement</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Broken Key Extraction</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-navy-500 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Emergency Locksmith Service?</h3>
            <p className="text-lg mb-6">Our mobile locksmith team is ready to respond to your emergency 24/7/365.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="emergency-btn" asChild>
                <a href="tel:+18001234567">Call Now: 800-123-4567</a>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/contact">Request Service Online</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Systems */}
      <section id="security" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-600 mb-4">Advanced Security Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Peace & Lock offers comprehensive security solutions beyond traditional locksmithing. Protect your home or business with our advanced security systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center text-navy-500 text-3xl mb-4">
                🔒
              </div>
              <h3 className="text-xl font-bold text-navy-600 mb-3">Smart Lock Systems</h3>
              <p className="text-gray-600 mb-4">
                Control your locks from anywhere with smartphone-enabled smart lock technology. Grant temporary access, monitor entry/exit, and never worry about lost keys again.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Keyless Entry</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Remote Access Control</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Activity Monitoring</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center text-navy-500 text-3xl mb-4">
                🚪
              </div>
              <h3 className="text-xl font-bold text-navy-600 mb-3">Access Control Systems</h3>
              <p className="text-gray-600 mb-4">
                Secure your business with customized access control solutions. Control who has access to specific areas and maintain detailed entry logs.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Keycard Systems</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Biometric Readers</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Entry Logging</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center text-navy-500 text-3xl mb-4">
                👁️
              </div>
              <h3 className="text-xl font-bold text-navy-600 mb-3">Security Consultations</h3>
              <p className="text-gray-600 mb-4">
                Our security experts will assess your property and provide tailored recommendations to enhance your security posture and address vulnerabilities.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Security Audits</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Risk Assessment</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Custom Security Plans</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default Services;

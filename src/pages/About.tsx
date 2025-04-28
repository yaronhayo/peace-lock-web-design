
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CTA from "@/components/CTA";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient py-32 pt-40">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Peace & Lock
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Your trusted locksmith partner in New Jersey for over 10 years
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-navy-600 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Peace & Lock was founded in 2013 with a simple mission: to provide reliable, honest, and professional locksmith services to the people of New Jersey. What started as a one-person mobile locksmith service has grown into a full-service security solutions provider with a team of certified locksmiths.
                </p>
                <p>
                  Our founder, Michael Johnson, began his career as an apprentice locksmith over 20 years ago. After years of working for large security companies, he noticed a gap in the market for personalized, trustworthy locksmith services that put the customer first. Peace & Lock was born from his vision to create a company that combines technical expertise with exceptional customer service.
                </p>
                <p>
                  Today, Peace & Lock serves thousands of residential and commercial clients across New Jersey. While we've grown in size and capabilities, we've remained true to our core values of integrity, quality, and responsiveness that have been the foundation of our success.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 bg-gray-100 p-10 rounded-lg">
              <h3 className="text-2xl font-bold text-navy-600 mb-6">Why Choose Peace & Lock</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-navy-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-navy-600">Trusted & Licensed</h4>
                    <p className="text-gray-600">
                      We are fully licensed, bonded, and insured in the state of New Jersey. Our locksmiths undergo rigorous background checks and continuous training.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-navy-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-navy-600">Rapid Response</h4>
                    <p className="text-gray-600">
                      Our mobile locksmith team is strategically positioned throughout New Jersey to provide quick service when you need it most.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-navy-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-navy-600">Fair & Transparent Pricing</h4>
                    <p className="text-gray-600">
                      No hidden fees or surprises. We provide upfront pricing and stand behind our work with satisfaction guarantees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              At Peace & Lock, our mission goes beyond just fixing locks. We're committed to providing peace of mind through superior security solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto bg-navy-50 rounded-full flex items-center justify-center text-navy-500 text-3xl mb-6">
                🔒
              </div>
              <h3 className="text-xl font-bold text-navy-600 text-center mb-4">Security</h3>
              <p className="text-gray-600 text-center">
                We believe everyone deserves to feel secure in their home or business. We're dedicated to providing solutions that protect what matters most to you.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto bg-navy-50 rounded-full flex items-center justify-center text-navy-500 text-3xl mb-6">
                ⭐
              </div>
              <h3 className="text-xl font-bold text-navy-600 text-center mb-4">Excellence</h3>
              <p className="text-gray-600 text-center">
                We strive for excellence in every service we provide, maintaining the highest standards of workmanship and customer care.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto bg-navy-50 rounded-full flex items-center justify-center text-navy-500 text-3xl mb-6">
                🤝
              </div>
              <h3 className="text-xl font-bold text-navy-600 text-center mb-4">Integrity</h3>
              <p className="text-gray-600 text-center">
                Honesty and transparency guide everything we do. We treat every customer's property with respect and provide honest recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Meet Our Expert Team</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Our locksmiths are trained professionals with years of experience in the security industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-32 h-32 mx-auto bg-navy-100 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold text-navy-600 text-center mb-1">Michael Johnson</h3>
              <p className="text-lime-600 font-medium text-center mb-4">Founder & Master Locksmith</p>
              <p className="text-gray-600 text-center mb-4">
                With over 20 years of experience, Michael leads our team with expertise in high-security systems and complex lock mechanisms.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-navy-400 hover:text-navy-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-navy-400 hover:text-navy-600">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-32 h-32 mx-auto bg-navy-100 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold text-navy-600 text-center mb-1">Sarah Martinez</h3>
              <p className="text-lime-600 font-medium text-center mb-4">Senior Locksmith</p>
              <p className="text-gray-600 text-center mb-4">
                Specializing in automotive security, Sarah is certified in advanced transponder key programming and high-security vehicle systems.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-navy-400 hover:text-navy-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-navy-400 hover:text-navy-600">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-32 h-32 mx-auto bg-navy-100 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold text-navy-600 text-center mb-1">David Williams</h3>
              <p className="text-lime-600 font-medium text-center mb-4">Commercial Security Specialist</p>
              <p className="text-gray-600 text-center mb-4">
                With expertise in commercial access control and master key systems, David helps businesses implement comprehensive security solutions.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-navy-400 hover:text-navy-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-navy-400 hover:text-navy-600">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="btn-secondary">
              <a href="tel:+18001234567">Contact Our Team</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Credentials & Licenses */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Credentials</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Peace & Lock maintains the highest professional standards through certifications and affiliations with industry organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 mx-auto bg-navy-50 rounded-full flex items-center justify-center text-navy-500 text-3xl mb-6">
                📜
              </div>
              <h3 className="text-lg font-bold text-navy-600 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">NJ Locksmith License #12345</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 mx-auto bg-navy-50 rounded-full flex items-center justify-center text-navy-500 text-3xl mb-6">
                🏆
              </div>
              <h3 className="text-lg font-bold text-navy-600 mb-2">ALOA Member</h3>
              <p className="text-gray-600">Associated Locksmiths of America</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 mx-auto bg-navy-50 rounded-full flex items-center justify-center text-navy-500 text-3xl mb-6">
                ⭐
              </div>
              <h3 className="text-lg font-bold text-navy-600 mb-2">BBB Accredited</h3>
              <p className="text-gray-600">A+ Rating</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 mx-auto bg-navy-50 rounded-full flex items-center justify-center text-navy-500 text-3xl mb-6">
                🔒
              </div>
              <h3 className="text-lg font-bold text-navy-600 mb-2">Certified Professionals</h3>
              <p className="text-gray-600">Background-checked technicians</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default About;

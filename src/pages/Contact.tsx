
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const serviceAreas = [
    "Newark", "Jersey City", "Paterson", "Elizabeth", "Edison", 
    "Woodbridge", "Lakewood", "Toms River", "Clifton", "Camden", 
    "Brick", "Trenton", "Union City", "Bayonne", "East Orange",
    "Vineland", "New Brunswick", "Hoboken", "Perth Amboy", "Plainfield"
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient py-32 pt-40">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Have a lock or security issue? We're here to help 24/7.
            </p>
            <Button className="btn-primary">
              <a href="tel:+18001234567">Call for Immediate Assistance</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-navy-600 mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center text-navy-500 text-xl mr-4">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-600 text-lg mb-1">Phone</h3>
                    <p className="text-gray-600 mb-1">Emergency: <a href="tel:+18001234567" className="text-lime-600 font-bold">800-123-4567</a></p>
                    <p className="text-gray-600">Office: <a href="tel:+18009876543" className="text-navy-600">800-987-6543</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center text-navy-500 text-xl mr-4">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-600 text-lg mb-1">Email</h3>
                    <p className="text-gray-600 mb-1">Info: <a href="mailto:info@peaceandlock.com" className="text-navy-600">info@peaceandlock.com</a></p>
                    <p className="text-gray-600">Support: <a href="mailto:support@peaceandlock.com" className="text-navy-600">support@peaceandlock.com</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center text-navy-500 text-xl mr-4">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-600 text-lg mb-1">Main Office</h3>
                    <p className="text-gray-600">123 Main Street</p>
                    <p className="text-gray-600">Newark, NJ 07102</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center text-navy-500 text-xl mr-4">
                    🕒
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-600 text-lg mb-1">Hours</h3>
                    <p className="text-gray-600 font-bold">Emergency Service: 24/7/365</p>
                    <p className="text-gray-600">Office Hours:</p>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 3:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed (Emergency Service Available)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-bold text-navy-600 text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-navy-500 text-white rounded-full flex items-center justify-center hover:bg-navy-600 transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-navy-500 text-white rounded-full flex items-center justify-center hover:bg-navy-600 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-navy-500 text-white rounded-full flex items-center justify-center hover:bg-navy-600 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-navy-500 text-white rounded-full flex items-center justify-center hover:bg-navy-600 transition-colors">
                    <span className="sr-only">Google Business</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.504 18.966h-3.447v-10.5h3.447v10.5zM8.875 7.17c-1.112 0-1.787-.745-1.787-1.68.02-.935.696-1.649 1.787-1.649 1.112 0 1.787.714 1.787 1.649 0 .935-.675 1.68-1.787 1.68zm13.125 11.796h-3.427v-5.62c0-1.387-.497-2.332-1.737-2.332-.947 0-1.507.635-1.758 1.25-.09.22-.114.527-.114.838v5.864H11.53c.046-9.513 0-10.5 0-10.5h3.435v1.499c.455-.723 1.268-1.75 3.082-1.75 2.25 0 3.953 1.47 3.953 4.629v6.122z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Areas We Serve</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Peace & Lock provides locksmith services throughout New Jersey. Our mobile technicians are strategically positioned to reach you quickly, no matter where you are.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-full text-navy-600 font-medium shadow-sm">
                {area}, NJ
              </div>
            ))}
            <div className="bg-navy-500 text-white px-6 py-3 rounded-full font-medium shadow-sm">
              And surrounding areas...
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Find Us</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Visit our main office or call us for mobile service anywhere in New Jersey.
            </p>
          </div>
          
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-gray-600">
              <p className="text-lg font-bold mb-2">Map Placeholder</p>
              <p>Interactive map would be integrated here</p>
              <p className="mt-4">123 Main Street, Newark, NJ 07102</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Get answers to common questions about our locksmith services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-navy-600 mb-3">How quickly can you respond to an emergency?</h3>
              <p className="text-gray-600">
                We have mobile technicians strategically positioned throughout New Jersey to provide prompt service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-navy-600 mb-3">Do you provide written estimates before starting work?</h3>
              <p className="text-gray-600">
                Yes, we always provide clear, written estimates before beginning any work. There are no hidden fees or surprises with Peace & Lock.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-navy-600 mb-3">Are your locksmiths licensed and insured?</h3>
              <p className="text-gray-600">
                Absolutely. All our locksmiths are fully licensed, bonded, and insured in the state of New Jersey. We also conduct thorough background checks on all employees.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-navy-600 mb-3">Can you make keys for any type of lock?</h3>
              <p className="text-gray-600">
                We can create keys for most standard and high-security locks. This includes residential, commercial, and automotive keys, including transponder and smart keys.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-navy-600 mb-3">Do you offer any warranties on your work?</h3>
              <p className="text-gray-600">
                Yes, we stand behind our work with a satisfaction guarantee. We also offer manufacturer warranties on all products we install.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-navy-600 mb-3">What forms of payment do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, cash, and checks. We can also bill insurance companies directly for covered services.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-navy-600 mb-4">Have more questions?</p>
            <Button className="btn-primary">
              <a href="tel:+18001234567">Call Us Today</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

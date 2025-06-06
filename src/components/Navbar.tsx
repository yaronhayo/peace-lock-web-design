
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowUp } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const showScrollButton = window.scrollY > window.innerHeight / 3;
      setShowScrollTop(showScrollButton);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-500/75 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`} style={{ top: 0 }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">Peace<span className="text-lime-600">Lock</span></span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(link.path) 
                      ? 'text-lime-600' 
                      : 'text-white hover:text-lime-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="emergency-btn text-white">
                <a href="tel:+18001234567">Emergency: 800-123-4567</a>
              </Button>
            </nav>

            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <nav className="md:hidden pt-4 pb-4 space-y-4 animate-fade-in">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block py-2 ${
                    isActive(link.path) 
                      ? 'text-lime-600' 
                      : 'text-white hover:text-lime-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="emergency-btn text-white w-full mt-4">
                <a href="tel:+18001234567">Emergency: 800-123-4567</a>
              </Button>
            </nav>
          )}
        </div>
      </header>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-1/2 right-8 p-3 rounded-full bg-lime-600 text-white shadow-lg transition-all duration-300 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-400 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </>
  );
};

export default Navbar;

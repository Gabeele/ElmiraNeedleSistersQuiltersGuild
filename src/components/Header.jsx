import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'py-2 bg-primary shadow-lg' 
          : 'py-4 bg-gradient-to-r from-accent to-secondary'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Title and Subtitle */}
          <div className="flex flex-col">
            <h1 
              className={`font-bold tracking-wide text-white transition-all duration-500 ease-in-out ${
                isScrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
              }`}
            >
              Elmira Needle Sisters
            </h1>
            <p 
              className={`hidden md:block text-white/90 italic transition-all duration-500 ease-in-out ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}
            >
              A cozy community celebrating creativity
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['home', 'gallery', 'meetings', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="px-4 py-2 text-white hover:text-primary transition-all duration-300 capitalize font-medium"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white hover:text-primary transition-colors rounded-lg hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen 
              ? 'max-h-48 opacity-100 visible mt-4' 
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <nav className="bg-primary/95 rounded-lg overflow-hidden">
            <ul className="flex flex-col">
              {['home', 'gallery', 'meetings', 'contact'].map((section) => (
                <li key={section} className="overflow-hidden">
                  <button
                    onClick={() => scrollToSection(section)}
                    className="w-full px-6 py-3 text-white hover:bg-white/10 transition-all duration-300 capitalize font-medium text-left"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 
import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg/80 backdrop-blur-md shadow-soft' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-red-950 to-red-800 bg-clip-text text-transparent">TutorPro</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-red-950 hover:text-orange-400 transition-colors">Home</a>
            <a href="#about" className="text-red-950 hover:text-blue-400 transition-colors">About</a>
            <a href="#services" className="text-red-950 hover:text-green-600 transition-colors">Services</a>
            <a href="#testimonials" className="text-red-950 hover:text-yellow-400 transition-colors">Testimonials</a>
            <a href="#contact" className="bg-transparent border border-red-950  text-red-950 px-6 py-2.5 rounded-lg hover:bg-orange-800 transition-colors shadow-soft">
              Get Started
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-red-700 hover:text-red-900 transition-colors"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-md shadow-soft">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <a href="#home" className="block px-4 py-3 text-neutral-800 hover:text-primary transition-colors rounded-lg hover:bg-neutral-50">Home</a>
            <a href="#about" className="block px-4 py-3 text-neutral-800 hover:text-primary transition-colors rounded-lg hover:bg-neutral-50">About</a>
            <a href="#services" className="block px-4 py-3 text-neutral-800 hover:text-primary transition-colors rounded-lg hover:bg-neutral-50">Services</a>
            <a href="#testimonials" className="block px-4 py-3 text-neutral-800 hover:text-primary transition-colors rounded-lg hover:bg-neutral-50">Testimonials</a>
            <a href="#contact" className="block px-4 py-3 text-primary font-medium hover:bg-neutral-50 rounded-lg">Get Started</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
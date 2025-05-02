import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-950">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              <span className="bg-gradient-to-r from-sage-300 to-sage-500 bg-clip-text text-transparent">
                TutorPro
              </span>
            </h3>
            <p className="text-neutral-400">
              Providing quality education and personalized tutoring services for students from Class 1 to 12.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-neutral-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-neutral-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-neutral-400">
              <li>Email: info@tutorpro.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Education Street, Learning City</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-200 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} TutorPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
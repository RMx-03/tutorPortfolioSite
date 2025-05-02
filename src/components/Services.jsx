import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Primary Classes (1-5)",
      description: "Foundation building in Mathematics, Science, and English",
      features: ["Interactive learning", "Basic concept clarity", "Regular homework help"]
    },
    {
      title: "Middle School (6-8)",
      description: "Comprehensive coverage of all major subjects",
      features: ["Subject expertise", "Exam preparation", "Doubt clearing sessions"]
    },
    {
      title: "Secondary (9-10)",
      description: "Board exam preparation and concept strengthening",
      features: ["Focus on board syllabus", "Practice tests", "Performance tracking"]
    },
    {
      title: "Higher Secondary (11-12)",
      description: "Specialized coaching for Science and Commerce",
      features: ["JEE/NEET preparation", "Board exam focus", "Regular mock tests"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-neutral-50 via-indigo-50/30 to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive tutoring solutions for all academic levels
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-neutral-600">
                      <span className="mr-2 text-primary">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 bg-neutral-50">
                <a
                  href="#contact"
                  className="block text-center text-primary hover:text-secondary transition-colors font-medium"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
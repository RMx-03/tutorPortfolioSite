import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-neutral-50 via-indigo-50/30 to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Get Started Today</h2>
          <p className="section-subtitle">
            Book a free demo class or get in touch with us
          </p>
        </div>

        <div className="mt-16 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-soft">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-800">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-2 block w-full rounded-lg border-neutral-200 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 transition-colors"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-800">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-2 block w-full rounded-lg border-neutral-200 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 transition-colors"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-800">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="mt-2 block w-full rounded-lg border-neutral-200 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 transition-colors"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-800">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="mt-2 block w-full rounded-lg border-neutral-200 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 transition-colors"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
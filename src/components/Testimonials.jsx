import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      content: "The improvement in my child's grades has been remarkable. The personalized attention really makes a difference."
    },
    {
      name: "Mike Chen",
      role: "Student, Class 10",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      content: "The teachers here explain concepts so well. My understanding of Mathematics has improved significantly."
    },
    {
      name: "Priya Patel",
      role: "Parent",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      content: "Excellent teaching methodology and regular feedback. My daughter loves attending the classes."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-red-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title text-white">
            What Our Students Say
          </h2>
          <p className="section-subtitle text-stone-300">
            Don't just take our word for it - hear from our students and parents
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-neutral-50 rounded-xl p-8 text-center shadow-soft hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                className="mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-neutral-100"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div className="mt-6">
                <p className="text-neutral-600 italic">"{testimonial.content}"</p>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-neutral-900">{testimonial.name}</h4>
                  <p className="text-neutral-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
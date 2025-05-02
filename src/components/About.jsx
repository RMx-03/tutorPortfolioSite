import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-sage-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="section-title">
            Why Choose Us ?
          </h2>
          <p className="section-subtitle lg:mx-auto">
            With over 10 years of teaching experience, we provide comprehensive education support
            for students from Class 1 to 12.
          </p>
        </div>

        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            <div className="relative bg-orange-400 p-6 rounded-xl shadow-soft hover:shadow-lg transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-lg bg-red-950 text-white">
                  1
                </div>
                <p className="ml-16 text-lg font-semibold text-white">Experienced Faculty</p>
              </dt>
              <dd className="mt-3 ml-16 text-neutral-100">
                Our teachers are highly qualified with years of experience in their respective subjects.
              </dd>
            </div>

            <div className="relative bg-yellow-400 p-6 rounded-xl shadow-soft hover:shadow-lg transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-lg bg-red-950 text-white">
                  2
                </div>
                <p className="ml-16 text-lg font-semibold text-white">Personalized Attention</p>
              </dt>
              <dd className="mt-3 ml-16 text-neutral-100">
                We focus on individual student needs and create customized learning plans.
              </dd>
            </div>

            <div className="relative bg-blue-400 p-6 rounded-xl shadow-soft hover:shadow-lg transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-lg bg-red-950 text-white">
                  3
                </div>
                <p className="ml-16 text-lg font-semibold text-white">Regular Assessments</p>
              </dt>
              <dd className="mt-3 ml-16 text-neutral-100">
                Weekly tests and progress reports to track student improvement.
              </dd>
            </div>

            <div className="relative bg-green-600 p-6 rounded-xl shadow-soft hover:shadow-lg transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-lg bg-red-950 text-white">
                  4
                </div>
                <p className="ml-16 text-lg font-semibold text-white">Flexible Schedule</p>
              </dt>
              <dd className="mt-3 ml-16 text-neutral-100">
                Choose from various time slots that best suit your schedule.
              </dd>
            </div>
          </dl>
        </div>        
      </div>
      
    </section>
  );
};

export default About;
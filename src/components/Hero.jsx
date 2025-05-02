import React from 'react';
import plus from '../assets/add.png'
import minus from '../assets/minus.png'
import divide from '../assets/division.png'
import multiply from '../assets/multiply.png'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-violet-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left Content */}
          <div className="max-w-xl">
            <p className="text-sage-100 text-3xl mb-4">Tutor Smarter</p>
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-100 mb-6">
              Unlock Your Potential
            </h1>
            <p className="text-lg text-neutral-300 mb-8">
              We provide personalized tutoring services to help students excel academically 
              and achieve their goals with confidence and ease.
            </p>
            <a href="#contact">
              <button className="bg-red-950 text-white px-8 py-4 rounded-lg 
                hover:bg-neutral-900 transition-colors duration-300 text-lg font-medium">
                Enroll Now
              </button>
            </a>
          </div>
          
          {/* Right Content - Interactive Image */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-full bg-white/50 overflow-hidden">
            
              {/* Central Image */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                w-[250px] h-[250px] rounded-full overflow-hidden border-4 border-white">
                <img 
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg" 
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute top-[18%] left-[20%] bg-orange-400 p-4 rounded-full">
                <img 
                  src={plus} 
                  alt="Tutor"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>

              <div className="absolute top-[10%] right-[20%] bg-blue-400 p-4 rounded-full">
                <img 
                  src={multiply}
                  alt="Student"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>

              <div className="absolute bottom-[20%] left-[10%] bg-green-600 p-4 rounded-full">
                <img 
                  src={minus} 
                  alt="Teacher"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>

              <div className="absolute bottom-[15%] right-[15%] bg-yellow-400 p-4 rounded-full">
                <img 
                  src={divide} 
                  alt="Student"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>

              {/* Rotating Line */}
              <div className="absolute inset-0">
                <div className="absolute top-[25%] left-[25%] w-[50%] h-[50%] 
                  border-2 border-dashed border-purple-900 rounded-full animate-spin-slow">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}      
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full outline outline-8 outline-lime-600 opacity-100"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 rounded-full outline outline-8 outline-yellow-500 opacity-90"></div>
      
    </section>
  );
};

export default Hero;
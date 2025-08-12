
import React from 'react';
import { ArrowDown, MapPin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Hi, I'm <span className="text-blue-600">Adam</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-slate-600 font-light">
                Data Science & Software Engineering Student
              </h2>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Passionate 4th-year student specializing in machine learning, full-stack development, 
              and data-driven solutions. I love turning complex data into actionable insights and 
              building scalable software solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="flex items-center space-x-2 text-slate-500">
                <MapPin size={18} />
                <span>Available for opportunities</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-500">
                <Mail size={18} />
                <span>Open to collaboration</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToAbout}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Learn More About Me
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg hover:bg-slate-50 transition-colors font-medium"
              >
                View My Work
              </button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1 animate-scale-in">
                <div className="w-full h-full rounded-full bg-white p-2">
                  <img 
                    src="public/images/adam.png"
                    alt="Adam - Data Science Student"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating elements */}
              {/* <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-fade-in" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">📊</span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <button 
            onClick={scrollToAbout}
            className="text-slate-400 hover:text-blue-600 transition-colors animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

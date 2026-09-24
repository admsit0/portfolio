import { ArrowDown, Github, Linkedin, Mail, Youtube } from 'lucide-react';
import adamProfile from '@/assets/adam-profile.png';
import heroBg from '@/assets/hero-bg.jpg';
import { scrollToSectionWithOffset } from '../lib/utils';

const Hero = () => {
  const scrollToNext = () => {
    scrollToSectionWithOffset('about');
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-cover bg-center md:bg-fixed"
      style={{
        backgroundImage: `url(${heroBg})`,
        width: '100vw',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="flex flex-col items-center mb-8">
            <img
              src={adamProfile}
              alt="Adam Maltoni"
              className="w-36 h-36 rounded-full border-4 border-white object-cover mt-8 ring-2 ring-white/20 shadow-[0_0_40px_rgba(59,130,246,0.3)]"
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Adam Maltoni
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-6">
            Data Scientist & AI Engineer
          </p>

          {/* Brief Summary */}
          <p className="text-lg text-white/60 max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate about building cloud-native LLM architectures, data science solutions, and AI-driven applications. 
            Experienced in technology consulting at Accenture, data analytics, and leading the Google Developer Group as President. 
            Strong foundation in quantitative analysis, machine learning, and full-stack development.
          </p>

          {/* Social Links */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/10 flex justify-center space-x-6">
              <a
                href="https://github.com/admsit0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/adam-maltoni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com/@admsito17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="mailto:adam.maltoni@gmail.com"
                className="text-white hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Arrow moved below social links */}
          <div className="flex justify-center mb-8">
            <button
              onClick={scrollToNext}
              className="hero-scroll-arrow"
              aria-label="Scroll to next section"
            >
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button
              onClick={() => scrollToSectionWithOffset('projects')}
              className="btn-primary backdrop-blur-sm px-8 py-3 rounded-lg text-base font-medium"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSectionWithOffset('contact')}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-3 rounded-lg text-base font-medium transition-colors duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
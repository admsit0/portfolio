
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
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        width: '100vw',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-dark/60"></div>
      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="flex flex-col items-center mb-8">
            <img
              src={adamProfile}
              alt="Adam Maltoni"
              className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover mt-8" // Added top margin
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Adam Maltoni
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6">
            Data Science & Software Engineering Student
          </p>

          {/* Brief Summary */}
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate about the intersection of data science, finance, and technology. 
            Experienced in predictive modeling, portfolio optimization, and full-stack development 
            with a strong foundation in quantitative analysis and machine learning.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/admsit0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/adam-maltoni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="https://youtube.com/@admsito17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Youtube className="w-8 h-8" />
            </a>
            <a
              href="mailto:adam.maltoni@gmail.com"
              className="text-white hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail className="w-8 h-8" />
            </a>
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
              className="btn-primary px-8 py-3 rounded-lg text-base font-medium"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSectionWithOffset('contact')}
              className="btn-outline px-8 py-3 rounded-lg text-base font-medium text-white border-white hover:bg-white hover:text-primary-dark"
            >
              Get In Touch
            </button>
          </div>
        </div>

  {/* Arrow is now inside the profile image container above for perfect alignment */}
      </div>
    </section>
  );
};

export default Hero;
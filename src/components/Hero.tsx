import { ArrowDown, Github, Linkedin, Mail, Youtube } from 'lucide-react';
import adamProfile from '@/assets/adam-profile.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-dark/60"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 animate-float">
            <img
              src={adamProfile}
              alt="Adam Maltoni"
              className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-xl object-cover"
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
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/adam-maltoni"
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
              href="https://youtube.com/@adam-maltoni"
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-8 py-3 rounded-lg text-base font-medium"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline px-8 py-3 rounded-lg text-base font-medium text-white border-white hover:bg-white hover:text-primary-dark"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-primary transition-colors duration-300 animate-bounce"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
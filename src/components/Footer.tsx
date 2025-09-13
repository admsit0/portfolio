import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-xl font-bold mb-4">Adam Maltoni</h3>
            <p className="text-primary-foreground/80 mb-4">
              Data Science & Engineering Student passionate about AI, finance, and technology.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/admsit0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/adam-maltoni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:adam.maltoni@gmail.com"
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Experience', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-primary-foreground/80 hover:text-white transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>adam.maltoni@gmail.com</p>
              <p>+34 638 707 783</p>
              <p>Madrid, Spain</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Adam Maltoni. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm flex items-center gap-1 mt-2 md:mt-0">
              Made with <Heart className="w-4 h-4 text-accent" fill="currentColor" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
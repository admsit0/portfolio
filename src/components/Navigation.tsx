import { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gradient">Adam Maltoni</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link px-3 py-2 text-sm font-medium ${
                    activeSection === item.id ? 'active' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Social Icons Container - Properly aligned */}
              <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-400">
                <a
                  href="https://github.com/admsit0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 text-muted-foreground hover:text-primary-dark transition-colors rounded-md hover:bg-muted/50"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/adam-maltoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 text-muted-foreground hover:text-primary-dark transition-colors rounded-md hover:bg-muted/50"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="btn-primary px-4 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-2 ml-2"
                  onClick={e => {
                    e.preventDefault();
                    // Open in new tab
                    window.open('/portfolio/cv-adam-maltoni.pdf', '_blank');
                    // Download
                    const link = document.createElement('a');
                    link.href = '/portfolio/cv-adam-maltoni.pdf';
                    link.download = 'cv-adam-maltoni.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="w-4 h-4" />
                  CV
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-lg border-b border-border">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-3 py-2 text-base font-medium w-full text-left nav-link ${
                  activeSection === item.id ? 'active' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-3 py-2">
              <a
                href="/cv-adam-maltoni.pdf"
                download
                className="btn-primary px-4 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
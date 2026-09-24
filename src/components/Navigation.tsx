import { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
    { id: 'blog', label: 'Blog', isRoute: true }
  ];

  useEffect(() => {
    if (location.pathname === '/blog') {
      setActiveSection('blog');
      return;
    }

    const handleScroll = () => {
      const sections = navItems.filter(item => !item.isRoute).map(item => item.id);
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
    // Call once to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for home page to render before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-foreground">Adam Maltoni</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.id}
                    to={`/${item.id}`}
                    className={`nav-link px-3 py-2 text-lg font-medium ${
                      activeSection === item.id ? 'active' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link px-3 py-2 text-lg font-medium ${
                      activeSection === item.id ? 'active' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                )
              ))}
              
              {/* Social Icons Container - Properly aligned */}
              <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-200">
                <a
                  href="https://github.com/admsit0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 text-muted-foreground hover:text-purple-500 transition-colors rounded-md hover:bg-gray-100"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/adam-maltoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 text-muted-foreground hover:text-primary-dark transition-colors rounded-md hover:bg-gray-100"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-[#0071e3] text-white hover:bg-[#0077ED] px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2 ml-2 transition-colors"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-xl border-b border-gray-200">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.id}
                  to={`/${item.id}`}
                  className={`block px-3 py-2 text-lg font-medium w-full text-left nav-link ${
                    activeSection === item.id ? 'active' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-lg font-medium w-full text-left nav-link ${
                    activeSection === item.id ? 'active' : ''
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
            <div className="px-3 py-2">
              <a
                href="/cv-adam-maltoni.pdf"
                download
                className="bg-[#0071e3] text-white hover:bg-[#0077ED] px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2 transition-colors"
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
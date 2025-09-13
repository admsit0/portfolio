import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Youtube,
  ArrowDown,
  Download
  } from 'lucide-react';
  import { SectionHeader } from './ui/section-header';

const Contact = () => {

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'adam.maltoni@gmail.com',
      href: 'mailto:adam.maltoni@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+34 638 707 783',
      href: 'tel:+34638707783'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Madrid, Spain',
      href: 'https://maps.google.com/?q=Madrid,Spain'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: '@admsit0',
      href: 'https://github.com/admsit0',
      hoverColor: 'hover:text-black'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: '/in/adam-maltoni',
      href: 'https://linkedin.com/in/adam-maltoni',
      hoverColor: 'hover:text-blue-600'
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      label: 'YouTube',
      value: '@admsito17',
      href: 'https://youtube.com/@admsito17',
      hoverColor: 'hover:text-red-600'
    }
  ];

  return (
  <section id="contact" className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Connect"
            subtitle="I'm always interested in new opportunities, collaborations, and interesting projects. Let's discuss how we can work together!"
          />

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-8 flex-grow">
                Feel free to reach out for opportunities in data science, machine learning, 
                full-stack development, or any interesting technical challenges. I'm particularly 
                interested in projects involving AI, fintech, and innovative web solutions.
              </p>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  let iconHoverColor = '';
                  if (contact.label === 'Email') iconHoverColor = 'group-hover:text-blue-600';
                  else if (contact.label === 'Phone') iconHoverColor = 'group-hover:text-green-600';
                  else if (contact.label === 'Location') iconHoverColor = 'group-hover:text-orange-500';
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover-lift group"
                    >
                      <div className={`text-primary-dark transition-colors ${iconHoverColor}`}>
                        {contact.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="font-medium text-foreground transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Connect Online
              </h3>
              <p className="text-muted-foreground mb-8 flex-grow">
                Follow my work and connect with me on social platforms where I share insights 
                about data science, AI developments, and technical tutorials.
              </p>

              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  // Map label to hover color for icon
                  let iconHoverColor = '';
                  if (social.label === 'GitHub') iconHoverColor = 'group-hover:text-black';
                  else if (social.label === 'LinkedIn') iconHoverColor = 'group-hover:text-blue-600';
                  else if (social.label === 'YouTube') iconHoverColor = 'group-hover:text-red-600';
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover-lift group"
                    >
                      <div className={`text-primary-dark transition-colors ${iconHoverColor}`}>
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{social.label}</p>
                        <p className="font-medium text-foreground transition-colors">
                          {social.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <div className="bg-gradient-primary rounded-lg p-6 text-white">
              <h4 className="font-semibold mb-2">Available for Opportunities</h4>
              <p className="text-sm opacity-90 mb-4">
                Currently open to full-time positions, consulting projects, and collaborative research opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div>
                  <span className="font-medium">Response Time:</span>
                  <span className="opacity-90 ml-1">&lt; 24 hours</span>
                </div>
                <div>
                  <span className="font-medium">Time Zone:</span>
                  <span className="opacity-90 ml-1">CET (Madrid)</span>
                </div>
                <div>
                  <span className="font-medium">Languages:</span>
                  <span className="opacity-90 ml-1">Spanish, English, Italian, French</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
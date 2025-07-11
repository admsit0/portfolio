
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and data science.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-12 border border-white/20">
            <div className="text-center">
              <h3 className="text-2xl font-semibold gradient-text mb-8">Let's Connect</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex flex-col items-center space-y-3 group">
                  <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">adam.student@university.edu</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-3 group">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-3 group">
                  <div className="bg-gradient-to-r from-green-500 to-teal-600 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Location</div>
                    <div className="text-muted-foreground">Available for remote work</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-6">Follow Me</h4>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://github.com/adam" 
                    className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 rounded-full hover:from-gray-700 hover:to-gray-800 transition-all transform hover:scale-110 shadow-lg"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/adam" 
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full hover:from-blue-500 hover:to-blue-600 transition-all transform hover:scale-110 shadow-lg"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-green-800">Available for opportunities</span>
                </div>
                <p className="text-green-700">
                  Currently seeking internships and entry-level positions in Data Science 
                  and Software Engineering for Summer 2024.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

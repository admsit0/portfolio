import { 
  Briefcase, 
  GraduationCap, 
  Calendar,
  MapPin,
  ExternalLink,
  Users,
  Database,
  Code2
} from 'lucide-react';
import { SectionHeader } from './ui/section-header';
import gdgLogo from '@/assets/gdg-logo.webp';
import gmvLogo from '@/assets/gmv-logo.png';
import fullstackLogo from '@/assets/fullstack-logo.png';
import uamLogo from '@/assets/uam-logo.png';
import harvardLogo from '@/assets/harvard-logo.png';
import ironiaLogo from '@/assets/ironia-logo.png';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Co-founder & Treasurer, Board Member',
      company: 'Google Developer Group on Campus UAM',
      location: 'Madrid, Spain',
      period: 'Jul 2025 - Present',
      description: [
        'Co-founded chapter and currently leading events on AI and tech innovation',
        'Managing treasury and operations across a multidisciplinary team'
      ],
      technologies: ['Leadership', 'Event Management', 'AI', 'Innovation'],
      logo: gdgLogo
    },
    {
      type: 'work',
      title: 'Data Science Intern',
      company: 'GMV - ISTAR Systems',
      location: 'Madrid, Spain',
      period: 'Feb - Jun 2025',
      description: [
        'Built LLM+RAG system for querying intelligence data',
        'Integrated APIs and geospatial data in production pipelines'
      ],
      technologies: ['Python', 'LLM', 'RAG', 'APIs', 'Geospatial Data'],
      logo: gmvLogo
    },
    {
      type: 'work',
      title: 'Freelance Full-Stack Developer',
      company: 'Self-employed',
      location: 'Remote',
      period: 'Feb 2023 - Dec 2024',
      description: [
        'Delivered end-to-end web applications using Python, JS, SQL',
        'Managed client needs, development, and deployment processes'
      ],
      technologies: ['Python', 'JavaScript', 'SQL', 'Full-Stack', 'Client Management'],
      logo: fullstackLogo
    }
  ];

  const education = [
    {
      degree: 'BSc in Data Science and Engineering',
      institution: 'Universidad Autónoma de Madrid (UAM)',
      period: '2022 - Present',
      details: [
        'Focused on machine learning, generative AI, and advanced statistical modeling',
        'Class Delegate (2 years); active in student innovation events',
        'MVP for AI learning platform at UAM Hackathon (2nd round)'
      ],
      gpa: '8.38/10.0',
  logo: uamLogo
    },
    {
      degree: 'Machine Learning and AI with Python (40h)',
      institution: 'Harvard University (Online)',
      period: '2023',
      details: [
        'Advanced coursework in machine learning algorithms and implementation',
        'Hands-on projects in neural networks and deep learning'
      ],
      focus: 'Focus: Machine Learning & AI',
  logo: harvardLogo
    },
    {
      degree: 'Microcredencial: Liga de Inversores',
      institution: 'UAM + IronIA Fintech',
      period: '2025',
      details: [
        'Designed portfolios achieving top Sharpe ratio among 240+ participants',
        'Applied predictive modeling, Black-Scholes and advanced backtesting'
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Financial Modeling', 'Portfolio Optimization'],
      achievement: '1st Place Winner',
  logo: ironiaLogo
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Experience & Education"
          subtitle="My journey through professional experience and academic achievements in data science and technology."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-primary-dark" />
              <h3 className="text-2xl font-semibold text-foreground">Professional Experience</h3>
            </div>

            <div className="space-y-6 flex-grow">
              {experiences.map((exp, index) => (
                <div key={index} className="project-card group">
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary-dark transition-colors">
                          {exp.title}
                        </h4>
                        <p className="text-primary-dark font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span className="whitespace-nowrap">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {exp.logo && (
                      <div className="flex justify-end -mt-2">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-12 h-12 object-contain rounded"
                        />
                      </div>
                    )}

                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-dark rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary-dark" />
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>

            <div className="space-y-6 flex-grow">
              {education.map((edu, index) => (
                <div key={index} className="project-card group">
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary-dark transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-primary-dark font-medium">{edu.institution}</p>
                        {edu.achievement && (
                          <div className="flex items-center gap-2 mt-1">
                            <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">
                              {edu.achievement}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    {edu.logo && (
                      <div className="flex justify-end -mt-2">
                        <img 
                          src={edu.logo} 
                          alt={`${edu.institution} logo`}
                          className="w-12 h-12 object-contain rounded"
                        />
                      </div>
                    )}

                    <ul className="space-y-2">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-dark rounded-full mt-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* GPA Display */}
                    {edu.gpa && (
                      <div className="pt-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-muted-foreground">GPA:</span>
                          <span className="text-sm font-semibold text-accent">{edu.gpa}</span>
                        </div>
                      </div>
                    )}

                    {/* Focus Area Display */}
                    {edu.focus && (
                      <div className="pt-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-muted-foreground">Focus:</span>
                          <span className="text-sm font-semibold text-primary-dark">{edu.focus}</span>
                        </div>
                      </div>
                    )}

                    {/* Technologies Display */}
                    {edu.technologies && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {edu.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-accent/10 text-accent text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
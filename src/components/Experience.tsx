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
import accentureLogo from '@/assets/accenture-logo.svg';
import freelanceLogo from '@/assets/freelance-logo.svg';
import uamLogo from '@/assets/uam-logo.png';
import ironiaLogo from '@/assets/ironia-logo.png';

const Experience = () => {
  type ExperienceItem = {
    type: string;
    title: string;
    previousRoles?: string[];
    company: string;
    location: string;
    period: string;
    description: string[];
    technologies: string[];
    logo?: string;
  };

  const experiences: ExperienceItem[] = [
    {
      type: 'work',
      title: 'President',
      previousRoles: ['Co-founder & Treasurer, Board Member'],
      company: 'Google Developer Group on Campus UAM',
      location: 'Madrid, Spain', 
      period: 'Jul 2025 - Present',
      description: [
        'Elected President in Jul 2026 after co-founding the chapter and serving as Treasurer',
        'Led 10+ events with 250+ attendees and helped grow the community to more than 200 members',
        'Managed teams from 6 up to 13 people across multidisciplinary events and initiatives, including highly technical projects'
      ],
      technologies: ['Leadership', 'Event Management', 'AI', 'Innovation', 'Community Building'],
      logo: gdgLogo
    },
    {
      type: 'work',
      title: 'AI Engineer Intern',
      company: 'Accenture',
      location: 'Madrid, Spain',
      period: 'Oct 2025 - Apr 2026',
      description: [
        'Developed internal MCP servers and integrated external ones in a full-stack application, building AI agents and chatbot systems',
        'Built an internal alerting tool with data anomaly detection, automated reporting, and AI-generated summaries',
        'Worked across the full data science pipeline, from data preparation to modeling and visualization',
        'Collaborated in international environments, producing clear technical documentation',
        'Received return offer following the internship'
      ],
      technologies: ['Consulting', 'Data Analytics', 'Automation', 'Digital Transformation', 'Financial Services'],
      logo: accentureLogo
    },
    {
      type: 'work',
      title: 'Data Science Intern',
      company: 'GMV - ISTAR Systems',
      location: 'Madrid, Spain',
      period: 'Feb - Jun 2025',
      description: [
        'Built an LLM-based RAG system for querying intelligence data',
        'Integrated APIs and geospatial data into production pipelines',
        'Documented systems and workflows with clarity and precision'
      ],
      technologies: ['Python', 'LLM', 'RAG', 'APIs', 'Geospatial Data', 'Reinforcement Learning'],
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
      logo: freelanceLogo
    }
  ];

  type EducationItem = {
    degree: string;
    institution: string;
    period: string;
    details: string[];
    gpa?: string;
    focus?: string;
    technologies?: string[];
    achievement?: string;
    logo?: string;
  };

  const education: EducationItem[] = [
    {
      degree: 'MSc in Artificial Intelligence',
      institution: 'Universidad Autónoma de Madrid (UAM)',
      period: '2026 - Present',
      details: [
        'Focused on the scientific foundations of AI, with strong emphasis on research methodology, advanced theory, and technical development.',
        'Thesis: Latent representation editing in LLMs for deceptive behavior unlearning and alignment (in progress)'
      ],
      logo: uamLogo
    },
    {
      degree: 'BSc in Data Science and Engineering',
      institution: 'Universidad Autónoma de Madrid (UAM)',
      period: '2022 - 2026',
      details: [
        'Focused on machine learning, generative AI, and advanced statistical modeling, with experience developing reports and presentations in various languages.',
        'Class Delegate (2 years); active in various student innovation events',
        'Thesis: Study of regularization effects on neural networks\' internal activations'
      ],
      gpa: '8.58 / 10',
      logo: uamLogo
    },
    {
      degree: 'Microcredencial: Liga de Inversores',
      institution: 'UAM + IronIA Fintech',
      period: '2025',
      details: [
        'Designed portfolios achieving top Sharpe ratio among 240+ participants',
        'Applied predictive modeling, Black-Scholes and advanced backtesting',
        'Collaborated in team-based investment simulations'
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Financial Modeling', 'Portfolio Optimization'],
      achievement: '1st Place Winner',
      logo: ironiaLogo
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
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
                <div key={index} className="project-card h-[460px] flex flex-col relative group transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary-dark transition-colors">
                          {exp.title}
                        </h4>
                        {exp.previousRoles && (
                          <div className="flex items-center gap-2 mt-1">
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium">Current</span>
                          </div>
                        )}
                        {exp.previousRoles && (
                          <div className="mt-2 pl-3 border-l-2 border-gray-200">
                            {exp.previousRoles.map((role, idx) => (
                              <p key={idx} className="text-sm text-muted-foreground italic">{role}</p>
                            ))}
                          </div>
                        )}
                        <p className="text-primary-dark font-medium mt-1">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        {exp.logo && (
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`}
                            className="w-14 h-14 object-contain rounded mb-2" 
                          />
                        )}
                        <div className="text-right text-sm text-muted-foreground mb-2">
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
                    </div>

                    <ul className="space-y-2 mb-4 overflow-y-auto pr-2 custom-scrollbar">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-dark rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-4 flex flex-wrap gap-2">
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
                <div key={index} className="project-card h-[460px] flex flex-col relative group transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3">
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
                      <div className="flex flex-col items-end">
                        {edu.logo && (
                          <img 
                            src={edu.logo} 
                            alt={`${edu.institution} logo`}
                            className="w-14 h-14 object-contain rounded mb-2" 
                          />
                        )}
                        <div className="text-right text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4 overflow-y-auto pr-2 custom-scrollbar">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-dark rounded-full mt-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto space-y-2 pt-2">
                      {/* GPA Display */}
                      {edu.gpa && (
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-muted-foreground">GPA:</span>
                            <span className="text-sm font-semibold text-accent">{edu.gpa}</span>
                          </div>
                        </div>
                      )}

                      {/* Focus Area Display */}
                      {edu.focus && (
                        <div>
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
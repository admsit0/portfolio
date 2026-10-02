import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  ExternalLink,
  Globe2,
} from 'lucide-react';
import { SectionHeader } from './ui/section-header';
import gdgLogo from '@/assets/gdg-logo.webp';
import gmvLogo from '@/assets/gmv-logo.png';
import freelanceLogo from '@/assets/freelance-logo.svg';
import uamLogo from '@/assets/uam-logo.png';
import ironiaLogo from '@/assets/ironia-logo.png';

const accentureLogo = `${import.meta.env.BASE_URL}acn-logo.png`;

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
    logoFrame?: string;
    website?: string;
    websiteLabel?: string;
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
        'Elected President in Jul 2026 after co-founding the chapter and serving as Treasurer.',
        'Led 10+ technical events with 250+ attendees and helped grow the community beyond 200 members.',
        'Managed teams of 6 to 13 people across AI, software, and student innovation initiatives.',
      ],
      technologies: ['Leadership', 'Events', 'AI', 'Community', 'Web'],
      logo: gdgLogo,
      website: 'https://gdguam.es',
      websiteLabel: 'gdguam.es',
    },
    {
      type: 'work',
      title: 'Data & AI Scientist Intern',
      company: 'Accenture Song',
      location: 'Madrid, Spain',
      period: 'Oct 2025 - Apr 2026',
      description: [
        'Developed internal MCP servers and integrated external ones into a full-stack AI application.',
        'Built agentic chatbot systems, data anomaly detection, automated reporting, and AI-generated summaries.',
        'Worked across the data science pipeline, from data preparation to modeling and visualization.',
        'Received a return offer following the internship.',
      ],
      technologies: ['AI Agents', 'MCP', 'Data Pipelines', 'Automation', 'Dashboards'],
      logo: accentureLogo,
      logoFrame: 'bg-black p-2',
    },
    {
      type: 'work',
      title: 'AI Engineer Intern',
      company: 'GMV - ISTAR Systems',
      location: 'Madrid, Spain',
      period: 'Feb - Jun 2025',
      description: [
        'Built an LLM-based RAG system for querying intelligence data.',
        'Integrated APIs and geospatial data into production-oriented pipelines.',
        'Documented systems and workflows with clarity for technical handoff.',
      ],
      technologies: ['Python', 'LLM', 'RAG', 'APIs', 'Geospatial'],
      logo: gmvLogo,
    },
    {
      type: 'work',
      title: 'Freelance Full-Stack Developer',
      company: 'Self-employed',
      location: 'Remote',
      period: 'Feb 2023 - Dec 2024',
      description: [
        'Delivered end-to-end web applications using Python, JavaScript, and SQL.',
        'Managed client needs, development scope, implementation, and deployment.',
      ],
      technologies: ['Python', 'JavaScript', 'SQL', 'Full-Stack', 'Clients'],
      logo: freelanceLogo,
    },
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
      period: '2026 - 2027',
      details: [
        'Scientific foundations of AI, research methodology, advanced theory, and technical development.',
        'Thesis in progress: latent representation editing in LLMs for deceptive behavior unlearning and alignment.',
      ],
      logo: uamLogo,
    },
    {
      degree: 'BSc in Data Science and Engineering',
      institution: 'Universidad Autónoma de Madrid (UAM)',
      period: '2022 - 2026',
      details: [
        'Focused on machine learning, generative AI, and advanced statistical modeling.',
        'Class Delegate for two years and active contributor to student innovation events.',
        "Thesis: Study of regularization effects on neural networks' internal activations.",
      ],
      gpa: '8.58 / 10',
      logo: uamLogo,
    },
    {
      degree: 'Microcredential: Liga de Inversores',
      institution: 'UAM + IronIA Fintech',
      period: '2025',
      details: [
        'Won the league through data-driven portfolio decisions in a guided academic simulation.',
        'Applied predictive modeling, backtesting, and collaborative analysis under competition constraints.',
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Backtesting', 'Data Analysis'],
      achievement: '1st Place Winner',
      logo: ironiaLogo,
    },
  ];

  const Logo = ({
    src,
    alt,
    frame,
  }: {
    src?: string;
    alt: string;
    frame?: string;
  }) => {
    if (!src) return null;

    return (
      <div className={`flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-lg border border-black/[0.06] bg-[#f5f5f7] p-3 shadow-sm ${frame ?? ''}`}>
        <img
          src={src}
          alt={alt}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Experience & Education"
          subtitle="Professional work, technical leadership, and academic foundations across AI, data science, and developer communities."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-primary-dark" />
              <h3 className="text-2xl font-semibold text-foreground">Professional Experience</h3>
            </div>

            <div className="grid gap-6">
              {experiences.map((exp, index) => (
                <div key={index} className="project-card min-h-[390px] flex flex-col overflow-hidden relative group">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="min-w-0">
                      <h4 className="text-xl font-semibold leading-tight text-foreground group-hover:text-primary-dark transition-colors">
                        {exp.title}
                      </h4>
                      {exp.previousRoles && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="tech-chip border-green-100 bg-green-100 text-green-700">Current</span>
                          {exp.previousRoles.map((role) => (
                            <span key={role} className="tech-chip border-gray-200 bg-gray-100 text-gray-600">
                              {role}
                            </span>
                          ))}
                        </div>
                      )}
                      <p className="text-primary-dark font-medium mt-2">{exp.company}</p>
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="meta-pill mt-3 border-[#34a853]/20 bg-[#34a853]/10 text-[#188038] transition-colors hover:bg-[#34a853]/15"
                        >
                          <Globe2 className="w-4 h-4" />
                          {exp.websiteLabel}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <Logo src={exp.logo} alt={`${exp.company} logo`} frame={exp.logoFrame} />
                  </div>

                  <div className="mb-5 flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-dark"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-5 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-chip border-accent/10 bg-accent/10 text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary-dark" />
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>

            <div className="grid gap-6">
              {education.map((edu, index) => (
                <div key={index} className="project-card min-h-[390px] flex flex-col overflow-hidden relative group">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="min-w-0">
                      <h4 className="text-xl font-semibold leading-tight text-foreground group-hover:text-primary-dark transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-dark font-medium mt-2">{edu.institution}</p>
                      {edu.achievement && (
                        <span className="tech-chip mt-3 border-accent bg-accent text-accent-foreground">
                          {edu.achievement}
                        </span>
                      )}
                    </div>

                    <Logo src={edu.logo} alt={`${edu.institution} logo`} />
                  </div>

                  <div className="mb-5 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>

                  <ul className="space-y-2.5">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-dark"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-5 space-y-3">
                    {edu.gpa && (
                      <div className="meta-pill border-blue-100 bg-blue-50">
                        <span className="font-medium text-muted-foreground">GPA</span>
                        <span className="font-semibold text-primary-dark">{edu.gpa}</span>
                      </div>
                    )}

                    {edu.focus && (
                      <div className="meta-pill border-blue-100 bg-blue-50">
                        <span className="font-medium text-muted-foreground">Focus</span>
                        <span className="font-semibold text-primary-dark">{edu.focus}</span>
                      </div>
                    )}

                    {edu.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {edu.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="tech-chip border-accent/10 bg-accent/10 text-accent"
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

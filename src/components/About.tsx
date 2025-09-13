import React from 'react';
import { 
  Code, 
  Database, 
  Brain, 
  TrendingUp, 
  Users, 
  Award,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Briefcase
} from 'lucide-react';
  import { SectionHeader } from './ui/section-header';
interface InfoCardProps {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  logo: React.ReactNode;
  bullets: string[];
  tags: string[];
  extra?: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  subtitle,
  date,
  location,
  logo,
  bullets,
  tags,
  extra,
}) => (
  <div className="info-card flex flex-col justify-between h-[220px] bg-white rounded-lg shadow p-4 relative">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <div className="text-sm text-gray-500">{subtitle}</div>
      </div>
      <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center">{logo}</div>
    </div>
    <div className="flex items-center text-xs text-gray-400 mt-1">
      <span>{date}</span>
      <span className="mx-2">•</span>
      <span>{location}</span>
    </div>
    <ul className="mt-2 text-sm list-disc list-inside">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
    {extra}
    <div className="mt-2 flex flex-wrap gap-2">
      {tags.map((tag, i) => (
  <span key={i} className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded">{tag}</span>
      ))}
    </div>
  </div>
);

const About = () => {
  const skills = [
    {
      category: 'Frameworks & Programming',
      icon: <Database className="w-6 h-6" />,
      items: ['Python', 'R', 'SQL', 'C++', 'JavaScript', 'HTML/CSS', 'Bash', 'PostgreSQL', 'MongoDB', 'Flask', 'Git', 'Docker', 'Linux', 'APIs']
    },
    {
      category: 'AI & Data Science',
      icon: <Brain className="w-6 h-6" />,
      items: ['Scikit-learn', 'TensorFlow', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Portfolio Optimization', 'Risk Management', 'Quantitative Analysis']
    },
    {
      category: 'Soft Skills & Interests',
      icon: <Users className="w-6 h-6" />,
      items: ['Team Working', 'Public Speaking', 'Team working', 'Mentoring', 'Technical Writing', 'Financial literacy', 'Innovation', 'Event Management', 'Entrepreneurship']
    },
    {
      category: 'Languages',
      icon: <Award className="w-6 h-6 text-accent" />,
      items: ['English (C1)', 'Spanish (Native)', 'Italian (Native)', 'French (B2)']
    }
  ];

  const softSkills = [
    {
      category: 'Leadership & Communication',
      icon: <Users className="w-6 h-6" />,
      items: ['Team Leadership', 'Public Speaking', 'Cross-functional Collaboration', 'Mentoring', 'Technical Writing']
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-5 h-5 text-accent" />,
      title: '1st Place - UAM Investor\'s League',
      year: '2025'
    },
    {
      icon: <Award className="w-5 h-5 text-accent" />,
      title: 'Excellence Scholarship - Community of Madrid',
      year: '2023, Projected 2025'
    },
    {
      icon: <Award className="w-5 h-5 text-accent" />,
      title: '2nd Prize - Inmune Institute Sports Tech Innovation',
      year: '2022'
    },
    {
      icon: <Award className="w-5 h-5 text-accent" />,
      title: '3rd Place - Olimpiada Científica Juvenil Española (Madrid)',
      year: '2020'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Me"
          subtitle="A passionate data scientist with a strong international background and expertise in quantitative analysis, machine learning, and full-stack development."
        />
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">Background</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a 4th-year Data Science and Engineering student at Universidad Autónoma de Madrid 
              with a passion for applying cutting-edge technology to solve real-world problems. 
              My experience spans across finance, machine learning, and full-stack development, 
              with a particular interest in the intersection of data science and finance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently working as Co-founder & Treasurer of the Google Developer Group on Campus UAM, 
              leading AI and tech innovation events. I've also gained valuable industry experience 
              as a Data Science Intern at GMV-ISTAR Systems, where I built LLM+RAG systems and 
              integrated APIs with geospatial data.
            </p>
            
            {/* Let's Connect Pointer */}
            <div className="mt-6">
              <p className="text-muted-foreground text-sm mb-2">
                Interested in collaboration or have questions?
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-primary-dark hover:text-accent font-medium text-sm underline-offset-2 hover:underline transition-colors"
              >
                Let's connect →
              </button>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skillGroup, idx) => {
                // Define a color scheme for each card (more standard colors)
                const colorSchemes = [
                  {
                    bg: 'bg-blue-50',
                    icon: 'text-blue-400',
                    tag: '',
                    border: 'border-blue-100'
                  },
                  {
                    bg: 'bg-purple-50',
                    icon: 'text-purple-400',
                    tag: '',
                    border: 'border-purple-100'
                  },
                  {
                    bg: 'bg-green-50',
                    icon: 'text-green-400',
                    tag: '',
                    border: 'border-green-100'
                  },
                  {
                    bg: 'bg-cyan-50',
                    icon: 'text-cyan-400',
                    tag: '',
                    border: 'border-cyan-100'
                  }
                ];
                const scheme = colorSchemes[idx] || colorSchemes[0];
                return (
                  <div
                    key={skillGroup.category}
                    className={`rounded-xl p-5 border hover-lift shadow-sm relative overflow-visible ${scheme.bg} ${scheme.border}`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {/* Icon with strong color */}
                      <div className={scheme.icon}>
                        {skillGroup.icon && typeof skillGroup.icon === 'object'
                          ? React.cloneElement(skillGroup.icon, { className: `w-6 h-6 ${scheme.icon}` })
                          : skillGroup.icon}
                      </div>
                      <h4 className="font-semibold text-foreground text-base">{skillGroup.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <span
                          key={skill}
                          className={`px-2 py-0.5 rounded-full text-xs font-medium transition-colors bg-white text-foreground border border-gray-200`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="relative mt-12">
          <h3 className="text-2xl font-bold text-black mb-8 tracking-tight text-left">
            Honors & Awards
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-background rounded-xl border border-muted shadow-sm hover:shadow-lg transition-all duration-200 flex items-stretch gap-0 overflow-hidden"
              >
                <div className="w-2 bg-green-400 group-hover:bg-green-500 transition-all duration-200" />
                <div className="flex items-center gap-4 p-5 flex-1">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-muted/40">
                    {achievement.icon}
                  </div>
                  <div className="flex flex-col justify-center text-left">
                    <h4 className="font-semibold text-lg text-foreground mb-1 leading-tight">{achievement.title}</h4>
                    <span className="text-xs font-medium text-muted-foreground tracking-wide">{achievement.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
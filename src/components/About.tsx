import { ReactNode, FC, cloneElement } from 'react';
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
  logo: ReactNode;
  bullets: string[];
  tags: string[];
  extra?: ReactNode;
}

const InfoCard: FC<InfoCardProps> = ({
  title,
  subtitle,
  date,
  location,
  logo,
  bullets,
  tags,
  extra,
}) => (
  <div className="info-card flex flex-col justify-between min-h-[220px] bg-white rounded-lg shadow p-4 relative">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <div className="text-sm text-muted-foreground">{subtitle}</div>
      </div>
      <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center">{logo}</div>
    </div>
    <div className="flex items-center text-xs text-muted-foreground mt-1">
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
  <span key={i} className="bg-accent/10 text-accent text-xs px-2 py-1 rounded">{tag}</span>
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
      items: ['Team Working', 'Public Speaking', 'Mentoring', 'Technical Writing', 'Financial literacy', 'Innovation', 'Event Management', 'Entrepreneurship']
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
      year: '2023'
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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Me"
          subtitle="A passionate data scientist with a strong international background and expertise in quantitative analysis, machine learning, and full-stack development."
        />
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">Background</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a Data Scientist and AI Engineer with a BSc in Data Science and Engineering from 
              Universidad Autónoma de Madrid, currently pursuing an MSc in Artificial Intelligence. 
              My experience spans technology consulting at Accenture, building cloud-native LLM and RAG architectures, 
              and leading data science projects across finance, geospatial intelligence, and web development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently serving as President of the Google Developer Group on Campus UAM, 
              driving AI and tech innovation events. I've built production LLM+RAG systems at GMV-ISTAR, 
              delivered data-driven consulting solutions at Accenture, and designed award-winning 
              portfolio optimization models in quantitative finance.
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
                const scheme = {
                  bg: 'bg-white',
                  icon: 'text-primary',
                  border: 'border-gray-100'
                };
                return (
                  <div
                    key={skillGroup.category}
                    className={`rounded-xl p-5 border hover-lift shadow-sm relative overflow-visible bg-white border-gray-100`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {/* Icon with strong color */}
                      <div className={scheme.icon}>
                        {skillGroup.icon && typeof skillGroup.icon === 'object'
                          ? cloneElement(skillGroup.icon as any, { className: `w-6 h-6 ${scheme.icon}` })
                          : skillGroup.icon}
                      </div>
                      <h4 className="font-semibold text-foreground text-base">{skillGroup.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <span
                          key={skill}
                          className={`px-2 py-0.5 rounded-full text-xs font-medium transition-colors bg-gray-50 text-gray-700 border border-gray-200`}
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
          <h3 className="text-2xl font-bold text-foreground mb-8 tracking-tight text-left">
            Honors & Awards
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-background rounded-xl border border-muted shadow-sm hover:shadow-lg transition-all duration-200 flex items-stretch gap-0 overflow-hidden"
              >
                <div className="w-2 bg-[#0071e3] group-hover:bg-[#0077ED] transition-all duration-200" />
                <div className="flex items-center gap-4 p-5 flex-1">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
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
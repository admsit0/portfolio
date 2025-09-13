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
      items: ['Team Leadership', 'Public Speaking', 'Collaboration', 'Mentoring', 'Technical Writing', 'Finance', 'Innovation', 'Event Management', 'Entrepreneurship']
    },
    {
      category: 'Languages',
      icon: <Award className="w-6 h-6 text-accent" />,
      items: ['English (C2)', 'Spanish (Native)', 'Italian (B2)', 'French (A2)']
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
      year: '2023, 2025'
    },
    {
      icon: <Award className="w-5 h-5 text-accent" />,
      title: '2nd Prize - Sports Tech Innovation',
      year: '2022'
    },
    {
      icon: <Award className="w-5 h-5 text-accent" />,
      title: '3rd Place - Olimpiada Científica Juvenil',
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
                    bg: 'bg-gray-50',
                    icon: 'text-blue-500',
                    tag: '',
                    border: 'border-gray-200'
                  },
                  {
                    bg: 'bg-gray-50',
                    icon: 'text-purple-500',
                    tag: '',
                    border: 'border-gray-200'
                  },
                  {
                    bg: 'bg-gray-50',
                    icon: 'text-green-500',
                    tag: '',
                    border: 'border-gray-200'
                  },
                  {
                    bg: 'bg-gray-50',
                    icon: 'text-cyan-500',
                    tag: '',
                    border: 'border-gray-200'
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
          <div className="flex justify-center mb-2">
            <span className="inline-block w-16 h-1 bg-muted rounded-full"></span>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center tracking-tight">
            Honors & Awards
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-5 border border-muted shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 flex items-center gap-5"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-muted/40">
                  {achievement.icon}
                </div>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg text-foreground mb-1 leading-tight">{achievement.title}</h4>
                  <span className="text-xs font-medium text-muted-foreground tracking-wide">{achievement.year}</span>
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
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

const About = () => {
  const skills = [
    {
      category: 'Programming',
      icon: <Code className="w-6 h-6" />,
      items: ['Python', 'R', 'SQL', 'C++', 'JavaScript', 'HTML/CSS', 'Bash']
    },
    {
      category: 'AI/Data Science',
      icon: <Brain className="w-6 h-6" />,
      items: ['Scikit-learn', 'TensorFlow', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision']
    },
    {
      category: 'Finance & Modeling',
      icon: <TrendingUp className="w-6 h-6" />,
      items: ['Portfolio Optimization', 'Risk Management', 'Black-Scholes', 'Backtesting', 'Quantitative Analysis']
    },
    {
      category: 'Tools & Frameworks',
      icon: <Database className="w-6 h-6" />,
      items: ['PostgreSQL', 'MongoDB', 'Flask', 'Git', 'Docker', 'Linux', 'APIs']
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate data scientist with a strong international background and expertise
            in quantitative analysis, machine learning, and full-stack development.
          </p>
        </div>

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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[...skills, ...softSkills].map((skillGroup) => (
                <div key={skillGroup.category} className="bg-card rounded-lg p-4 border border-border hover-lift">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-primary-dark">{skillGroup.icon}</div>
                    <h4 className="font-semibold text-foreground text-sm">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-primary/10 text-primary-dark text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Honors & Awards
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-4 border border-border hover-lift flex items-center gap-4"
              >
                {achievement.icon}
                <div>
                  <h4 className="font-medium text-foreground">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
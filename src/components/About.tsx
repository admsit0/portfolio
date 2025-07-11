
import React from 'react';
import { Code, Database, Brain, TrendingUp } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Programming",
      icon: <Code className="w-6 h-6" />,
      items: ["Python", "R", "JavaScript", "TypeScript", "Java", "SQL"]
    },
    {
      category: "Data Science",
      icon: <Brain className="w-6 h-6" />,
      items: ["Machine Learning", "Deep Learning", "Statistical Analysis", "Data Visualization", "NLP"]
    },
    {
      category: "Web Development",
      icon: <TrendingUp className="w-6 h-6" />,
      items: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "AWS"]
    },
    {
      category: "Tools & Frameworks",
      icon: <Database className="w-6 h-6" />,
      items: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Docker", "Git"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            I'm a dedicated student passionate about leveraging data science and software engineering 
            to solve real-world problems and create meaningful impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-800">My Journey</h3>
            <div className="space-y-4 text-slate-600">
              <p>
                As a 4th-year Data Science and Software Engineering student, I've developed a strong 
                foundation in both theoretical concepts and practical applications. My academic journey 
                has been complemented by hands-on projects and real-world experience.
              </p>
              <p>
                I'm particularly interested in the intersection of machine learning and web development, 
                creating intelligent applications that can scale and provide value to users. My experience 
                ranges from developing generative AI models to building full-stack web applications for clients.
              </p>
              <p>
                When I'm not coding or analyzing data, I enjoy staying up-to-date with the latest 
                technological trends and contributing to open-source projects.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 shadow-lg">
              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <h4 className="text-3xl font-bold text-blue-600">4th Year</h4>
                  <p className="text-slate-600">Data Science & Software Engineering</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-slate-800">6+</div>
                    <div className="text-sm text-slate-600">Major Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-800">3.8</div>
                    <div className="text-sm text-slate-600">GPA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-800">2+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-800">∞</div>
                    <div className="text-sm text-slate-600">Curiosity Level</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-12">
          <h3 className="text-2xl font-semibold text-slate-800 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-blue-600">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800">{skill.category}</h4>
                </div>
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-sm text-slate-600 bg-white px-3 py-1 rounded-full inline-block mr-2 mb-2">
                      {item}
                    </div>
                  ))}
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

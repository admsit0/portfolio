import { useState, useRef } from 'react';
import { 
  ExternalLink, 
  Github, 
  Brain, 
  Globe, 
  Database, 
  BarChart3,
  Zap,
  Heart,
  ChevronRight,
  X,
  FileText
} from 'lucide-react';
import { scrollToSectionWithOffset } from '../lib/utils';
  import { SectionHeader } from './ui/section-header';

// Import project images
import stableDiffusionImg from '@/assets/project-stable-diffusion.jpg';
import heatingWebsiteImg from '@/assets/project-heating-website.jpg';
import databasePerformanceImg from '@/assets/project-database-performance.jpg';
import clusteringImg from '@/assets/project-clustering.jpg';
import reinforcementLearningImg from '@/assets/project-reinforcement-learning.png';
import cardiacHealthImg from '@/assets/cardiac-health.webp';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'Stable Diffusion for Generative AI of Images',
      category: 'Artificial Intelligence',
      icon: <Brain className="w-6 h-6" />,
      description: 'Advanced implementation of Stable Diffusion models for high-quality image generation with custom training pipelines and optimization techniques.',
      technologies: ['Python', 'PyTorch', 'Diffusion Models', 'CUDA', 'Hugging Face'],
      features: [
        'Custom training pipeline for domain-specific image generation',
        'Optimized inference with mixed-precision and model quantization',
        'Interactive web interface for real-time generation',
        'Performance benchmarking and model comparison tools'
      ],
      image: stableDiffusionImg,
        github: 'https://github.com/admsit0/imageGenerativeAI',
        demo: undefined,
  report: '/portfolio/project-stable-diffusion.pdf',
      metrics: {
        'Generation Speed': '2.3s per image',
        'Model Size': '3.4GB optimized',
        'GPU Memory': '6GB VRAM'
      }
    },
    {
      title: 'Boiler & Radiant Floor Company Website',
      category: 'Full-Stack Development',
      icon: <Globe className="w-6 h-6" />,
      description: 'Complete web solution for a heating systems company including CMS, appointment booking, inventory management, and customer portal.',
      image: heatingWebsiteImg,
        github: undefined,
        demo: 'https://www.aguitaefitec.com/',
        report: undefined,
      metrics: {
        'Page Load Time': '< 2s',
        'Conversion Rate': '+45%',
        'SEO Score': '98/100'
      }
    },
    {
      title: 'Database Performance Comparison',
      category: 'Data Engineering',
      icon: <Database className="w-6 h-6" />,
      description: 'Comprehensive analysis comparing PostgreSQL, MongoDB, and Redis performance across different workloads and data patterns.',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Python', 'Docker', 'Grafana'],
      features: [
        'Automated benchmarking suite',
        'Real-time performance monitoring',
        'Scalability testing under load',
        'Cost-performance analysis',
        'Detailed reporting dashboard'
      ],
      image: databasePerformanceImg,
        github: 'https://github.com/admsit0/DB-performance-comparison',
  report: '/portfolio/project-database-performance.pdf',
      metrics: {
        'Databases Tested': '3 Systems',
        'Test Scenarios': '15 Workloads',
        'Performance Gain': 'Up to 300%'
      }
    },
    {
      title: 'Clustering Techniques Evaluation',
      category: 'Machine Learning',
      icon: <BarChart3 className="w-6 h-6" />,
      description: 'Systematic evaluation of clustering algorithms on diverse datasets with performance metrics, visualization tools, and automated parameter tuning.',
      technologies: ['Python', 'Scikit-learn', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly'],
      features: [
        'Implementation of 8+ clustering algorithms',
        'Automated hyperparameter optimization',
        'Interactive visualization dashboard',
        'Performance metrics comparison',
        'Real-world dataset analysis'
      ],
      image: clusteringImg,
        github: 'https://github.com/admsit0/clustering-techniques-evaluation',
  report: '/portfolio/project-clustering.pdf',
      metrics: {
        'Algorithms': '8 Methods',
        'Datasets': '12 Different',
        'Best Silhouette': '0.94 Score'
      }
    },
    {
      title: 'Reinforcement Learning Analysis',
      category: 'Artificial Intelligence',
      icon: <Zap className="w-6 h-6" />,
      description: 'Implementation and analysis of various RL algorithms including Q-Learning, DQN, and Policy Gradient methods on custom environments.',
      technologies: ['Python', 'OpenAI Gym', 'TensorFlow', 'Stable Baselines3', 'Matplotlib'],
      features: [
        'Custom environment development',
        'Multiple RL algorithm implementations',
        'Training performance visualization',
        'Hyperparameter sensitivity analysis',
        'Agent behavior analysis tools'
      ],
      image: reinforcementLearningImg,
        github: 'https://github.com/admsit0/RL-analysis',
  report: '/portfolio/project-reinforcement-learning.pdf',
      metrics: {
        'Environments': '5 Custom',
        'Algorithms': '6 Methods',
        'Best Score': '95% Success Rate'
      }
    },
    {
      title: 'Cardiac Health Risk Analysis in R',
      category: 'Statistical Analysis',
      icon: <Heart className="w-6 h-6" />,
      description: 'Comprehensive statistical analysis of cardiac health risk factors using advanced statistical methods and predictive modeling techniques in R.',
      technologies: ['R', 'ggplot2', 'dplyr', 'caret', 'randomForest', 'Shiny'],
      features: [
        'Exploratory data analysis with visualizations',
        'Multiple regression and classification models',
        'Risk factor correlation analysis',
        'Interactive Shiny dashboard',
        'Clinical insights and recommendations'
      ],
      image: cardiacHealthImg,
        github: 'https://github.com/admsit0/heart-risk-analysis',
  report: '/portfolio/project-heart-risk.pdf',
      metrics: {
        'Accuracy': '94.2%',
        'Patients Analyzed': '10,000+',
        'Risk Factors': '15 Variables'
      }
    }
  ];

  const openProjectModal = (index: number) => {
    setSelectedProject(index);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

              return (
                <section id="projects" className="py-20 bg-gradient-subtle">
                  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                      <SectionHeader
                        title="Featured Projects"
                        subtitle="A showcase of my work in data science, machine learning, and full-stack development, demonstrating technical expertise and real-world problem-solving skills."
                      />
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {projects.map((project, index) => (
                        <div 
                          key={index} 
                          className="project-card group cursor-pointer"
                          onClick={() => openProjectModal(index)}
                        >
                          <div>
                            {/* Project Image */}
                            <div className="relative overflow-hidden rounded-lg mb-4">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-primary-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Project Header */}
                            <div className="flex items-center gap-3 mb-3">
                              <div className="text-primary-dark">{project.icon}</div>
                              <div>
                                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary-dark transition-colors">
                                  {project.title}
                                </h3>
                                <p className="text-sm text-accent font-medium">{project.category}</p>
                              </div>
                            </div>

                            {/* Project Description */}
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {(project.technologies?.slice(0, 3) ?? []).map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.technologies && project.technologies.length > 3 && (
                                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                                  +{project.technologies.length - 3}
                                </span>
                              )}
                            </div>

                            {/* Project Links */}
                            <div className="flex gap-2 justify-between items-center">
                              <div className="flex gap-2">
                                {project.github && (
                                  <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    title="View Source Code"
                                  >
                                    <Github className="w-4 h-4 p-2 text-muted-foreground hover:text-primary-dark transition-colors rounded-lg hover:bg-primary/10" />
                                  </a>
                                )}
                                {project.demo && (
                                  <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    title="Live Demo"
                                  >
                                    <ExternalLink className="w-4 h-4 p-2 text-muted-foreground hover:text-primary-dark transition-colors rounded-lg hover:bg-primary/10" />
                                  </a>
                                )}
                                {project.report && (
                                  <a
                                    href={project.report}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    title="View Report"
                                  >
                                    <FileText className="w-4 h-4 p-2 text-muted-foreground hover:text-primary-dark transition-colors rounded-lg hover:bg-primary/10" />
                                  </a>
                                )}
                              </div>
                              <span className="text-xs text-muted-foreground">Click to expand</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12">
                      <p className="text-muted-foreground mb-4">
                        Want to see more projects or discuss collaboration opportunities?
                      </p>
                      <button
                        onClick={() => scrollToSectionWithOffset('contact')}
                        className="btn-primary px-6 py-3 rounded-lg text-base font-medium"
                      >
                        Get In Touch
                      </button>
                    </div>
                  </div>

                  {/* Project Modal */}
                  {selectedProject !== null && (
                    <div
                      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2 sm:p-4"
                      onClick={(e) => {
                        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                          closeProjectModal();
                        }
                      }}
                    >
                      <div
                        ref={modalRef}
                        className="bg-background rounded-xl border border-border w-full max-w-[95vw] sm:max-w-2xl md:max-w-4xl lg:max-w-6xl min-h-[200px] max-h-[90vh] mx-auto shadow-2xl flex flex-col overflow-y-auto"
                        style={{ margin: '0 auto', overscrollBehavior: 'contain' }}
                        onClick={(e) => e.stopPropagation()}>
                        {/* Modal Header */}
                        <div className="flex justify-between items-center p-6 pb-2">
                          <div className="flex items-center gap-4">
                            <div className="text-primary-dark text-2xl">{projects[selectedProject].icon}</div>
                            <div>
                              <h2 className="text-2xl font-bold text-foreground leading-tight">{projects[selectedProject].title}</h2>
                              <p className="text-accent font-medium text-base">{projects[selectedProject].category}</p>
                            </div>
                          </div>
                          <button
                            onClick={closeProjectModal}
                            className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full"
                            title="Close modal"
                          >
                            <X className="w-6 h-6" aria-label="Close" />
                          </button>
                        </div>
                        {/* Image at the top */}
                        <div className="w-full flex items-center justify-center px-6 pb-4">
                          <img
                            src={projects[selectedProject].image}
                            alt={projects[selectedProject].title}
                            className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-lg shadow-md"
                          />
                        </div>
                        {/* Features, Tags, Description */}
                        <div className="flex-1 px-6 pb-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Left: Description, Features, Technologies */}
                            <div className="col-span-2 flex flex-col gap-6">
                              <div>
                                <h3 className="font-semibold text-foreground mb-2">Description</h3>
                                <p className="text-muted-foreground leading-relaxed text-base">
                                  {projects[selectedProject].description}
                                </p>
                              </div>
                              <div>
                                <h3 className="font-semibold text-foreground mb-2">Key Features</h3>
                                <ul className="space-y-2">
                                  {(projects[selectedProject].features ?? []).map((feature, idx) => (
                                    <li key={idx} className="text-base text-muted-foreground flex items-start gap-2">
                                      <ChevronRight className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h3 className="font-semibold text-foreground mb-2">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                  {(projects[selectedProject].technologies ?? []).map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-3 py-1 bg-primary/10 text-primary-dark text-base rounded-full border border-primary/20"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            {/* Right: Results & Links */}
                            <div className="col-span-1 flex flex-col gap-6">
                              <div>
                                <h3 className="font-semibold text-foreground mb-2">Results & Impact</h3>
                                <div className="space-y-2">
                                  {Object.entries(projects[selectedProject].metrics).map(([key, value]) => (
                                    <div key={key} className="flex justify-between items-center">
                                      <span className="text-sm text-muted-foreground">{key}</span>
                                      <span className="text-sm font-semibold text-green-600">{value}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h3 className="font-semibold text-foreground mb-2">Links</h3>
                                <div className="flex flex-col gap-3">
                                  {projects[selectedProject].github && (
                                    <a
                                      href={projects[selectedProject].github}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:shadow group"
                                    >
                                      <Github className="w-5 h-5 text-primary-dark" />
                                      <div className="flex-1">
                                        <div className="text-base font-medium text-foreground">Source Code</div>
                                        <div className="text-xs text-muted-foreground">View on GitHub</div>
                                      </div>
                                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary-dark transition-colors" />
                                    </a>
                                  )}
                                  {projects[selectedProject].demo && (
                                    <a
                                      href={projects[selectedProject].demo}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:shadow group"
                                    >
                                      <ExternalLink className="w-5 h-5 text-primary-dark" />
                                      <div className="flex-1">
                                        <div className="text-base font-medium text-foreground">Live Demo</div>
                                        <div className="text-xs text-muted-foreground">Try it online</div>
                                      </div>
                                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary-dark transition-colors" />
                                    </a>
                                  )}
                                  {projects[selectedProject].report && (
                                    <a
                                      href={projects[selectedProject].report}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:shadow group"
                                    >
                                      <FileText className="w-5 h-5 text-primary-dark" />
                                      <div className="flex-1">
                                        <div className="text-base font-medium text-foreground">Technical Report</div>
                                        <div className="text-xs text-muted-foreground">Detailed analysis</div>
                                      </div>
                                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary-dark transition-colors" />
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
              {/* ...existing code... */}
            </section>
        );
}

export default Projects;

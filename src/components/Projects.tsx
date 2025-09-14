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
      title: "Diffusion-based Generative AI for Images",
      category: "Artificial Intelligence",
      icon: <Brain className="w-6 h-6" />,
      description: "A modular, extensible, and research-grade Python package for high-quality image generation using advanced diffusion models. Implements state-of-the-art stochastic differential equation (SDE)-based techniques, supporting multiple diffusion processes, custom training pipelines, and robust evaluation metrics.",
      technologies: [
        "Python",
        "PyTorch",
        "Diffusion Models (VP, VE, Sub-VP)",
        "CUDA",
        "TorchVision",
        "NumPy",
        "Matplotlib",
        "Scipy"
      ],
      features: [
        "Custom training pipeline for domain-specific image generation (MNIST, CIFAR, CelebA, etc.)",
        "Multiple diffusion processes: Variance Exploding (VE), Variance Preserving (VP), Sub-Variance Preserving (Sub-VP)",
        "Optimized inference with GPU acceleration, mixed-precision, and flexible samplers (Euler-Maruyama, Predictor-Corrector, Probability Flow ODE, Exponential Integrator)",
        "Conditional generation: class-conditional sampling, colorization, and image imputation/inpainting",
        "Performance benchmarking and model comparison tools (timing, resource usage, metrics)",
        "Comprehensive evaluation metrics: Fréchet Inception Distance (FID), Inception Score (IS), Bits-Per-Dimension (BPD)",
        "Extensive Jupyter notebook demos for training, sampling, conditioning, and metrics",
        "Clean, extensible codebase suitable for research and production"
      ],
      image: stableDiffusionImg,
      github: "https://github.com/admsit0/imageGenerativeAI",
      demo: undefined,
      report: "/portfolio/project-stable-diffusion.pdf",
      metrics: {
        GenerationSpeed: "Average sampling time < 4s across four different samplers",
        ModelSize: "Average of < 100MB (optimized checkpoints, ScoreNet/ScoreNetColor)",
        Utilities: "Utilized agile methodologies for project management"
      }
    },
    {
      title: 'Boiler & Radiant Floor Company Website',
      category: 'Full-Stack Development',
      icon: <Globe className="w-6 h-6" />,
      description: 'Complete web solution for a heating systems company including contact form, internal hiring platform and blog system.',
      image: heatingWebsiteImg,
      github: undefined,
      demo: 'https://www.aguitaefitec.com/',
      report: undefined,
      metrics: {
        Languages: 'Python, JavaScript, HTML, CSS, PHP',
        Satisfaction: '100'
      }
    },
    {
      title: "Database Performance Comparison",
      category: "Data Engineering",
      icon: <Database className="w-6 h-6" />,
      description: "Analysis and benchmarking of PostgreSQL, MongoDB, SQLite, and DuckDB performance for user and vehicle data workloads. Includes cache system evaluation and modular testing pipeline.",
      technologies: ["PostgreSQL", "MongoDB", "SQLite", "DuckDB", "Python", "Memcached", "Matplotlib", "Pandas"],
      features: [
        "Modular benchmarking suite for CRUD operations",
        "Cache system implementation and testing",
        "Automated data generation and schema setup",
        "Performance and memory profiling",
        "Result export and plot generation"
      ],
      image: databasePerformanceImg,
      github: "https://github.com/admsit0/DB-performance-comparison",
      report: "/portfolio/project-database-performance.pdf",
      metrics: {
        DatabasesTested: "4 Systems",
        TestScenarios: "Multiple CRUD and cache workloads",
        PerformanceGain: "Detailed per-operation, varies by DB and cache"
      }
    },
    {
      title: "Clustering Techniques Evaluation",
      category: "Machine Learning",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Comprehensive evaluation of clustering algorithms (K-Means, Fuzzy C-Means, Spectral Clustering, Gaussian Mixture) on synthetic and real-world datasets (German Credit), including metric comparison, visualization, and cluster interpretability.",
      technologies: ["Python", "Scikit-learn", "NumPy", "Matplotlib", "Seaborn"],
      features: [
        "Implementation of 4 clustering algorithms (K-Means, Fuzzy C-Means, Spectral Clustering, Gaussian Mixture) from scratch (no libraries)",
        "Parameter tuning for Fuzzy C-Means (fuzziness) and cluster number selection",
        "Visualization of clustering results and PCA projections",
        "Performance metrics: Silhouette, Dunn Index, Adjusted Rand Index, NMI, F1-score, Accuracy",
        "Analysis of synthetic and German Credit datasets"
      ],
      image: clusteringImg,
      github: "https://github.com/admsit0/clustering-techniques-evaluation",
      report: "/portfolio/project-clustering.pdf",
      metrics: {
        Algorithms: "4 Methods",
        Datasets: "2 Main (Synthetic, German Credit)",
        BestSilhouette: "1.0 (Synthetic Blobs, Spectral Clustering)"
      }
    },
    {
      title: "Reinforcement Learning Analysis",
      category: "Artificial Intelligence",
      icon: <Zap className="w-6 h-6" />,
      description: "Implementation and analysis of Q-Learning, SARSA, and Deep Q-Network (DQN) algorithms on FrozenLake and CartPole environments. Includes custom training visualizations, policy comparison, and agent behavior analysis.",
      technologies: ["Python", "Gymnasium", "TensorFlow", "Matplotlib", "TQDM"],
      features: [
        "FrozenLake and CartPole environment experiments",
        "Q-Learning, SARSA, and DQN implementations",
        "Training performance visualization (reward, length, error)",
        "Hyperparameter sensitivity and exploration/exploitation analysis",
        "Agent behavior visualization and episode rendering"
      ],
      image: reinforcementLearningImg,
      github: "https://github.com/admsit0/RL-analysis",
      report: "/portfolio/project-reinforcement-learning.pdf",
      metrics: {
        Environments: "2 (FrozenLake 4x4, 8x8, CartPole)",
        Algorithms: "3 (Q-Learning, SARSA, DQN)",
        BestScore: "CartPole: ~500 (solved), FrozenLake: >0.55 avg reward"
      }
    },
    {
      title: "Cardiac Health Risk Analysis in R",
      category: "Statistical Analysis",
      icon: <Heart className="w-6 h-6" />,
      description: "Comprehensive statistical analysis of cardiac health risk factors using advanced multivariate methods (PCA, PLS, clustering, LDA) in R. The project analyzes real patient data to identify key risk factors and predict outcomes.",
      technologies: ["R", "ggplot2", "dplyr", "MASS", "FactoMineR", "cluster", "pls", "readxl", "GGally", "factoextra", "biotools"],
      features: [
        "Exploratory data analysis with visualizations",
        "Principal Component Analysis (PCA)",
        "Partial Least Squares Regression (PLS)",
        "Clustering (K-means and hierarchical)",
        "Linear Discriminant Analysis (LDA) for classification",
        "Risk factor correlation analysis",
        "Clinical insights and recommendations"
      ],
      image: cardiacHealthImg,
      github: "https://github.com/admsit0/heart-risk-analysis",
      report: "/portfolio/project-heart-risk.pdf",
      metrics: {
        Accuracy: "92.7% (LDA model)",
        PatientsAnalyzed: "299",
        RiskFactors: "13 Variables"
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

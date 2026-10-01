import { useState } from 'react';
import {
  ArrowUpRight,
  Brain,
  Database,
  FileText,
  Github,
  HeartPulse,
  Layers3,
  LineChart,
  Network,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToSectionWithOffset } from '../lib/utils';
import { SectionHeader } from './ui/section-header';

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

type ProjectLink = {
  label: string;
  href: string;
  kind: 'github' | 'report' | 'article';
  internal?: boolean;
};

type Project = {
  title: string;
  eyebrow: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  metrics: { label: string; value: string }[];
  icon: JSX.Element;
  accent: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'slate';
  visual: {
    label: string;
    nodes: string[];
    caption: string;
  };
  links: ProjectLink[];
};

const accentStyles = {
  blue: {
    text: 'text-[#0071e3]',
    bg: 'bg-[#e8f2ff]',
    border: 'border-[#0071e3]/20',
    stripe: 'bg-[#0071e3]',
    soft: 'from-[#f6fbff] via-white to-[#e8f2ff]',
  },
  green: {
    text: 'text-[#188038]',
    bg: 'bg-[#eaf7ef]',
    border: 'border-[#34a853]/20',
    stripe: 'bg-[#34a853]',
    soft: 'from-[#f7fff9] via-white to-[#eaf7ef]',
  },
  yellow: {
    text: 'text-[#b06000]',
    bg: 'bg-[#fff7df]',
    border: 'border-[#fbbc04]/30',
    stripe: 'bg-[#fbbc04]',
    soft: 'from-[#fffdf5] via-white to-[#fff2c6]',
  },
  red: {
    text: 'text-[#c5221f]',
    bg: 'bg-[#fdebea]',
    border: 'border-[#ea4335]/20',
    stripe: 'bg-[#ea4335]',
    soft: 'from-[#fff7f6] via-white to-[#fdebea]',
  },
  purple: {
    text: 'text-[#7b2ff7]',
    bg: 'bg-[#f0e9ff]',
    border: 'border-[#7b2ff7]/20',
    stripe: 'bg-[#7b2ff7]',
    soft: 'from-[#fbf9ff] via-white to-[#f0e9ff]',
  },
  slate: {
    text: 'text-[#344054]',
    bg: 'bg-[#f2f4f7]',
    border: 'border-[#98a2b3]/25',
    stripe: 'bg-[#344054]',
    soft: 'from-[#fbfcfd] via-white to-[#eef2f6]',
  },
} satisfies Record<Project['accent'], Record<string, string>>;

const projects: Project[] = [
  {
    title: 'Regularization in CNNs: Internal Activation Dynamics',
    eyebrow: '01 / Thesis',
    category: 'Deep Learning Research',
    description:
      'Final-year thesis studying how seven regularization techniques affect both external accuracy and the internal activation geometry of CNNs across CIFAR-10 and SVHN.',
    technologies: ['Python', 'PyTorch', 'CNNs', 'Entropy', 'CIFAR-10', 'SVHN'],
    highlights: [
      'Compared L1, L2, Dropout, Early Stopping, Gaussian Noise, Data Augmentation, and Batch Normalization.',
      'Measured internal behavior through Shannon entropy, dispersion ratios, and unique activation states.',
      'Built a reproducible training and analysis pipeline with checkpoint extraction and robustness experiments.',
    ],
    metrics: [
      { label: 'Regularizers', value: '7' },
      { label: 'Datasets', value: '4' },
      { label: 'Focus', value: 'Internal dynamics' },
    ],
    icon: <Brain className="w-5 h-5" />,
    accent: 'blue',
    visual: {
      label: 'CNN',
      nodes: ['input', 'conv', 'entropy', 'states'],
      caption: 'Activation states across regularized convolutional layers',
    },
    links: [
      { label: 'Source', href: 'https://github.com/admsit0/tfg', kind: 'github' },
      { label: 'Blog', href: '/blog/regularization-in-cnns-internal-activations', kind: 'article', internal: true },
    ],
  },
  {
    title: 'Diffusion-based Generative AI for Images',
    eyebrow: '02 / Generative AI',
    category: 'Score-based Modeling',
    description:
      'Research-grade diffusion package for training, sampling, conditioning, and evaluating image generation systems with multiple stochastic processes and samplers.',
    technologies: ['Python', 'PyTorch', 'SDEs', 'CUDA', 'FID', 'Samplers'],
    highlights: [
      'Implemented VE, VP, and Sub-VP diffusion processes with modular sampling strategies.',
      'Supported class-conditional generation, colorization, imputation, and benchmarking utilities.',
      'Evaluated models with FID, Inception Score, bits-per-dimension, and runtime profiling.',
    ],
    metrics: [
      { label: 'Processes', value: '3' },
      { label: 'Samplers', value: '4' },
      { label: 'Reports', value: 'PDF' },
    ],
    icon: <Sparkles className="w-5 h-5" />,
    accent: 'purple',
    visual: {
      label: 'SDE',
      nodes: ['noise', 'score', 'sample', 'metric'],
      caption: 'Reverse-time denoising pipeline from noise to samples',
    },
    links: [
      { label: 'Source', href: 'https://github.com/admsit0/imageGenerativeAI', kind: 'github' },
      { label: 'Paper', href: assetPath('project-stable-diffusion.pdf'), kind: 'report' },
      { label: 'Blog', href: '/blog/diffusion-models-from-sdes-to-images', kind: 'article', internal: true },
    ],
  },
  {
    title: 'AthenAI Competition Project',
    eyebrow: '03 / Challenge',
    category: 'Applied ML Decision Systems',
    description:
      'Scholarship-winning challenge work focused on turning noisy tabular signals into a practical decision pipeline with validation, backtesting, and readable outputs.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Validation', 'Backtesting', 'Reporting'],
    highlights: [
      'Built an experiment loop for comparing feature sets, decision rules, and evaluation windows.',
      'Prioritized interpretability and sensitivity checks over black-box confidence.',
      'Translated model outputs into concise, judge-readable technical reasoning.',
    ],
    metrics: [
      { label: 'Outcome', value: 'Scholarship' },
      { label: 'Mode', value: 'Challenge' },
      { label: 'Focus', value: 'Decisions' },
    ],
    icon: <LineChart className="w-5 h-5" />,
    accent: 'green',
    visual: {
      label: 'AthenAI',
      nodes: ['signals', 'model', 'risk', 'decision'],
      caption: 'Signal validation and decision ranking under competition constraints',
    },
    links: [
      { label: 'Blog', href: '/blog/athenai-competition-decision-pipeline', kind: 'article', internal: true },
    ],
  },
  {
    title: 'Database Performance Comparison',
    eyebrow: '04 / Data Systems',
    category: 'Benchmarking & Profiling',
    description:
      'Benchmarking suite comparing PostgreSQL, MongoDB, SQLite, and DuckDB across CRUD workloads, cache behavior, indexing decisions, and profiling outputs.',
    technologies: ['PostgreSQL', 'MongoDB', 'SQLite', 'DuckDB', 'Python', 'Memcached'],
    highlights: [
      'Automated data generation, schema setup, CRUD testing, and result export.',
      'Compared primary-key lookups, joins, update workloads, cache behavior, and memory impact.',
      'Produced plots and a modular pipeline for reproducible performance analysis.',
    ],
    metrics: [
      { label: 'Databases', value: '4' },
      { label: 'Layer', value: 'Cache' },
      { label: 'Output', value: 'Plots' },
    ],
    icon: <Database className="w-5 h-5" />,
    accent: 'slate',
    visual: {
      label: 'DB',
      nodes: ['crud', 'cache', 'join', 'profile'],
      caption: 'Multi-engine workload profiler with cache experiments',
    },
    links: [
      { label: 'Source', href: 'https://github.com/admsit0/DB-performance-comparison', kind: 'github' },
      { label: 'Paper', href: assetPath('project-database-performance.pdf'), kind: 'report' },
    ],
  },
  {
    title: 'Reinforcement Learning Analysis',
    eyebrow: '05 / Agents',
    category: 'RL Algorithms',
    description:
      'Implementation and analysis of Q-Learning, SARSA, and DQN agents in Gymnasium environments with training curves, policy comparisons, and behavior inspection.',
    technologies: ['Python', 'Gymnasium', 'TensorFlow', 'Q-Learning', 'SARSA', 'DQN'],
    highlights: [
      'Trained tabular and neural agents on FrozenLake, CartPole, and LunarLander setups.',
      'Visualized reward, episode length, exploration behavior, and convergence signals.',
      'Compared hyperparameter sensitivity across exploration and learning-rate choices.',
    ],
    metrics: [
      { label: 'Algorithms', value: '3' },
      { label: 'Envs', value: '3' },
      { label: 'Solved', value: 'CartPole' },
    ],
    icon: <Zap className="w-5 h-5" />,
    accent: 'yellow',
    visual: {
      label: 'RL',
      nodes: ['state', 'policy', 'reward', 'value'],
      caption: 'Agent loop for policy learning and value updates',
    },
    links: [
      { label: 'Source', href: 'https://github.com/admsit0/RL-analysis', kind: 'github' },
      { label: 'Paper', href: assetPath('project-reinforcement-learning.pdf'), kind: 'report' },
    ],
  },
  {
    title: 'Clustering Techniques Evaluation',
    eyebrow: '06 / Machine Learning',
    category: 'Unsupervised Learning',
    description:
      'Comparative evaluation of K-Means, Fuzzy C-Means, Spectral Clustering, and Gaussian Mixtures on synthetic and real-world datasets.',
    technologies: ['Python', 'Scikit-learn', 'NumPy', 'PCA', 'GMM', 'Spectral'],
    highlights: [
      'Implemented and compared clustering methods across separable and non-linear structures.',
      'Used Silhouette, Dunn Index, Adjusted Rand Index, NMI, accuracy, and F1-score.',
      'Explained cluster interpretability through PCA projections and metric tradeoffs.',
    ],
    metrics: [
      { label: 'Methods', value: '4' },
      { label: 'Metrics', value: '6' },
      { label: 'View', value: 'PCA' },
    ],
    icon: <Network className="w-5 h-5" />,
    accent: 'blue',
    visual: {
      label: 'Clusters',
      nodes: ['k-means', 'fuzzy', 'spectral', 'gmm'],
      caption: 'Cluster geometry compared across algorithms and metrics',
    },
    links: [
      { label: 'Source', href: 'https://github.com/admsit0/clustering-techniques-evaluation', kind: 'github' },
      { label: 'Paper', href: assetPath('project-clustering.pdf'), kind: 'report' },
    ],
  },
  {
    title: 'Cardiac Health Risk Analysis in R',
    eyebrow: '07 / Statistics',
    category: 'Clinical Data Analysis',
    description:
      'Statistical analysis of heart failure records with PCA, PLS, clustering, and LDA to study patient profiles, risk factors, and classification behavior.',
    technologies: ['R', 'ggplot2', 'PCA', 'PLS', 'LDA', 'Clustering'],
    highlights: [
      'Explored a heart failure dataset with 299 observations and multivariate risk factors.',
      'Combined dimensionality reduction, clustering, and discriminant analysis.',
      'Summarized clinical patterns and modeling limitations in a compact technical report.',
    ],
    metrics: [
      { label: 'Patients', value: '299' },
      { label: 'Variables', value: '15' },
      { label: 'Model', value: 'LDA' },
    ],
    icon: <HeartPulse className="w-5 h-5" />,
    accent: 'red',
    visual: {
      label: 'Risk',
      nodes: ['pca', 'pls', 'cluster', 'lda'],
      caption: 'Multivariate analysis pipeline for patient risk profiles',
    },
    links: [
      { label: 'Source', href: 'https://github.com/admsit0/heart-risk-analysis', kind: 'github' },
      { label: 'Paper', href: assetPath('project-heart-risk.pdf'), kind: 'report' },
    ],
  },
];

const ProjectVisual = ({ project, featured = false }: { project: Project; featured?: boolean }) => {
  const accent = accentStyles[project.accent];

  return (
    <div className={`relative overflow-hidden rounded-lg border ${accent.border} bg-gradient-to-br ${accent.soft} ${featured ? 'h-64' : 'h-44'} p-5`}>
      <div className="absolute inset-0 opacity-[0.55] [background-image:linear-gradient(to_right,rgba(29,29,31,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(29,29,31,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className={`inline-flex items-center gap-2 rounded-full ${accent.bg} ${accent.text} border ${accent.border} px-3 py-1 text-xs font-semibold`}>
            {project.icon}
            {project.visual.label}
          </div>
          <div className="flex gap-1.5">
            {[0, 1, 2].map((dot) => (
              <span key={dot} className={`h-2 w-2 rounded-full ${dot === 0 ? 'bg-[#ea4335]' : dot === 1 ? 'bg-[#fbbc04]' : 'bg-[#34a853]'}`} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {project.visual.nodes.map((node, index) => (
            <div
              key={node}
              className="rounded-lg border border-white/80 bg-white/70 p-3 shadow-sm backdrop-blur-md"
            >
              <div className={`mb-3 h-1 rounded-full ${index % 2 === 0 ? accent.stripe : 'bg-[#1d1d1f]'}`} />
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{node}</p>
              <div className="mt-3 flex items-end gap-1.5">
                <span className={`h-7 w-2 rounded-full ${accent.stripe}`} />
                <span className="h-4 w-2 rounded-full bg-gray-300" />
                <span className="h-9 w-2 rounded-full bg-gray-900" />
              </div>
            </div>
          ))}
        </div>

        {featured && (
          <p className="max-w-xl text-sm font-medium text-muted-foreground">
            {project.visual.caption}
          </p>
        )}
      </div>
    </div>
  );
};

const LinkIcon = ({ kind }: { kind: ProjectLink['kind'] }) => {
  if (kind === 'github') return <Github className="w-4 h-4" />;
  if (kind === 'report') return <FileText className="w-4 h-4" />;
  return <ArrowUpRight className="w-4 h-4" />;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProject = projects[0];
  const remainingProjects = projects.slice(1);

  const renderLink = (link: ProjectLink, className: string) => {
    if (link.internal) {
      return (
        <Link key={link.label} to={link.href} className={className}>
          <LinkIcon kind={link.kind} />
          {link.label}
        </Link>
      );
    }

    return (
      <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        <LinkIcon kind={link.kind} />
        {link.label}
      </a>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Projects"
          subtitle="Research-led AI, data systems, and statistical analysis projects, ordered by relevance and framed around method, artifact, and measurable outcome."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          <article className="project-card xl:col-span-2 min-h-[540px] flex flex-col overflow-hidden">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
              <div className="flex flex-col">
                <span className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-dark">
                  {featuredProject.eyebrow}
                </span>
                <h3 className="text-3xl font-bold tracking-tight text-foreground">
                  {featuredProject.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-[#188038]">{featuredProject.category}</p>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {featuredProject.description}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {featuredProject.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-lg border border-gray-100 bg-white/70 p-3">
                      <p className="text-xl font-bold text-foreground">{metric.value}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 flex flex-wrap gap-3">
                  {featuredProject.links.map((link) =>
                    renderLink(
                      link,
                      'inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/30 hover:text-primary-dark'
                    )
                  )}
                  <button
                    onClick={() => setSelectedProject(featuredProject)}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                  >
                    Details
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <ProjectVisual project={featuredProject} featured />
            </div>
          </article>

          <div className="project-card min-h-[540px] flex flex-col justify-between overflow-hidden bg-foreground text-background">
            <div>
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
                <Layers3 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Research stack</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Each project is framed as a compact technical case study: the question, the modeling approach, the artifact, and the signal that made the result worth keeping.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {projects.slice(0, 4).map((project) => (
                <button
                  key={project.title}
                  onClick={() => setSelectedProject(project)}
                  className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-left text-sm transition-colors hover:bg-white/10"
                >
                  <span className="font-medium text-white">{project.title.split(':')[0]}</span>
                  <ArrowUpRight className="h-4 w-4 text-white/60" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {remainingProjects.map((project) => {
            const accent = accentStyles[project.accent];

            return (
              <article key={project.title} className="project-card min-h-[520px] flex flex-col overflow-hidden">
                <ProjectVisual project={project} />

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <span className={`text-xs font-semibold uppercase tracking-[0.16em] ${accent.text}`}>
                      {project.eyebrow}
                    </span>
                    <h3 className="mt-2 text-xl font-bold leading-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{project.category}</p>
                  </div>
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${accent.bg} ${accent.text}`}>
                    {project.icon}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-4">
                  {project.description}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-lg border border-gray-100 bg-white/70 p-2">
                      <p className="text-sm font-bold text-foreground">{metric.value}</p>
                      <p className="mt-1 text-[11px] text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="rounded-full border border-gray-200 bg-white/70 px-2.5 py-1 text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5 flex flex-wrap items-center gap-2">
                  {project.links.map((link) =>
                    renderLink(
                      link,
                      'inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:border-primary/30 hover:text-primary-dark'
                    )
                  )}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="ml-auto inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-primary-dark transition-colors hover:bg-blue-50"
                  >
                    Details
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => scrollToSectionWithOffset('contact')}
            className="btn-primary px-6 py-3 rounded-full text-base font-medium"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-lg border border-white/70 bg-white/95 p-5 shadow-2xl backdrop-blur-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className={`text-xs font-semibold uppercase tracking-[0.18em] ${accentStyles[selectedProject.accent].text}`}>
                  {selectedProject.eyebrow}
                </span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                  {selectedProject.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{selectedProject.category}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-gray-100 hover:text-foreground"
                aria-label="Close project details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <ProjectVisual project={selectedProject} featured />

              <div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {selectedProject.description}
                </p>

                <div className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">Highlights</h3>
                  <ul className="mt-4 space-y-3">
                    {selectedProject.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${accentStyles[selectedProject.accent].stripe}`} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {selectedProject.links.map((link) =>
                    renderLink(
                      link,
                      'inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/30 hover:text-primary-dark'
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

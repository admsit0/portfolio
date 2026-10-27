import {
  Brain,
  Database,
  HeartPulse,
  LineChart,
  Network,
  Sparkles,
  Zap,
} from "lucide-react";
import stableDiffusionImage from "@/assets/project-stable-diffusion.jpg";

import reinforcementLearningImage from "@/assets/project-reinforcement-learning.png";

import databasePerformanceImage from "@/assets/project-database-performance.jpg";

import clusteringImage from "@/assets/project-clustering.jpg";

import cardiacHealthImage from "@/assets/cardiac-health.webp";

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export type ProjectLink = {
  label: string;
  href: string;
  kind: "github" | "report" | "article" | "website";
  internal?: boolean;
};

export type Project = {
  title: string;
  eyebrow: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  metrics: { label: string; value: string }[];
  icon: JSX.Element;
  accent: "blue" | "green" | "yellow" | "red" | "purple" | "slate";
  logo?: string;
  visual: {
    label: string;
    nodes: string[];
    caption: string;
    image?: string;
    imageAlt?: string;
  };
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "Regularization in CNNs: Internal Activation Dynamics",
    eyebrow: "01 / Thesis",
    category: "Deep Learning Research",
    description:
      "Final-year thesis studying how seven regularization techniques affect both external accuracy and the internal activation geometry of CNNs across CIFAR-10 and SVHN.",
    technologies: ["Python", "PyTorch", "CNNs", "Entropy", "CIFAR-10", "SVHN"],
    highlights: [
      "Compared L1, L2, Dropout, Early Stopping, Gaussian Noise, Data Augmentation, and Batch Normalization.",
      "Measured internal behavior through Shannon entropy, dispersion ratios, and unique activation states.",
      "Built a reproducible training and analysis pipeline with checkpoint extraction and robustness experiments.",
    ],
    metrics: [
      { label: "Regularizers", value: "7" },
      { label: "Datasets", value: "4" },
      { label: "Focus", value: "Latent" },
    ],
    icon: <Brain className="w-5 h-5" />,
    accent: "blue",
    visual: {
      label: "CNN",
      nodes: ["input", "conv", "entropy", "states"],
      caption: "Regularizer comparison across accuracy and robustness metrics",
      image: assetPath("blog-plots/regularization-radar.png"),
      imageAlt:
        "Radar comparison of regularizers across datasets and robustness axes",
    },
    links: [
      {
        label: "Source",
        href: "https://github.com/admsit0/tfg",
        kind: "github",
      },
      {
        label: "Paper",
        href: assetPath("english/tfgtfmthesisuam.pdf"),
        kind: "report",
      },
      {
        label: "Blog",
        href: "/blog/regularization-in-cnns-internal-activations",
        kind: "article",
        internal: true,
      },
    ],
  },
  {
    title: "Atlas",
    eyebrow: "Live / Learning Platform",
    category: "Interactive Learning & Full-Stack Engineering",
    description:
      "A bilingual learning platform I built to turn AI theory into interactive experiments, worked problems, and guided practice. Now used by 30+ unique users.",
    technologies: ["JavaScript", "Supabase", "PostgreSQL", "Google OAuth"],
    highlights: [
      "157 lessons and 26 interactive laboratories across symbolic AI, deep learning, and generative AI, available in English and Spanish.",
      "Reusable course modules and independently tested simulation engines for reasoning, search, and neural-network experiments.",
      "Google sign-in, private cloud profiles, cross-device progress, and a feedback pipeline backed by Supabase Edge Functions and PostgreSQL.",
    ],
    metrics: [
      { label: "Unique users", value: "30+" },
      { label: "Lessons", value: "157" },
      { label: "Languages", value: "ES / EN" },
    ],
    icon: (
      <img
        src={assetPath("projects/atlas-logo.png")}
        alt=""
        className="h-5 w-5"
      />
    ),
    logo: assetPath("projects/atlas-logo.png"),
    accent: "green",
    visual: {
      label: "Atlas",
      nodes: [],
      caption: "Atlas: training a small image-denoising network in the browser",
      image: assetPath("projects/atlas-learning.png"),
      imageAlt:
        "Atlas image-denoising laboratory with training progress and reconstructed samples",
    },
    links: [
      {
        label: "Visit Atlas",
        href: "https://atlaslearning.es/",
        kind: "website",
      },
      {
        label: "Engineering",
        href: "/portfolio/atlas",
        kind: "article",
        internal: true,
      },
    ],
  },
  {
    title: "Diffusion-based Generative AI for Images",
    eyebrow: "02 / Generative AI",
    category: "Score-based Modeling",
    description:
      "Research-grade diffusion package for training, sampling, conditioning, and evaluating image generation systems with multiple stochastic processes and samplers.",
    technologies: ["Python", "PyTorch", "SDEs", "CUDA", "FID", "Samplers"],
    highlights: [
      "Implemented VE, VP, and Sub-VP diffusion processes with modular sampling strategies.",
      "Supported class-conditional generation, colorization, imputation, and benchmarking utilities.",
      "Evaluated models with FID, Inception Score, bits-per-dimension, and runtime profiling.",
    ],
    metrics: [
      { label: "Processes", value: "3" },
      { label: "Samplers", value: "4" },
      { label: "Reports", value: "PDF" },
    ],
    icon: <Sparkles className="w-5 h-5" />,
    accent: "purple",
    visual: {
      label: "SDE",
      nodes: ["noise", "score", "sample", "metric"],
      caption: "Reverse-time denoising pipeline from noise to samples",
      image: stableDiffusionImage,
      imageAlt: "Generated samples and diffusion experiment output",
    },
    links: [
      {
        label: "Source",
        href: "https://github.com/admsit0/imageGenerativeAI",
        kind: "github",
      },
      {
        label: "Paper",
        href: assetPath("english/project-stable-diffusion.pdf"),
        kind: "report",
      },
      {
        label: "Blog",
        href: "/blog/diffusion-models-from-sdes-to-images",
        kind: "article",
        internal: true,
      },
    ],
  },
  {
    title: "AthenAI Competition Project",
    eyebrow: "03 / Challenge",
    category: "Applied ML Decision Systems",
    description:
      "Scholarship-winning challenge work focused on turning noisy tabular signals into a practical decision pipeline with validation, backtesting, and readable outputs.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Validation",
      "Backtesting",
      "Reporting",
    ],
    highlights: [
      "Built an experiment loop for comparing feature sets, decision rules, and evaluation windows.",
      "Prioritized interpretability and sensitivity checks over black-box confidence.",
      "Translated model outputs into concise, judge-readable technical reasoning.",
    ],
    metrics: [
      { label: "Outcome", value: "Scholarship" },
      { label: "Mode", value: "Challenge" },
      { label: "Focus", value: "Decisions" },
    ],
    icon: <LineChart className="w-5 h-5" />,
    accent: "green",
    visual: {
      label: "AthenAI",
      nodes: ["signals", "model", "risk", "decision"],
      caption:
        "Signal validation and decision ranking under competition constraints",
      image: assetPath("blog-covers/athenai.png"),
      imageAlt: "AthenAI clustering diagnostics from the experimental report",
    },
    links: [
      {
        label: "Paper",
        href: assetPath("english/athenai.pdf"),
        kind: "report",
      },
      {
        label: "Blog",
        href: "/blog/athenai-competition-decision-pipeline",
        kind: "article",
        internal: true,
      },
    ],
  },
  {
    title: "Database Performance Comparison",
    eyebrow: "04 / Data Systems",
    category: "Benchmarking & Profiling",
    description:
      "Benchmarking suite comparing PostgreSQL, MongoDB, SQLite, and DuckDB across CRUD workloads, cache behavior, indexing decisions, and profiling outputs.",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "DuckDB",
      "Python",
      "Memcached",
    ],
    highlights: [
      "Automated data generation, schema setup, CRUD testing, and result export.",
      "Compared primary-key lookups, joins, update workloads, cache behavior, and memory impact.",
      "Produced plots and a modular pipeline for reproducible performance analysis.",
    ],
    metrics: [
      { label: "Databases", value: "4" },
      { label: "Layer", value: "Cache" },
      { label: "Output", value: "Plots" },
    ],
    icon: <Database className="w-5 h-5" />,
    accent: "slate",
    visual: {
      label: "DB",
      nodes: ["crud", "cache", "join", "profile"],
      caption: "Multi-engine workload profiler with cache experiments",
      image: databasePerformanceImage,
      imageAlt: "Database benchmarking charts and profiling output",
    },
    links: [
      {
        label: "Source",
        href: "https://github.com/admsit0/DB-performance-comparison",
        kind: "github",
      },
      {
        label: "Paper",
        href: assetPath("english/project-database-performance.pdf"),
        kind: "report",
      },
    ],
  },
  {
    title: "Reinforcement Learning Analysis",
    eyebrow: "05 / Agents",
    category: "RL Algorithms",
    description:
      "Implementation and analysis of Q-Learning, SARSA, and DQN agents in Gymnasium environments with training curves, policy comparisons, and behavior inspection.",
    technologies: [
      "Python",
      "Gymnasium",
      "TensorFlow",
      "Q-Learning",
      "SARSA",
      "DQN",
    ],
    highlights: [
      "Trained tabular and neural agents on FrozenLake, CartPole, and LunarLander setups.",
      "Visualized reward, episode length, exploration behavior, and convergence signals.",
      "Compared hyperparameter sensitivity across exploration and learning-rate choices.",
    ],
    metrics: [
      { label: "Algorithms", value: "3" },
      { label: "Envs", value: "3" },
      { label: "Solved", value: "CartPole" },
    ],
    icon: <Zap className="w-5 h-5" />,
    accent: "yellow",
    visual: {
      label: "RL",
      nodes: ["state", "policy", "reward", "value"],
      caption: "Agent loop for policy learning and value updates",
      image: reinforcementLearningImage,
      imageAlt: "Reinforcement learning training visualization",
    },
    links: [
      {
        label: "Source",
        href: "https://github.com/admsit0/RL-analysis",
        kind: "github",
      },
      {
        label: "Paper",
        href: assetPath("english/project-reinforcement-learning.pdf"),
        kind: "report",
      },
    ],
  },
  {
    title: "Clustering Techniques Evaluation",
    eyebrow: "06 / Machine Learning",
    category: "Unsupervised Learning",
    description:
      "Comparative evaluation of K-Means, Fuzzy C-Means, Spectral Clustering, and Gaussian Mixtures on synthetic and real-world datasets.",
    technologies: ["Python", "Scikit-learn", "NumPy", "PCA", "GMM", "Spectral"],
    highlights: [
      "Implemented and compared clustering methods across separable and non-linear structures.",
      "Used Silhouette, Dunn Index, Adjusted Rand Index, NMI, accuracy, and F1-score.",
      "Explained cluster interpretability through PCA projections and metric tradeoffs.",
    ],
    metrics: [
      { label: "Methods", value: "4" },
      { label: "Metrics", value: "6" },
      { label: "View", value: "PCA" },
    ],
    icon: <Network className="w-5 h-5" />,
    accent: "blue",
    visual: {
      label: "Clusters",
      nodes: ["k-means", "fuzzy", "spectral", "gmm"],
      caption: "Cluster geometry compared across algorithms and metrics",
      image: clusteringImage,
      imageAlt: "Clustering evaluation plots and projected clusters",
    },
    links: [
      {
        label: "Source",
        href: "https://github.com/admsit0/clustering-techniques-evaluation",
        kind: "github",
      },
      {
        label: "Paper",
        href: assetPath("english/project-clustering.pdf"),
        kind: "report",
      },
    ],
  },
  {
    title: "Cardiac Health Risk Analysis in R",
    eyebrow: "07 / Statistics",
    category: "Clinical Data Analysis",
    description:
      "Statistical analysis of heart failure records with PCA, PLS, clustering, and LDA to study patient profiles, risk factors, and classification behavior.",
    technologies: ["R", "ggplot2", "PCA", "PLS", "LDA", "Clustering"],
    highlights: [
      "Explored a heart failure dataset with 299 observations and multivariate risk factors.",
      "Combined dimensionality reduction, clustering, and discriminant analysis.",
      "Summarized clinical patterns and modeling limitations in a compact technical report.",
    ],
    metrics: [
      { label: "Patients", value: "299" },
      { label: "Variables", value: "15" },
      { label: "Model", value: "LDA" },
    ],
    icon: <HeartPulse className="w-5 h-5" />,
    accent: "red",
    visual: {
      label: "Risk",
      nodes: ["pca", "pls", "cluster", "lda"],
      caption: "Multivariate analysis pipeline for patient risk profiles",
      image: cardiacHealthImage,
      imageAlt: "Cardiac health analysis dashboard",
    },
    links: [
      {
        label: "Source",
        href: "https://github.com/admsit0/heart-risk-analysis",
        kind: "github",
      },
      {
        label: "Paper",
        href: assetPath("english/project-heart-risk.pdf"),
        kind: "report",
      },
    ],
  },
];

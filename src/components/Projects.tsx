
import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Star, Trophy, Award } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Stable Diffusion for Generative AI",
      category: "Deep Learning",
      priority: "flagship",
      rank: 1,
      description: "Implemented and fine-tuned Stable Diffusion models for high-quality image generation with custom prompts and style transfer capabilities.",
      technologies: ["Python", "PyTorch", "Transformers", "CUDA", "Gradio"],
      highlights: [
        "Achieved 40% improvement in image quality metrics",
        "Implemented custom LoRA adapters for style control",
        "Optimized inference speed by 60% using TensorRT"
      ],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/adam/stable-diffusion",
      liveUrl: "https://adam-stable-diffusion.streamlit.app"
    },
    {
      title: "Boiler & Radiant Floor Company Website",
      category: "Full-Stack Development",
      priority: "featured",
      rank: 2,
      description: "Developed a complete web solution for a heating company including service booking, quote calculator, and customer management system.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      highlights: [
        "Increased customer inquiries by 150%",
        "Automated quote generation saving 20 hours/week",
        "Integrated payment processing with 99.9% uptime"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/adam/heating-website",
      liveUrl: "https://heating-company.com"
    },
    {
      title: "Database Performance Comparison",
      category: "Data Engineering",
      priority: "featured",
      rank: 3,
      description: "Comprehensive analysis comparing PostgreSQL, MongoDB, and Redis performance across different workloads and data sizes.",
      technologies: ["Python", "PostgreSQL", "MongoDB", "Redis", "Docker", "Grafana"],
      highlights: [
        "Tested with datasets up to 10M records",
        "Identified 300% performance gains in specific scenarios",
        "Created automated benchmarking framework"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/adam/db-performance",
      liveUrl: "https://adam-db-benchmark.herokuapp.com"
    },
    {
      title: "Clustering Techniques Evaluation",
      category: "Machine Learning",
      priority: "standard",
      rank: 4,
      description: "Comparative study of clustering algorithms (K-means, DBSCAN, Hierarchical) on various datasets with visualization and performance metrics.",
      technologies: ["Python", "Scikit-learn", "Matplotlib", "Seaborn", "Plotly"],
      highlights: [
        "Analyzed 15+ datasets with different characteristics",
        "Developed automated cluster validation pipeline",
        "Created interactive visualization dashboard"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/adam/clustering-analysis",
      liveUrl: "https://adam-clustering.streamlit.app"
    },
    {
      title: "Reinforcement Learning Game AI",
      category: "AI/ML",
      priority: "standard",
      rank: 5,
      description: "Developed RL agents using Deep Q-Networks and Policy Gradient methods to master classic Atari games and custom environments.",
      technologies: ["Python", "OpenAI Gym", "TensorFlow", "Stable-Baselines3", "PyGame"],
      highlights: [
        "Achieved superhuman performance in 3 Atari games",
        "Implemented custom reward shaping techniques",
        "Created comparative analysis of RL algorithms"
      ],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/adam/rl-game-ai",
      liveUrl: "https://adam-rl-demo.herokuapp.com"
    },
    {
      title: "Cardiac Health Risk Analysis",
      category: "Statistical Analysis",
      priority: "standard",
      rank: 6,
      description: "Comprehensive statistical analysis of cardiac health risk factors using R, including predictive modeling and survival analysis.",
      technologies: ["R", "ggplot2", "dplyr", "survival", "randomForest", "Shiny"],
      highlights: [
        "Analyzed dataset of 10,000+ patient records",
        "Built predictive model with 89% accuracy",
        "Created interactive Shiny dashboard for clinicians"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/adam/cardiac-risk-analysis",
      liveUrl: "https://adam-cardiac-dashboard.shinyapps.io/app"
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[activeProject];

  const getRankIcon = (priority) => {
    switch (priority) {
      case 'flagship':
        return <Trophy className="w-5 h-5 text-yellow-500" />;
      case 'featured':
        return <Award className="w-5 h-5 text-blue-500" />;
      default:
        return <Star className="w-5 h-5 text-gray-400" />;
    }
  };

  const getRankBadge = (priority, rank) => {
    const baseClasses = "flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium";
    
    switch (priority) {
      case 'flagship':
        return `${baseClasses} bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg`;
      case 'featured':
        return `${baseClasses} bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-700`;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work spanning machine learning, web development, and data analysis
          </p>
        </div>

        {/* Project Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white rounded-lg p-2 shadow-lg">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeProject ? 'bg-blue-600' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main Project Display */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20 animate-pulse-glow">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Project Image */}
            <div className="relative h-64 lg:h-auto">
              <img 
                src={currentProject.image} 
                alt={currentProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                {currentProject.category}
              </div>
              <div className="absolute top-4 left-4">
                <div className={getRankBadge(currentProject.priority, currentProject.rank)}>
                  {getRankIcon(currentProject.priority)}
                  <span>#{currentProject.rank}</span>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold gradient-text mb-4">
                {currentProject.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {currentProject.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, index) => (
                    <span key={index} className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-800 px-3 py-1 rounded-full text-sm border border-violet-200 hover:scale-105 transition-transform">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                <ul className="space-y-3">
                  {currentProject.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <a 
                  href={currentProject.githubUrl}
                  className="flex items-center space-x-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Github size={18} />
                  <span>View Code</span>
                </a>
                <a 
                  href={currentProject.liveUrl}
                  className="flex items-center space-x-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-violet-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mt-8">
          <button 
            onClick={prevProject}
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform"
          >
            <ChevronLeft size={24} />
            <span>Previous</span>
          </button>
          
          <span className="text-muted-foreground">
            {activeProject + 1} of {projects.length}
          </span>
          
          <button 
            onClick={nextProject}
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform"
          >
            <span>Next</span>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

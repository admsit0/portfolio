
import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import CodeBlock from './CodeBlock';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Stable Diffusion for Generative AI",
      category: "Deep Learning",
      description: "Implemented and fine-tuned Stable Diffusion models for high-quality image generation with custom prompts and style transfer capabilities.",
      technologies: ["Python", "PyTorch", "Transformers", "CUDA", "Gradio"],
      highlights: [
        "Achieved 40% improvement in image quality metrics",
        "Implemented custom LoRA adapters for style control",
        "Optimized inference speed by 60% using TensorRT"
      ],
      codeSnippet: `# Custom Stable Diffusion Pipeline
import torch
from diffusers import StableDiffusionPipeline

class CustomStableDiffusion:
    def __init__(self, model_id="runwayml/stable-diffusion-v1-5"):
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.pipe = StableDiffusionPipeline.from_pretrained(
            model_id, torch_dtype=torch.float16
        ).to(self.device)
    
    def generate_image(self, prompt, negative_prompt="", 
                      num_steps=50, guidance_scale=7.5):
        with torch.autocast("cuda"):
            image = self.pipe(
                prompt=prompt,
                negative_prompt=negative_prompt,
                num_inference_steps=num_steps,
                guidance_scale=guidance_scale
            ).images[0]
        return image`,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/adam/stable-diffusion",
      liveUrl: "https://adam-stable-diffusion.streamlit.app"
    },
    {
      title: "Boiler & Radiant Floor Company Website",
      category: "Full-Stack Development",
      description: "Developed a complete web solution for a heating company including service booking, quote calculator, and customer management system.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      highlights: [
        "Increased customer inquiries by 150%",
        "Automated quote generation saving 20 hours/week",
        "Integrated payment processing with 99.9% uptime"
      ],
      codeSnippet: `// Quote Calculator Component
const QuoteCalculator = () => {
  const [formData, setFormData] = useState({
    squareFootage: 0,
    heatingType: 'radiant',
    insulation: 'standard'
  });

  const calculateQuote = async () => {
    const response = await fetch('/api/calculate-quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    return response.json();
  };

  return (
    <div className="quote-calculator">
      <form onSubmit={handleSubmit}>
        <input 
          type="number"
          value={formData.squareFootage}
          onChange={(e) => setFormData({
            ...formData, 
            squareFootage: e.target.value
          })}
        />
        {/* Additional form fields */}
      </form>
    </div>
  );
};`,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/adam/heating-website",
      liveUrl: "https://heating-company.com"
    },
    {
      title: "Database Performance Comparison",
      category: "Data Engineering",
      description: "Comprehensive analysis comparing PostgreSQL, MongoDB, and Redis performance across different workloads and data sizes.",
      technologies: ["Python", "PostgreSQL", "MongoDB", "Redis", "Docker", "Grafana"],
      highlights: [
        "Tested with datasets up to 10M records",
        "Identified 300% performance gains in specific scenarios",
        "Created automated benchmarking framework"
      ],
      codeSnippet: `# Database Performance Benchmarker
import time
import psycopg2
import pymongo
import redis
from concurrent.futures import ThreadPoolExecutor

class DatabaseBenchmark:
    def __init__(self):
        self.pg_conn = psycopg2.connect(
            host="localhost", database="test_db"
        )
        self.mongo_client = pymongo.MongoClient("mongodb://localhost:27017/")
        self.redis_client = redis.Redis(host='localhost', port=6379)
    
    def benchmark_inserts(self, db_type, data, iterations=1000):
        start_time = time.time()
        
        if db_type == "postgresql":
            cursor = self.pg_conn.cursor()
            for _ in range(iterations):
                cursor.execute("INSERT INTO test_table VALUES (%s, %s)", data)
        elif db_type == "mongodb":
            collection = self.mongo_client.test_db.test_collection
            for _ in range(iterations):
                collection.insert_one({"key": data[0], "value": data[1]})
                
        return time.time() - start_time`,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/adam/db-performance",
      liveUrl: "https://adam-db-benchmark.herokuapp.com"
    },
    {
      title: "Clustering Techniques Evaluation",
      category: "Machine Learning",
      description: "Comparative study of clustering algorithms (K-means, DBSCAN, Hierarchical) on various datasets with visualization and performance metrics.",
      technologies: ["Python", "Scikit-learn", "Matplotlib", "Seaborn", "Plotly"],
      highlights: [
        "Analyzed 15+ datasets with different characteristics",
        "Developed automated cluster validation pipeline",
        "Created interactive visualization dashboard"
      ],
      codeSnippet: `# Clustering Algorithm Comparison
from sklearn.cluster import KMeans, DBSCAN, AgglomerativeClustering
from sklearn.metrics import silhouette_score, adjusted_rand_score
import numpy as np

class ClusteringComparison:
    def __init__(self, data):
        self.data = data
        self.algorithms = {
            'kmeans': KMeans(n_clusters=3, random_state=42),
            'dbscan': DBSCAN(eps=0.5, min_samples=5),
            'hierarchical': AgglomerativeClustering(n_clusters=3)
        }
        
    def evaluate_clustering(self):
        results = {}
        for name, algorithm in self.algorithms.items():
            labels = algorithm.fit_predict(self.data)
            silhouette = silhouette_score(self.data, labels)
            results[name] = {
                'labels': labels,
                'silhouette_score': silhouette,
                'n_clusters': len(np.unique(labels))
            }
        return results`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/adam/clustering-analysis",
      liveUrl: "https://adam-clustering.streamlit.app"
    },
    {
      title: "Reinforcement Learning Game AI",
      category: "AI/ML",
      description: "Developed RL agents using Deep Q-Networks and Policy Gradient methods to master classic Atari games and custom environments.",
      technologies: ["Python", "OpenAI Gym", "TensorFlow", "Stable-Baselines3", "PyGame"],
      highlights: [
        "Achieved superhuman performance in 3 Atari games",
        "Implemented custom reward shaping techniques",
        "Created comparative analysis of RL algorithms"
      ],
      codeSnippet: `# Deep Q-Network Implementation
import tensorflow as tf
from collections import deque
import random
import numpy as np

class DQNAgent:
    def __init__(self, state_size, action_size, learning_rate=0.001):
        self.state_size = state_size
        self.action_size = action_size
        self.memory = deque(maxlen=2000)
        self.epsilon = 1.0
        self.epsilon_decay = 0.995
        self.epsilon_min = 0.01
        self.learning_rate = learning_rate
        self.model = self._build_model()
        
    def _build_model(self):
        model = tf.keras.Sequential([
            tf.keras.layers.Dense(24, input_dim=self.state_size, activation='relu'),
            tf.keras.layers.Dense(24, activation='relu'),
            tf.keras.layers.Dense(self.action_size, activation='linear')
        ])
        model.compile(loss='mse', optimizer=tf.keras.optimizers.Adam(lr=self.learning_rate))
        return model`,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/adam/rl-game-ai",
      liveUrl: "https://adam-rl-demo.herokuapp.com"
    },
    {
      title: "Cardiac Health Risk Analysis",
      category: "Statistical Analysis",
      description: "Comprehensive statistical analysis of cardiac health risk factors using R, including predictive modeling and survival analysis.",
      technologies: ["R", "ggplot2", "dplyr", "survival", "randomForest", "Shiny"],
      highlights: [
        "Analyzed dataset of 10,000+ patient records",
        "Built predictive model with 89% accuracy",
        "Created interactive Shiny dashboard for clinicians"
      ],
      codeSnippet: `# Cardiac Risk Prediction Model in R
library(randomForest)
library(survival)
library(ggplot2)

# Load and preprocess data
cardiac_data <- read.csv("cardiac_health_data.csv")
cardiac_data$risk_level <- factor(cardiac_data$risk_level)

# Build Random Forest model
set.seed(123)
train_idx <- sample(nrow(cardiac_data), 0.8 * nrow(cardiac_data))
train_data <- cardiac_data[train_idx, ]
test_data <- cardiac_data[-train_idx, ]

rf_model <- randomForest(
  risk_level ~ age + cholesterol + blood_pressure + 
              smoking + exercise + family_history,
  data = train_data,
  ntree = 500,
  importance = TRUE
)

# Model evaluation
predictions <- predict(rf_model, test_data)
accuracy <- mean(predictions == test_data$risk_level)
print(paste("Model Accuracy:", round(accuracy * 100, 2), "%"))`,
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

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
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
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Project Image */}
            <div className="relative h-64 lg:h-auto">
              <img 
                src={currentProject.image} 
                alt={currentProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentProject.category}
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                {currentProject.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {currentProject.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {currentProject.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <a 
                  href={currentProject.githubUrl}
                  className="flex items-center space-x-2 bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <Github size={18} />
                  <span>View Code</span>
                </a>
                <a 
                  href={currentProject.liveUrl}
                  className="flex items-center space-x-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Code Snippet Section */}
          <div className="border-t border-slate-200 p-8 lg:p-12">
            <h4 className="font-semibold text-slate-800 mb-4">Code Snippet</h4>
            <CodeBlock code={currentProject.codeSnippet} language="python" />
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mt-8">
          <button 
            onClick={prevProject}
            className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ChevronLeft size={24} />
            <span>Previous</span>
          </button>
          
          <span className="text-slate-500">
            {activeProject + 1} of {projects.length}
          </span>
          
          <button 
            onClick={nextProject}
            className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
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

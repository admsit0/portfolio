import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readingTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'welcome',
    title: 'Welcome to My Blog',
    date: 'September 2026',
    excerpt: 'A space where I share insights about data science, AI engineering, and the intersection of technology and finance.',
    content: `Welcome to my personal blog! Here I'll be sharing my thoughts and experiences in the world of data science, artificial intelligence, and technology consulting.\n\nStay tuned for articles about:\n- Machine learning and deep learning projects\n- Cloud LLM architectures and RAG systems\n- Data analytics and visualization techniques\n- Lessons from the tech consulting world\n- Career insights for aspiring data scientists`,
    readingTime: '2 min',
    category: 'General'
  },
  {
    id: 'placeholder-1',
    title: 'Building LLM-Powered Applications',
    date: 'Coming Soon',
    excerpt: 'Exploring the architecture behind production-grade LLM applications with RAG pipelines.',
    content: 'This article is coming soon. Check back later for insights on building LLM-powered applications with retrieval-augmented generation.',
    readingTime: '5 min',
    category: 'AI Engineering'
  },
  {
    id: 'placeholder-2',
    title: 'From Data Science to Consulting',
    date: 'Coming Soon',
    excerpt: 'Lessons learned transitioning between technical data science roles and technology consulting.',
    content: 'This article is coming soon. I\'ll share my experience transitioning between hands-on data science work and strategic technology consulting.',
    readingTime: '4 min',
    category: 'Career'
  }
];

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  const togglePost = (id: string) => {
    if (expandedPost === id) {
      setExpandedPost(null);
    } else {
      setExpandedPost(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto w-full">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Portfolio
          </Link>
        </div>

        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">Blog</h1>
          <p className="text-xl text-gray-600">Thoughts on data science, AI engineering, and tech.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col ${expandedPost === post.id ? 'md:col-span-2' : ''}`}
              onClick={() => togglePost(post.id)}
            >
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3 font-medium">
                <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md text-gray-700">
                  <Tag className="w-3 h-3" />
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readingTime}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
              
              {!expandedPost || expandedPost !== post.id ? (
                <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
              ) : (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="prose prose-gray max-w-none whitespace-pre-line text-gray-700 leading-relaxed">
                    {post.content}
                  </div>
                  <div className="mt-6 text-sm text-[#0071e3] font-medium inline-flex items-center">
                    Close article
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;

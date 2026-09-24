import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation />
      <main className="flex-1 w-full pt-32 pb-20 flex flex-col items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm border border-blue-100">
            <PenTool className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Crafting this space
          </h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            I am currently building this section. Check back soon for articles on Artificial Intelligence, 
            Data Science, Cloud Architecture, and my journey in technology consulting.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors font-medium"
          >
            &larr; Back to Portfolio
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

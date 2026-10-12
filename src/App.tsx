import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import SmoothScroll from './components/SmoothScroll';
import Index from "./pages/index";
import { lazy, Suspense } from 'react';
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const Blog = lazy(() => import('./pages/Blog'));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <SmoothScroll>
          <Suspense fallback={<main className="flex min-h-screen items-center justify-center" role="status">Loading article...</main>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </SmoothScroll>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

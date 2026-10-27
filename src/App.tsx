import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import SmoothScroll from "./components/SmoothScroll";
import Index from "./pages/index";
import { lazy, Suspense, useEffect } from "react";
import NotFound from "./pages/NotFound";
import PersonalLayout from "./components/PersonalLayout";
import LanguageProvider from "./i18n/LanguageProvider";
import { useLanguage } from "./i18n/useLanguage";
import RouteBoundary from "./components/RouteBoundary";

const queryClient = new QueryClient();
const Blog = lazy(() => import("./pages/Blog"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const ProjectIndex = lazy(() => import("./pages/ProjectIndex"));
const Project = lazy(() => import("./pages/Project"));
const Atlas = lazy(() => import("./pages/Atlas"));
const About = lazy(() => import("./pages/About"));
const Gdg = lazy(() => import("./pages/Gdg"));
const AtlasTechnical = lazy(() => import("./pages/AtlasTechnical"));
const Loading = () => {
  const { t } = useLanguage();
  return (
    <PersonalLayout title={t("Loading")}>
      <div
        className="site-width min-h-[60vh] flex items-center justify-center"
        role="status"
      >
        {t("Loading...")}
      </div>
    </PersonalLayout>
  );
};

const LegacyHashLinks = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.hash.startsWith("#/"))
      navigate(window.location.hash.slice(1), { replace: true });
  }, [navigate]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <BrowserRouter>
          <LegacyHashLinks />
          <SmoothScroll>
            <RouteBoundary>
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<Blog />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/projects" element={<ProjectIndex />} />
                  <Route
                    path="/projects/atlas"
                    element={<Navigate to="/atlas" replace />}
                  />
                  <Route path="/projects/:slug" element={<Project />} />
                  <Route path="/atlas" element={<Atlas />} />
                  <Route path="/gdg" element={<Gdg />} />
                  <Route path="/portfolio/atlas" element={<AtlasTechnical />} />
                  <Route path="/portfolio/:slug" element={<Project />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </RouteBoundary>
          </SmoothScroll>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

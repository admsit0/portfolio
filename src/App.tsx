import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import SmoothScroll from "./components/SmoothScroll";
import Index from "./pages/index";
import { Suspense, useEffect } from "react";
import NotFound from "./pages/NotFound";
import PersonalLayout from "./components/PersonalLayout";
import LanguageProvider from "./i18n/LanguageProvider";
import { useLanguage } from "./i18n/useLanguage";
import type { Language } from "./i18n/languages";
import RouteBoundary from "./components/RouteBoundary";

import {
  About,
  Atlas,
  AtlasTechnical,
  Blog,
  Gdg,
  Portfolio,
  Project,
  ProjectIndex,
} from "./pages/lazyPages";
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

// Routes and shared shell, without a router: the browser wraps them in
// BrowserRouter (App below), the prerender in StaticRouter (entry-server).
export const AppRoutes = () => (
  <>
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
  </>
);

const App = ({ initialLanguage }: { initialLanguage: Language }) => (
  <LanguageProvider initialLanguage={initialLanguage}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </LanguageProvider>
);

export default App;

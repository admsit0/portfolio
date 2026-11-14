import { matchPath } from "react-router-dom";
import { lazyRoute } from "@/lib/lazyRoute";

export const Blog = lazyRoute(() => import("./Blog"));
export const Portfolio = lazyRoute(() => import("./Portfolio"));
export const ProjectIndex = lazyRoute(() => import("./ProjectIndex"));
export const Project = lazyRoute(() => import("./Project"));
export const Atlas = lazyRoute(() => import("./Atlas"));
export const About = lazyRoute(() => import("./About"));
export const Gdg = lazyRoute(() => import("./Gdg"));
export const AtlasTechnical = lazyRoute(() => import("./AtlasTechnical"));

// Must mirror the lazy routes in App.tsx (more specific paths first).
const lazyRoutes: [string, { preload: () => Promise<unknown> }][] = [
  ["/blog", Blog],
  ["/blog/:slug", Blog],
  ["/portfolio", Portfolio],
  ["/projects", ProjectIndex],
  ["/projects/:slug", Project],
  ["/atlas", Atlas],
  ["/gdg", Gdg],
  ["/portfolio/atlas", AtlasTechnical],
  ["/portfolio/:slug", Project],
  ["/about", About],
];

export function preloadRoute(pathname: string) {
  const match = lazyRoutes.find(([path]) => matchPath(path, pathname));
  return match ? match[1].preload() : Promise.resolve();
}

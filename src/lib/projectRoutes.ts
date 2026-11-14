import { projects, type Project } from "@/data/projectCatalog";
import type { Language } from "@/i18n/context";

const slugs = [
  "regularization",
  "atlas",
  "diffusion",
  "athenai",
  "database-performance",
  "reinforcement-learning",
  "clustering",
  "heart-risk",
];
export const projectSlug = (project: Project) =>
  slugs[projects.findIndex((item) => item.title === project.title)];
export const projectBySlug = (slug: string) =>
  projects.find((project) => projectSlug(project) === slug);
export const projectGroup = (project: Project) =>
  projectSlug(project) === "atlas"
    ? "Products"
    : ["regularization", "diffusion"].includes(projectSlug(project))
      ? "Research"
      : "Data & ML";
export const projectImage = (project: Project, language: Language = "en") => {
  const slug = projectSlug(project);
  // Atlas captures exist in English and Spanish; Italian uses the English one.
  if (slug === "atlas")
    return `/projects/atlas-denoising-${language === "es" ? "es" : "en"}.jpg`;
  if (slug === "diffusion")
    return `${import.meta.env.BASE_URL}blog-plots/diffusion-denoising-samples.png`;
  if (slug === "athenai")
    return `${import.meta.env.BASE_URL}blog-plots/athenai-clusters.png`;
  return project.visual.image;
};

import { useLanguage } from "@/i18n/useLanguage";
import {
  projects,
  type Project,
  type ProjectLink,
} from "@/data/projectCatalog";
import { useRef, useState, type MouseEvent } from "react";
import { ArrowUpRight, FileText, Github } from "lucide-react";
import { projectImage } from "@/lib/projectRoutes";
import { Link } from "react-router-dom";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";
import { SectionHeader } from "./ui/section-header";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
const accentStyles = {
  blue: {
    text: "text-[#0071e3]",
    bg: "bg-[#e8f2ff]",
    border: "border-[#0071e3]/20",
    stripe: "bg-[#0071e3]",
    soft: "from-[#f6fbff] via-white to-[#e8f2ff]",
  },
  green: {
    text: "text-[#188038]",
    bg: "bg-[#eaf7ef]",
    border: "border-[#34a853]/20",
    stripe: "bg-[#34a853]",
    soft: "from-[#f7fff9] via-white to-[#eaf7ef]",
  },
  yellow: {
    text: "text-[#b06000]",
    bg: "bg-[#fff7df]",
    border: "border-[#fbbc04]/30",
    stripe: "bg-[#fbbc04]",
    soft: "from-[#fffdf5] via-white to-[#fff2c6]",
  },
  red: {
    text: "text-[#c5221f]",
    bg: "bg-[#fdebea]",
    border: "border-[#ea4335]/20",
    stripe: "bg-[#ea4335]",
    soft: "from-[#fff7f6] via-white to-[#fdebea]",
  },
  purple: {
    text: "text-[#7b2ff7]",
    bg: "bg-[#f0e9ff]",
    border: "border-[#7b2ff7]/20",
    stripe: "bg-[#7b2ff7]",
    soft: "from-[#fbf9ff] via-white to-[#f0e9ff]",
  },
  slate: {
    text: "text-[#344054]",
    bg: "bg-[#f2f4f7]",
    border: "border-[#98a2b3]/25",
    stripe: "bg-[#344054]",
    soft: "from-[#fbfcfd] via-white to-[#eef2f6]",
  },
} satisfies Record<Project["accent"], Record<string, string>>;
const ProjectVisual = ({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) => {
  const { t, language } = useLanguage();
  return (
    <figure
      className={`technical-project-visual ${featured ? "featured" : ""}`}
    >
      <img
        src={projectImage(project, language)}
        alt={t(project.visual.imageAlt ?? project.visual.caption)}
        loading="lazy"
        decoding="async"
      />
      <figcaption>{t(project.visual.caption)}</figcaption>
    </figure>
  );
};
const LinkIcon = ({ kind }: { kind: ProjectLink["kind"] }) => {
  if (kind === "github") return <Github className="w-4 h-4" />;
  if (kind === "report") return <FileText className="w-4 h-4" />;
  return <ArrowUpRight className="w-4 h-4" />;
};
const Projects = () => {
  const { t } = useLanguage();
  const scrollToSection = useSectionNavigation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectTrigger = useRef<HTMLButtonElement | null>(null);
  const featuredProject = projects[0];
  const liveProject = projects[1];
  const remainingProjects = projects.slice(2);
  const openProject = (
    project: Project,
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    projectTrigger.current = event.currentTarget;
    setSelectedProject(project);
  };
  const handleLiquidMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mouse-x",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--mouse-y",
      `${event.clientY - rect.top}px`,
    );
  };
  const renderLink = (link: ProjectLink, className: string) => {
    if (link.internal) {
      return (
        <Link key={t(link.label)} to={link.href} className={className}>
          <LinkIcon kind={link.kind} />
          {t(link.label)}
        </Link>
      );
    }
    return (
      <a
        key={t(link.label)}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <LinkIcon kind={link.kind} />
        {t(link.label)}
      </a>
    );
  };
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={t("Featured Projects")}
          subtitle={t(
            "Deep learning research, interactive learning, and data systems. Built, evaluated, and shared.",
          )}
        />

        <div className="grid gap-6 xl:grid-cols-3">
          <article
            className="liquid-project-card xl:col-span-2 min-h-[540px] flex flex-col overflow-hidden"
            onMouseMove={handleLiquidMove}
          >
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
              <div className="flex flex-col">
                <span className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-dark">
                  {t(featuredProject.eyebrow)}
                </span>
                <h3 className="text-3xl font-bold tracking-tight text-foreground">
                  {t(featuredProject.title)}
                </h3>
                <p className="mt-2 text-sm font-semibold text-[#188038]">
                  {t(featuredProject.category)}
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {t(featuredProject.description)}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {featuredProject.metrics.map((metric) => (
                    <div
                      key={t(metric.label)}
                      className="rounded-lg border border-[#e4e4e7] bg-white/80 p-3"
                    >
                      <p className="break-words text-xl font-bold leading-tight text-foreground">
                        {t(metric.value)}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {t(metric.label)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={t(tech)}
                      className="tech-chip border-blue-100 bg-blue-50 text-blue-700"
                    >
                      {t(tech)}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 flex flex-wrap gap-3">
                  {featuredProject.links.map((link) =>
                    renderLink(
                      link,
                      "inline-flex items-center gap-2 rounded-full border border-[#e4e4e7] bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-[#81b6ff] hover:text-primary-dark",
                    ),
                  )}
                  <button
                    onClick={(event) => openProject(featuredProject, event)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#3c83f6] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#2d6edf] hover:shadow-[0_0_0_0.5px_#0544a9,inset_0_-1px_0_0_#022c70,inset_0_0.5px_0_0_#81b6ff]"
                  >
                    {t("Details")}
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <ProjectVisual project={featuredProject} featured />
            </div>
          </article>

          <div
            className="liquid-project-card flex min-h-[540px] flex-col text-foreground"
            onMouseMove={handleLiquidMove}
          >
            <div className="mb-5 flex items-center gap-3">
              <img
                src={liveProject.logo}
                alt={t("Atlas logo")}
                width={48}
                height={48}
                className="h-12 w-12 shrink-0"
              />
              <div className="min-w-0">
                <span className="text-xs font-semibold uppercase text-[#188038]">
                  {t(liveProject.eyebrow)}
                </span>
                <h3 className="mt-1 text-2xl font-bold">
                  {t(liveProject.title)}
                </h3>
              </div>
            </div>
            <ProjectVisual project={liveProject} />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {t(liveProject.description)}
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {liveProject.metrics.map((metric) => (
                <div
                  key={t(metric.label)}
                  className="rounded-lg border border-[#e4e4e7] bg-white/75 p-2.5"
                >
                  <p className="text-lg font-bold leading-tight">
                    {t(metric.value)}
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    {t(metric.label)}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {liveProject.technologies.map((tech) => (
                <span
                  key={t(tech)}
                  className="tech-chip border-gray-200 bg-white/70 text-muted-foreground"
                >
                  {t(tech)}
                </span>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
              {liveProject.links.map((link) =>
                renderLink(
                  link,
                  "inline-flex items-center gap-2 rounded-full bg-[#0071e3] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0062c4]",
                ),
              )}
              <button
                onClick={(event) => openProject(liveProject, event)}
                className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-primary-dark hover:bg-blue-50"
              >
                {t("Details")}
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:auto-rows-fr md:grid-cols-2 xl:grid-cols-3">
          {remainingProjects.map((project) => {
            const accent = accentStyles[project.accent];
            return (
              <article
                key={t(project.title)}
                className="liquid-project-card flex min-h-[620px] flex-col overflow-hidden"
                onMouseMove={handleLiquidMove}
              >
                <ProjectVisual project={project} />

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <span
                      className={`text-xs font-semibold uppercase tracking-[0.16em] ${accent.text}`}
                    >
                      {t(project.eyebrow)}
                    </span>
                    <h3 className="mt-2 text-xl font-bold leading-tight text-foreground">
                      {t(project.title)}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {t(project.category)}
                    </p>
                  </div>
                  <div
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${accent.bg} ${accent.text}`}
                  >
                    {project.icon}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-4">
                  {t(project.description)}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {project.metrics.map((metric) => (
                    <div
                      key={t(metric.label)}
                      className="rounded-lg border border-[#e4e4e7] bg-white/75 p-2"
                    >
                      <p className="break-words text-sm font-bold leading-tight text-foreground">
                        {t(metric.value)}
                      </p>
                      <p className="mt-1 text-[11px] text-muted-foreground">
                        {t(metric.label)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={t(tech)}
                      className="tech-chip border-gray-200 bg-white/70 text-muted-foreground"
                    >
                      {t(tech)}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5 flex flex-wrap items-center gap-2">
                  {project.links.map((link) =>
                    renderLink(
                      link,
                      "inline-flex items-center gap-1.5 rounded-full border border-[#e4e4e7] bg-white px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-[#81b6ff] hover:text-primary-dark",
                    ),
                  )}
                  <button
                    onClick={(event) => openProject(project, event)}
                    className="ml-auto inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-primary-dark transition-colors hover:bg-blue-50"
                  >
                    {t("Details")}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => scrollToSection("contact")}
            className="btn-primary px-6 py-3 rounded-full text-base font-medium"
          >
            {t("Get In Touch")}
          </button>
        </div>
      </div>

      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
      >
        {selectedProject && (
          <DialogContent
            data-lenis-prevent
            className="max-h-[90dvh] w-[calc(100%_-_1.5rem)] max-w-5xl overflow-y-auto overscroll-contain rounded-lg border-white/70 bg-white/95 p-5 shadow-2xl backdrop-blur-2xl sm:p-8"
            onCloseAutoFocus={(event) => {
              event.preventDefault();
              projectTrigger.current?.focus();
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span
                  className={`text-xs font-semibold uppercase tracking-[0.18em] ${accentStyles[selectedProject.accent].text}`}
                >
                  {t(selectedProject.eyebrow)}
                </span>
                <DialogTitle className="mt-2 pr-7 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                  {t(selectedProject.title)}
                </DialogTitle>
                <DialogDescription className="mt-2 text-sm font-medium text-muted-foreground">
                  {t(selectedProject.category)}
                </DialogDescription>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <ProjectVisual project={selectedProject} featured />

              <div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {t(selectedProject.description)}
                </p>

                <div className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                    {t("Highlights")}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {selectedProject.highlights.map((highlight) => (
                      <li
                        key={t(highlight)}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${accentStyles[selectedProject.accent].stripe}`}
                        />
                        {t(highlight)}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={t(tech)}
                      className="tech-chip border-gray-200 bg-white text-muted-foreground"
                    >
                      {t(tech)}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {selectedProject.links.map((link) =>
                    renderLink(
                      link,
                      "inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/30 hover:text-primary-dark",
                    ),
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};
export default Projects;

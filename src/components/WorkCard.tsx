import { ArrowUpRight, FileText, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { type Project, type ProjectLink } from "@/data/projectCatalog";
import { projectGroup, projectImage, projectSlug } from "@/lib/projectRoutes";
import { useLanguage } from "@/i18n/useLanguage";
export function ProjectResource({ link }: { link: ProjectLink }) {
  const { t } = useLanguage();
  const contents = (
    <>
      {link.kind === "github" ? (
        <Github size={15} />
      ) : link.kind === "report" ? (
        <FileText size={15} />
      ) : (
        <ArrowUpRight size={15} />
      )}{" "}
      {t(link.label)}
    </>
  );
  return link.internal ? (
    <Link className="resource-link" to={link.href}>
      {contents}
    </Link>
  ) : (
    <a
      className="resource-link"
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {contents}
    </a>
  );
}
export default function WorkCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const { t, language } = useLanguage();
  const slug = projectSlug(project);
  const route = `/portfolio/${slug}`;
  return (
    <article
      className={`work-card ${large ? "work-card-large" : ""} ${slug === "atlas" ? "product-card" : ""}`}
    >
      <Link
        className={`work-image ${["regularization", "diffusion", "athenai"].includes(slug) ? "technical-image" : ""}`}
        to={route}
        aria-label={t("Explore", "Ver") + " " + t(project.title)}
      >
        <img
          src={projectImage(project, language)}
          alt={t(project.visual.imageAlt ?? project.visual.caption)}
          loading="lazy"
          decoding="async"
        />
        <span className="image-arrow">
          <ArrowUpRight size={21} />
        </span>
      </Link>
      <div className="work-card-body">
        <div className="work-meta">
          <span>{t(projectGroup(project))}</span>
          <span>
            {t(
              slug === "atlas"
                ? "Live product"
                : (project.eyebrow.split("/")[1]?.trim() ?? "Research"),
            )}
          </span>
        </div>
        <div className="work-title">
          {project.logo && (
            <img src={project.logo} alt="" width={34} height={34} />
          )}
          <h3>
            <Link to={route}>{t(project.title)}</Link>
          </h3>
        </div>
        <p>{t(project.description)}</p>
        <div className="work-metrics">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{t(metric.value)}</strong>
              <span>{t(metric.label)}</span>
            </div>
          ))}
        </div>
        <div className="work-resources">
          {project.links.map((link) => (
            <ProjectResource key={link.label} link={link} />
          ))}
          <Link className="case-link" to={route}>
            {t("Case study")}
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PersonalLayout from "@/components/PersonalLayout";
import { ProjectResource } from "@/components/WorkCard";
import { projectBySlug, projectGroup, projectImage } from "@/lib/projectRoutes";
import { useLanguage } from "@/i18n/useLanguage";
import NotFound from "./NotFound";
export default function Project() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const project = projectBySlug(slug ?? "");
  if (!project) return <NotFound />;
  return (
    <PersonalLayout title={t(project.title)}>
      <section className="site-width project-detail-intro">
        <Link className="text-link back-link" to="/portfolio">
          <ArrowLeft size={16} />
          {t("Technical portfolio")}
        </Link>
        <span className="eyebrow">
          {t(projectGroup(project))} / {t(project.category)}
        </span>
        <h1>{t(project.title)}</h1>
        <p>{t(project.description)}</p>
        <div className="detail-resources">
          {project.links.map((link) => (
            <ProjectResource key={link.label} link={link} />
          ))}
        </div>
      </section>
      <section className="site-width case-content">
        <div className="case-metrics">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{t(metric.value)}</strong>
              <span>{t(metric.label)}</span>
            </div>
          ))}
        </div>
        <figure className="case-figure">
          <img
            src={projectImage(project)}
            alt={t(project.visual.imageAlt ?? project.visual.caption)}
          />
          <figcaption>{t(project.visual.caption)}</figcaption>
        </figure>
        <div className="case-notes">
          <h2>{t("The work behind it.")}</h2>
          <div>
            {project.highlights.map((highlight, i) => (
              <p key={highlight}>
                <span>0{i + 1}</span>
                {t(highlight)}
              </p>
            ))}
          </div>
        </div>
        <div className="case-stack">
          <span className="eyebrow">{t("Tools & methods")}</span>
          <div>
            {project.technologies.map((tech) => (
              <span className="tech-chip" key={tech}>
                {t(tech)}
              </span>
            ))}
          </div>
        </div>
        <div className="case-bottom">
          <Link className="solid-link" to="/portfolio">
            {t("Technical portfolio")}
            <ArrowUpRight size={18} />
          </Link>
          <a className="text-link" href="mailto:adam.maltoni@gmail.com">
            {t("Let's talk about it")}
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </PersonalLayout>
  );
}

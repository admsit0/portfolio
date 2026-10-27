import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PersonalLayout from "@/components/PersonalLayout";
import WorkCard from "@/components/WorkCard";
import { projects } from "@/data/projectCatalog";
import { projectGroup } from "@/lib/projectRoutes";
import { useLanguage } from "@/i18n/useLanguage";
export default function ProjectIndex() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("All");
  const visible = projects.filter(
    (project) => filter === "All" || projectGroup(project) === filter,
  );
  return (
    <PersonalLayout title={t("Projects")}>
      <section className="site-width page-intro">
        <span className="eyebrow">{t("Research / Products / Applied ML")}</span>
        <h1>
          {t("Things I've built")}
          <span>.</span>
        </h1>
        <p>
          {t(
            "Some start with a research question. Others start with a problem I want to solve.",
          )}
        </p>
        <Link className="text-link" to="/portfolio">
          {t("Full technical portfolio")}
          <ArrowUpRight size={17} />
        </Link>
      </section>
      <section className="site-width project-index">
        <div className="project-toolbar">
          <div
            className="filter-segments"
            role="group"
            aria-label={t("Filter projects")}
          >
            {["All", "Research", "Products", "Data & ML"].map((label) => (
              <button
                key={label}
                aria-pressed={filter === label}
                onClick={() => setFilter(label)}
              >
                {t(label)}
              </button>
            ))}
          </div>
          <span className="eyebrow">
            {visible.length} {t("projects")}
          </span>
        </div>
        <div className="project-index-grid">
          {visible.map((project) => (
            <WorkCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </PersonalLayout>
  );
}

import { ArrowDown, Download } from "lucide-react";
import PersonalLayout from "@/components/PersonalLayout";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CurrentResearch from "@/components/CurrentResearch";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";
import { useLanguage } from "@/i18n/useLanguage";
export default function Portfolio() {
  const scroll = useSectionNavigation();
  const { t } = useLanguage();
  return (
    <PersonalLayout title={t("Technical portfolio")}>
      <section className="site-width page-intro">
        <span className="eyebrow">
          {t("AI Engineering / Data Science / Research")}
        </span>
        <h1>
          {t("The technical portfolio")}
          <span>.</span>
        </h1>
        <p>
          {t(
            "Experiments, production-oriented systems, and the engineering behind them.",
          )}
        </p>
        <div className="intro-actions">
          <a className="solid-link" href="/cv-adam-maltoni.pdf" download>
            <Download size={17} />
            {t("Download CV")}
          </a>
        </div>
        <div className="portfolio-jumps">
          {[
            ["research", "Current research"],
            ["projects", "Projects"],
            ["experience", "Experience & education"],
            ["about", "Skills & awards"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <button key={id} onClick={() => scroll(id)}>
              {t(label)}
              <ArrowDown size={14} />
            </button>
          ))}
        </div>
      </section>
      <div className="technical-content">
        <CurrentResearch />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </div>
    </PersonalLayout>
  );
}

import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/useLanguage";
import { personalContent } from "@/content/personal";
import gdgLogo from "@/assets/gdg-logo.webp";

export default function PersonalHomeContent() {
  const { language, t } = useLanguage();
  return (
    <>
      <section id="personal-intro" className="site-width person-introduction">
        <div>
          <span className="eyebrow">
            {t("A little about me", "Un poco sobre mí")}
          </span>
          <h2>{t("More than a job title.", "Más que una profesión.")}</h2>
        </div>
        <div className="person-introduction-copy">
          <p>{personalContent.introduction[language]}</p>
          <p>
            {t(
              "I am based in Madrid, studying for an MSc in Artificial Intelligence at UAM. Engineering is my background; curiosity tends to decide where I go next.",
              "Estoy en Madrid y curso el Máster en Inteligencia Artificial de la UAM. La ingeniería es mi formación; la curiosidad suele decidir qué viene después.",
            )}
          </p>
        </div>
      </section>

      <section
        className="site-width person-interests"
        aria-labelledby="interests-title"
      >
        <div className="person-section-heading">
          <span className="eyebrow">
            {t("What interests me", "Lo que me interesa")}
          </span>
          <h2 id="interests-title">
            {t(
              "Not everything starts at a keyboard.",
              "No todo empieza delante de un teclado.",
            )}
          </h2>
        </div>
        <div className="person-interest-list">
          {personalContent.interests.map((interest) => (
            <div className="person-interest" key={interest.id}>
              <h3>{interest.title[language]}</h3>
              <p>{interest.body[language]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="person-direction-band">
        <div className="site-width person-direction">
          <span className="eyebrow">
            {t("Looking ahead", "Mirando hacia delante")}
          </span>
          <p>{personalContent.direction[language]}</p>
          <Link className="text-link" to="/about">
            {t("A few more personal notes", "Algunas notas más personales")}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <section id="selected-work" className="site-width person-work">
        <div className="person-work-heading">
          <span className="eyebrow">
            {t(
              "Some of that, in practice",
              "Un poco de todo eso, en la práctica",
            )}
          </span>
          <h2>{t("Things I am part of.", "Cosas de las que formo parte.")}</h2>
        </div>
        <div className="person-work-links">
          <Link className="person-work-link" to="/atlas">
            <img src="/projects/atlas-logo.png" alt="" width={34} height={34} />
            <div>
              <h3>Atlas</h3>
              <p>
                {t(
                  "A place I am building to learn AI by experimenting, not just reading.",
                  "Un lugar que estoy construyendo para aprender IA experimentando, no solo leyendo.",
                )}
              </p>
            </div>
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
          <Link className="person-work-link" to="/gdg">
            <img src={gdgLogo} alt="" width={34} height={34} />
            <div>
              <h3>GDG UAM</h3>
              <p>
                {t(
                  "A community I co-founded and now lead, learning and building with others.",
                  "Una comunidad que cofundé y ahora presido, para aprender y construir con otros.",
                )}
              </p>
            </div>
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>
        <div className="person-technical-link">
          <div>
            <h3>{t("The technical side", "La parte técnica")}</h3>
            <p>
              {t(
                "Projects, research, results, reports, and professional experience.",
                "Proyectos, investigación, resultados, informes y experiencia profesional.",
              )}
            </p>
          </div>
          <Link className="solid-link" to="/portfolio">
            {t("Technical portfolio")}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

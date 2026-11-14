import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/useLanguage";
import { localeFor } from "@/i18n/context";
import { personalContent } from "@/content/personal";

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
          <p>{personalContent.context[language]}</p>
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

      {(personalContent.photos.length > 0 || import.meta.env.DEV) && (
        <section
          className="site-width person-photos"
          aria-labelledby="photos-title"
        >
          <span className="eyebrow" id="photos-title">
            {t("Workshops and events", "Talleres y eventos")}
          </span>
          <div className="photo-grid">
            {personalContent.photos.length > 0
              ? personalContent.photos.map((photo) => (
                  <figure key={photo.src}>
                    <img
                      src={photo.src}
                      alt={photo.alt[language]}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption>{photo.caption[language]}</figcaption>
                  </figure>
                ))
              : import.meta.env.DEV &&
                [1, 2, 3].map((slot) => (
                  <div className="photo-placeholder" key={slot}>
                    {`Photo ${slot} · public/photos/ · personal.ts → photos`}
                  </div>
                ))}
          </div>
        </section>
      )}

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

      <section
        id="now"
        className="site-width person-work"
        aria-labelledby="now-title"
      >
        <div className="person-work-heading">
          <span className="eyebrow">{t("Right now", "Ahora mismo")}</span>
          <h2 id="now-title">{t("What I am up to.", "En qué estoy.")}</h2>
          <p className="now-updated">
            {t("Updated", "Actualizado el")}{" "}
            <time dateTime={personalContent.now.updated}>
              {new Intl.DateTimeFormat(localeFor(language), {
                day: "numeric",
                month: "long",
                year: "numeric",
                timeZone: "UTC",
              }).format(new Date(personalContent.now.updated))}
            </time>
          </p>
        </div>
        <ul className="now-list">
          {personalContent.now.items.map((item) => (
            <li className="now-row" data-facet={item.facet} key={item.id}>
              <span className="now-label">{item.label[language]}</span>
              <p>
                {"cite" in item && item.cite
                  ? item.text[language]
                      .split(item.cite)
                      .flatMap((part, index) =>
                        index === 0
                          ? [part]
                          : [<cite key={index}>{item.cite}</cite>, part],
                      )
                  : item.text[language]}
                {"link" in item && item.link && (
                  <>
                    {item.link.href.startsWith("/") ? (
                      <Link className="now-link" to={item.link.href}>
                        {item.link[language]}
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </Link>
                    ) : (
                      <a
                        className="now-link"
                        href={item.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.link[language]}
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    )}
                  </>
                )}
              </p>
            </li>
          ))}
        </ul>
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

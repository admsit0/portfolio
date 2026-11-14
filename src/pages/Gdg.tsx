import { useEffect, useState } from "react";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import PersonalLayout from "@/components/PersonalLayout";
import { useLanguage } from "@/i18n/useLanguage";
import { gdgEvents, gdgPhoto } from "@/content/gdg";
import gdgLogo from "@/assets/gdg-logo.webp";
import { eventsByStatus } from "@/lib/eventStatus";

export default function Gdg() {
  const { language, t } = useLanguage();
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const [now, setNow] = useState(() => new Date());
  // Re-check every minute so an open tab moves events to "past" on time.
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(timer);
  }, []);
  const visibleEvents = eventsByStatus(gdgEvents, tab, now);
  return (
    <PersonalLayout title="GDG on Campus UAM">
      <section className="site-width page-intro gdg-intro">
        <div className="atlas-identity">
          <img src={gdgLogo} alt="" />
          <span className="eyebrow">
            {t(
              "Co-founder. Treasurer. Now president.",
              "Cofundador. Tesorero. Ahora presidente.",
            )}
          </span>
        </div>
        <h1>
          GDG on Campus UAM<span>.</span>
        </h1>
        <p>
          {t(
            "A place to meet people who want to build things, and actually build them together.",
            "Un lugar donde conocer a gente con ganas de construir cosas y ponerse a ello juntos.",
          )}
        </p>
        <div className="intro-actions">
          <a
            className="solid-link"
            href="https://gdguam.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            gdguam.es
            <ArrowUpRight size={18} />
          </a>
          <a
            className="text-link"
            href="https://www.linkedin.com/company/gdg-uam/posts"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
      <figure className="site-width community-photo">
        <img
          src={gdgPhoto}
          alt={t(
            "Second edition of the GDG UAM Git and GitHub workshop",
            "Segunda edición del taller de Git y GitHub del GDG UAM",
          )}
        />
        <figcaption>
          <a
            href="https://gdguam.es/blog/introduccion-a-git-github-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(
              "Git and GitHub workshop · September 2026 · GDG UAM",
              "Taller de Git y GitHub · Septiembre 2026 · GDG UAM",
            )}
            <ArrowUpRight size={13} />
          </a>
        </figcaption>
      </figure>
      <section className="site-width">
        <div className="atlas-numbers">
          <div>
            <strong>10+</strong>
            <span>{t("Events led", "Eventos liderados")}</span>
          </div>
          <div>
            <strong>250+</strong>
            <span>{t("Attendees", "Asistentes")}</span>
          </div>
          <div>
            <strong>275</strong>
            <span>{t("Community members", "Miembros de la comunidad")}</span>
          </div>
          <div>
            <strong>6–13</strong>
            <span>
              {t(
                "People in the teams I coordinate",
                "Personas en los equipos que coordino",
              )}
            </span>
          </div>
        </div>
        <p className="evidence-note">
          {t(
            "Figures as of November 2026. Events and attendees are cumulative, not per-event counts.",
            "Datos de noviembre de 2026. Eventos y asistentes son acumulados, no por evento.",
          )}
        </p>
      </section>
      <section className="site-width narrative-section">
        <h2>
          {t(
            "My part in a shared effort.",
            "Mi parte en un trabajo colectivo.",
          )}
        </h2>
        <div>
          <p>
            {t(
              "I helped start the chapter and served as treasurer before being elected president in July 2026. My role is to turn ideas into events: coordinating the team, organising the practical work, and helping the chapter keep moving between sessions.",
              "Ayudé a fundar el grupo y fui tesorero antes de ser elegido presidente en julio de 2026. Mi papel consiste en convertir ideas en eventos: coordinar el equipo, organizar el trabajo práctico y mantener el grupo en marcha entre sesiones.",
            )}
          </p>
          <p>
            {t(
              "The work is collective. Our workshops cover Git, AI agents, Hugging Face, robotics, and reinforcement learning. For the second Git and GitHub workshop, Ibón and I took participants beyond commands into branches, conflicts, pull requests, and automation.",
              "El trabajo es colectivo. Los talleres abarcan Git, agentes de IA, Hugging Face, robótica y reinforcement learning. En la segunda edición de Git y GitHub, Ibón y yo fuimos más allá de los comandos para trabajar con ramas, conflictos, pull requests y automatización.",
            )}
          </p>
        </div>
      </section>
      <section
        className="site-width narrative-section gdg-contest"
        aria-labelledby="contest-title"
      >
        <h2 id="contest-title">
          {t(
            "Our first machine learning contest.",
            "Nuestro primer concurso de machine learning.",
          )}
        </h2>
        <div>
          <p>
            {t(
              "From 29 October to 12 November 2026, teams of one to three people had two weeks to classify time series into eight classes: four channels of 256 steps, with missing values, and a test set that does not look quite like the training data. Every model ran on one CPU thread with no GPU, and every answer was timed, so the score balanced accuracy against speed.",
              "Del 29 de octubre al 12 de noviembre de 2026, equipos de una a tres personas tuvieron dos semanas para clasificar series temporales en ocho clases: cuatro canales de 256 pasos, con valores perdidos y un test que no se parece del todo a los datos de entrenamiento. Cada modelo corría en un solo hilo de CPU y sin GPU, y cada respuesta se cronometraba, así que la puntuación equilibraba acierto y velocidad.",
            )}
          </p>
          <p>
            {t(
              "I organised it with Ibón de Mingo and Héctor Tablero, with €250 in prizes. Whatever the result, everyone left with a machine learning project on a real problem.",
              "Lo organicé con Ibón de Mingo y Héctor Tablero, con 250 € en premios. Ganaran o no, todos se llevaron un proyecto de machine learning sobre un problema real.",
            )}
          </p>
          <a
            className="text-link"
            href="https://gdguam.es/blog/guia-concurso-de-ml"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("Read the contest guide", "Leer la guía del concurso")}
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
      <section className="site-width gdg-calendar">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              {t("From the chapter calendar", "Del calendario del grupo")}
            </span>
            <h2>{t("What is happening.", "Lo que está pasando.")}</h2>
          </div>
          <a
            className="text-link"
            href="https://gdguam.es/events"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CalendarDays size={17} />
            {t("Full calendar", "Calendario completo")}
            <ArrowUpRight size={17} />
          </a>
        </div>
        <div
          className="filter-segments"
          role="group"
          aria-label={t("Event period", "Periodo de eventos")}
        >
          {(["upcoming", "past"] as const).map((key) => (
            <button
              key={key}
              aria-pressed={key === tab}
              onClick={() => setTab(key)}
            >
              {key === "upcoming"
                ? t("Upcoming", "Próximos")
                : t("Past", "Pasados")}
            </button>
          ))}
        </div>
        <div className="event-list">
          {visibleEvents.length === 0 && (
            <p className="event-empty">
              {tab === "upcoming"
                ? t(
                    "No upcoming events in this snapshot. The full calendar may have newer ones.",
                    "No hay próximos eventos en esta lista. Puede que el calendario completo tenga alguno más reciente.",
                  )
                : t("No past events yet.", "Aún no hay eventos pasados.")}
            </p>
          )}
          {visibleEvents.map((event) => (
            <a
              className="event-row"
              key={event.date + event.en}
              href={event.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <time dateTime={event.date}>
                {new Intl.DateTimeFormat(
                  language === "es" ? "es-ES" : "en-GB",
                  {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    timeZone: "Europe/Madrid",
                  },
                ).format(new Date(event.date))}
              </time>
              <span>{event[language]}</span>
              <ArrowUpRight size={18} />
            </a>
          ))}
        </div>
        <p className="evidence-note">
          {t(
            "Calendar snapshot: 14 November 2026. Check the chapter site for changes and registration.",
            "Calendario a 14 de noviembre de 2026. Consulta la web del grupo para cambios e inscripción.",
          )}
        </p>
      </section>
      <section className="site-width connected-view">
        <div>
          <h2>
            {t(
              "The results belong to the chapter.",
              "Los resultados son del grupo.",
            )}
          </h2>
          <p>
            {t(
              "The event write-ups, resources, and photographs live on the GDG website.",
              "Las crónicas, recursos y fotografías de los eventos están en la web del GDG.",
            )}
          </p>
        </div>
        <a
          className="text-link"
          href="https://gdguam.es/blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Read the event write-ups", "Leer las crónicas")}
          <ArrowUpRight size={18} />
        </a>
      </section>
    </PersonalLayout>
  );
}

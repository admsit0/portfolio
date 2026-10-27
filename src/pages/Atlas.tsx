import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PersonalLayout from "@/components/PersonalLayout";
import { useLanguage } from "@/i18n/useLanguage";
import { atlasFacts, atlasMedia } from "@/content/atlas";

export default function Atlas() {
  const { language, t } = useLanguage();
  return (
    <PersonalLayout title="Atlas">
      <section className="site-width atlas-intro">
        <div className="atlas-identity">
          <img src="/projects/atlas-logo.png" alt="" width={58} height={58} />
          <span className="eyebrow">
            {t("Learning, by trying things", "Aprender probando las cosas")}
          </span>
        </div>
        <h1>
          Atlas<span>.</span>
        </h1>
        <p className="atlas-tagline">
          {t("An explanation is a start.", "Una explicación es un comienzo.")}
          <br />
          {t("I wanted to go further.", "Quería ir un poco más allá.")}
        </p>
        <div className="atlas-lead">
          <p>
            {t(
              "I built Atlas because reading about an algorithm and understanding its decisions are not the same thing. It brings theory, worked examples, simulations, and practice into one place, in English and Spanish.",
              "Construí Atlas porque leer sobre un algoritmo y entender sus decisiones no es lo mismo. Reúne teoría, ejemplos resueltos, simulaciones y práctica en un mismo sitio, en inglés y español.",
            )}
          </p>
          <a
            className="solid-link"
            href="https://atlaslearning.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("Open Atlas", "Abrir Atlas")}
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      <section className="site-width atlas-product">
        <figure>
          <img
            src={
              (language === "en"
                ? atlasMedia.simulations[0]?.enSrc
                : atlasMedia.simulations[0]?.src) ?? atlasMedia.overview
            }
            alt={t(
              "Atlas image-denoising experiment: clean image, noise prediction, and reconstruction",
              "Experimento de eliminación de ruido en Atlas: imagen limpia, predicción del ruido y reconstrucción",
            )}
          />
          <figcaption>{atlasMedia.simulations[0]?.[language]}</figcaption>
        </figure>
        <div className="atlas-numbers">
          <div>
            <strong>{atlasFacts.users}</strong>
            <span>{t("Unique users")}</span>
          </div>
          <div>
            <strong>{atlasFacts.lessons}</strong>
            <span>{t("Lessons")}</span>
          </div>
          <div>
            <strong>{atlasFacts.laboratories}</strong>
            <span>
              {t("Interactive laboratories", "Laboratorios interactivos")}
            </span>
          </div>
          <div>
            <strong>{atlasFacts.subjects}</strong>
            <span>{t("AI subjects", "Asignaturas de IA")}</span>
          </div>
        </div>
        <p className="evidence-note">
          {t(
            "Usage count reported by me. Content snapshot: 13 October 2026.",
            "Cifra de uso comunicada por mí. Catálogo a 13 de octubre de 2026.",
          )}
        </p>
      </section>
      <section className="site-width narrative-section">
        <h2>
          {t(
            "The point is to do something with the idea.",
            "La idea es poder hacer algo con lo que aprendes.",
          )}
        </h2>
        <div>
          <p>
            {t(
              "Change a search heuristic. See which nodes an algorithm visits. Follow a gradient through a small network. A good explanation should leave you with something you can investigate, not just something you can repeat.",
              "Cambiar una heurística de búsqueda. Ver qué nodos visita el algoritmo. Seguir un gradiente a través de una red pequeña. Una buena explicación debería dejarte algo que investigar, no solo algo que repetir.",
            )}
          </p>
          <p>
            {t(
              "Each lesson moves through explanation, exploration, practice, and a check on your understanding. Hints and reasoned solutions are there when you need them. Written answers are for comparison and self-assessment, not automatic grading.",
              "Cada lección pasa por explicación, exploración, práctica y comprobación. Las pistas y soluciones razonadas están disponibles cuando hacen falta. Las respuestas escritas sirven para comparar y autoevaluarse; no se corrigen automáticamente.",
            )}
          </p>
        </div>
      </section>
      {atlasMedia.simulations.length > 1 && (
        <section className="site-width simulation-gallery single-simulation">
          {atlasMedia.simulations.slice(1).map((media) => (
            <figure key={media.src}>
              <img
                src={language === "en" ? media.enSrc : media.src}
                alt={media[language]}
                loading="lazy"
              />
              <figcaption>{media[language]}</figcaption>
            </figure>
          ))}
        </section>
      )}
      <section className="site-width narrative-section">
        <h2>
          {t(
            "Still early. Already growing.",
            "Aún está empezando. Ya está creciendo.",
          )}
        </h2>
        <div>
          <p>
            {t(
              "Atlas now includes symbolic AI, deep learning, and generative AI. The latest expansion added stochastic processes, energy-based models, score matching, and diffusion experiments. Courses share the same learning experience, so adding a subject does not mean starting over.",
              "Atlas ya incluye IA simbólica, aprendizaje profundo e IA generativa. La última ampliación añade procesos estocásticos, modelos basados en energía, score matching y experimentos de difusión. Las asignaturas comparten la misma experiencia, así que añadir una no implica empezar desde cero.",
            )}
          </p>
          <p>
            {t(
              "The next step is to understand where the experience helps and where it gets in the way. I want to improve the experiments and learning paths before treating a bigger catalog as a result in itself.",
              "El siguiente paso es entender dónde ayuda la experiencia y dónde se interpone. Quiero mejorar los experimentos y los recorridos antes de considerar que un catálogo más grande sea un resultado por sí solo.",
            )}
          </p>
        </div>
      </section>
      <section className="site-width connected-view">
        <div>
          <span className="eyebrow">
            {t("The other side of Atlas", "La otra cara de Atlas")}
          </span>
          <h2>{t("How it is built.", "Cómo está construido.")}</h2>
          <p>
            {t(
              "Architecture, simulation engines, cloud profiles, and the boundaries around telemetry.",
              "Arquitectura, motores de simulación, perfiles cloud y límites de la telemetría.",
            )}
          </p>
        </div>
        <Link className="solid-link" to="/portfolio/atlas">
          {t("Technical case study", "Caso técnico")}
          <ArrowUpRight size={18} />
        </Link>
      </section>
    </PersonalLayout>
  );
}

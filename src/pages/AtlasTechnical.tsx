import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Cloud,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import PersonalLayout from "@/components/PersonalLayout";
import { useLanguage } from "@/i18n/useLanguage";
import { atlasFacts, atlasMedia } from "@/content/atlas";

export default function AtlasTechnical() {
  const { t, language } = useLanguage();
  return (
    <PersonalLayout title={t("Atlas: engineering", "Atlas: ingeniería")}>
      <section className="site-width project-detail-intro">
        <Link className="text-link back-link" to="/portfolio">
          <ArrowLeft size={16} />
          {t("Technical portfolio")}
        </Link>
        <span className="eyebrow">
          {t(
            "Software / Learning systems",
            "Software / Sistemas de aprendizaje",
          )}
        </span>
        <h1>
          Atlas
          <span className="name-period">
            {" "}
            / {t("Engineering", "Ingeniería")}
          </span>
        </h1>
        <p>
          {t(
            "A static, bilingual learning platform with isolated scientific engines and account-owned cloud profiles. I build the interface, content structure, engines, and supporting services.",
            "Una plataforma estática y bilingüe con motores científicos aislados y perfiles cloud vinculados a la cuenta. Desarrollo la interfaz, la estructura de contenido, los motores y los servicios que los acompañan.",
          )}
        </p>
        <div className="intro-actions">
          <Link className="text-link" to="/atlas">
            {t("Purpose and product", "Propósito y producto")}
            <ArrowUpRight size={17} />
          </Link>
          <a
            className="text-link"
            href="https://atlaslearning.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("Open Atlas", "Abrir Atlas")}
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
      <section className="site-width case-content">
        <div className="case-metrics">
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
            <strong>ES / EN</strong>
            <span>
              {t(
                "Shared content contracts",
                "Contratos de contenido compartidos",
              )}
            </span>
          </div>
        </div>
        <div className="technical-section">
          <h2>{t("Architecture", "Arquitectura")}</h2>
          <p>
            {t(
              "GitHub Pages serves the static app. Courses supply manifests and bilingual content. A shared shell owns navigation, identity, profiles, feedback, and telemetry; course plugins only own the experiments.",
              "GitHub Pages sirve la aplicación estática. Las asignaturas aportan manifiestos y contenido bilingüe. La estructura común gestiona navegación, identidad, perfiles, feedback y telemetría; los plugins de asignatura solo gestionan sus experimentos.",
            )}
          </p>
          <div className="architecture-flow">
            {[
              {
                Icon: BookOpen,
                en: "Course manifests",
                es: "Manifiestos de asignatura",
                copyEn: "Stable IDs, ES/EN content",
                copyEs: "IDs estables, contenido ES/EN",
              },
              {
                Icon: FlaskConical,
                en: "Shared learning shell",
                es: "Estructura de aprendizaje",
                copyEn: "Views + independent engines",
                copyEs: "Vistas y motores independientes",
              },
              {
                Icon: ShieldCheck,
                en: "Account services",
                es: "Servicios de cuenta",
                copyEn: "Google OAuth + private profiles",
                copyEs: "Google OAuth y perfiles privados",
              },
              {
                Icon: Cloud,
                en: "Supabase services",
                es: "Servicios Supabase",
                copyEn: "PostgreSQL + Edge Functions",
                copyEs: "PostgreSQL y Edge Functions",
              },
            ].map(({ Icon, en, es, copyEn, copyEs }, i) => (
              <div key={en}>
                <Icon size={26} />
                <h3>{t(en, es)}</h3>
                <p>{t(copyEn, copyEs)}</p>
                {i < 3 && <ArrowRight size={18} className="flow-arrow" />}
              </div>
            ))}
          </div>
        </div>
        <div className="technical-section">
          <h2>
            {t(
              "Experiments are not account code.",
              "Los experimentos no gestionan cuentas.",
            )}
          </h2>
          <p>
            {t(
              "Each simulation separates a pure numerical or logical engine from its visual adapter. The engine can be tested without the interface. Plugins do not manage identities, store learner profiles, or send telemetry directly. New subjects reuse the same learning and account components.",
              "Cada simulación separa un motor numérico o lógico puro de su adaptador visual. El motor se puede probar sin la interfaz. Los plugins no gestionan identidades, guardan perfiles ni envían telemetría directamente. Las nuevas asignaturas reutilizan los mismos componentes de aprendizaje y cuenta.",
            )}
          </p>
          <div className="engine-contract">
            <code>{t("Inputs + parameters", "Entradas y parámetros")}</code>
            <ArrowRight size={18} />
            <code>{t("Pure engine", "Motor puro")}</code>
            <ArrowRight size={18} />
            <code>{t("Intermediate states", "Estados intermedios")}</code>
            <ArrowRight size={18} />
            <code>{t("Visual adapter", "Adaptador visual")}</code>
          </div>
          {atlasMedia.simulations.length > 0 && (
            <div className="simulation-gallery">
              {atlasMedia.simulations.map((media) => (
                <figure key={media.src}>
                  <img
                    src={language === "en" ? media.enSrc : media.src}
                    alt={media[language]}
                    loading="lazy"
                  />
                  <figcaption>{media[language]}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
        <div className="technical-section">
          <h2>
            {t(
              "Private profiles, automatic persistence.",
              "Perfiles privados, guardado automático.",
            )}
          </h2>
          <p>
            {t(
              "The authenticated Supabase UUID owns the profile row. Display names and browser storage do not grant access. Preferences, drafts, enrollment, and progress synchronise automatically; the browser cache keeps pending changes for the verified account. Changing a language or leaving a course does not erase progress.",
              "El UUID autenticado de Supabase autoriza la fila del perfil. El nombre mostrado y el almacenamiento del navegador no dan acceso. Preferencias, borradores, asignaturas y progreso se sincronizan automáticamente; la caché conserva cambios pendientes de la cuenta verificada. Cambiar el idioma o dejar una asignatura no borra el progreso.",
            )}
          </p>
        </div>
        <div className="technical-section">
          <h2>
            {t(
              "Telemetry has a separate boundary.",
              "La telemetría tiene su propia frontera.",
            )}
          </h2>
          <div className="telemetry-flow">
            <div>
              <span className="eyebrow">
                {t("Shared shell", "Estructura común")}
              </span>
              <strong>{t("Bounded events", "Eventos acotados")}</strong>
              <p>page_view · simulation_open · quiz_attempt · active_time</p>
            </div>
            <ArrowRight size={22} />
            <div>
              <span className="eyebrow">Edge Function</span>
              <strong>
                {t("Validation + limits", "Validación y límites")}
              </strong>
              <p>
                {t(
                  "Strict schema, batches, quotas",
                  "Esquema estricto, lotes y cuotas",
                )}
              </p>
            </div>
            <ArrowRight size={22} />
            <div>
              <span className="eyebrow">PostgreSQL</span>
              <strong>{t("Private reports", "Informes privados")}</strong>
              <p>
                {t(
                  "Aggregates → owner dashboard",
                  "Agregados → panel del propietario",
                )}
              </p>
            </div>
          </div>
          <p>
            {t(
              "Reports require private authentication. Account identity and analytics pseudonyms are separate. The event schema excludes names, emails, photos, written answers, drafts, and credentials. Opt-out and Global Privacy Control block passive collection; deliberate lesson feedback is independent.",
              "Los informes exigen autenticación privada. Identidad de cuenta y seudónimos de analíticas están separados. El esquema excluye nombres, correos, fotos, respuestas escritas, borradores y credenciales. La desactivación y Global Privacy Control bloquean la recogida pasiva; el feedback de lecciones es independiente.",
            )}
          </p>
          <p className="evidence-note">
            {t(
              "This is the implemented reporting flow, not a public copy of the dashboard. No live user data or private credentials are embedded here.",
              "Este es el flujo de informes implementado, no una copia pública del panel. Aquí no se incluyen datos de usuarios ni credenciales privadas.",
            )}
          </p>
        </div>
        <div className="technical-section">
          <h2>
            {t("What the checks cover.", "Qué cubren las comprobaciones.")}
          </h2>
          <p>
            {t(
              "The release pipeline checks content schemas, locale parity, stable identities, plugin contracts, and syntax before tests and a static build. Engine, profile, authentication, synchronisation, and analytics tests cover their own boundaries. Recorded activity measures interaction, not understanding or mastery.",
              "El proceso de publicación comprueba esquemas, paridad de idiomas, identidades estables, contratos de plugins y sintaxis antes de ejecutar tests y construir la aplicación. Motores, perfiles, autenticación, sincronización y analíticas tienen comprobaciones propias. La actividad registrada mide interacción, no comprensión ni dominio.",
            )}
          </p>
          <div className="case-stack">
            <span className="eyebrow">{t("Tools & methods")}</span>
            <div>
              {[
                "JavaScript",
                "ES modules",
                "Supabase",
                "PostgreSQL",
                "Edge Functions",
                "Google OAuth",
                "GitHub Actions",
              ].map((tool) => (
                <span className="tech-chip" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="connected-view">
          <div>
            <h2>{t("Back to why.", "Volver al porqué.")}</h2>
            <p>
              {t(
                "The learning experience, its first users, and where I want to take it.",
                "La experiencia de aprendizaje, sus primeros usuarios y hacia dónde quiero llevarla.",
              )}
            </p>
          </div>
          <Link className="solid-link" to="/atlas">
            {t("Atlas: the project", "Atlas: el proyecto")}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </PersonalLayout>
  );
}

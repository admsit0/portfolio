import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import PersonalLayout from "@/components/PersonalLayout";
import Contact from "@/components/Contact";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";
import { useLanguage } from "@/i18n/useLanguage";
import PersonalHomeContent from "@/components/PersonalHomeContent";
import portrait from "@/assets/adam-profile.png";

export default function Index() {
  const scroll = useSectionNavigation();
  const { t } = useLanguage();
  return (
    <PersonalLayout title={t("Adam Maltoni", "Adam Maltoni")}>
      <section id="home" className="personal-hero site-width">
        <div className="hero-intro">
          <img src={portrait} alt="Adam Maltoni" width={52} height={52} />
          <div>
            <span className="eyebrow">
              {t(
                "AI Engineer & Data Scientist",
                "Ingeniero de IA y científico de datos",
              )}
            </span>
            <span className="intro-location">
              {t(
                "Based in Madrid. Building beyond it.",
                "En Madrid, construyendo más allá.",
              )}
            </span>
          </div>
        </div>
        <h1>
          Adam Maltoni<span className="name-period">.</span>
        </h1>
        <p className="hero-statement">
          {t("I like understanding things.", "Me interesa entender las cosas.")}
          <br className="desktop-break" />
          {t(
            " And doing something with what I learn.",
            " Y hacer algo con lo que aprendo.",
          )}
        </p>
        <div className="hero-actions">
          <button
            className="solid-link"
            onClick={() => scroll("personal-intro")}
          >
            {t("A little about me", "Un poco sobre mí")}
            <ArrowDown size={18} />
          </button>
          <Link className="text-link" to="/portfolio">
            {t("Technical portfolio")}
            <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="hero-foot">
          <div className="social-pill">
            {[
              {
                Icon: Github,
                name: "GitHub",
                href: "https://github.com/admsit0",
              },
              {
                Icon: Linkedin,
                name: "LinkedIn",
                href: "https://linkedin.com/in/adam-maltoni",
              },
              {
                Icon: Youtube,
                name: "YouTube",
                href: "https://youtube.com/@admsito17",
              },
              {
                Icon: Mail,
                name: t("Email Adam"),
                href: "mailto:adam.maltoni@gmail.com",
              },
            ].map(({ Icon, name, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("https") ? "_blank" : undefined}
                rel={
                  href.startsWith("https") ? "noopener noreferrer" : undefined
                }
                aria-label={name}
                title={name}
              >
                <Icon size={23} />
              </a>
            ))}
          </div>
          <span className="availability">
            {t(
              "Open to AI engineering roles",
              "Buscando oportunidades en ingeniería de IA",
            )}
            <ArrowUpRight size={14} />
          </span>
          <button
            className="hero-down"
            onClick={() => scroll("personal-intro")}
            title={t("A little about me", "Un poco sobre mí")}
            aria-label={t("More about me", "Más sobre mí")}
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </section>
      <PersonalHomeContent />
      <Contact />
    </PersonalLayout>
  );
}

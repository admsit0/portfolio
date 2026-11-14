import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Youtube,
} from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";
export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="personal-contact">
      <div className="site-width">
        <div className="contact-heading">
          <div>
            <span className="eyebrow">{t("Contact")}</span>
            <h2>
              {t("Write to me", "Escríbeme")}
              <span>.</span>
            </h2>
          </div>
          <div className="contact-availability">
            <span className="eyebrow">
              {t("What I am looking for", "Qué busco")}
            </span>
            <p>
              {t(
                "An AI engineering role where I can keep working on making language models more reliable. If you are organising something for students, or want to talk about Atlas or GDG UAM, write too.",
                "Un puesto de ingeniería de IA en el que seguir trabajando para que los modelos de lenguaje sean más fiables. Si organizas algo para estudiantes o quieres hablar de Atlas o de GDG UAM, escríbeme también.",
              )}
            </p>
          </div>
        </div>
        <a className="contact-email" href="mailto:adam.maltoni@gmail.com">
          <Mail size={23} />
          <span>adam.maltoni@gmail.com</span>
          <ArrowUpRight size={26} />
        </a>
        <div className="contact-details">
          <a
            href="https://maps.google.com/?q=Madrid,Spain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={16} />
            {t("Madrid, Spain")}
          </a>
          <div className="contact-social">
            {[
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
                Icon: Github,
                name: "GitHub",
                href: "https://github.com/admsit0",
              },
            ].map(({ Icon, name, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>
        <dl className="contact-meta">
          {[
            [t("Time zone", "Zona horaria"), "Europe/Madrid"],
            [
              t("Languages", "Idiomas"),
              t(
                "Spanish and Italian (native), English (C1), French (B2+)",
                "Español e italiano (nativos), inglés (C1), francés (B2+)",
              ),
            ],
          ].map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

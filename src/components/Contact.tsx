import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
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
              {t("Let's work on")}
              <br />
              {t("something worthwhile")}
              <span>.</span>
            </h2>
          </div>
          <div className="contact-availability">
            <span className="eyebrow">{t("Available for opportunities")}</span>
            <p>
              {t(
                "Open to full-time AI engineering roles, consulting projects, and collaborative research.",
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
          <a href="tel:+34638707783">
            <Phone size={16} />
            +34 638 707 783
          </a>
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
            ["Response time", "Less than 24 hours"],
            ["Time zone", "Europe/Madrid"],
            ["Languages", "Spanish, English, Italian, French"],
          ].map(([label, value]) => (
            <div key={label}>
              <dt>{t(label)}</dt>
              <dd>{t(value)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

import { ArrowUpRight, Github, Linkedin, Mail, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/useLanguage";
export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="personal-footer">
      <div className="site-width footer-main">
        <div>
          <Link className="wordmark" to="/">
            adam maltoni<span>.</span>
          </Link>
          <p>{t("Madrid, Spain")}</p>
        </div>
        <div className="footer-links">
          {[
            ["/portfolio", "Technical portfolio"],
            ["/atlas", "Atlas"],
            ["/gdg", "GDG UAM"],
            ["/blog", "Writing"],
            ["/about", "About"],
          ].map(([href, label]) => (
            <Link key={href} to={href}>
              {t(label)}
              <ArrowUpRight size={14} />
            </Link>
          ))}
        </div>
        <div className="footer-social">
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
              name: "Email Adam",
              href: "mailto:adam.maltoni@gmail.com",
            },
          ].map(({ Icon, name, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t(name)}
              title={t(name)}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
      <div className="site-width footer-bottom">
        <span>© {new Date().getFullYear()} Adam Maltoni</span>
        <span>{t("Madrid, Spain")}</span>
      </div>
    </footer>
  );
}

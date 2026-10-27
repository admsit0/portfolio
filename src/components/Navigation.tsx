import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/useLanguage";

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document
          .querySelector<HTMLButtonElement>('[aria-controls="personal-menu"]')
          ?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  const links = [
    ["/about", "About"],
    ["/blog", "Writing"],
  ];
  return (
    <header className="personal-header">
      <nav className="site-width nav-inner" aria-label={t("Main navigation")}>
        <Link className="wordmark" to="/">
          adam maltoni<span>.</span>
        </Link>
        <div className="nav-links">
          {links.map(([href, label]) => (
            <NavLink key={href} to={href}>
              {t(label)}
            </NavLink>
          ))}
        </div>
        <div className="nav-actions">
          <NavLink to="/portfolio" className="nav-portfolio">
            {t("Portfolio")} <ArrowUpRight size={16} />
          </NavLink>
          <a
            className="cv-icon"
            href={`${import.meta.env.BASE_URL}cv-adam-maltoni.pdf`}
            download
            aria-label={t("Download CV")}
            title={t("Download CV")}
          >
            <Download size={18} />
          </a>
          <div
            className="language-switch"
            role="group"
            aria-label={t("Language", "Idioma")}
          >
            {(["en", "es"] as const).map((locale) => (
              <button
                key={locale}
                lang={locale}
                aria-pressed={language === locale}
                aria-label={locale === "en" ? "English" : "Español"}
                title={locale === "en" ? "English" : "Español"}
                onClick={() => setLanguage(locale)}
              >
                {locale.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            className="menu-toggle"
            aria-label={t(open ? "Close navigation" : "Open navigation")}
            aria-expanded={open}
            aria-controls="personal-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <nav
          id="personal-menu"
          className="mobile-menu site-width"
          aria-label={t("Mobile navigation")}
        >
          {links.map(([href, label]) => (
            <NavLink key={href} to={href}>
              {t(label)}
              <ArrowUpRight size={18} />
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};
export default Navigation;

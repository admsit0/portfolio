import { type ReactNode, useEffect } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useLanguage } from "@/i18n/useLanguage";
import { personalContent } from "@/content/personal";
export default function PersonalLayout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const { language, t } = useLanguage();
  useEffect(() => {
    document.title =
      title === "Adam Maltoni"
        ? personalContent.meta.title[language]
        : `${t(title)} | Adam Maltoni`;
  }, [title, t, language]);
  return (
    <div className="personal-site">
      <a className="skip-link" href="#main">
        {t("Skip to content")}
      </a>
      <Navigation />
      <main id="main" tabIndex={-1} className="personal-main">
        {children}
      </main>
      <Footer />
    </div>
  );
}

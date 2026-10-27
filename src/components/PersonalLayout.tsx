import { type ReactNode, useEffect } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useLanguage } from "@/i18n/useLanguage";
export default function PersonalLayout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const { t } = useLanguage();
  useEffect(() => {
    document.title =
      title === "Adam Maltoni" ? "Adam Maltoni" : `${t(title)} | Adam Maltoni`;
  }, [title, t]);
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

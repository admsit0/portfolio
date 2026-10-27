import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PersonalLayout from "@/components/PersonalLayout";
import { useLanguage } from "@/i18n/useLanguage";
export default function NotFound() {
  const { t } = useLanguage();
  return (
    <PersonalLayout title={t("Page not found")}>
      <section className="site-width page-intro min-h-[60vh]">
        <span className="eyebrow">{t("404 / Page not found")}</span>
        <h1>
          {t("This page isn't here")}
          <span>.</span>
        </h1>
        <p>
          {t("The address may have changed, or the link may be incomplete.")}
        </p>
        <Link to="/" className="text-link">
          <ArrowLeft size={17} />
          {t("Back to home")}
        </Link>
      </section>
    </PersonalLayout>
  );
}

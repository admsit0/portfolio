import { ArrowUpRight } from "lucide-react";
import PersonalLayout from "@/components/PersonalLayout";
import Contact from "@/components/Contact";
import { aboutContent } from "@/content/about";
import { useLanguage } from "@/i18n/useLanguage";
import portrait from "@/assets/adam-profile.png";

export default function About() {
  const { language, t } = useLanguage();
  return (
    <PersonalLayout title={t("Beyond the CV", "Más allá del CV")}>
      <section className="site-width page-intro personal-about-intro">
        <span className="eyebrow">
          {t("A more personal page", "Una página más personal")}
        </span>
        <h1>
          {t("Beyond the CV", "Más allá del CV")}
          <span>.</span>
        </h1>
        <div className="personal-about-opening">
          <img src={portrait} alt="Adam Maltoni" width={160} height={160} />
          <p>{aboutContent.intro[language]}</p>
        </div>
      </section>
      <div className="site-width personal-about-sections">
        {aboutContent.sections.map((section, i) => (
          <section key={section.id} id={section.id}>
            <span className="eyebrow">0{i + 1}</span>
            <h2>{section.title[language]}</h2>
            <p>{section.body[language]}</p>
          </section>
        ))}
      </div>
      <div className="site-width personal-about-end">
        <a className="text-link" href="mailto:adam.maltoni@gmail.com">
          {t("Say hello", "Hablemos")}
          <ArrowUpRight size={17} />
        </a>
      </div>
      <Contact />
    </PersonalLayout>
  );
}

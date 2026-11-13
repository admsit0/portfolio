import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/useLanguage";

// MSc thesis, in progress. Keep this to what is public: the title, the
// question, and the state-of-the-art slides.
export default function CurrentResearch() {
  const { t } = useLanguage();
  return (
    <section id="research" aria-labelledby="research-title">
      <div className="mx-auto research-callout">
        <span className="eyebrow">
          {t(
            "Current research · MSc thesis, in progress",
            "Investigación en curso · TFM, en desarrollo",
          )}
        </span>
        <h2 id="research-title">
          {t(
            "Latent representation editing in LLMs to unlearn deceptive behaviour.",
            "Edición de representaciones latentes en LLMs para desaprender el comportamiento engañoso.",
          )}
        </h2>
        <p>
          {t(
            "The question is whether deceptive behaviour in a language model can be located in its latent representations and removed by editing them, as a contribution to alignment. It continues my bachelor's thesis, which measured how regularisation changes the internal activations of a CNN.",
            "La pregunta es si el comportamiento engañoso de un modelo de lenguaje se puede localizar en sus representaciones latentes y eliminar editándolas, como contribución al alineamiento. Sigue la línea de mi TFG, que medía cómo la regularización cambia las activaciones internas de una CNN.",
          )}
        </p>
        <p className="research-meta">
          {t(
            "Universidad Autónoma de Madrid · 2026–2027",
            "Universidad Autónoma de Madrid · 2026–2027",
          )}
        </p>
        <div className="research-links">
          <a
            className="text-link"
            href="https://github.com/admsit0/slides-llm-alignment-sota"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
            {t(
              "State-of-the-art slides: inside LLM activations",
              "Diapositivas del estado del arte: activaciones internas de los LLM",
            )}
          </a>
          <Link
            className="text-link"
            to="/blog/regularization-in-cnns-internal-activations"
          >
            {t(
              "Bachelor's thesis, as an article",
              "El TFG, contado como artículo",
            )}
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

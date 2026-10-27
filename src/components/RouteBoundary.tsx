import { Component, type ReactNode } from "react";
import { RefreshCw } from "lucide-react";
import { useLocation } from "react-router-dom";
import PersonalLayout from "./PersonalLayout";
import { useLanguage } from "@/i18n/useLanguage";

class Boundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

export default function RouteBoundary({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  return (
    <Boundary
      key={pathname}
      fallback={
        <PersonalLayout
          title={t(
            "Unable to load this page",
            "No se ha podido cargar esta página",
          )}
        >
          <section className="site-width page-intro min-h-[60vh]">
            <h1>
              {t("Something did not load", "Algo no se ha cargado")}
              <span>.</span>
            </h1>
            <p>{t("Please try again.", "Vuelve a intentarlo.")}</p>
            <div className="intro-actions">
              <button
                className="solid-link"
                onClick={() => window.location.reload()}
              >
                <RefreshCw size={17} />
                {t("Reload", "Recargar")}
              </button>
            </div>
          </section>
        </PersonalLayout>
      }
    >
      {children}
    </Boundary>
  );
}

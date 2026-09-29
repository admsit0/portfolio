import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".scroll-animate");
    const handleScroll = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          el.classList.add("animate-scaleIn");
        } else {
          el.classList.remove("animate-scaleIn");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

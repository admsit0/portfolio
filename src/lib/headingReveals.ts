export function startHeadingReveals(root: HTMLElement): () => void {
  if (typeof IntersectionObserver === "undefined") return () => {};
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const seen = new WeakSet<Element>();
  const animations = new Set<Animation>();
  let observer: IntersectionObserver | undefined;
  const stop = () => {
    observer?.disconnect();
    animations.forEach((animation) => animation.cancel());
    animations.clear();
  };
  const setup = () => {
    stop();
    if (reduced.matches) return;
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          observer?.unobserve(target);
          if (seen.has(target)) return;
          seen.add(target);
          if (
            !(target instanceof HTMLElement) ||
            typeof target.animate !== "function"
          )
            return;
          const animation = target.animate(
            [
              { opacity: 0.8, transform: "translateY(14px)" },
              { opacity: 1, transform: "none" },
            ],
            { duration: 650, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
          );
          animations.add(animation);
          animation.finished
            .then(() => animations.delete(animation))
            .catch(() => animations.delete(animation));
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -20px 0px" },
    );
    root.querySelectorAll("h2, h3").forEach((heading) => {
      if (!seen.has(heading)) observer?.observe(heading);
    });
  };
  setup();
  reduced.addEventListener("change", setup);
  return () => {
    stop();
    reduced.removeEventListener("change", setup);
  };
}

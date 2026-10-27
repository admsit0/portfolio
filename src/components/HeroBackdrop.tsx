import { useEffect, useRef } from "react";
import { startHeroBackdrop } from "@/lib/heroBackdrop";

export default function HeroBackdrop() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const surface = canvas?.parentElement;
    if (canvas && surface) return startHeroBackdrop(canvas, surface);
  }, []);
  return <canvas ref={ref} className="hero-backdrop" aria-hidden="true" />;
}

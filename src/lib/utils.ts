import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type Lenis from 'lenis';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSectionWithOffset(sectionId: string, offset = 80, lenis?: Lenis) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const top = sectionId === 'home'
    ? 0
    : Math.max(0, element.getBoundingClientRect().top + window.scrollY - offset);
  if (lenis) {
    // Section buttons explicitly request an animated transition, including on reduced-motion systems.
    lenis.scrollTo(top, {
      duration: Math.min(1.55, 1 + Math.abs(top - window.scrollY) / 10000),
      easing: (progress: number) => progress < 0.5
        ? 4 * Math.pow(progress, 3)
        : 1 - Math.pow(-2 * progress + 2, 3) / 2,
      lerp: 0,
    });
  } else {
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

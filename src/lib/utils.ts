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
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (lenis) {
    lenis.scrollTo(top, {
      immediate: reducedMotion,
      duration: Math.min(1.4, 0.85 + Math.abs(top - window.scrollY) / 7000),
      easing: (progress: number) => 1 - Math.pow(1 - progress, 4),
      lerp: 0,
    });
  } else {
    window.scrollTo({ top, behavior: reducedMotion ? 'instant' : 'smooth' });
  }
}

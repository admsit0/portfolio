import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smoothly scrolls to a section by id, accounting for a fixed navbar offset.
 * @param sectionId The id of the section to scroll to
 * @param offset The offset in pixels (default: 80)
 */
export function scrollToSectionWithOffset(sectionId: string, offset: number = 80) {
  const element = document.getElementById(sectionId);
  if (element) {
    // Use scrollIntoView for smoother, cross-browser scrolling
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Optionally adjust for offset after scroll
    if (offset) {
      setTimeout(() => {
        window.scrollBy({ top: -offset, behavior: 'instant' });
      }, 400); // Wait for scroll animation to finish
    }
  }
}

import { useEffect, type ReactNode } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { useReducedMotion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { scrollToSectionWithOffset } from '@/lib/utils';
import 'lenis/dist/lenis.css';

const RouteScroll = () => {
  const lenis = useLenis();
  const location = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      lenis?.resize();
      const sectionId = (location.state as { sectionId?: string } | null)?.sectionId;

      if (location.pathname === '/' && sectionId) {
        scrollToSectionWithOffset(sectionId, 80, lenis);
      } else if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [lenis, location.key, location.pathname, location.state]);

  return null;
};

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const reducedMotion = useReducedMotion();

  return (
    <ReactLenis root options={{ autoRaf: true, lerp: 0.12, smoothWheel: !reducedMotion }}>
      <RouteScroll />
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;

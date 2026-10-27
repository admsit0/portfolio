import { useCallback } from 'react';
import { useLenis } from 'lenis/react';
import { useNavigate } from 'react-router-dom';
import { scrollToSectionWithOffset } from '@/lib/utils';

export function useSectionNavigation() {
  const lenis = useLenis();
  const navigate = useNavigate();

  return useCallback((sectionId: string) => {
    if (!document.getElementById(sectionId)) {
      const destination = ['experience', 'skills'].includes(sectionId) ? '/portfolio' : '/';
      navigate(destination, { state: { sectionId } });
      return;
    }

    scrollToSectionWithOffset(sectionId, 80, lenis);
  }, [lenis, navigate]);
}

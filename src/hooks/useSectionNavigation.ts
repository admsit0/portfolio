import { useCallback } from 'react';
import { useLenis } from 'lenis/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToSectionWithOffset } from '@/lib/utils';

export function useSectionNavigation() {
  const lenis = useLenis();
  const location = useLocation();
  const navigate = useNavigate();

  return useCallback((sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { sectionId } });
      return;
    }

    scrollToSectionWithOffset(sectionId, 80, lenis);
  }, [lenis, location.pathname, navigate]);
}

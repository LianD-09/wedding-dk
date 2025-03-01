import { useEffect } from 'react';
import { useActiveSectionContext } from '@/context/active-section-context';

import { useInView } from 'react-intersection-observer';
import { SectionName } from '@/types/common.types';

type useSectionInViewProps = {
  sectionName: SectionName;
  thresholdInView?: number;
};

export function useSectionInView({
  sectionName,
  thresholdInView,
}: useSectionInViewProps) {
  const { ref, inView } = useInView({
    threshold: thresholdInView ?? 0.2,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);
  return { ref };
}

import { useInView } from 'react-intersection-observer';
import { useEffect, useState, useRef } from 'react';

const useInViewFade = () => {
  const targetEl = useRef<HTMLHeadingElement | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return { ref, isVisible, targetEl };
};

export default useInViewFade;

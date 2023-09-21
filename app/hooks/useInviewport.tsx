import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const useInViewport = () => {
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

  return { ref, isVisible };
};

export default useInViewport;

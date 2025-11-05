import { useEffect, useState, useRef } from 'react';

const InViewAnimation = (threshold = 1, triggerOnce = true) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.disconnect(); // masa stop observing if triggerOnce is true
          }
        } else {
          setIsVisible(false); // for re-trigger on refresh or re-entry
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px', 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce]);

  return [ref, isVisible];
};

export default InViewAnimation;
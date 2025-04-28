
import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  delay?: number;
  once?: boolean;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    once = true,
    delay = 0,
  } = options;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold, root, rootMargin }
    );

    const element = ref.current;
    
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, root, rootMargin, once, delay]);

  return ref;
};

export default useScrollReveal;

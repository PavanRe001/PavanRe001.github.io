import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

let scrollInstance = null; // keep one global instance

export const useSmoothScroll = () => {
  useEffect(() => {
    // Destroy any existing instance first (handles React StrictMode double-invoke)
    if (scrollInstance) {
      scrollInstance.destroy();
      scrollInstance = null;
    }

    scrollInstance = new LocomotiveScroll({
      lenisOptions: {
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      },
    });

    return () => {
      if (scrollInstance) {
        scrollInstance.destroy();
        scrollInstance = null;
      }
    };
  }, []);
};

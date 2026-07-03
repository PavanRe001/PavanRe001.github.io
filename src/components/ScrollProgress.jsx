import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the progress value for the bar
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map 0-1 to 0%-100% for the dot's left position
  const dotLeft = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[9999] pointer-events-none">
      {/* The progress bar */}
      <motion.div
        className="absolute inset-0 bg-[#C7FF2F] origin-left will-change-transform"
        style={{ scaleX: smoothProgress }}
      />
      
      {/* The travelling dot at the leading edge */}
      <motion.div 
        className="absolute top-1/2 -mt-[3px] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(199,255,47,0.8)] will-change-transform z-10 -ml-[3px]"
        style={{ left: dotLeft }}
      />
    </div>
  );
};

export default ScrollProgress;

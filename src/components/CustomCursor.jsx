import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useGSAP(() => {
    // Media queries for touch devices and reduced motion
    const isTouch = matchMedia('(hover: none), (pointer: coarse)').matches;
    const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      return; // Do not initialize custom cursor on touch or if reduced motion is preferred
    }

    setIsVisible(true);

    const xToDot = gsap.quickTo(dotRef.current, 'x', { duration: 0.1, ease: 'power3' });
    const yToDot = gsap.quickTo(dotRef.current, 'y', { duration: 0.1, ease: 'power3' });
    
    const xToRing = gsap.quickTo(ringRef.current, 'x', { duration: 0.3, ease: 'power3' });
    const yToRing = gsap.quickTo(ringRef.current, 'y', { duration: 0.3, ease: 'power3' });

    let isMagnetic = false;
    let currentMagneticTarget = null;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;

      if (!isMagnetic) {
        xToDot(clientX);
        yToDot(clientY);
        xToRing(clientX);
        yToRing(clientY);
      } else if (currentMagneticTarget) {
        // When magnetic, calculate the pull towards the center of the target
        const rect = currentMagneticTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Distance from mouse to center
        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;
        
        // Pull strength (0.3 means it moves 30% towards the mouse from the center)
        const pullX = distanceX * 0.3;
        const pullY = distanceY * 0.3;

        xToDot(centerX + pullX);
        yToDot(centerY + pullY);
        xToRing(centerX + pullX);
        yToRing(centerY + pullY);
      }
    };

    const onMouseDown = () => {
      gsap.to(ringRef.current, { scale: 0.8, duration: 0.15, ease: 'power2.out' });
      gsap.to(dotRef.current, { scale: 0.5, duration: 0.15, ease: 'power2.out' });
    };

    const onMouseUp = () => {
      gsap.to(ringRef.current, { scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.3)' });
      gsap.to(dotRef.current, { scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.3)' });
      
      // Ripple effect
      const ripple = document.createElement('div');
      ripple.className = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-[#C7FF2F] rounded-full pointer-events-none z-0';
      cursorRef.current.appendChild(ripple);
      
      gsap.to(ripple, {
        scale: 2.5,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        onComplete: () => ripple.remove()
      });
    };

    const onMouseEnterMagnetic = (e) => {
      isMagnetic = true;
      currentMagneticTarget = e.currentTarget;
      gsap.to(ringRef.current, { scale: 1.5, borderColor: 'rgba(199, 255, 47, 0.5)', duration: 0.3 });
    };

    const onMouseLeaveMagnetic = () => {
      isMagnetic = false;
      currentMagneticTarget = null;
      gsap.to(ringRef.current, { scale: 1, borderColor: 'rgba(156, 163, 175, 0.4)', duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Setup global mutation observer or event delegation for magnetic elements
    // We look for elements with 'data-magnetic' attribute
    const setupMagneticElements = () => {
      const magneticEls = document.querySelectorAll('[data-magnetic]');
      magneticEls.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterMagnetic);
        el.addEventListener('mouseleave', onMouseLeaveMagnetic);
      });
    };
    
    setupMagneticElements();
    
    // Quick observer to handle dynamic elements (like those revealed by GSAP later)
    const observer = new MutationObserver((mutations) => {
      let shouldSetup = false;
      mutations.forEach(m => {
        if (m.addedNodes.length > 0) shouldSetup = true;
      });
      if (shouldSetup) setupMagneticElements();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      observer.disconnect();
      const magneticEls = document.querySelectorAll('[data-magnetic]');
      magneticEls.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterMagnetic);
        el.removeEventListener('mouseleave', onMouseLeaveMagnetic);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div ref={cursorRef} className="fixed inset-0 pointer-events-none z-[9999]">
      <div 
        ref={ringRef}
        className="absolute top-0 left-0 w-8 h-8 -ml-4 -mt-4 border border-[#C7FF2F]/60 rounded-full will-change-transform"
      />
      <div 
        ref={dotRef}
        className="absolute top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-[#C7FF2F] rounded-full will-change-transform"
      />
    </div>
  );
};

export default CustomCursor;

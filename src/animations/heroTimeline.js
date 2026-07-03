import gsap from 'gsap';

/**
 * Premium Hero Section entrance animation
 * Runs once when the page loading screen completes.
 */
export const heroInitialLoad = () => {
  const tl = gsap.timeline();

  // Set initial hidden states to prevent layout shifts or flashes
  tl.set(['header', '.hero-avatar', '.hero-text-stagger', '.hero-right-stagger'], { opacity: 0 });

  tl.to('header', {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power4.out',
    startAt: { y: -50 }
  })
  .to('.hero-avatar', {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: 'power4.out',
    startAt: { scale: 0.85 }
  }, '-=0.5')
  .to('.hero-text-stagger', {
    y: 0,
    opacity: 1,
    stagger: 0.12,
    duration: 0.8,
    ease: 'power3.out',
    startAt: { y: 30 }
  }, '-=0.7')
  .to('.hero-right-stagger', {
    x: 0,
    opacity: 1,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power3.out',
    startAt: { x: 30 }
  }, '-=0.6');

  return tl;
};

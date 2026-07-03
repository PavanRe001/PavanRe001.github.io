import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const projectsTimeline = () => {
  const wrappers = gsap.utils.toArray('.project-card-wrapper');
  
  wrappers.forEach((wrapper) => {
    const leftHalf = wrapper.querySelector('.project-card-split-left');
    const rightHalf = wrapper.querySelector('.project-card-split-right');
    const realCard = wrapper.querySelector('.project-card-real');

    if (!leftHalf || !rightHalf || !realCard) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
      }
    });

    tl.fromTo(leftHalf,
      { x: -220, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: 'power2.out' },
      0
    )
    .fromTo(rightHalf,
      { x: 220, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: 'power2.out' },
      0
    )
    .fromTo(realCard,
      { opacity: 0 },
      { opacity: 1, duration: 0.15 },
      1.05
    )
    .to([leftHalf, rightHalf], {
      opacity: 0,
      duration: 0.15
    }, 1.05)
    .to(realCard, {
      opacity: 1,
      duration: 1.4
    }, 1.2)
    .to(realCard, {
      opacity: 0,
      duration: 0.15
    }, 2.6)
    .to([leftHalf, rightHalf], {
      opacity: 1,
      duration: 0.15
    }, 2.6)
    .to(leftHalf, {
      x: -220,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.in'
    }, 2.75)
    .to(rightHalf, {
      x: 220,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.in'
    }, 2.75);
  });

  return gsap.timeline();
};

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const certificatesTimeline = () => {
  const certCards = gsap.utils.toArray('.cert-card');
  const certSection = document.querySelector('#certifications');
  
  if (!certSection || certCards.length === 0) return;

  // Curated scattered start offsets for each card to create the "flying in from everywhere" look
  const flightOffsets = [
    { x: -250, y: -180, rotate: -30, scale: 0.65 }, // fly from top-left
    { x: 280, y: -120, rotate: 25, scale: 0.7 },   // fly from top-right
    { x: -320, y: 40, rotate: -35, scale: 0.75 },   // fly from center-left
    { x: 300, y: 150, rotate: 30, scale: 0.65 },   // fly from center-right
    { x: -200, y: 240, rotate: -20, scale: 0.75 },  // fly from bottom-left
    { x: 260, y: 200, rotate: 35, scale: 0.7 }     // fly from bottom-right
  ];

  certCards.forEach((card, idx) => {
    const offset = flightOffsets[idx % flightOffsets.length];

    gsap.fromTo(card,
      {
        x: offset.x,
        y: offset.y,
        rotation: offset.rotate,
        scale: offset.scale,
        opacity: 0
      },
      {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: certSection,
          start: 'top 82%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  return gsap.timeline();
};

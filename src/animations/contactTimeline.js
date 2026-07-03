import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const contactTimeline = () => {
  const contactSection = document.querySelector('.contact-section');
  
  if (contactSection) {
    // Reveal contact cards
    gsap.fromTo('.contact-card',
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactSection,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Continuous marquee animation
    const marquees = gsap.utils.toArray('.marquee-track');
    marquees.forEach((track, i) => {
      const w = track.offsetWidth;
      // If it's the second marquee, maybe reverse direction
      const direction = i % 2 === 0 ? -1 : 1;
      
      gsap.to(track, {
        x: direction * (w / 2),
        ease: 'none',
        duration: 30, // Default slow speed
        repeat: -1,
        // Optional: tie timescale to scroll velocity using ScrollTrigger proxy or just keep it simple
      });
    });
  }

  return gsap.timeline();
};

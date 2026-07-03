// src/animations/designSystem.js

/**
 * Animation Design System
 * 
 * Centralized motion tokens for consistency across the entire application.
 * Using a token system ensures a cohesive feel and makes global adjustments easy.
 */

export const animSystem = {
  // Durations (in seconds for GSAP, Framer Motion can use these directly too)
  duration: {
    fast: 0.3,
    medium: 0.6,
    slow: 1.0,
    verySlow: 1.5,
  },

  // Easing functions (GSAP format)
  ease: {
    out: "power3.out",
    inOut: "power2.inOut",
    smooth: "expo.out",
    elastic: "elastic.out(1, 0.5)",
  },

  // Stagger delays
  stagger: {
    small: 0.05,
    medium: 0.12,
    large: 0.2,
  },

  // Spatial / Distance tokens (in px or specific unit)
  distance: {
    small: 12,
    medium: 24,
    large: 60,
    parallaxHero: 30, // Background parallax travel distance
  },

  // Scale tokens
  scale: {
    hover: 1.03,
    click: 0.97,
    buttonHover: 1.05,
  },

  // Lift (Y translation) on hover
  lift: {
    card: -8,
    button: -2,
  },

  // Blur values
  blur: {
    hero: 12,
  }
};

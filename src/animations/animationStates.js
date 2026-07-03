// src/animations/animationStates.js

/**
 * Standard Animation States
 * 
 * Using predefined states ensures that components always animate consistently 
 * across different sections and interactions.
 */

export const states = {
  // Base states for initial render before animation
  hidden: {
    opacity: 0,
    y: 20, // Default slide up distance
  },
  
  // Fully revealed states
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  
  // Interactive hover
  hover: {
    scale: 1.03, // Will use designSystem scale.hover
    y: -8,       // Will use designSystem lift.card
    shadow: "0 20px 40px rgba(0,0,0,0.1)",
  },
  
  // Pressed/Active state
  pressed: {
    scale: 0.97, // Will use designSystem scale.click
  },
  
  // Exit states
  leaving: {
    opacity: 0,
    y: -20, // Slide up while fading out
  }
};

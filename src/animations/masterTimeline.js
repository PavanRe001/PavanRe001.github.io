import { projectsTimeline } from './projectsTimeline';
import { certificatesTimeline } from './certificatesTimeline';
import { contactTimeline } from './contactTimeline';

/**
 * Creates the Master ScrollTrigger Animations
 */
export const createMasterTimeline = () => {
  // Initialize the independent ScrollTrigger timelines for each section
  projectsTimeline();
  certificatesTimeline();
  contactTimeline();
};

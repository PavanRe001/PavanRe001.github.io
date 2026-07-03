import { useState, useRef, useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import CertificationsSection from './sections/CertificationsSection';
import ContactSection from './sections/ContactSection';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import { AnimatePresence } from 'framer-motion';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { createMasterTimeline } from './animations/masterTimeline';
import { heroInitialLoad } from './animations/heroTimeline';

function App() {
  // Locomotive Scroll — butter smooth inertia scroll
  useSmoothScroll();

  const appRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // Initialize GSAP scroll animations and hero entry when ready
  useEffect(() => {
    if (!loading) {
      heroInitialLoad();
      createMasterTimeline();
    }
  }, [loading]);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />

      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div
        ref={appRef}
        className="app-container w-full overflow-x-hidden bg-[#F8F9F4] text-[#0B1221] relative selection:bg-[#C7FF2F] selection:text-[#0B1221]"
      >
        {/* ── Static background gradients (no blur, no JS) ── */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div
            className="absolute top-[-20%] left-[-5%] w-[50%] h-[60%] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(199,255,47,0.12) 0%, transparent 70%)' }}
          />
          <div
            className="absolute top-[5%] right-[-10%] w-[45%] h-[65%] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(184,212,255,0.10) 0%, transparent 70%)' }}
          />
        </div>

        {!loading && (
          <div className="relative w-full flex flex-col">
            <HeroSection />
            <ProjectsSection />
            <CertificationsSection />
            <ContactSection />
          </div>
        )}
      </div>
    </>
  );
}

export default App;

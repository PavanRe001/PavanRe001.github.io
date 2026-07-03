import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const certificatesData = [
  {
    id: 1,
    title: 'Oracle Certified Professional',
    subtitle: 'Java SE 11 Developer',
    issuer: 'Oracle University',
    date: 'Dec 2024',
    image: '/assets/certificates/certfi 5.jpeg',
    credentialId: 'OCP-2983719',
    skills: 'Java SE • OOP • Streams • Concurrency',
    glowColor: 'rgba(248, 0, 0, 0.15)',
    type: 'oracle',
    filterGroup: 'Oracle'
  },
  {
    id: 2,
    title: 'Oracle Certified Associate',
    subtitle: 'Database Design & SQL',
    issuer: 'Oracle University',
    date: 'Oct 2024',
    image: '/assets/certificates/certifi 4.jpeg',
    credentialId: 'OCA-1092837',
    skills: 'SQL • DB Design • Normalization',
    glowColor: 'rgba(248, 0, 0, 0.15)',
    type: 'oracle',
    filterGroup: 'Oracle'
  },
  {
    id: 3,
    title: 'McKinsey Forward Certificate',
    subtitle: 'Foundational Leadership Skills',
    issuer: 'McKinsey & Company',
    date: 'Jan 2025',
    image: '/assets/certificates/certifi 6.jpeg',
    credentialId: 'MCK-FWD-9283',
    skills: 'Problem Solving • Leadership • Agile',
    glowColor: 'rgba(0, 119, 181, 0.15)',
    type: 'mckinsey',
    filterGroup: 'McKinsey'
  },
  {
    id: 4,
    title: 'BCG X GenAI Simulation',
    subtitle: 'LLMs & Prompt Engineering',
    issuer: 'BCG X',
    date: 'Dec 2024',
    image: '/assets/certificates/certifi7.jpeg',
    credentialId: 'BCGX-GENAI-198',
    skills: 'GenAI • LLMs • Prompt Engineering',
    glowColor: 'rgba(0, 163, 104, 0.15)',
    type: 'bcgx',
    filterGroup: 'BCG X'
  }
];

const InteractiveCertificateCard = ({ cert, isActive }) => {
  const activeGlow = isActive ? `0 20px 45px ${cert.glowColor}` : '0 4px 20px -10px rgba(0,0,0,0.05)';
  const isMcKinsey = cert.type === 'mckinsey';
  const isOracle = cert.type === 'oracle';
  const dotColor = isMcKinsey ? 'bg-blue-500' : isOracle ? 'bg-red-500' : 'bg-emerald-500';

  return (
    <div 
      className="w-full h-full bg-white rounded-[24px] border border-gray-200/95 p-4 flex flex-col justify-between relative overflow-hidden transition-all duration-300 group"
      style={{ boxShadow: activeGlow }}
    >
      <div className="relative w-full h-[78%] rounded-xl overflow-hidden border border-gray-150 bg-slate-50/50 flex items-center justify-center">
        <img 
          src={cert.image} 
          alt={cert.title} 
          className="w-full h-full object-contain p-1" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-3.5 mt-2">
        <div className="flex flex-col">
          <span className="text-[9px] font-black uppercase font-mono tracking-widest text-[#0052FF] flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${dotColor} animate-pulse`} />
            Verified Credential
          </span>
          <span className="text-[10px] font-extrabold text-[#0B1221] font-['Bricolage_Grotesque'] mt-1 truncate max-w-[170px] md:max-w-[200px]">
            {cert.title}
          </span>
        </div>
        <div className="flex flex-col items-end shrink-0">
          <span className="font-mono text-[8px] text-gray-400 font-bold uppercase">{cert.date}</span>
          <a 
            href="#" 
            className="text-[8.5px] font-black text-gray-800 hover:text-blue-600 font-mono tracking-wider flex items-center gap-0.5 mt-1 uppercase transition-colors"
          >
            VERIFY <ArrowRight className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

const CertificationsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const filters = ['All', 'Oracle', 'McKinsey', 'BCG X'];

  const filteredCerts = activeFilter === 'All'
    ? certificatesData
    : certificatesData.filter(c => c.filterGroup === activeFilter);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === filteredCerts.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [filteredCerts.length, activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? filteredCerts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === filteredCerts.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="certifications" 
      className="py-32 w-full max-w-[1440px] mx-auto px-6 lg:px-12 font-sans relative z-10 border-t border-gray-150 overflow-hidden bg-transparent"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.015) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.015) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px'
      }}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-[38fr_62fr] gap-16 lg:gap-24 items-center">
        
        <div className="flex flex-col">
          <h2 className="font-['Bricolage_Grotesque'] font-black text-[#0B1221] text-3xl sm:text-4xl md:text-[3.75rem] uppercase leading-[0.95] tracking-tight mb-6">
            Proof of <br />
            <span className="relative inline-block">
              Excellence
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#C7FF2F]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            <span className="text-[#C7FF2F]">.</span>
          </h2>

          <p className="font-['Manrope'] text-sm md:text-base text-gray-500 leading-relaxed max-w-sm mb-8">
            Industry-recognized certifications that validate my expertise and commitment to continuous learning.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-10">
            <div className="bg-white border border-gray-150 rounded-[20px] p-4 flex flex-col justify-center shadow-sm">
              <div className="flex items-center gap-1.5 text-slate-400 mb-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#C7FF2F]/30" />
                <span className="text-[8px] font-black tracking-wider uppercase font-mono">Total</span>
              </div>
              <span className="text-2xl font-black font-['Bricolage_Grotesque'] text-[#0B1221]">06</span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide mt-0.5">Certificates</span>
            </div>

            <div className="bg-white border border-gray-150 rounded-[20px] p-4 flex flex-col justify-center shadow-sm">
              <div className="flex items-center gap-1.5 text-slate-400 mb-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-100" />
                <span className="text-[8px] font-black tracking-wider uppercase font-mono">Verified</span>
              </div>
              <span className="text-2xl font-black font-['Bricolage_Grotesque'] text-[#0B1221]">04</span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide mt-0.5">Issuing Bodies</span>
            </div>

            <div className="bg-white border border-gray-150 rounded-[20px] p-4 flex flex-col justify-center shadow-sm">
              <div className="flex items-center gap-1.5 text-slate-400 mb-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-100" />
                <span className="text-[8px] font-black tracking-wider uppercase font-mono">Latest</span>
              </div>
              <span className="text-2xl font-black font-['Bricolage_Grotesque'] text-[#0B1221]">2025</span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide mt-0.5">Latest Year</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    setActiveIndex(0);
                  }}
                  className={`px-4 py-2 rounded-full text-[10px] font-bold font-mono uppercase tracking-widest border transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-[#0B1221] border-[#0B1221] text-[#C7FF2F] shadow-md' 
                      : 'bg-white border-gray-200 text-gray-600 hover:border-gray-400'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

        </div>

        <div className="relative flex flex-col items-center justify-center min-h-[440px] w-full">
          <div className="absolute top-0 left-12 -rotate-12 opacity-40 pointer-events-none text-xs font-serif italic text-gray-400 flex flex-col items-center">
            <span>Verified</span>
            <span>& Trusted</span>
            <svg className="w-8 h-8 text-gray-300 mt-1" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20,10 Q50,40 30,70" />
              <path d="M25,60 L30,70 L40,65" />
            </svg>
          </div>

          <div 
            className="relative w-full max-w-[340px] md:max-w-[380px] h-[250px] md:h-[280px] flex items-center justify-center"
            style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
          >
            <AnimatePresence mode="popLayout">
              {filteredCerts.map((cert, idx) => {
                const position = idx - activeIndex;
                const absPosition = Math.abs(position);

                const zIndex = 30 - absPosition;
                const scale = position === 0 ? 1.0 : absPosition === 1 ? (isMobile ? 0.72 : 0.85) : 0.7;
                const rotateY = position === 0 ? 0 : position < 0 ? (isMobile ? -14 : -18) : (isMobile ? 14 : 18);
                const rotateZ = position === 0 ? 0 : position < 0 ? -4 : 4;
                const translateX = position * (isMobile ? 65 : 110);
                const translateZ = absPosition === 0 ? 0 : -80;
                const opacity = absPosition > 2 ? 0 : 1;

                return (
                  <motion.div
                    key={cert.id}
                    layout
                    style={{
                      zIndex,
                      transformOrigin: 'center center',
                      cursor: 'pointer'
                    }}
                    animate={{
                      x: translateX,
                      z: translateZ,
                      scale,
                      rotateY,
                      rotate: rotateZ,
                      opacity
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    onClick={() => setActiveIndex(idx)}
                    className="absolute w-full h-full"
                  >
                    <InteractiveCertificateCard cert={cert} isActive={position === 0} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-3 mt-12">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest">
              {activeIndex + 1} / {filteredCerts.length}
            </span>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#0B1221] flex items-center justify-center text-[#C7FF2F] hover:bg-gray-800 transition-colors shadow-md cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

        </div>

      </div>

      <div className="w-full border-t border-gray-200/60 pt-10 mt-20 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-xs font-bold font-mono text-gray-500 uppercase tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00EA64]" />
            100% Verified
          </div>
          <div className="flex items-center gap-2 text-xs font-bold font-mono text-gray-500 uppercase tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF2F]" />
            Industry Recognized
          </div>
          <div className="flex items-center gap-2 text-xs font-bold font-mono text-gray-500 uppercase tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Real-world Skills
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border border-gray-200/80 bg-white/80 py-3.5 px-6 rounded-full shadow-sm text-[10px] md:text-xs font-['Space_Grotesk'] font-bold text-gray-400 uppercase tracking-widest relative">
          <span className="hover:text-[#F80000] transition-colors cursor-default">ORACLE</span>
          <span className="hover:text-[#0B1221] transition-colors cursor-default font-serif">McKinsey</span>
          <span className="hover:text-[#00A368] transition-colors cursor-default font-black">BCG X</span>
        </div>

      </div>

      <div className="w-full flex justify-center mt-12">
        <a 
          href="#"
          className="flex items-center gap-3 bg-white hover:bg-gray-50 text-[#0B1221] border-2 border-[#0B1221] font-['Space_Grotesk'] text-xs font-black px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
        >
          View All Credentials
          <div className="w-6 h-6 rounded-full bg-[#C7FF2F] flex items-center justify-center text-black">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </a>
      </div>

    </section>
  );
};

export default CertificationsSection;

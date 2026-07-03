import { motion } from 'framer-motion'
import { useEffect } from 'react'

const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    // Reveal app after 1.2 seconds to keep it fast
    const timer = setTimeout(() => {
      onComplete()
    }, 1200)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F8F9F4]"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative flex items-center justify-center -mb-8">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <defs>
            <mask id="sketch-mask">
              {/* Start fully black (hidden) */}
              <rect width="100%" height="100%" fill="black" />
              
              {/* Thick stroke to reveal the left side of the image (P) */}
              <motion.path
                d="M 15 90 V 10 H 55 C 75 10 75 55 55 55 H 15"
                fill="transparent"
                stroke="white"
                strokeWidth="50"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              
              {/* Thick stroke to reveal the right side of the image (R) */}
              <motion.path
                d="M 35 90 V 10 H 75 C 95 10 95 55 75 55 L 90 90"
                fill="transparent"
                stroke="white"
                strokeWidth="50"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              />
            </mask>
          </defs>

          {/* Render the EXACT sketch image */}
          <image
            href="/assets/sketch-logo.png"
            x="-8"
            y="0"
            width="100"
            height="100"
            mask="url(#sketch-mask)"
            preserveAspectRatio="xMidYMid meet"
            style={{ mixBlendMode: 'multiply' }}
          />
        </svg>
      </div>
      
      <div className="flex flex-col items-center overflow-hidden z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-400 mb-4 uppercase will-change-transform"
        >
          Building Backend Systems
        </motion.span>
        <div className="w-48 h-[2px] bg-gray-200 relative overflow-hidden">
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 bg-[#C7FF2F] origin-left will-change-transform" 
          />
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen

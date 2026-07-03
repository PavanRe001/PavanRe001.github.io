import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className="flex flex-col justify-center w-full max-w-[580px] xl:max-w-[700px] 2xl:max-w-[1200px] z-20 relative">
      <h1
        className="hero-text-stagger font-['Anton'] italic uppercase -ml-1 mb-[clamp(8px,1.4vh,14px)]"
        style={{ fontSize: 'clamp(42px, 6.8vw, 180px)', lineHeight: '0.95', letterSpacing: '0.05em' }}
      >
        <div className="text-[#0B1221]">BUILDING</div>
        <div className="text-[#C7FF2F]">BACKEND</div>
        <div className="text-[#0B1221]">SYSTEMS</div>
        <div className="lowercase tracking-normal flex items-baseline gap-2 mt-[clamp(3px,0.6vh,8px)]">
          <span
            className="font-['Caveat'] text-[#0B1221] -rotate-2 inline-block"
            style={{ fontSize: 'clamp(34px, 5.2vw, 140px)' }}
          >
            that
          </span>
          <span
            className="font-['Caveat'] text-[#C7FF2F] -rotate-2 inline-block"
            style={{ fontSize: 'clamp(34px, 5.2vw, 140px)' }}
          >
            simply work.
          </span>
        </div>
      </h1>

      <p
        className="hero-text-stagger text-gray-500 leading-relaxed max-w-[430px] xl:max-w-[500px] 2xl:max-w-[700px] font-medium mb-[clamp(14px,2.2vh,32px)]"
        style={{ fontSize: 'clamp(12px, 1.2vw, 26px)' }}
      >
        I design scalable backend systems, build reliable APIs, and create infrastructure that powers{' '}
        <span className="text-[#0B1221] font-semibold">modern applications</span>.
      </p>

      <motion.div
        className="hero-text-stagger flex flex-wrap items-center gap-3 sm:gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2.5 bg-[#C7FF2F] text-[#0B1221] font-black uppercase tracking-wide rounded-lg shadow-sm shrink-0 cursor-pointer"
          style={{ fontSize: 'clamp(10px,1vw,20px)', padding: 'clamp(12px,1.4vh,24px) clamp(24px,2.2vw,48px)', letterSpacing: '0.04em' }}
        >
          Explore My Work <ArrowRight size={14} strokeWidth={2.8} />
        </motion.button>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-stretch rounded-lg border-2 border-[#0B1221] overflow-hidden cursor-pointer shadow-sm shrink-0"
        >
          <div
            className="flex items-center font-black uppercase tracking-wide text-[#0B1221] bg-white transition-colors duration-200 hover:bg-gray-50"
            style={{ fontSize: 'clamp(10px,1vw,20px)', padding: 'clamp(12px,1.4vh,24px) clamp(18px,1.7vw,40px)', letterSpacing: '0.04em' }}
          >
            Let's Connect
          </div>
          <div className="flex items-center justify-center bg-[#4F6EF7] px-3.5 border-l-2 border-[#0B1221]">
            <ArrowRight size={15} strokeWidth={2.8} color="white" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero

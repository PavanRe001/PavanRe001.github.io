import React from 'react'
import { motion } from 'framer-motion'
import { DiscordCard, DockerCard } from './StatsCard'

const AvatarSection = () => {
  return (
    <div className="relative w-full h-full overflow-visible">

      <div
        className="absolute pointer-events-none z-0"
        style={{
          width: '520px',
          height: '380px',
          bottom: '4%',
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(199,255,47,0.18) 0%, transparent 70%)',
        }}
      />

      <div
        className="hero-avatar relative z-20 w-full h-[50vh] sm:h-[65vh] lg:h-[95vh] flex items-end justify-center"
      >
        <img
          src="/assets/avatar.png"
          alt="Pavan Reddy"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
          className="w-full h-full object-contain origin-bottom scale-100 sm:scale-110 lg:scale-125 xl:scale-[1.4] 2xl:scale-[1.5] -translate-y-2 2xl:-translate-y-8"
          style={{ objectPosition: 'center bottom' }}
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="absolute z-20" style={{ top: '8%', right: '5%' }}>
        <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
          <path d="M20 0L22.5 17.5L40 20L22.5 22.5L20 40L17.5 22.5L0 20L17.5 17.5L20 0Z" fill="#C7FF2F" />
        </svg>
      </div>

      <div className="absolute z-20" style={{ top: '34%', right: '3%' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" fill="#C7FF2F" />
        </svg>
      </div>

      <div className="absolute z-20 flex gap-[3px] -rotate-12" style={{ top: '30%', left: '5%' }}>
        <div className="w-[3px] h-4 bg-[#C7FF2F] rounded-full" />
        <div className="w-[3px] h-6 bg-[#C7FF2F] rounded-full mt-1" />
        <div className="w-[3px] h-5 bg-[#C7FF2F] rounded-full" />
      </div>

      <div className="absolute z-20" style={{ top: '17%', left: '12%' }}>
        <svg width="22" height="22" viewBox="0 0 36 36" fill="none">
          <path d="M6 30 C6 16 20 6 30 6" stroke="#C7FF2F" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M24 2 L30 6 L26 12" stroke="#C7FF2F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>

      <div className="absolute z-20 flex gap-1.5" style={{ bottom: '30%', right: '4%' }}>
        <div className="w-1.5 h-1.5 rounded-full bg-[#C7FF2F]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#C7FF2F] opacity-60" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#C7FF2F] opacity-30" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -12, y: 12 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute z-50"
        style={{
          bottom: '24%',
          left: '1%',
          transform: 'scale(0.82)',
          transformOrigin: 'bottom left',
        }}
      >
        <DiscordCard />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 12, y: 12 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute z-30"
        style={{
          bottom: '13%',
          right: '2%',
          transform: 'scale(0.78)',
          transformOrigin: 'bottom right',
          opacity: 0.92,
        }}
      >
        <DockerCard />
      </motion.div>

    </div>
  )
}

export default AvatarSection

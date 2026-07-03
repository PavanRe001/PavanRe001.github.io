import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState } from 'react'
import {
  SiPython, SiFastapi, SiPostgresql, SiDocker,
  SiRedis, SiMongodb, SiFirebase, SiGit, SiLinux
} from 'react-icons/si'

// ─── Data ─────────────────────────────────────────────────────────────────
const techs = [
  { icon: SiPython,     name: 'Python',     color: '#3776AB', level: 'Advanced',     years: '4 yrs' },
  { icon: SiFastapi,    name: 'FastAPI',     color: '#009688', level: 'Advanced',     years: '3 yrs' },
  { icon: SiPostgresql, name: 'PostgreSQL',  color: '#336791', level: 'Advanced',     years: '3 yrs' },
  { icon: SiDocker,     name: 'Docker',      color: '#2496ED', level: 'Intermediate', years: '2 yrs' },
  { icon: SiRedis,      name: 'Redis',       color: '#DC382D', level: 'Intermediate', years: '2 yrs' },
  { icon: SiMongodb,    name: 'MongoDB',     color: '#47A248', level: 'Intermediate', years: '2 yrs' },
  { icon: SiFirebase,   name: 'Firebase',    color: '#F5A623', level: 'Intermediate', years: '1 yr'  },
  { icon: SiGit,        name: 'Git',         color: '#F05032', level: 'Advanced',     years: '4 yrs' },
  { icon: SiLinux,      name: 'Linux',       color: '#FCC624', level: 'Proficient',   years: '3 yrs' },
]

const levelColors = {
  Advanced:     { bg: '#C7FF2F', text: '#0B1221' },
  Intermediate: { bg: '#0B1221', text: '#fff'    },
  Proficient:   { bg: '#4F6EF7', text: '#fff'    },
}

// ─── Single pill ──────────────────────────────────────────────────────────
const TechPill = ({ icon: Icon, name, color, level, years, mouseX }) => {
  const [hovered, setHovered] = useState(false)
  const pillRef = { current: null }

  // Apple dock: scale based on distance from cursor
  // We use a simpler approach — each pill tracks its own center X via ref
  const lc = levelColors[level]

  return (
    <motion.div
      className="relative flex flex-col items-center"
      style={{ gap: 0 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* ── Tooltip above — shows on hover ─────────────────────── */}
      <motion.div
        initial={false}
        animate={hovered
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 6, scale: 0.92 }
        }
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
        className="absolute pointer-events-none"
        style={{ bottom: 'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', zIndex: 60 }}
      >
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-black tracking-widest uppercase shadow-lg"
          style={{ background: lc.bg, color: lc.text }}
        >
          <span>{level}</span>
          <span className="opacity-60">·</span>
          <span>{years}</span>
        </div>
        {/* Arrow */}
        <div className="flex justify-center mt-[-1px]">
          <div
            className="w-0 h-0"
            style={{
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTop: `5px solid ${lc.bg}`,
            }}
          />
        </div>
      </motion.div>

      {/* ── Glass pill ─────────────────────────────────────────── */}
      <motion.div
        animate={hovered
          ? { y: -8, scale: 1.14 }
          : { y: 0, scale: 1 }
        }
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        className="flex items-center gap-2 cursor-pointer select-none"
        style={{
          background: 'rgba(255,255,255,0.82)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: hovered ? `1.5px solid ${color}44` : '1.5px solid rgba(0,0,0,0.07)',
          borderRadius: '100px',
          padding: '7px 14px',
          boxShadow: hovered
            ? `0 8px 28px ${color}30, 0 2px 8px rgba(0,0,0,0.06)`
            : '0 2px 8px rgba(0,0,0,0.05)',
          transition: 'border 0.2s, box-shadow 0.2s',
        }}
      >
        <motion.div
          animate={hovered ? { scale: 1.15 } : { scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <Icon size={15} style={{ color }} />
        </motion.div>
        <span
          className="font-semibold text-[11px] text-[#0B1221] leading-none"
          style={{ letterSpacing: '-0.01em' }}
        >
          {name}
        </span>
      </motion.div>
    </motion.div>
  )
}

// ─── Dock container ──────────────────────────────────────────────────────
const TechDock = () => {
  const mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-2.5"
    >
      {/* Glass container row */}
      <div
        className="flex items-center gap-[14px] px-5 py-3 relative"
        style={{
          background: 'rgba(255,255,255,0.65)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '100px',
          border: '1px solid rgba(0,0,0,0.07)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.9)',
        }}
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {techs.map((tech) => (
          <TechPill key={tech.name} {...tech} mouseX={mouseX} />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="flex items-center gap-2">
        <div className="w-3.5 h-5 rounded-full border-[1.5px] border-gray-300 flex justify-center pt-1">
          <div className="w-1 h-1.5 rounded-full bg-gray-400 scroll-dot" />
        </div>
        <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase">
          SCROLL TO EXPLORE
        </span>
      </div>
    </motion.div>
  )
}

export default TechDock

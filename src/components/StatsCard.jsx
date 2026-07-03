import { motion } from 'framer-motion'
import { Code2, Github } from 'lucide-react'
import { SiDiscord, SiDocker, SiPython } from 'react-icons/si'

// ─── Glassmorphism helper ──────────────────────────────────────────────────
const glassClass = "bg-white rounded-2xl border border-gray-100/80 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"

// ─── Compact floating badge (same style as Discord) ────────────────────────
const FloatingBadge = ({ bg, icon: Icon, iconSize = 20, iconColor = 'white', label, value, valueColor = '#000', accentColor }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.02 }}
    className="bg-white rounded-2xl flex items-center gap-3 shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100"
    style={{ padding: '10px 18px 10px 10px' }}
  >
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
      style={{ backgroundColor: bg }}
    >
      <Icon size={iconSize} color={iconColor} />
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase mb-1">{label}</span>
      <span className="text-[14px] font-bold" style={{ color: valueColor }}>{value}</span>
    </div>
  </motion.div>
)

// ─── Sidebar Cards ──────────────────────────────────────────────────────────
export const CurrentlyBuildingCard = ({ className }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className={`${glassClass} p-4 flex flex-col gap-3 ${className}`}
  >
   
    <p className="text-[14px] font-bold text-[#0B1221] leading-[1.3]">
      AI-Powered API<br />Analytics Platform
    </p>
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-[#C7FF2F] w-[72%] rounded-full" />
      </div>
      <span className="text-[10px] font-bold text-gray-500">72%</span>
    </div>
  </motion.div>
)

export const GithubActivityCard = ({ className }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className={`${glassClass} p-4 ${className}`}
  >
    <div className="flex items-center gap-2.5 mb-3">
      <div className="w-6 h-6 rounded-full bg-[#C7FF2F] flex items-center justify-center text-black flex-shrink-0">
        <Github size={13} strokeWidth={2.5} />
      </div>
      <span className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">GitHub Activity</span>
    </div>
    <div className="flex items-end gap-1 h-8 mb-3">
      {[4, 7, 3, 8, 5, 2, 9, 6, 4, 3, 7].map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-[2px]"
          style={{ height: `${h * 10}%`, backgroundColor: i === 6 ? '#C7FF2F' : '#E2E8F0' }}
        />
      ))}
    </div>
    <div className="flex flex-col">
      <span className="text-[14px] font-bold text-[#0B1221]">1,250+ Commits</span>
      <span className="text-[10px] text-gray-500 font-medium mt-0.5">Top 3% of developers</span>
    </div>
  </motion.div>
)

// ─── Floating Overlay Cards ─────────────────────────────────────────────────
export const DiscordCard = ({ className }) => (
  <FloatingBadge
    bg="#5865F2"
    icon={SiDiscord}
    label="Active Discord"
    value={<><span style={{ color: '#5865F2' }}>3,200+</span> members</>}
    className={className}
  />
)

export const DockerCard = ({ className }) => (
  <FloatingBadge
    bg="#2496ED"
    icon={SiDocker}
    iconSize={22}
    label="Docker Hub"
    value={<><span style={{ color: '#2496ED' }}>18</span> containers</>}
    className={className}
  />
)

export const PythonCard = ({ className }) => (
  <FloatingBadge
    bg="#3776AB"
    icon={SiPython}
    iconSize={19}
    label="Python Version"
    value={<><span style={{ color: '#3776AB' }}>3.12</span> · FastAPI</>}
    className={className}
  />
)

// ─── Small availability pill ─────────────────────────────────────────────────
export const AvailableCard = ({ className }) => (
  <div
    className={`bg-[#0B1221] text-white flex items-center gap-2 rounded-full px-4 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.25)] ${className}`}
  >
    <span className="w-2 h-2 rounded-full bg-[#C7FF2F] flex-shrink-0" />
    <span className="text-[11px] font-bold tracking-wide">Open to Work</span>
  </div>
)

import { motion } from 'framer-motion'
import { Code2, Github, Zap } from 'lucide-react'

const glassCard = "bg-white rounded-2xl border border-gray-100/80 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"

const RightPanel = () => {
  const githubBars = [4, 7, 3, 8, 5, 2, 9, 6, 4, 3, 7]

  return (
    <div className="w-full flex flex-col gap-3 lg:gap-4">

      {/* Currently Building Card */}
      <motion.div
        whileHover={{ y: -3 }}
        className={`hero-right-stagger ${glassCard} p-4`}
      >
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-6 h-6 rounded-full bg-[#C7FF2F] flex items-center justify-center text-black flex-shrink-0">
            <Code2 size={12} strokeWidth={3} />
          </div>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
            Currently Building
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF2F] animate-pulse inline-block" />
          </span>
        </div>
        <p className="text-[13px] font-bold text-[#0B1221] leading-[1.35] mb-3">
          AI-Powered API<br />Analytics Platform
        </p>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#C7FF2F] rounded-full transition-all duration-1000 ease-out"
              style={{ width: '72%' }}
            />
          </div>
          <span className="text-[10px] font-bold text-gray-500 flex-shrink-0">72%</span>
        </div>
      </motion.div>

      {/* GitHub Activity Card */}
      <motion.div
        whileHover={{ y: -3 }}
        className={`hero-right-stagger ${glassCard} p-4`}
      >
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-6 h-6 rounded-full bg-[#C7FF2F] flex items-center justify-center text-black flex-shrink-0">
            <Github size={12} strokeWidth={2.5} />
          </div>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">GitHub Activity</span>
        </div>
        <div className="flex items-end gap-[3px] h-7 mb-3">
          {githubBars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-[2px]"
              style={{ 
                height: `${h * 10}%`,
                backgroundColor: i === 6 ? '#C7FF2F' : '#E2E8F0'
              }}
            />
          ))}
        </div>
        <div>
          <p className="text-[13px] font-bold text-[#0B1221]">1,250+ Commits</p>
          <p className="text-[10px] text-gray-400 font-medium mt-0.5">Top 3% of developers</p>
        </div>
      </motion.div>

      {/* Uptime / System Live Card */}
      <motion.div
        whileHover={{ y: -3 }}
        className={`hero-right-stagger ${glassCard} p-4`}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-[#C7FF2F] flex items-center justify-center text-black flex-shrink-0">
              <Zap size={12} strokeWidth={3} />
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">APIs Live</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-[#C7FF2F]" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5 text-[11px] text-gray-500 font-medium">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#C7FF2F] inline-block" />FastAPI Server</span>
            <span className="text-[#C7FF2F] font-bold text-[10px]">99.9%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#C7FF2F] inline-block" />PostgreSQL DB</span>
            <span className="text-[#C7FF2F] font-bold text-[10px]">100%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#C7FF2F] inline-block" />Redis Cache</span>
            <span className="text-[#C7FF2F] font-bold text-[10px]">99.7%</span>
          </div>
        </div>
      </motion.div>

    </div>
  )
}

export default RightPanel

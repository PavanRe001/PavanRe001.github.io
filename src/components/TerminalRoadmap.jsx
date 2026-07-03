import React from 'react'
import { Check, Play, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const roadmapSystems = [
  {
    id: "01",
    name: "Todo List App",
    tech: "Flask + SQLAlchemy",
    progress: 50,
    statusLabel: "Architecture Phase",
    steps: [
      { name: "Planning", status: "done" },
      { name: "Research", status: "done" },
      { name: "Architecture", status: "current" },
      { name: "Development", status: "pending" },
      { name: "Testing", status: "pending" },
      { name: "Deployment", status: "pending" }
    ]
  },
  {
    id: "02",
    name: "Custom Web Scraper",
    tech: "Python + Selenium",
    progress: 50,
    statusLabel: "Architecture Phase",
    steps: [
      { name: "Planning", status: "done" },
      { name: "Research", status: "done" },
      { name: "Architecture", status: "current" },
      { name: "Development", status: "pending" },
      { name: "Testing", status: "pending" },
      { name: "Deployment", status: "pending" }
    ]
  },
  {
    id: "03",
    name: "Image Palette Generator",
    tech: "Python + Pillow",
    progress: 50,
    statusLabel: "Architecture Phase",
    steps: [
      { name: "Planning", status: "done" },
      { name: "Research", status: "done" },
      { name: "Architecture", status: "current" },
      { name: "Development", status: "pending" },
      { name: "Testing", status: "pending" },
      { name: "Deployment", status: "pending" }
    ]
  }
]

const StepIndicator = ({ step }) => {
  if (step.status === 'done') {
    return (
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full bg-[#00EA64]/10 border border-[#00EA64]/40 flex items-center justify-center text-[#00EA64] shrink-0">
          <Check className="w-3 h-3 stroke-[3]" />
        </div>
        <span className="font-['Manrope'] text-xs font-semibold text-gray-500 line-through decoration-gray-300">
          {step.name}
        </span>
      </div>
    )
  }

  if (step.status === 'current') {
    return (
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full bg-blue-50 border-2 border-blue-600 flex items-center justify-center text-blue-600 shrink-0 relative">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping absolute" />
          <Play className="w-2.5 h-2.5 fill-current" />
        </div>
        <span className="font-['Manrope'] text-xs font-black text-gray-900">
          {step.name}
          <span className="text-[8px] font-bold font-mono tracking-widest text-blue-600 ml-2 uppercase bg-blue-50 border border-blue-200 px-1 rounded">
            ACTIVE
          </span>
        </span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3 opacity-55">
      <div className="w-5 h-5 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-400 shrink-0">
        <Clock className="w-2.5 h-2.5" />
      </div>
      <span className="font-['Manrope'] text-xs font-medium text-gray-400">
        {step.name}
      </span>
    </div>
  )
}

const TerminalRoadmap = () => {
  return (
    <div className="w-full bg-[#F8F9FA] py-32 px-6 md:px-12 border-t border-gray-200/60 relative z-20">
      
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center mb-20">
        <div className="relative mb-6">
          <div className="bg-[#FDE047] text-black font-['JetBrains_Mono'] px-6 py-2.5 font-bold text-xs uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] border-2 border-black inline-block -rotate-1">
            FUTURE SYSTEMS
          </div>
          <svg className="absolute -right-8 -top-5 w-6 h-6 text-blue-600 pointer-events-none" viewBox="0 0 50 50" fill="none">
            <path d="M10 40 L 25 15 M20 45 L 40 25 M30 45 L 45 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>

        <h2 className="font-['Bricolage_Grotesque'] font-black italic text-[#0B1221] text-4xl md:text-[4.5rem] uppercase leading-[0.95] tracking-tight mb-8">
          ROADMAP: <span className="text-blue-600">WHAT'S NEXT.</span>
        </h2>
        
        <p className="font-['Manrope'] text-sm md:text-lg font-bold text-gray-800 uppercase tracking-wide">
          Continuous planning & deployment for{' '}
          <span className="relative inline-block whitespace-nowrap">
            upcoming tools.
            <svg className="absolute -bottom-2 left-0 w-full h-2.5 text-blue-600 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 3 Q 50 6 100 2" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M4 7 Q 52 9 96 6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </p>
      </div>

      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {roadmapSystems.map((system, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className="bg-white border border-gray-200/90 rounded-[28px] p-6 lg:p-8 flex flex-col justify-between hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-['JetBrains_Mono'] text-[9px] font-extrabold uppercase text-blue-600 tracking-wider">
                  SYSTEM {system.id}
                </span>
                <span className="font-['JetBrains_Mono'] text-[9px] font-bold text-gray-400 uppercase">
                  {system.tech}
                </span>
              </div>

              <h3 className="font-['Bricolage_Grotesque'] font-black text-[#0B1221] text-lg lg:text-xl leading-tight mb-6 tracking-tight group-hover:text-blue-600 transition-colors">
                {system.name}
              </h3>

              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mb-8">
                <div 
                  className="bg-blue-600 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${system.progress}%` }}
                />
              </div>

              <div className="flex flex-col gap-3.5 pl-1.5 relative">
                <div className="absolute left-3.5 top-3.5 bottom-3.5 w-[1px] bg-gray-150 z-0" />
                
                {system.steps.map((step, idx) => (
                  <div key={idx} className="relative z-10">
                    <StepIndicator step={step} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-gray-100 pt-5 mt-8">
              <span className="font-mono text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                {system.statusLabel}
              </span>
              <span className="text-[10px] font-extrabold font-mono text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded uppercase">
                {system.progress}% COMPLETE
              </span>
            </div>

          </motion.div>
        ))}
      </div>
      
    </div>
  )
}

export default TerminalRoadmap

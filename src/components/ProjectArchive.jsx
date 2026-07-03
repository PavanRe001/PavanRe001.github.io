import React from 'react'
import { motion } from 'framer-motion'
import { Github, ArrowRight } from 'lucide-react'

const KeyboardVisual = () => (
  <div className="w-full h-full bg-slate-900 rounded-2xl flex flex-col justify-center gap-2 p-4 min-h-[140px] border border-slate-800 shadow-inner relative overflow-hidden">
    <div className="flex flex-col gap-2 origin-center scale-[0.8] xs:scale-[0.88] sm:scale-100 transition-all duration-300">
      <div className="flex gap-1.5 justify-center">
        {['Q','W','E','R','T','Y','U','I','O','P'].map((key) => {
          const isAnimKey = ['W', 'E', 'R', 'U', 'O'].includes(key);
          const animClass = isAnimKey ? 'animate-key-tap' : '';
          const delay = key === 'W' ? '0.1s' : key === 'E' ? '0.4s' : key === 'R' ? '0.7s' : key === 'U' ? '0.3s' : '0.9s';
          
          return (
            <div 
              key={key} 
              className={`w-6 h-6 rounded-[6px] text-[10px] font-bold flex items-center justify-center transition-all duration-150 bg-slate-800 text-slate-400 ${animClass}`}
              style={{ animationDelay: delay }}
            >
              {key}
            </div>
          );
        })}
      </div>
      <div className="flex gap-1.5 justify-center">
        {['A','S','D','F','G','H','J','K','L'].map((key) => {
          const isAnimKey = ['A', 'S', 'F', 'H', 'K'].includes(key);
          const animClass = isAnimKey ? 'animate-key-tap' : '';
          const delay = key === 'A' ? '0.2s' : key === 'S' ? '0.5s' : key === 'F' ? '0.8s' : key === 'H' ? '1.1s' : '1.3s';
          
          return (
            <div 
              key={key} 
              className={`w-6 h-6 rounded-[6px] bg-slate-800 text-slate-400 text-[10px] font-bold flex items-center justify-center ${animClass}`}
              style={{ animationDelay: delay }}
            >
              {key}
            </div>
          );
        })}
      </div>
      <div className="flex gap-1.5 justify-center">
        <div className="w-[140px] h-6 rounded-[6px] bg-slate-800 flex items-center justify-center text-slate-500 text-[7px] tracking-widest font-mono animate-space-tap">
          SPACEBAR
        </div>
      </div>
    </div>
  </div>
)

const BreakoutVisual = () => (
  <div className="w-full h-[140px] bg-[#0c1020] rounded-2xl relative p-4 border border-slate-800 overflow-hidden shadow-inner">
    <div className="flex gap-1 mb-1">
      {[...Array(6)].map((_, i) => <div key={i} className="flex-1 h-3 bg-red-500 rounded-[2px] opacity-80" />)}
    </div>
    <div className="flex gap-1 mb-1">
      {[...Array(6)].map((_, i) => <div key={i} className={`flex-1 h-3 bg-yellow-400 rounded-[2px] ${i === 2 || i === 3 ? 'opacity-0' : 'opacity-80'}`} />)}
    </div>
    <div className="flex gap-1 mb-6">
      {[...Array(6)].map((_, i) => <div key={i} className={`flex-1 h-3 bg-green-400 rounded-[2px] ${i === 3 ? 'opacity-0' : 'opacity-80'}`} />)}
    </div>
    <div className="absolute w-2.5 h-2.5 bg-[#C7FF2F] rounded-full left-[48%] top-[55%] shadow-[0_0_10px_#C7FF2F] animate-ball-bounce" />
    <div className="absolute bottom-3 left-[32%] w-16 h-2 bg-blue-400 rounded-full animate-paddle-slide" />
  </div>
)

const WatermarkVisual = () => (
  <div className="w-full h-[140px] bg-slate-100 rounded-2xl overflow-hidden border border-gray-200 flex relative">
    <div className="flex-1 h-full flex items-center justify-center relative bg-slate-200">
      <span className="text-[10px] font-bold text-gray-500 tracking-wider">ORIGINAL</span>
    </div>
    
    <div className="absolute top-0 bottom-0 w-[2.5px] bg-[#C7FF2F] z-20 shadow-md animate-watermark-line" />
    
    <div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-slate-300 overflow-hidden z-10 animate-watermark-reveal"
    >
      <span className="text-[10px] font-bold text-gray-700 tracking-wider">PROTECTED</span>
      <div className="absolute inset-0 flex items-center justify-center rotate-12 opacity-35 text-[9px] font-black tracking-widest text-[#C7FF2F] bg-black/10 select-none">
        PAVAN REDDY
      </div>
    </div>
  </div>
)

const HanoiVisual = () => (
  <div className="w-full h-[140px] bg-[#162115] rounded-2xl flex items-end justify-around pb-4 border border-[#2d3f2b] overflow-hidden shadow-inner">
    <div className="flex flex-col items-center relative w-14">
      <div className="w-1.5 h-16 bg-gray-500 rounded-t-full absolute bottom-0" />
      <div className="w-10 h-3 bg-red-400 rounded-sm z-10 mb-0.5" />
      <div className="w-12 h-3 bg-yellow-400 rounded-sm z-10 mb-0.5 animate-hanoi-base" />
    </div>
    <div className="flex flex-col items-center relative w-14">
      <div className="w-1.5 h-16 bg-gray-500 rounded-t-full absolute bottom-0" />
      <div className="w-8 h-3 bg-[#C7FF2F] rounded-sm z-10 animate-hanoi-disk" />
    </div>
    <div className="flex flex-col items-center relative w-14">
      <div className="w-1.5 h-16 bg-gray-500 rounded-t-full absolute bottom-0" />
    </div>
  </div>
)

const SemmelweisVisual = () => (
  <div className="w-full h-[140px] bg-slate-900 rounded-2xl relative p-4 border border-slate-800 overflow-hidden shadow-inner">
    <div className="absolute top-2 left-2 text-[6px] font-mono text-slate-500">MORTALITY RATE (%)</div>
    <svg className="w-full h-full pt-4" viewBox="0 0 100 50">
      <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
      <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
      <line x1="0" y1="40" x2="100" y2="40" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
      
      <path 
        d="M 10 8 L 30 12 L 50 15 L 55 45 L 80 47 L 95 48" 
        fill="none" 
        stroke="#FF4F4F" 
        strokeWidth="2.5" 
        strokeLinecap="round"
        className="animate-svg-draw"
      />
      <line x1="52" y1="0" x2="52" y2="50" stroke="#C7FF2F" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse" />
      <text x="55" y="32" fill="#C7FF2F" className="text-[5px] font-bold font-mono" stroke="none">HANDWASHING INTRODUCED</text>
    </svg>
  </div>
)

const AudioVisual = () => (
  <div className="w-full h-full bg-slate-900 rounded-2xl relative p-4 min-h-[140px] border border-slate-800 overflow-hidden flex items-center justify-center shadow-inner">
    <div className="absolute left-2 top-[35%] w-8 h-8 opacity-25">
      <svg viewBox="0 0 20 20" fill="none" stroke="#C7FF2F" strokeWidth="1.5" className="animate-wave-move">
        <path d="M 0,10 Q 5,5 10,10 T 20,10" />
      </svg>
    </div>

    <svg className="w-[85%] h-full text-slate-400" viewBox="0 0 120 60" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="40,15 40,45 80,30" stroke="currentColor" fill="rgba(255,255,255,0.02)" />
      <line x1="15" y1="20" x2="40" y2="20" />
      <line x1="15" y1="40" x2="40" y2="40" />
      <line x1="80" y1="30" x2="105" y2="30" />
      <text x="43" y="24" fill="currentColor" stroke="none" className="text-[8px] font-bold">-</text>
      <text x="43" y="42" fill="currentColor" stroke="none" className="text-[8px] font-bold">+</text>
      <path d="M 90,30 L 90,5 L 50,5 L 50,20" />
      <path d="M 65,5 L 67,2 L 71,8 L 75,2 L 79,8 L 81,5" stroke="currentColor" />
    </svg>

    <div className="absolute right-2 top-[20%] w-10 h-10 opacity-60">
      <svg viewBox="0 0 20 20" fill="none" stroke="#00EA64" strokeWidth="2.5" className="animate-wave-move">
        <path d="M 0,10 Q 5,0 10,10 T 20,10" />
      </svg>
    </div>
  </div>
)

const bentoProjects = [
  {
    title: "Audio Amplifier Circuits",
    tech: "Electronics • MultiSim",
    category: "Hardware",
    desc: "Designed and tested custom operational amplifier configurations, active filters, and class-AB output stages.",
    updated: "Completed 2024",
    github: "#",
    colSpan: "col-span-1 md:col-span-2",
    bgClass: "bg-slate-50",
    visual: () => <AudioVisual />,
    isWide: true
  },
  {
    title: "Semmelweis Analysis",
    tech: "Python • Jupyter • Pandas",
    category: "Data Science",
    desc: "Recreated the historical dataset showing handwashing drops clinical mortality rates.",
    updated: "Completed 2025",
    github: "#",
    colSpan: "col-span-1",
    bgClass: "bg-white",
    visual: () => <SemmelweisVisual />,
    isWide: false
  },
  {
    title: "Tower of Hanoi",
    tech: "C Language • Recursion",
    category: "Algorithms",
    desc: "A step-by-step console recursion stack visualizer and disk state transition simulator.",
    updated: "Completed 2024",
    github: "#",
    colSpan: "col-span-1",
    bgClass: "bg-[#F2F7E4]",
    visual: () => <HanoiVisual />,
    isWide: false
  },
  {
    title: "Watermark Tool",
    tech: "Python • Tkinter • Pillow",
    category: "Utility",
    desc: "Desktop bulk processing application to seal and sign digital photography assets.",
    updated: "Completed 2025",
    github: "#",
    colSpan: "col-span-1",
    bgClass: "bg-white",
    visual: () => <WatermarkVisual />,
    isWide: false
  },
  {
    title: "Breakout Game",
    tech: "Python • Pygame",
    category: "Game Dev",
    desc: "Retro arcade recreation featuring custom collision physics and levels.",
    updated: "Completed 2025",
    github: "#",
    colSpan: "col-span-1",
    bgClass: "bg-slate-100",
    visual: () => <BreakoutVisual />,
    isWide: false
  },
  {
    title: "Typing Speed Test",
    tech: "Python • CLI Systems",
    category: "App",
    desc: "Interactive CLI-based typing speed evaluator assessing WPM, raw accuracy, and letter-level error telemetry.",
    updated: "Completed 2025",
    github: "#",
    colSpan: "col-span-1 md:col-span-3",
    bgClass: "bg-white",
    visual: () => <KeyboardVisual />,
    isWide: true
  }
]

const ProjectArchive = () => {
  return (
    <div className="w-full py-32 flex flex-col items-center bg-[#F8F9F9] relative z-20 border-t border-gray-100">
      
      <style>{`
        @keyframes key-tap {
          0%, 100% { background-color: rgb(30, 41, 59); color: rgb(148, 163, 184); }
          50% { background-color: #C7FF2F; color: black; box-shadow: 0 0 10px #C7FF2F; }
        }
        @keyframes space-tap {
          0%, 100% { background-color: rgb(30, 41, 59); }
          40% { background-color: #00EA64; box-shadow: 0 0 10px #00EA64; }
        }
        @keyframes ball-bounce {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(35px, -30px); }
          50% { transform: translate(15px, -60px); }
          75% { transform: translate(-35px, -15px); }
        }
        @keyframes paddle-slide {
          0%, 100% { left: 32%; }
          50% { left: 45%; }
        }
        @keyframes watermark-line {
          0%, 100% { left: 45%; }
          50% { left: 65%; }
        }
        @keyframes watermark-reveal {
          0%, 100% { clip-path: polygon(45% 0, 100% 0, 100% 100%, 45% 100%); }
          50% { clip-path: polygon(65% 0, 100% 0, 100% 100%, 65% 100%); }
        }
        @keyframes hanoi-disk {
          0%, 100% { transform: translate(0, 0); }
          30% { transform: translate(0, -60px); }
          60% { transform: translate(45px, -60px); }
          85%, 95% { transform: translate(45px, 25px); }
        }
        @keyframes svg-draw {
          0% { stroke-dashoffset: 160; }
          45%, 100% { stroke-dashoffset: 0; }
        }
        @keyframes wave-move {
          0% { transform: translateX(0); }
          100% { transform: translateX(-15px); }
        }
        
        .animate-key-tap { animation: key-tap 2s infinite ease-in-out; }
        .animate-space-tap { animation: space-tap 2.8s infinite ease-in-out; }
        .animate-ball-bounce { animation: ball-bounce 4.5s infinite linear; }
        .animate-paddle-slide { animation: paddle-slide 4.5s infinite linear; }
        .animate-watermark-line { animation: watermark-line 5s infinite ease-in-out; }
        .animate-watermark-reveal { animation: watermark-reveal 5s infinite ease-in-out; }
        .animate-hanoi-disk { animation: hanoi-disk 5.5s infinite ease-in-out; }
        .animate-svg-draw { 
          stroke-dasharray: 160; 
          stroke-dashoffset: 160; 
          animation: svg-draw 4.5s infinite ease-in-out; 
        }
        .animate-wave-move { 
          stroke-dasharray: 15; 
          animation: wave-move 1.2s infinite linear; 
        }
      `}</style>
      
      <div className="relative mb-6">
        <div className="bg-[#FDE047] text-black font-['JetBrains_Mono'] px-6 py-2.5 font-bold text-xs uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] border-2 border-black inline-block -rotate-1">
          ENGINEERING ARCHIVE.
        </div>
        <svg className="absolute -right-8 -top-5 w-6 h-6 text-blue-600 pointer-events-none" viewBox="0 0 50 50" fill="none">
          <path d="M10 40 L 25 15 M20 45 L 40 25 M30 45 L 45 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
      
      <div className="text-center max-w-5xl px-6 mb-20">
        <h2 className="font-['Bricolage_Grotesque'] font-black italic text-[#0B1221] text-4xl md:text-[4.5rem] uppercase leading-[0.95] tracking-tight mb-8">
          20+ <span className="text-blue-600">EXPERIMENTS.</span> <br />
          TOOLS. HARDWARE. ALGORITHMS.
        </h2>
        
        <p className="font-['Manrope'] text-sm md:text-lg font-bold text-gray-800 uppercase tracking-wide">
          Every project taught me{' '}
          <span className="relative inline-block whitespace-nowrap">
            something valuable.
            <svg className="absolute -bottom-2 left-0 w-full h-2.5 text-blue-600 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 3 Q 50 6 100 2" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M4 7 Q 52 9 96 6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </p>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {bentoProjects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: i * 0.05, ease: 'easeOut' }}
            className={`${project.colSpan} ${project.bgClass} border border-gray-200/80 rounded-[28px] p-6 lg:p-8 flex flex-col justify-between hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer`}
          >
            <div className={`flex flex-col ${project.isWide ? 'lg:flex-row gap-8 lg:items-center' : 'gap-6'} w-full`}>
              
              <div className={`${project.isWide ? 'lg:w-[48%] shrink-0' : 'w-full'}`}>
                {project.visual()}
              </div>

              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-['JetBrains_Mono'] text-[10px] font-extrabold uppercase text-blue-600 tracking-wider">
                    {project.category}
                  </span>
                  <a 
                    href={project.github} 
                    className="text-gray-400 hover:text-[#0B1221] transition-colors"
                    target="_blank" rel="noreferrer"
                  >
                    <Github className="w-4.5 h-4.5" />
                  </a>
                </div>

                <h3 className="font-['Bricolage_Grotesque'] font-extrabold text-[#0B1221] text-lg lg:text-xl leading-tight mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="font-['Manrope'] text-xs text-gray-500 leading-relaxed mb-4">
                  {project.desc}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 mt-auto">
                  {project.tech.split(' • ').map((t, idx) => (
                    <span 
                      key={idx}
                      className="font-['JetBrains_Mono'] text-[9px] font-bold text-gray-600 bg-gray-50 border border-gray-150 px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-6">
              <span className="font-['Inter'] text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                {project.updated}
              </span>
              <a 
                href={project.github} 
                className="flex items-center gap-1 text-[10px] font-bold font-mono text-[#0B1221] hover:text-blue-600 transition-colors"
                target="_blank" rel="noreferrer"
              >
                REPO <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </motion.div>
        ))}
      </div>
      
    </div>
  )
}

export default ProjectArchive

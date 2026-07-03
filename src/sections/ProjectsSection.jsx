import { useRef } from 'react'
import { motion } from 'framer-motion'
import FeaturedProjectPanel from '../components/FeaturedProjectPanel'
import ProjectArchive from '../components/ProjectArchive'
import TerminalRoadmap from '../components/TerminalRoadmap'

const projects = [
  {
    id: "01",
    title: "Flask Authentication System",
    status: "Production Ready",
    statusColor: "#C7FF2F",
    numberColor: "#C7FF2F",
    description: "A secure authentication system with user registration, login, and session management built with Flask.",
    metrics: [
      { value: "12", label: "REST Routes" },
      { value: "Bcrypt", label: "Password Hashing" },
      { value: "Session", label: "Based Auth" }
    ],
    tech: ["Python", "Flask", "SQLAlchemy", "Jinja2", "Bcrypt", "SQLite", "WTForms"],
    github: "https://github.com/PavanRe001/Python_Codezz/tree/main/Flask-Authentication",
    live: "#"
  },
  {
    id: "02",
    title: "Flask Blog with CKEditor",
    status: "Stable",
    statusColor: "#A855F7",
    numberColor: "#A855F7",
    description: "A full featured blogging platform with rich text editing, post management, and a clean reading experience.",
    metrics: [
      { value: "Rich Text", label: "CKEditor 5" },
      { value: "CRUD", label: "Full Operations" },
      { value: "Clean UI", label: "Responsive" }
    ],
    tech: ["Python", "Flask", "CKEditor 5", "SQLAlchemy", "Bootstrap", "SQLite", "Jinja2"],
    github: "http://github.com/PavanRe001/Python_Codezz/tree/main/Blogs%20website%20with%20real%20time%20users",
    live: "#"
  },
  {
    id: "03",
    title: "Cafe & Wifi REST API",
    status: "REST API ONLINE",
    statusColor: "#3B82F6",
    numberColor: "#3B82F6",
    description: "RESTful API for cafes with wifi and seating information. Supports full CRUD operations with clean route structure.",
    metrics: [
      { value: "8", label: "CRUD Endpoints" },
      { value: "RESTful", label: "JSON Responses" },
      { value: "100%", label: "Tested APIs" }
    ],
    tech: ["Python", "Flask", "REST API", "SQLAlchemy", "SQLite", "Marshmallow", "Postman"],
    github: "https://github.com/PavanRe001/Python_Codezz/tree/main/Coffee%20and%20Wifi%20webpg",
    live: "#"
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full flex flex-col items-center bg-[#F8F9F9] relative z-20">
      
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }} 
      />
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.03] pointer-events-none z-0" 
        style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '24px 24px', maskImage: 'radial-gradient(ellipse at top right, black, transparent)' }} 
      />

      <div className="w-full flex flex-col items-center justify-center pt-32 pb-24 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative mb-8"
        >
          <div className="bg-[#FDE047] text-black font-['JetBrains_Mono'] px-6 py-2 font-bold text-sm tracking-widest uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border border-black">
            BUILD &gt; CONSUME
          </div>
          <svg className="absolute -right-8 -top-6 w-8 h-8 text-[#C7FF2F] pointer-events-none" viewBox="0 0 50 50" fill="none">
            <path d="M10 40 L 25 15 M20 45 L 40 25 M30 45 L 45 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative"
        >
          <svg className="absolute -left-12 -top-8 w-10 h-10 text-[#FDE047] pointer-events-none" viewBox="0 0 50 50" fill="none">
            <path d="M40 40 L 15 15 M35 45 L 10 30 M25 45 L 5 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>

          <h2 className="font-['Bricolage_Grotesque'] font-black italic text-[#0B1221] text-3xl sm:text-5xl md:text-7xl uppercase leading-[1.1] tracking-tight px-4">
            EVERY STATEMENT NEEDS PROOF <br />
            WE GO <span className="bg-[#C7FF2F] text-[#0B1221] px-3 py-1 ml-2 inline-block mt-2 sm:mt-0 -rotate-1">FROM CLAIM TO CODE</span>
          </h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="font-['Manrope'] text-gray-800 text-lg md:text-xl font-medium mt-8 max-w-2xl"
        >
          Every system here is <span className="bg-[#FDE047] px-2 py-0.5 font-bold">actually</span> built, tested and deployed.
        </motion.p>

        <div className="hidden lg:flex absolute left-[5%] top-[10%] -rotate-6 flex-col items-center justify-center w-48 h-48 bg-[#FDE047] shadow-[2px_4px_12px_rgba(0,0,0,0.15)] p-4 z-20 hover:rotate-0 transition-transform duration-300">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-blue-600 -rotate-2 opacity-60" />
          <span className="font-['Bricolage_Grotesque'] font-bold text-xl text-black leading-snug text-center mt-2">
            Not just <br /> another <br /> portfolio.
          </span>
          <div className="w-16 h-0.5 bg-black mt-2 opacity-80" />
          <svg className="absolute bottom-3 right-3 w-8 h-8 text-black" viewBox="0 0 100 100" fill="none">
            <path d="M20 70 Q 40 90 60 70 T 80 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <path d="M60 30 L 85 25 L 85 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm mt-12">
          <svg
            className="w-4 h-4 text-gray-400 animate-bounce"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col gap-12 pb-32">
        <FeaturedProjectPanel project={projects[0]} />

        <div className="w-full bg-[#0F172A] py-5 rounded-2xl flex overflow-hidden relative z-10 shadow-lg border border-slate-800">
          <div className="flex whitespace-nowrap text-xs md:text-sm font-['JetBrains_Mono'] font-bold text-slate-300 uppercase tracking-widest animate-marquee">
            {[1, 2, 3, 4].map((_, i) => (
              <span key={i} className="flex items-center">
                PYTHON <span className="mx-3 text-[#C7FF2F]">•</span>
                FLASK <span className="mx-3 text-[#C7FF2F]">•</span>
                SQLITE <span className="mx-3 text-[#C7FF2F]">•</span>
                JINJA <span className="mx-3 text-[#C7FF2F]">•</span>
                BCRYPT <span className="mx-6 text-[#C7FF2F] font-black">■</span>
              </span>
            ))}
          </div>
        </div>

        <FeaturedProjectPanel project={projects[1]} alternate={true} />

        <div className="w-full bg-[#0F172A] py-5 rounded-2xl flex overflow-hidden relative z-10 shadow-lg border border-slate-800">
          <div className="flex whitespace-nowrap text-xs md:text-sm font-['JetBrains_Mono'] font-bold text-slate-300 uppercase tracking-widest animate-marquee">
            {[1, 2, 3, 4].map((_, i) => (
              <span key={i} className="flex items-center">
                REST API <span className="mx-3 text-[#C7FF2F]">•</span>
                JSON <span className="mx-3 text-[#C7FF2F]">•</span>
                CRUD <span className="mx-3 text-[#C7FF2F]">•</span>
                POSTMAN <span className="mx-3 text-[#C7FF2F]">•</span>
                SQL <span className="mx-6 text-[#C7FF2F] font-black">■</span>
              </span>
            ))}
          </div>
        </div>

        <FeaturedProjectPanel project={projects[2]} />

        <div className="w-full bg-[#0F172A] py-5 rounded-2xl flex overflow-hidden relative z-10 shadow-lg border border-slate-800">
          <div className="flex whitespace-nowrap text-xs md:text-sm font-['JetBrains_Mono'] font-bold text-slate-300 uppercase tracking-widest animate-marquee">
            {[1, 2, 3, 4].map((_, i) => (
              <span key={i} className="flex items-center">
                DATA ANALYSIS <span className="mx-3 text-[#C7FF2F]">•</span>
                PANDAS <span className="mx-3 text-[#C7FF2F]">•</span>
                NUMPY <span className="mx-3 text-[#C7FF2F]">•</span>
                MATPLOTLIB <span className="mx-6 text-[#C7FF2F] font-black">■</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <ProjectArchive />

      <TerminalRoadmap />

    </section>
  )
}

export default ProjectsSection

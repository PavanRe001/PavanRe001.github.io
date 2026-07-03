import { ArrowRight } from 'lucide-react'

const CinematicEnding = () => {
  return (
    <div className="w-full bg-[#F8F9F9] py-32 px-4 md:px-8 border-t border-gray-200 relative overflow-hidden">
      
      {/* ── Background Subtle Globe/Grid ── */}
      <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none rounded-full border-[1px] border-black flex items-center justify-center">
        <div className="w-[80%] h-[80%] rounded-full border-[1px] border-black" />
        <div className="w-[60%] h-[60%] rounded-full border-[1px] border-black absolute" />
        <div className="w-[40%] h-[40%] rounded-full border-[1px] border-black absolute" />
        <div className="w-full h-[1px] bg-black absolute" />
        <div className="h-full w-[1px] bg-black absolute" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
        
        {/* Left Side (Text) */}
        <div className="flex flex-col mb-8 md:mb-0">
          <p className="font-['JetBrains_Mono'] text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-4">
            The end is just a new beginning
          </p>
          <h2 className="font-['Bricolage_Grotesque'] font-extrabold text-[#0B1221] text-5xl md:text-6xl tracking-tight mb-2">
            Still Building.
          </h2>
          <h3 className="font-['Bricolage_Grotesque'] font-extrabold text-[#0B1221] text-2xl md:text-3xl tracking-tight mb-6">
            The best system is always the next one<span className="text-[#C7FF2F]">.</span>
          </h3>
          <p className="font-['Inter'] text-sm text-gray-500 max-w-md">
            I'm always open to discussing new ideas, collaborations and opportunities.
          </p>
        </div>

        {/* Right Side (Button) */}
        <div className="flex items-center">
          <button className="flex items-center gap-2 bg-[#0B1221] text-white font-['Space_Grotesk'] text-sm font-bold px-8 py-4 rounded-md hover:bg-gray-800 transition-colors shadow-xl">
            Let's Build Together
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default CinematicEnding

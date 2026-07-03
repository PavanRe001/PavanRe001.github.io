import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowRight, MapPin, Briefcase, FileText, Send, Star, MousePointer2, Twitter, Check } from 'lucide-react'

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  const marqueeSkills = ['Python', 'Flask', 'SQL', 'APIs', 'Linux', 'Git', 'Docker', 'React', 'FastAPI', 'AWS', 'System Design']

  return (
    <section className="relative w-full min-h-screen bg-transparent pt-32 pb-10 flex flex-col font-sans z-10 overflow-hidden" id="contact">
      
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(199,255,47,0.06) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(199,255,47,0.05) 0%, transparent 70%)' }} />

      <div className="absolute top-[15%] left-[5%] text-[#a4e80e]/40 z-0">
        <Star className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute top-[25%] right-[8%] text-gray-300 z-0">
        <Send className="w-10 h-10 -rotate-12" />
      </div>
      <div className="absolute bottom-[40%] left-[45%] text-[#a4e80e]/50 z-0">
        <MousePointer2 className="w-6 h-6 rotate-45" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full flex-grow flex flex-col">
        
        <div className="w-full border-t border-gray-200/60 pt-16 mb-16" />

        <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch justify-between mb-24">
          
          <div className="flex flex-col justify-center lg:w-[48%]">
            
            <div className="contact-card mb-8">
              <h2 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-bricolage font-extrabold text-[#0B1221] leading-[1] tracking-tight">
                BUILD <br />
                THE NEXT <br />
                <span className="relative inline-block text-[#0B1221]">
                  SYSTEM<span className="text-[#a4e80e]">.</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#a4e80e]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 2" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
            </div>
            
            <p className="contact-card text-gray-500 text-lg lg:text-xl font-medium max-w-full lg:max-w-[80%] mb-12">
              Not looking for just another job.<br />
              Looking to build products that matter.
            </p>
            
            <div className="contact-card flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C7FF2F]/20 flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-[#7FBA00]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Status</div>
                    <div className="text-sm font-semibold text-[#0B1221] flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#00EA64] animate-pulse"></div>
                      Open to Internship
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Location</div>
                    <div className="text-sm font-semibold text-[#0B1221]">Bangalore, India</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-3">Available for</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Internship', 'Freelance', 'Open Source', 'Startup Collaboration'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[15px] text-[#0B1221] font-medium">
                      <Check className="w-4 h-4 text-[#a4e80e]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card lg:w-[45%] flex items-center">
            <div className="w-full bg-white/80 border border-white/80 rounded-[32px] p-5 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.04)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C7FF2F]/5 to-transparent group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="flex flex-col gap-6 relative z-10">
                
                <a href="https://github.com/PavanRe001" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-2xl hover:bg-white transition-all shadow-sm border border-transparent hover:border-gray-100 group/link cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover/link:bg-[#0B1221] transition-colors duration-300">
                      <Github className="w-5 h-5 text-[#0B1221] group-hover/link:text-white group-hover/link:rotate-[360deg] transition-all duration-700" />
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-[#0B1221]">GitHub</div>
                      <div className="text-sm text-gray-400">github.com/PavanRe001</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover/link:text-[#0B1221] group-hover/link:-rotate-45 transition-all duration-300" />
                </a>

                <a href="https://www.linkedin.com/in/pavan-r-a93a221b1" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-2xl hover:bg-white transition-all shadow-sm border border-transparent hover:border-gray-100 group/link cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover/link:bg-[#0077b5] transition-colors duration-300">
                      <Linkedin className="w-5 h-5 text-[#0B1221] group-hover/link:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-[#0B1221]">LinkedIn</div>
                      <div className="text-sm text-gray-400">linkedin.com/in/pavan-r-a93a221b1</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover/link:text-[#0077b5] group-hover/link:-rotate-45 transition-all duration-300" />
                </a>

                <a href="https://x.com/thepavanreddyy" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-2xl hover:bg-white transition-all shadow-sm border border-transparent hover:border-gray-100 group/link cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover/link:bg-[#0B1221] transition-colors duration-300">
                      <Twitter className="w-5 h-5 text-[#0B1221] group-hover/link:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-[#0B1221]">Twitter / X</div>
                      <div className="text-sm text-gray-400">x.com/thepavanreddyy</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover/link:text-[#0B1221] group-hover/link:-rotate-45 transition-all duration-300" />
                </a>

                <a href="#" className="flex items-center justify-between p-4 rounded-2xl hover:bg-white transition-all shadow-sm border border-transparent hover:border-gray-100 group/link cursor-pointer mb-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover/link:bg-[#C7FF2F] transition-colors duration-300">
                      <FileText className="w-5 h-5 text-[#0B1221] transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-[#0B1221]">Resume</div>
                      <div className="text-sm text-gray-400">Download PDF</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover/link:text-[#0B1221] group-hover/link:translate-y-1 transition-all duration-300" />
                </a>

                <button className="w-full py-4 rounded-2xl bg-[#0B1221] text-white font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-[#1a2333] hover:shadow-[0_0_20px_rgba(199,255,47,0.3)] transition-all duration-300 group/btn">
                  LET'S CONNECT
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

              </div>
            </div>
          </div>
        </div>

        <div className="contact-card text-center mb-24 mt-auto">
          <p className="text-[1.35rem] lg:text-[1.75rem] font-serif font-medium italic text-[#0B1221]/80 max-w-3xl mx-auto leading-snug">
            "The best projects don't start with code. <br className="hidden md:block" />
            They start with a conversation."
          </p>
        </div>

      </div>

      <div className="w-full border-y border-gray-100/50 bg-white/80 overflow-hidden py-4 flex relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F9F4] via-transparent to-[#F8F9F4] z-10 pointer-events-none" />
        <div className="marquee-track flex whitespace-nowrap items-center font-mono text-sm font-bold text-gray-300 uppercase tracking-widest">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {marqueeSkills.map((skill, idx) => (
                <React.Fragment key={`${i}-${idx}`}>
                  <span className="mx-8 hover:text-[#a4e80e] transition-colors duration-300 cursor-default">{skill}</span>
                  <span className="text-gray-200">•</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 py-8 text-xs font-bold text-gray-400 uppercase tracking-widest relative z-10">
        <div>
          Designed & Engineered by <span className="text-[#0B1221]">Pavan Reddy</span>
        </div>
        <div className="mt-2 md:mt-0">
          © 2026
        </div>
      </div>
      
    </section>
  )
}

export default ContactSection

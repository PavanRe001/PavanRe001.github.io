import { Github, ArrowRight, Database } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const UIPlaceholder = ({ type }) => {
  if (type === '01') return (
    <div className="w-full h-full bg-[#111827] rounded-xl flex items-center justify-center p-4 border border-gray-800 shadow-xl overflow-hidden relative group">
      <div className="w-[85%] bg-white rounded-md shadow-lg flex flex-col items-center p-4">
        <h4 className="font-['Bricolage_Grotesque'] text-[#0B1221] font-bold text-sm mb-1">Welcome Back</h4>
        <p className="text-[8px] text-gray-400 mb-4">Sign in to your account</p>
        
        <div className="w-full h-6 bg-gray-100 rounded-sm mb-2 flex items-center px-2">
          <div className="w-2 h-2 rounded-full bg-gray-300 mr-2" />
          <div className="w-16 h-1.5 bg-gray-300 rounded-full" />
        </div>
        <div className="w-full h-6 bg-gray-100 rounded-sm mb-2 flex items-center px-2">
          <div className="w-2 h-2 rounded-full bg-gray-300 mr-2" />
          <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
        </div>
        
        <div className="w-full flex items-center gap-1 mb-4">
          <div className="w-2 h-2 border border-gray-300 rounded-sm" />
          <div className="w-10 h-1 bg-gray-200 rounded-full" />
        </div>
        
        <div className="w-full h-6 bg-blue-600 rounded-sm flex items-center justify-center">
          <div className="w-8 h-1.5 bg-white rounded-full" />
        </div>
        
        <div className="w-20 h-1 bg-gray-200 rounded-full mt-3" />
      </div>
    </div>
  )

  if (type === '02') return (
    <div className="w-full h-full bg-[#111827] rounded-xl flex items-center justify-center p-4 border border-gray-800 shadow-xl overflow-hidden relative">
      <div className="w-[90%] bg-white rounded-md shadow-lg flex flex-col p-3 h-full">
        <h4 className="font-['Bricolage_Grotesque'] text-[#0B1221] font-bold text-[10px] mb-2">Write Something Awesome <span className="text-yellow-500">✍️</span></h4>
        <div className="w-full h-4 bg-gray-100 rounded flex items-center gap-1 px-1 mb-2">
           {[...Array(6)].map((_, i) => <div key={i} className="w-2 h-2 bg-gray-300 rounded-sm" />)}
        </div>
        <div className="w-16 h-2 bg-gray-800 rounded-full mb-1" />
        <div className="w-full h-1 bg-gray-200 rounded-full mb-0.5" />
        <div className="w-3/4 h-1 bg-gray-200 rounded-full mb-2" />
        
        <div className="w-full h-[60px] bg-blue-100 rounded-sm mt-auto border border-blue-200 overflow-hidden relative">
           <div className="absolute bottom-0 w-full h-1/2 bg-blue-200 opacity-50" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 40%, 60% 80%, 30% 20%, 0 70%)'}} />
        </div>
      </div>
    </div>
  )

  if (type === '03') return (
    <div className="w-full h-full bg-[#0A0A0A] rounded-xl flex flex-col p-4 border border-gray-800 shadow-xl overflow-hidden font-['JetBrains_Mono'] text-[8px] leading-relaxed">
      <div className="text-blue-400">@app.route(<span className="text-green-400">'/api/cafes'</span>, methods=[<span className="text-green-400">'GET'</span>])</div>
      <div className="text-purple-400">def <span className="text-yellow-200">get_cafes</span>():</div>
      <div className="pl-4 text-gray-300">cafes = Cafe.query.all()</div>
      <div className="pl-4"><span className="text-purple-400">return</span> <span className="text-blue-300">jsonify</span>([cafe.to_dict() <span className="text-purple-400">for</span> cafe <span className="text-purple-400">in</span> cafes]), <span className="text-orange-400">200</span></div>
      
      <div className="mt-4 text-gray-400">[{"{"}</div>
      <div className="pl-4 text-green-300">"id": <span className="text-orange-400">1</span>,</div>
      <div className="pl-4 text-green-300">"name": <span className="text-yellow-300">"Brew & Code"</span>,</div>
      <div className="pl-4 text-green-300">"wifi": <span className="text-orange-400">true</span>,</div>
      <div className="pl-4 text-green-300">"seating": <span className="text-yellow-300">"Indoor & Outdoor"</span>,</div>
      <div className="pl-4 text-green-300">"location": <span className="text-yellow-300">"Bangalore"</span></div>
      <div className="text-gray-400">{"}"}]</div>
    </div>
  )
}

const TreePlaceholder = ({ type }) => {
  const tree = type === '01' ? [
    'auth-system/',
    '├── app/',
    '│   ├── routes/',
    '│   │   └── auth.py',
    '│   ├── models/',
    '│   │   └── user.py',
    '│   ├── templates/',
    '│   │   ├── login.html',
    '│   │   └── register.html',
    '│   └── __init__.py',
    '├── requirements.txt',
    '└── run.py'
  ] : type === '02' ? [
    'blog-app/',
    '├── app/',
    '│   ├── routes/',
    '│   │   ├── blog.py',
    '│   │   └── main.py',
    '│   ├── templates/',
    '│   │   ├── base.html',
    '│   │   └── post.html',
    '│   ├── static/',
    '│   │   └── css/',
    '│   ├── models/',
    '│   │   └── post.py',
    '├── requirements.txt',
    '└── run.py'
  ] : []

  if (type === '03') {
    return (
      <div className="w-full h-full bg-white rounded-xl flex items-center justify-center p-2 border border-gray-200 shadow-sm relative overflow-hidden">
        <div className="flex items-center w-full gap-2 px-2">
          <div className="border border-gray-300 text-[8px] px-2 py-1 rounded text-center bg-gray-50 flex-1">Client</div>
          <div className="w-4 h-[1px] bg-gray-300 shrink-0" />
          <div className="border border-blue-200 bg-blue-50 text-[8px] px-2 py-2 rounded text-center flex-1">Flask REST API</div>
          <div className="w-4 h-[1px] bg-gray-300 shrink-0" />
          <div className="border border-gray-300 text-[8px] px-2 py-1 rounded text-center bg-gray-50 flex-1 flex flex-col items-center">
            <Database className="w-3 h-3 mb-1 text-gray-400" />
            SQLite
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full bg-[#0A0A0A] rounded-xl p-4 border border-gray-800 shadow-xl overflow-hidden font-['JetBrains_Mono'] text-[8px] text-gray-300 leading-relaxed whitespace-pre">
      {tree.join('\n')}
    </div>
  )
}

const FlowchartPlaceholder = ({ type }) => {
  if (type === '03') {
    return (
      <div className="w-full h-full bg-white rounded-xl flex flex-col justify-center gap-2 p-3 border border-gray-200 shadow-sm overflow-hidden font-['JetBrains_Mono'] text-[8px]">
        <div className="flex gap-2"><span className="text-blue-500 font-bold w-6">GET</span> /api/cafes</div>
        <div className="flex gap-2"><span className="text-green-500 font-bold w-6">POST</span> /api/cafes</div>
        <div className="flex gap-2"><span className="text-orange-500 font-bold w-6">PUT</span> /api/cafes/&lt;id&gt;</div>
        <div className="flex gap-2"><span className="text-red-500 font-bold w-6">DEL</span> /api/cafes/&lt;id&gt;</div>
      </div>
    )
  }

  return (
    <div className="w-full h-full bg-white rounded-xl flex flex-col items-center justify-center p-2 border border-gray-200 shadow-sm relative overflow-hidden">
      <div className="w-16 border border-gray-200 rounded text-center bg-gray-50 mb-4 z-10 relative">
        <div className="border-b border-gray-200 text-[8px] font-bold bg-white p-0.5">User</div>
        <div className="text-[6px] text-left p-1 text-gray-500 flex flex-col gap-0.5">
          <span>id (PK)</span>
          <span>username</span>
          <span>email</span>
        </div>
      </div>
      
      <div className="w-0.5 h-6 bg-gray-300 absolute top-1/2 -translate-y-1/2" />
      
      <div className="w-16 border border-gray-200 rounded text-center bg-gray-50 mt-4 z-10 relative">
        <div className="border-b border-gray-200 text-[8px] font-bold bg-white p-0.5">Post</div>
        <div className="text-[6px] text-left p-1 text-gray-500 flex flex-col gap-0.5">
          <span>id (PK)</span>
          <span>title</span>
          <span>content</span>
          <span>author_id (FK)</span>
        </div>
      </div>
    </div>
  )
}

const FeaturedProjectCard = ({ project, isClone, alternate }) => {
  return (
    <div 
      className={`flex bg-white rounded-[24px] border border-gray-200/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] overflow-hidden w-full ${alternate ? 'flex-row-reverse' : ''} ${isClone ? 'pointer-events-none select-none' : 'hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]'}`}
      style={{ minHeight: '440px' }}
    >
      <div className={`hidden md:flex flex-col items-center pt-8 px-6 bg-gray-50/50 ${alternate ? 'border-l border-gray-100' : 'border-r border-gray-100'}`}>
        <span 
          className="text-4xl lg:text-5xl font-extrabold font-['Bricolage_Grotesque']" 
          style={{ color: project.numberColor }}
        >
          {project.id}
        </span>
        <div className="w-[2px] h-full bg-gray-100 mt-4 relative">
          <div 
            className="absolute top-0 w-full h-1/3 rounded-full" 
            style={{ backgroundColor: project.numberColor }} 
          />
        </div>
      </div>

      <div className={`flex flex-col ${alternate ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-full p-6 lg:p-8 gap-8 lg:gap-12`}>
        <div className="w-full lg:w-[35%] flex flex-col">
          <h3 className="text-2xl lg:text-3xl font-extrabold font-['Bricolage_Grotesque'] text-[#0B1221] leading-tight mb-4 tracking-tight">
            {project.title}
          </h3>
          
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md w-max mb-6">
            <span className="text-[9px] text-gray-400 font-['JetBrains_Mono'] uppercase tracking-wider font-bold">System Status</span>
            <span className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: project.statusColor }} />
            <span className="text-[11px] font-bold text-gray-700 font-['Inter']">{project.status}</span>
          </div>
          
          <p className="text-[15px] font-['Manrope'] text-gray-600 leading-relaxed mb-8">
            {project.description}
          </p>
          
          <div className="flex gap-3 mb-8 lg:mb-auto">
            {project.metrics.map((metric, i) => (
              <div key={i} className="flex-1 border border-gray-150 bg-white rounded-lg p-3 shadow-sm flex flex-col justify-center items-center text-center gap-1">
                <span className="font-['Bricolage_Grotesque'] font-bold text-lg text-[#0B1221] leading-none">
                  {metric.value}
                </span>
                <span className="font-['Inter'] text-[9px] text-gray-500 uppercase tracking-wide font-medium">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
          
          <div className="flex items-center gap-4 mt-6 relative w-max">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 bg-[#C7FF2F] text-black border-2 border-black font-['Space_Grotesk'] text-sm font-bold px-6 py-2.5 rounded hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              View Repository
              <Github className="w-4 h-4" />
            </a>

            <div className="relative group">
              <a 
                href={project.live} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 bg-transparent text-black border-2 border-transparent font-['Space_Grotesk'] text-sm font-bold px-4 py-2.5 transition-all relative z-10"
              >
                Live Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <svg 
                className="absolute left-0 -bottom-2 w-full h-4 text-blue-600 pointer-events-none" 
                viewBox="0 0 100 20" 
                preserveAspectRatio="none"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 5 Q 50 2 95 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-pulse" style={{ animationDelay: '0s' }} />
                <path d="M8 10 Q 45 8 92 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                <path d="M3 15 Q 55 12 90 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
              </svg>
            </div>

            <svg 
              className="hidden sm:block absolute -right-16 -top-12 w-20 h-20 text-blue-600 pointer-events-none z-10" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10,80 Q40,100 50,70 Q60,40 35,45 Q15,50 25,75 Q35,95 70,60 Q90,40 90,15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
              <path d="M70,25 L90,15 L95,35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" />
            </svg>
          </div>
        </div>

        <div className="w-full lg:w-[65%] flex flex-col">
          {isClone ? (
            <div className="w-full h-[280px] lg:h-[320px] rounded-[20px] bg-[#F7F8F9] border border-gray-200/40 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center animate-pulse">
                <span className="font-mono text-[9px] font-bold text-gray-400">SYS-{project.id}</span>
              </div>
            </div>
          ) : (
            <div className="w-full h-[280px] lg:h-[320px] rounded-[20px] bg-[#F7F8F9] border border-gray-200/80 p-4 lg:p-6 mb-4 flex gap-3 lg:gap-4 overflow-hidden relative shadow-inner">
              <div className="flex-1 h-full w-full sm:min-w-[140px] transform hover:scale-[1.02] transition-transform duration-300">
                <UIPlaceholder type={project.id} />
              </div>
              <div className="hidden sm:block flex-[0.8] h-full min-w-[120px] transform hover:scale-[1.02] transition-transform duration-300">
                <TreePlaceholder type={project.id} />
              </div>
              <div className="hidden sm:block flex-[0.7] h-full min-w-[100px] transform hover:scale-[1.02] transition-transform duration-300">
                <FlowchartPlaceholder type={project.id} />
              </div>
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-2 mt-auto">
            {project.tech.map((t, i) => (
              <span 
                key={i} 
                className="font-['JetBrains_Mono'] text-[10px] text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const FeaturedProjectPanel = ({ project, alternate }) => {
  const leftClip = 'polygon(0% 0%, 50% 0%, 46% 15%, 54% 30%, 46% 45%, 54% 60%, 46% 75%, 54% 90%, 50% 100%, 0% 100%)';
  const rightClip = 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 54% 90%, 46% 75%, 54% 60%, 46% 45%, 54% 30%, 46% 15%, 50% 0%)';

  return (
    <div className="project-card-wrapper relative w-full overflow-visible">
      <motion.div 
        className="project-card-real opacity-0 relative z-10 w-full"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <FeaturedProjectCard project={project} alternate={alternate} />
      </motion.div>

      <div 
        className="project-card-split-left absolute inset-0 z-20 pointer-events-none select-none w-full h-full"
        style={{ 
          clipPath: leftClip,
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'translate3d(0,0,0)'
        }}
      >
        <FeaturedProjectCard project={project} isClone={true} alternate={alternate} />
      </div>

      <div 
        className="project-card-split-right absolute inset-0 z-20 pointer-events-none select-none w-full h-full"
        style={{ 
          clipPath: rightClip,
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'translate3d(0,0,0)'
        }}
      >
        <FeaturedProjectCard project={project} isClone={true} alternate={alternate} />
      </div>
    </div>
  )
}

export default FeaturedProjectPanel

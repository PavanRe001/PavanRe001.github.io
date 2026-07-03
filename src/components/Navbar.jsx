import React from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import Button from './Button'

const Navbar = () => {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center bg-[#F8F9F4] border-b border-gray-200/50 shadow-[0_4px_32px_rgba(0,0,0,0.02)]"
    >
      <nav className="flex items-center justify-between w-full max-w-[2560px] px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-28 h-[64px] lg:h-[72px] 2xl:h-[90px]">
        <div className="flex items-center gap-4">
          <img
            src="/assets/logo.png"
            alt="PR Logo"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentElement.innerHTML = '<div class="h-[40px] w-[40px] rounded-xl bg-[#C7FF2F] flex items-center justify-center font-black text-black text-sm">PR</div>'
            }}
            className="h-[55px] w-auto object-contain"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-[17px] font-black leading-none tracking-tight text-[#0B1221]">
              PAVAN <span className="text-[#C7FF2F]" style={{ filter: 'brightness(0.85)' }}>REDDY</span>
            </h1>
            <span className="text-[10px] font-medium text-gray-500 mt-0.5 tracking-wide">Backend Python Engineer</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-[13px] font-semibold text-gray-500 hover:text-[#0B1221] transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="primary" className="hidden sm:flex text-[12px] h-9 px-4 py-0 font-bold !rounded-sm">
            Download Resume <Download size={13} />
          </Button>
        </div>
      </nav>
    </motion.header>
  )
}

export default Navbar

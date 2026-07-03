import { motion } from 'framer-motion'
import { cn } from '../utils/cn'

const Button = ({ children, variant = 'primary', className, icon: Icon, ...props }) => {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium transition-all duration-300 rounded-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)]"
  
  const variants = {
    primary: "bg-[var(--text)] text-white hover:bg-gray-800 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]",
    secondary: "bg-white text-[var(--text)] border border-[var(--border)] shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:bg-gray-50",
    outline: "bg-transparent text-[var(--text)] border border-[var(--text)] hover:bg-[var(--text)] hover:text-white",
  }

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
      {Icon && <Icon size={16} />}
    </motion.button>
  )
}

export default Button

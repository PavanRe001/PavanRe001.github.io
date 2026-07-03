import { motion } from 'framer-motion'
import { cn } from '../utils/cn'

const GlassCard = ({ children, className, strong = false, ...props }) => {
  return (
    <motion.div
      className={cn(
        'rounded-2xl relative overflow-hidden',
        strong ? 'glass-card-strong' : 'glass-card',
        className
      )}
      {...props}
    >
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none"></div>
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

export default GlassCard

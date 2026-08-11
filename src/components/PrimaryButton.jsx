import { motion } from 'framer-motion'

export default function PrimaryButton({ children, onClick, variant = 'solid', className = '', type = 'button', ...rest }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 min-h-[48px] select-none'

  const styles =
    variant === 'solid'
      ? 'bg-gradient-to-r from-dusty-rose to-muted-rose text-ivory shadow-card hover:brightness-105 active:brightness-95'
      : 'bg-transparent border border-cocoa/25 text-cocoa hover:bg-cocoa/5'

  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  )
}

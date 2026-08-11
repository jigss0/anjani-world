import { motion } from 'framer-motion'
import PetalField from './PetalField.jsx'
import { content } from '../content.js'

export default function FinalScreen() {
  const { line1, line2, line3, line4, signature } = content.finalScreen
  return (
    <div className="relative min-h-[100dvh] w-full bg-ivory safe-px flex flex-col items-center justify-center text-center overflow-hidden">
      <PetalField count={7} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-xs space-y-3"
      >
        <p className="font-serif2 text-xl text-cocoa/70">{line1}</p>
        <p className="font-serif2 text-xl text-cocoa/70 mb-6">{line2}</p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-sm text-cocoa/40 tracking-wide"
        >
          {line3}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="font-display text-2xl text-cocoa text-balance"
        >
          {line4}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="font-script text-2xl text-muted-rose pt-6"
        >
          {signature}
        </motion.p>
      </motion.div>
    </div>
  )
}

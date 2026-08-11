import { motion } from 'framer-motion'
import PetalField from './PetalField.jsx'
import PrimaryButton from './PrimaryButton.jsx'
import { content } from '../content.js'

export default function Opening({ onNext }) {
  const { greeting, lines, button } = content.opening

  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center bg-gradient-to-b from-ivory to-blush safe-px overflow-hidden">
      <PetalField count={12} />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 flex max-w-sm flex-col items-center text-center"
      >
        <span className="font-script text-2xl text-muted-rose mb-3">for you ♡</span>

        <h1 className="font-display text-4xl sm:text-5xl text-cocoa leading-tight text-balance">
          {greeting}
        </h1>

        <div className="mt-6 space-y-4">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.5 }}
              className="font-serif2 text-xl sm:text-2xl text-cocoa/80 whitespace-pre-line leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 + lines.length * 0.5 + 0.3 }}
          className="mt-10"
        >
          <PrimaryButton onClick={onNext}>
            {button} <span aria-hidden="true">→</span>
          </PrimaryButton>
        </motion.div>
      </motion.div>
    </div>
  )
}

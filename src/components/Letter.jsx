import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail } from 'lucide-react'
import PrimaryButton from './PrimaryButton.jsx'
import { content } from '../content.js'

export default function Letter({ onNext }) {
  const { intro, openButton, paragraphs } = content.letter
  const [opened, setOpened] = useState(false)
  const [index, setIndex] = useState(0)

  const isLast = index === paragraphs.length - 1

  const advance = () => {
    if (isLast) {
      onNext()
      return
    }
    setIndex((i) => i + 1)
  }

  if (!opened) {
    return (
      <div className="relative min-h-[100dvh] w-full bg-gradient-to-b from-blush to-ivory safe-px py-24 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-sm text-center"
        >
          <p className="font-serif2 text-xl text-cocoa/75 mb-10 text-balance">{intro}</p>

          <motion.button
            onClick={() => setOpened(true)}
            whileTap={{ scale: 0.97 }}
            className="group relative mx-auto flex h-40 w-56 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-champagne/50 to-peach/50 border border-dusty-rose/30 shadow-soft"
          >
            <Mail className="h-8 w-8 text-muted-rose mb-2" strokeWidth={1.3} />
            <span className="font-script text-xl text-cocoa/70">for Anjani</span>
          </motion.button>

          <div className="mt-8">
            <PrimaryButton onClick={() => setOpened(true)}>{openButton}</PrimaryButton>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div
      className="relative min-h-[100dvh] w-full bg-gradient-to-b from-ivory to-blush safe-px py-24 flex flex-col items-center justify-center"
      onClick={advance}
    >
      <div className="w-full max-w-sm">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="font-serif2 text-2xl sm:text-3xl leading-relaxed text-cocoa text-center whitespace-pre-line text-balance min-h-[140px] flex items-center justify-center"
          >
            {paragraphs[index]}
          </motion.p>
        </AnimatePresence>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex gap-1">
            {paragraphs.map((_, i) => (
              <span
                key={i}
                className={`h-1 w-1 rounded-full transition-colors ${i <= index ? 'bg-muted-rose' : 'bg-cocoa/15'}`}
              />
            ))}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              advance()
            }}
            className="text-sm text-cocoa/45 tracking-wide"
          >
            {isLast ? 'continue →' : 'tap to continue'}
          </button>
        </div>
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PrimaryButton from './PrimaryButton.jsx'
import { content } from '../content.js'

export default function FinalSurprise({ onNext }) {
  const { teaser, button, steps } = content.finalSurprise
  const [started, setStarted] = useState(false)
  const [stepIndex, setStepIndex] = useState(0)
  const [showHug, setShowHug] = useState(false)
  const [showContinue, setShowContinue] = useState(false)

  useEffect(() => {
    if (!started) return
    if (stepIndex >= steps.length) return

    // show the hug animation right after "For a second."
    if (stepIndex === 2) setShowHug(true)

    const delay = stepIndex === 0 ? 1400 : stepIndex === 1 ? 1600 : stepIndex === 2 ? 2600 : 1800
    const t = setTimeout(() => {
      if (stepIndex === steps.length - 1) {
        setShowContinue(true)
        return
      }
      setStepIndex((i) => i + 1)
    }, delay)
    return () => clearTimeout(t)
  }, [started, stepIndex, steps.length])

  if (!started) {
    return (
      <div className="relative min-h-[100dvh] w-full bg-gradient-to-b from-ivory to-blush safe-px py-24 flex flex-col items-center justify-center text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-[13px] tracking-[0.18em] uppercase text-cocoa/45 mb-8">{teaser}</p>
          <PrimaryButton onClick={() => setStarted(true)}>{button}</PrimaryButton>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="relative min-h-[100dvh] w-full bg-gradient-to-b from-blush to-peach/30 safe-px py-24 flex flex-col items-center justify-center overflow-hidden">
      <AnimatePresence>
        {showHug && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative h-56 w-56">
              <motion.div
                animate={{ x: [-26, -6, -26], rotate: [-6, 0, -6] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 top-1/2 h-36 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-gradient-to-br from-dusty-rose/70 to-peach/60 blur-[1px]"
              />
              <motion.div
                animate={{ x: [26, 6, 26], rotate: [6, 0, 6] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 top-1/2 h-36 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-gradient-to-bl from-champagne/70 to-muted-rose/50 blur-[1px]"
              />
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl"
              >
                ♡
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-sm text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={stepIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl sm:text-3xl text-cocoa text-balance"
          >
            {steps[Math.min(stepIndex, steps.length - 1)]}
          </motion.p>
        </AnimatePresence>

        {showContinue && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-10">
            <PrimaryButton onClick={onNext}>
              Continue <span aria-hidden="true">→</span>
            </PrimaryButton>
          </motion.div>
        )}
      </div>
    </div>
  )
}

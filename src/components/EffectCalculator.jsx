import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PrimaryButton from './PrimaryButton.jsx'
import { content } from '../content.js'

export default function EffectCalculator({ onNext }) {
  const { heading, buttons, overloadLabel, overloadText, footnote } = content.effectCalculator
  const [active, setActive] = useState(null)
  const [tapped, setTapped] = useState(() => new Set())

  const handleTap = (btn) => {
    setActive(btn)
    setTapped((prev) => new Set(prev).add(btn.label))
  }

  const allTapped = tapped.size === buttons.length

  return (
    <div className="relative min-h-[100dvh] w-full bg-gradient-to-b from-ivory to-peach/25 safe-px py-24 flex flex-col items-center">
      <div className="w-full max-w-md">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl text-cocoa text-center text-balance mb-8"
        >
          {heading}
        </motion.h2>

        {/* Live meter */}
        <div className="rounded-3xl bg-ivory/80 backdrop-blur border border-dusty-rose/20 shadow-soft px-5 py-6 mb-6 min-h-[104px]">
          {active ? (
            <motion.div key={active.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-[11px] tracking-[0.14em] uppercase text-cocoa/55">{active.label}</span>
                <span className="font-serif2 text-lg text-muted-rose font-medium">+{active.value}%</span>
              </div>
              <div className="rose-meter-track h-2">
                <motion.div
                  className="rose-meter-fill"
                  initial={{ width: '0%' }}
                  animate={{ width: `${active.value}%` }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ) : (
            <p className="text-center text-sm text-cocoa/40 py-4">Tap a button below to run the calculation.</p>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-2.5">
          {buttons.map((btn) => (
            <button
              key={btn.label}
              onClick={() => handleTap(btn)}
              className={`rounded-full border px-4 py-2.5 text-xs font-medium tracking-wide transition-colors min-h-[44px] ${
                tapped.has(btn.label)
                  ? 'border-muted-rose/40 bg-blush text-cocoa'
                  : 'border-cocoa/15 bg-transparent text-cocoa/70 hover:bg-blush/60'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {allTapped && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-8 rounded-3xl border border-muted-rose/30 bg-gradient-to-br from-blush to-peach/50 px-6 py-7 text-center"
            >
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted-rose mb-2">{overloadLabel}</p>
              <p className="font-serif2 text-lg text-cocoa mb-1.5 text-balance">{overloadText}</p>
              <p className="text-sm text-cocoa/50 italic mb-6">{footnote}</p>
              <PrimaryButton onClick={onNext}>
                Continue <span aria-hidden="true">→</span>
              </PrimaryButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

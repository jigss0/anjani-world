import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PrimaryButton from './PrimaryButton.jsx'
import { content } from '../content.js'

export default function Diagnostics({ onNext }) {
  const { heading, subtitle, stats, verdictLabel, verdict, footnote, button } = content.diagnostics
  const [showVerdict, setShowVerdict] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowVerdict(true), 600 + stats.length * 220)
    return () => clearTimeout(t)
  }, [stats.length])

  return (
    <div className="relative min-h-[100dvh] w-full bg-gradient-to-b from-blush to-ivory safe-px py-24 flex flex-col items-center">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="font-script text-lg text-muted-rose mb-1">for you ♡</p>
          <h2 className="font-display text-3xl sm:text-4xl text-cocoa">{heading}</h2>
          <p className="mt-2 text-sm tracking-[0.15em] uppercase text-cocoa/50">{subtitle}</p>
        </motion.div>

        <div className="space-y-5 rounded-3xl bg-ivory/70 backdrop-blur px-5 py-6 shadow-soft border border-dusty-rose/15">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
            >
              <div className="flex items-baseline justify-between mb-1.5">
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-cocoa/60">
                  {stat.label}
                </span>
                <span className="font-serif2 text-base text-muted-rose font-medium">{stat.display}</span>
              </div>
              <div className="rose-meter-track">
                <motion.div
                  className="rose-meter-fill"
                  initial={{ width: '0%' }}
                  animate={{ width: `${stat.value}%` }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {showVerdict && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-8 text-center rounded-3xl border border-champagne/60 bg-gradient-to-br from-champagne/30 to-peach/20 px-6 py-6"
          >
            <p className="text-[11px] tracking-[0.2em] uppercase text-cocoa/50 mb-2">{verdictLabel}</p>
            <p className="font-display text-2xl text-cocoa mb-1.5">{verdict}</p>
            <p className="text-sm text-cocoa/55 italic">{footnote}</p>

            <div className="mt-6">
              <PrimaryButton onClick={onNext}>
                {button} <span aria-hidden="true">→</span>
              </PrimaryButton>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

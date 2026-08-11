import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import PrimaryButton from './PrimaryButton.jsx'
import { content } from '../content.js'

function FlipCard({ text, index }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <motion.button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.5) }}
      className="relative h-32 w-full [perspective:1000px] text-left"
      aria-label={flipped ? text : 'Tap to reveal'}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: 'easeInOut' }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        {/* front */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl border border-dusty-rose/25 bg-ivory shadow-soft [backface-visibility:hidden]"
        >
          <Heart className="h-4 w-4 text-dusty-rose" strokeWidth={1.5} />
          <span className="text-[11px] tracking-[0.15em] uppercase text-cocoa/40">Tap to reveal</span>
        </div>
        {/* back */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blush to-peach/60 px-4 shadow-card [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <p className="text-center font-serif2 text-lg text-cocoa leading-snug">{text}</p>
        </div>
      </motion.div>
    </motion.button>
  )
}

export default function ThingsINotice({ onNext }) {
  const { heading, cards, finalCard } = content.thingsINotice
  return (
    <div className="relative min-h-[100dvh] w-full bg-ivory safe-px py-24 flex flex-col items-center">
      <div className="w-full max-w-lg">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl text-cocoa text-center text-balance mb-2"
        >
          {heading}
        </motion.h2>
        <p className="text-center text-sm text-cocoa/50 mb-8">Tap each card ♡</p>

        <div className="grid grid-cols-2 gap-3.5">
          {cards.map((c, i) => (
            <FlipCard key={i} text={c} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.7 }}
          className="mt-8 rounded-3xl border border-champagne/60 bg-gradient-to-br from-champagne/25 to-blush px-6 py-7 text-center"
        >
          <p className="font-serif2 text-lg text-cocoa/75 mb-2">{finalCard.lead}</p>
          <p className="font-display text-2xl text-cocoa mb-6 text-balance">{finalCard.punch}</p>
          <PrimaryButton onClick={onNext}>
            Continue <span aria-hidden="true">→</span>
          </PrimaryButton>
        </motion.div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import PrimaryButton from './PrimaryButton.jsx'
import { content } from '../content.js'

export default function Flirt({ onNext }) {
  const { heading, subheading, button } = content.flirt
  const messages = content.flirtyMessages
  const [current, setCurrent] = useState(null)
  const [count, setCount] = useState(0)

  const generate = () => {
    let next = current;
    if (messages.length > 1) {
      while (next === current) {
        next = messages[Math.floor(Math.random() * messages.length)]
      }
    } else {
      next = messages[0]
    }
    setCurrent(next)
    setCount((c) => c + 1)
  }

  return (
    <div className="relative min-h-[100dvh] w-full bg-gradient-to-b from-peach/25 to-ivory safe-px py-24 flex flex-col items-center justify-center">
      <div className="w-full max-w-sm text-center">
        <h2 className="font-display text-2xl sm:text-3xl text-cocoa text-balance mb-1.5">{heading}</h2>
        <p className="text-sm text-cocoa/55 mb-8">{subheading}</p>

        <div className="min-h-[120px] flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            {current ? (
              <motion.p
                key={current}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="font-serif2 text-2xl text-cocoa leading-snug text-balance px-2"
              >
                “{current}”
              </motion.p>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-cocoa/30">
                <Sparkles className="h-6 w-6 mx-auto" strokeWidth={1.5} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <PrimaryButton onClick={generate}>{button}</PrimaryButton>

        {count >= 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8">
            <button
              onClick={onNext}
              className="text-sm text-cocoa/45 underline underline-offset-4 hover:text-cocoa/70 min-h-[44px]"
            >
              Okay, continue →
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

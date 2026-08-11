import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X } from 'lucide-react'
import PrimaryButton from './PrimaryButton.jsx'
import { content } from '../content.js'

export default function Quiz({ onNext }) {
  const { heading, questions, highScoreText, lowScoreText, highScoreThreshold, rewardLabel, rewardText } = content.quiz
  const [qIndex, setQIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const question = questions[qIndex]
  const isLast = qIndex === questions.length - 1

  const choose = (i) => {
    if (selected !== null) return
    setSelected(i)
    if (i === question.correctIndex) setScore((s) => s + 1)
  }

  const advance = () => {
    if (isLast) {
      setFinished(true)
      return
    }
    setQIndex((q) => q + 1)
    setSelected(null)
  }

  if (finished) {
    const passed = score / questions.length >= highScoreThreshold
    return (
      <div className="relative min-h-[100dvh] w-full bg-gradient-to-b from-blush to-champagne/30 safe-px py-24 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-sm text-center rounded-3xl bg-ivory/80 backdrop-blur border border-dusty-rose/20 shadow-soft px-6 py-8"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-cocoa/45 mb-3">
            {score} / {questions.length} correct
          </p>
          <p className="font-display text-2xl text-cocoa whitespace-pre-line mb-6 text-balance">
            {passed ? highScoreText : lowScoreText}
          </p>
          <div className="rounded-2xl border border-champagne/70 bg-gradient-to-br from-champagne/30 to-peach/20 px-5 py-5 mb-6">
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted-rose mb-1.5">{rewardLabel}</p>
            <p className="text-sm text-cocoa/70">{rewardText}</p>
          </div>
          <PrimaryButton onClick={onNext}>
            Continue <span aria-hidden="true">→</span>
          </PrimaryButton>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="relative min-h-[100dvh] w-full bg-gradient-to-b from-blush to-champagne/30 safe-px py-24 flex flex-col items-center">
      <div className="w-full max-w-md">
        <h2 className="font-display text-2xl sm:text-3xl text-cocoa text-center text-balance mb-4">{heading}</h2>

        {/* progress */}
        <div className="flex gap-1.5 mb-8 justify-center">
          {questions.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === qIndex ? 'w-6 bg-muted-rose' : i < qIndex ? 'w-3 bg-dusty-rose/70' : 'w-3 bg-cocoa/10'
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={qIndex}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-ivory/85 backdrop-blur border border-dusty-rose/20 shadow-soft px-5 py-6"
          >
            <p className="font-serif2 text-xl text-cocoa mb-5 text-balance">{question.question}</p>

            <div className="space-y-2.5">
              {question.options.map((opt, i) => {
                const isCorrect = i === question.correctIndex
                const isChosen = i === selected
                let stateClasses = 'border-cocoa/15 bg-transparent text-cocoa/80 hover:bg-blush/50'
                if (selected !== null) {
                  if (isCorrect) stateClasses = 'border-muted-rose bg-blush text-cocoa'
                  else if (isChosen) stateClasses = 'border-cocoa/15 bg-transparent text-cocoa/40'
                }
                return (
                  <button
                    key={i}
                    onClick={() => choose(i)}
                    disabled={selected !== null}
                    className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 text-left text-sm transition-colors min-h-[48px] ${stateClasses}`}
                  >
                    <span>{opt}</span>
                    {selected !== null && isCorrect && <Check className="h-4 w-4 shrink-0 text-muted-rose" />}
                    {selected !== null && isChosen && !isCorrect && <X className="h-4 w-4 shrink-0 text-cocoa/30" />}
                  </button>
                )
              })}
            </div>

            {selected !== null && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 text-center">
                <p className="text-sm text-cocoa/55 italic mb-4">
                  {selected === question.correctIndex ? 'You know me. ♡' : "Close enough — I'll allow it."}
                </p>
                <PrimaryButton onClick={advance}>
                  {isLast ? 'See my score' : 'Next'} <span aria-hidden="true">→</span>
                </PrimaryButton>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

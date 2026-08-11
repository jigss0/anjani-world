import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Folder, Lock, X, Unlock } from 'lucide-react'
import PrimaryButton from './PrimaryButton.jsx'
import MemoryCard from './MemoryCard.jsx'
import { content } from '../content.js'

function HoldToUnlock({ file }) {
  const [progress, setProgress] = useState(0)
  const [unlocked, setUnlocked] = useState(false)
  const frameRef = useRef(null)
  const startRef = useRef(null)

  const step = (ts) => {
    if (!startRef.current) startRef.current = ts
    const elapsed = ts - startRef.current
    const pct = Math.min(1, elapsed / 3000)
    setProgress(pct)
    if (pct >= 1) {
      setUnlocked(true)
      return
    }
    frameRef.current = requestAnimationFrame(step)
  }

  const start = () => {
    if (unlocked) return
    startRef.current = null
    frameRef.current = requestAnimationFrame(step)
  }
  const stop = () => {
    if (unlocked) return
    cancelAnimationFrame(frameRef.current)
    startRef.current = null
    setProgress(0)
  }

  if (unlocked) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4 text-muted-rose">
          <Unlock className="h-4 w-4" />
          <span className="text-[11px] tracking-[0.2em] uppercase">{file.unlockedLabel}</span>
        </div>
        <div className="space-y-3">
          {file.revealLines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.4 }}
              className="font-serif2 text-lg text-cocoa leading-relaxed text-balance"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col items-center text-center py-4">
      <p className="text-[11px] tracking-[0.2em] uppercase text-muted-rose mb-1">{file.lockLabel}</p>
      <p className="text-sm text-cocoa/55 mb-6">{file.lockSubtext}</p>
      <button
        onPointerDown={start}
        onPointerUp={stop}
        onPointerLeave={stop}
        className="relative flex h-24 w-24 items-center justify-center rounded-full border border-muted-rose/30 bg-blush select-none touch-none"
        aria-label={file.holdInstruction}
      >
        <svg className="absolute inset-0 h-full w-full -rotate-90">
          <circle cx="48" cy="48" r="42" fill="none" stroke="#EFE2D8" strokeWidth="5" />
          <circle
            cx="48"
            cy="48"
            r="42"
            fill="none"
            stroke="#B97878"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 42}
            strokeDashoffset={2 * Math.PI * 42 * (1 - progress)}
            style={{ transition: progress === 0 ? 'stroke-dashoffset 0.2s ease-out' : 'none' }}
          />
        </svg>
        <Lock className="h-6 w-6 text-muted-rose" strokeWidth={1.5} />
      </button>
      <p className="mt-4 text-xs text-cocoa/40">{file.holdInstruction}</p>
    </div>
  )
}

function FileContent({ file }) {
  if (file.type === 'text') {
    return (
      <div className="space-y-4">
        {file.entries.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.15 }}
            className="font-serif2 text-lg text-cocoa leading-relaxed text-balance"
          >
            {line}
          </motion.p>
        ))}
      </div>
    )
  }

  if (file.type === 'memories') {
    const memories = (file.memoryIndexes || []).map((idx) => content.photos[idx]).filter(Boolean)
    return (
      <div className="grid grid-cols-2 gap-3">
        {memories.length > 0 ? (
          memories.map((m, i) => <MemoryCard key={i} {...m} index={i} aspect="aspect-square" />)
        ) : (
          <p className="col-span-2 text-center text-sm text-cocoa/45 py-6">Memories coming soon ♡</p>
        )}
      </div>
    )
  }

  if (file.type === 'classified') {
    return <HoldToUnlock file={file} />
  }

  return null
}

export default function PrivateFiles({ onNext }) {
  const { heading, files } = content.privateFiles
  const [openFile, setOpenFile] = useState(null)

  return (
    <div className="relative min-h-[100dvh] w-full bg-ivory safe-px py-24 flex flex-col items-center">
      <div className="w-full max-w-md">
        <h2 className="font-display text-3xl sm:text-4xl text-cocoa text-center text-balance mb-8">{heading}</h2>

        <div className="space-y-3">
          {files.map((file) => (
            <button
              key={file.id}
              onClick={() => setOpenFile(file)}
              className="flex w-full items-center gap-4 rounded-2xl border border-dusty-rose/20 bg-ivory/70 px-4 py-4 text-left shadow-soft hover:bg-blush/40 transition-colors min-h-[64px]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blush to-peach/60">
                {file.type === 'classified' ? (
                  <Lock className="h-[18px] w-[18px] text-muted-rose" strokeWidth={1.5} />
                ) : (
                  <Folder className="h-[18px] w-[18px] text-muted-rose" strokeWidth={1.5} />
                )}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] tracking-[0.18em] uppercase text-cocoa/40">{file.code}</p>
                <p className="font-serif2 text-lg text-cocoa truncate">{file.title}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 text-center">
          <PrimaryButton onClick={onNext}>
            Continue <span aria-hidden="true">→</span>
          </PrimaryButton>
        </div>
      </div>

      <AnimatePresence>
        {openFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-cocoa/40 backdrop-blur-sm safe-px"
            onClick={() => setOpenFile(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md max-h-[85dvh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-ivory px-6 py-7 pb-[max(1.75rem,env(safe-area-inset-bottom))] shadow-soft"
            >
              <button
                onClick={() => setOpenFile(null)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-blush/70 text-cocoa/60 hover:text-cocoa"
              >
                <X className="h-4 w-4" />
              </button>
              <p className="text-[10px] tracking-[0.18em] uppercase text-cocoa/40 mb-1">{openFile.code}</p>
              <h3 className="font-display text-2xl text-cocoa mb-5 pr-8">{openFile.title}</h3>
              <FileContent file={openFile} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

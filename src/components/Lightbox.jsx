import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Camera } from 'lucide-react'

export default function Lightbox({ memory, onClose }) {
  const [errored, setErrored] = useState(false)
  if (!memory) return null
  const hasImage = Boolean(memory.src) && !errored

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-cocoa/80 backdrop-blur-sm safe-px py-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md max-h-full flex flex-col items-center"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute -top-3 -right-1 sm:right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-cocoa"
          >
            <X className="h-[18px] w-[18px]" />
          </button>

          <div className="w-full overflow-hidden rounded-2xl shadow-soft">
            {hasImage ? (
              <img
                src={memory.src}
                alt={memory.caption || 'Memory'}
                onError={() => setErrored(true)}
                className="w-full max-h-[70dvh] object-contain bg-cocoa/5"
              />
            ) : (
              <div className="flex aspect-[4/5] w-full flex-col items-center justify-center bg-gradient-to-br from-blush via-peach/70 to-champagne">
                <Camera className="mb-3 h-7 w-7 text-cocoa/40" strokeWidth={1.5} />
                <p className="font-script text-xl text-cocoa/60">Your memory will appear here</p>
              </div>
            )}
          </div>

          {(memory.caption || memory.date) && (
            <div className="mt-4 text-center px-4">
              {memory.caption && <p className="font-serif2 text-lg text-ivory">{memory.caption}</p>}
              {memory.date && <p className="text-xs text-ivory/60 mt-1">{memory.date}</p>}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

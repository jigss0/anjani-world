import { useState } from 'react'
import { Camera } from 'lucide-react'
import { motion } from 'framer-motion'

// Shows the real photo if `src` resolves; otherwise shows an elegant
// placeholder. Never shows a broken-image icon.
export default function MemoryCard({ src, caption, date, aspect = 'aspect-[4/5]', onClick, index = 0 }) {
  const [errored, setErrored] = useState(false)
  const hasImage = Boolean(src) && !errored

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.4) }}
      className={`group relative w-full ${aspect} overflow-hidden rounded-2xl shadow-card text-left`}
    >
      {hasImage ? (
        <img
          src={src}
          alt={caption || 'A memory'}
          loading="lazy"
          onError={() => setErrored(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="h-full w-full bg-gradient-to-br from-blush via-peach/70 to-champagne flex flex-col items-center justify-center px-4 text-center">
          <Camera className="mb-3 h-6 w-6 text-cocoa/40" strokeWidth={1.5} />
          <p className="font-script text-lg text-cocoa/60">Your memory will appear here</p>
        </div>
      )}

      {(caption || date) && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cocoa/70 via-cocoa/20 to-transparent px-4 py-3">
          {caption && <p className="text-ivory text-sm font-medium leading-snug">{caption}</p>}
          {date && <p className="text-ivory/70 text-xs mt-0.5">{date}</p>}
        </div>
      )}
    </motion.button>
  )
}

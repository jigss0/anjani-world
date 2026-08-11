import { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Video as VideoIcon } from 'lucide-react'
import MemoryCard from './MemoryCard.jsx'
import Lightbox from './Lightbox.jsx'
import PrimaryButton from './PrimaryButton.jsx'
import { content } from '../content.js'

const aspects = ['aspect-[4/5]', 'aspect-square', 'aspect-[3/4]', 'aspect-[4/5]', 'aspect-square']

function VideoPlaceholder({ video }) {
  const [errored, setErrored] = useState(false)
  const hasVideo = Boolean(video.src) && !errored
  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-card">
      {hasVideo ? (
        <video
          src={video.src}
          controls
          playsInline
          preload="metadata"
          onError={() => setErrored(true)}
          className="h-full w-full object-cover bg-cocoa/5"
        />
      ) : (
        <div className="h-full w-full bg-gradient-to-br from-champagne/60 via-peach/60 to-blush flex flex-col items-center justify-center text-center px-4">
          <VideoIcon className="mb-2 h-6 w-6 text-cocoa/40" strokeWidth={1.5} />
          <p className="font-script text-lg text-cocoa/60">Your video will appear here</p>
        </div>
      )}
      {video.caption && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cocoa/60 to-transparent px-4 py-2.5">
          <p className="text-ivory text-sm">{video.caption}</p>
        </div>
      )}
    </div>
  )
}

export default function MemoryGallery({ onNext }) {
  const { heading, subheading } = content.memoryRoom
  const [lightboxMemory, setLightboxMemory] = useState(null)

  return (
    <div className="relative min-h-[100dvh] w-full bg-ivory safe-px py-24 flex flex-col items-center">
      <div className="w-full max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Camera className="mx-auto mb-3 h-5 w-5 text-dusty-rose" strokeWidth={1.5} />
          <h2 className="font-display text-3xl sm:text-4xl text-cocoa text-balance">{heading}</h2>
          <p className="mt-2 text-sm text-cocoa/50">{subheading}</p>
        </motion.div>

        <div className="columns-2 gap-3.5 [column-fill:_balance]">
          {content.photos.map((photo, i) => (
            <div key={i} className="mb-3.5 break-inside-avoid">
              <MemoryCard
                {...photo}
                index={i}
                aspect={aspects[i % aspects.length]}
                onClick={() => setLightboxMemory(photo)}
              />
            </div>
          ))}
        </div>

        {content.videos.length > 0 && (
          <div className="mt-6 space-y-4">
            {content.videos.map((v, i) => (
              <VideoPlaceholder key={i} video={v} />
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <PrimaryButton onClick={onNext}>
            Continue <span aria-hidden="true">→</span>
          </PrimaryButton>
        </div>
      </div>

      <Lightbox memory={lightboxMemory} onClose={() => setLightboxMemory(null)} />
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Music2 } from 'lucide-react'
import PrimaryButton from './PrimaryButton.jsx'
import { content } from '../content.js'

const BARS = Array.from({ length: 24 }, (_, i) => i)

export default function MusicChapter({ onNext }) {
  const { title, url, prompt, subtitle, button } = content.music
  const hasSong = Boolean(url)
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onTime = () => setProgress(audio.currentTime)
    const onMeta = () => setDuration(audio.duration || 0)
    const onEnd = () => setPlaying(false)
    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('loadedmetadata', onMeta)
    audio.addEventListener('ended', onEnd)
    return () => {
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('loadedmetadata', onMeta)
      audio.removeEventListener('ended', onEnd)
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play()
      setPlaying(true)
    }
  }

  const fmt = (s) => {
    if (!s || Number.isNaN(s)) return '0:00'
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  return (
    <div className="relative min-h-[100dvh] w-full bg-gradient-to-b from-champagne/25 to-ivory safe-px py-24 flex flex-col items-center justify-center">
      <div className="w-full max-w-sm text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="font-serif2 text-xl text-cocoa/75 mb-1.5 text-balance">{prompt}</p>
          <p className="text-sm text-cocoa/45 italic mb-10">{subtitle}</p>
        </motion.div>

        <div className="rounded-3xl bg-ivory/80 backdrop-blur border border-dusty-rose/20 shadow-soft px-6 py-8">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-dusty-rose to-muted-rose">
            <Music2 className="h-6 w-6 text-ivory" strokeWidth={1.5} />
          </div>

          <p className="font-display text-lg text-cocoa mb-1">{title}</p>

          {!hasSong ? (
            <p className="font-script text-lg text-cocoa/50 mb-6">Your song will live here ♡</p>
          ) : (
            <audio ref={audioRef} src={url} preload="metadata" />
          )}

          {/* visualizer */}
          <div className="flex items-end justify-center gap-[3px] h-10 mb-6">
            {BARS.map((i) => (
              <span
                key={i}
                className="w-[3px] rounded-full bg-gradient-to-t from-dusty-rose to-peach"
                style={{
                  height: playing ? `${20 + Math.abs(Math.sin(i * 0.9)) * 80}%` : '15%',
                  transition: 'height 0.35s ease-in-out',
                  animation: playing ? `pulseBar 0.9s ease-in-out ${i * 0.05}s infinite alternate` : 'none',
                }}
              />
            ))}
          </div>

          {hasSong && (
            <div className="mb-4">
              <div className="rose-meter-track">
                <div
                  className="rose-meter-fill"
                  style={{ width: duration ? `${(progress / duration) * 100}%` : '0%' }}
                />
              </div>
              <div className="mt-1.5 flex justify-between text-[11px] text-cocoa/40">
                <span>{fmt(progress)}</span>
                <span>{fmt(duration)}</span>
              </div>
            </div>
          )}

          <button
            onClick={hasSong ? toggle : undefined}
            disabled={!hasSong}
            className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full transition-colors ${
              hasSong ? 'bg-cocoa text-ivory hover:bg-cocoa/90' : 'bg-cocoa/10 text-cocoa/30 cursor-not-allowed'
            }`}
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
          </button>
          {!hasSong && <p className="mt-3 text-xs text-cocoa/35">{button} — coming soon</p>}
        </div>

        <div className="mt-8">
          <PrimaryButton onClick={onNext}>
            Continue <span aria-hidden="true">→</span>
          </PrimaryButton>
        </div>
      </div>

      <style>{`
        @keyframes pulseBar {
          from { transform: scaleY(0.6); }
          to { transform: scaleY(1); }
        }
      `}</style>
    </div>
  )
}

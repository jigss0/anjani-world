import { useMemo } from 'react'

// A very subtle ambient layer of floating petal-like shapes.
// Pure CSS animation (transform + opacity) so it stays smooth on mobile.
export default function PetalField({ count = 10 }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.round(Math.random() * 100),
        size: 6 + Math.round(Math.random() * 10),
        delay: Math.round(Math.random() * 14),
        duration: 12 + Math.round(Math.random() * 10),
        opacity: 0.25 + Math.random() * 0.35,
      })),
    [count]
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-[60%_40%_60%_40%] bg-gradient-to-br from-dusty-rose to-peach animate-floatUp"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.8,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  )
}

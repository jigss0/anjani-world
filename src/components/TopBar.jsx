import { ChevronLeft } from 'lucide-react'

export default function TopBar({ stage, total, onBack, showBack }) {
  const progress = Math.min(1, stage / (total - 1))
  return (
    <div
      className="fixed top-0 inset-x-0 z-40 safe-px pt-[max(0.9rem,env(safe-area-inset-top))] pb-2 pointer-events-none"
      aria-hidden={false}
    >
      <div className="mx-auto max-w-md flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          className={`pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full bg-ivory/70 backdrop-blur transition-opacity ${
            showBack ? 'opacity-70 hover:opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronLeft className="h-4 w-4 text-cocoa" strokeWidth={2} />
        </button>
        <div className="flex-1 h-[3px] rounded-full bg-cocoa/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-dusty-rose to-muted-rose transition-all duration-500 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import TopBar from './components/TopBar.jsx'
import Opening from './components/Opening.jsx'
import Diagnostics from './components/Diagnostics.jsx'
import ThingsINotice from './components/ThingsINotice.jsx'
import EffectCalculator from './components/EffectCalculator.jsx'
import Quiz from './components/Quiz.jsx'
import PrivateFiles from './components/PrivateFiles.jsx'
import Flirt from './components/Flirt.jsx'
import MemoryGallery from './components/MemoryGallery.jsx'
import MusicChapter from './components/MusicChapter.jsx'
import Letter from './components/Letter.jsx'
import FinalSurprise from './components/FinalSurprise.jsx'
import FinalScreen from './components/FinalScreen.jsx'

const STAGES = [
  Opening,
  Diagnostics,
  ThingsINotice,
  EffectCalculator,
  Quiz,
  PrivateFiles,
  Flirt,
  MemoryGallery,
  MusicChapter,
  Letter,
  FinalSurprise,
  FinalScreen,
]

export default function App() {
  const [stage, setStage] = useState(0)

  const Current = STAGES[stage]
  const goNext = () => setStage((s) => Math.min(s + 1, STAGES.length - 1))
  const goBack = () => setStage((s) => Math.max(s - 1, 0))

  const showTopBar = stage > 0 && stage < STAGES.length - 1

  return (
    <div className="relative w-full min-h-[100dvh] bg-ivory overflow-x-hidden">
      {showTopBar && (
        <TopBar stage={stage} total={STAGES.length - 1} onBack={goBack} showBack={stage > 1} />
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={stage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        >
          <Current onNext={goNext} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

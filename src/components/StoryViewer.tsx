import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MediaItem } from '../App'
import { getQuoteForIndex } from '../data/quotes'
import './StoryViewer.css'

interface StoryViewerProps {
  mediaItems: MediaItem[]
  initialIndex?: number
  onClose: () => void
}

const StoryViewer = ({ mediaItems, initialIndex = 0, onClose }: StoryViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const currentMedia = mediaItems[currentIndex]
  const quote = getQuoteForIndex(currentIndex)

  const handleNext = () => {
    if (currentIndex < mediaItems.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setProgress(0)
    } else {
      onClose()
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
      setProgress(0)
    }
  }

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
      return
    }

    // Animation de la barre de progression
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext()
          return 0
        }
        return prev + 2
      })
    }, 100)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    }
  }, [isPaused, currentIndex, mediaItems.length, onClose])

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const width = rect.width

    if (x < width / 3) {
      handlePrevious()
    } else if (x > (width * 2) / 3) {
      handleNext()
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      } else if (e.key === 'ArrowLeft') {
        handlePrevious()
      } else if (e.key === ' ') {
        e.preventDefault()
        setIsPaused((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, mediaItems.length, onClose])

  if (!currentMedia) return null

  return (
    <motion.div
      className="story-viewer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClick}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Barres de progression */}
      <div className="story-progress-container">
        {mediaItems.map((_, index) => (
          <div key={index} className="story-progress-bar">
            <motion.div
              className="story-progress-fill"
              initial={{ width: index < currentIndex ? '100%' : '0%' }}
              animate={{
                width:
                  index < currentIndex
                    ? '100%'
                    : index === currentIndex
                    ? `${progress}%`
                    : '0%',
              }}
              transition={{ duration: 0.1 }}
            />
          </div>
        ))}
      </div>

      {/* Contenu de la story */}
      <div className="story-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="story-media-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentMedia.type === 'image' ? (
              <img
                src={currentMedia.src}
                alt={`Moment ${currentIndex + 1}`}
                className="story-image"
              />
            ) : (
              <video
                src={currentMedia.src}
                className="story-video"
                autoPlay
                loop
                muted
                playsInline
              />
            )}

            {/* Overlay avec citation */}
            <motion.div
              className="story-overlay"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="story-quote">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {quote}
                </motion.p>
              </div>
            </motion.div>

            {/* Indicateur de pause */}
            {isPaused && (
              <motion.div
                className="story-pause-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                ⏸
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bouton fermer */}
      <button className="story-close-btn" onClick={onClose}>
        ✕
      </button>

      {/* Indicateurs de navigation */}
      <div className="story-nav-hint">
        <span className="nav-hint-left">← Précédent</span>
        <span className="nav-hint-center">Cliquez pour naviguer</span>
        <span className="nav-hint-right">Suivant →</span>
      </div>
    </motion.div>
  )
}

export default StoryViewer


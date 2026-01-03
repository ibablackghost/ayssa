import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StoryCard from './components/StoryCard'
import StoryViewer from './components/StoryViewer'
import AnimatedBackground from './components/AnimatedBackground'
import './App.css'

export interface MediaItem {
  id: string
  src: string
  type: 'image' | 'video'
  thumbnail?: string
}

function App() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadMedia = async () => {
      try {
        const images = [
          'WhatsApp Image 2026-01-03 at 15.01.13.jpeg',
          'WhatsApp Image 2026-01-03 at 15.01.14 (1).jpeg',
          'WhatsApp Image 2026-01-03 at 15.01.14.jpeg',
          'WhatsApp Image 2026-01-03 at 15.01.16.jpeg',
          'WhatsApp Image 2026-01-03 at 15.01.40.jpeg',
          'WhatsApp Image 2026-01-03 at 15.01.41 (1).jpeg',
          'WhatsApp Image 2026-01-03 at 15.01.41.jpeg',
          'WhatsApp Image 2026-01-03 at 15.01.42.jpeg',
          'WhatsApp Image 2026-01-03 at 15.01.47.jpeg',
          'WhatsApp Image 2026-01-03 at 15.01.49 (1).jpeg',
          'WhatsApp Image 2026-01-03 at 15.01.49.jpeg',
          'WhatsApp Image 2026-01-03 at 15.04.53.jpeg',
          'WhatsApp Image 2026-01-03 at 15.05.11.jpeg',
          'WhatsApp Image 2026-01-03 at 15.05.18 (1).jpeg',
          'WhatsApp Image 2026-01-03 at 15.05.18 (2).jpeg',
          'WhatsApp Image 2026-01-03 at 15.05.18.jpeg',
          'WhatsApp Image 2026-01-03 at 15.05.19 (1).jpeg',
          'WhatsApp Image 2026-01-03 at 15.05.19.jpeg',
          'WhatsApp Image 2026-01-03 at 15.05.23.jpeg',
          'WhatsApp Image 2026-01-03 at 15.05.26.jpeg',
          'WhatsApp Image 2026-01-03 at 15.50.36.jpeg',
          'WhatsApp Image 2026-01-03 at 15.50.42 (1).jpeg',
          'WhatsApp Image 2026-01-03 at 15.50.42 (2).jpeg',
          'WhatsApp Image 2026-01-03 at 15.50.42 (3).jpeg',
          'WhatsApp Image 2026-01-03 at 15.50.42 (4).jpeg',
          'WhatsApp Image 2026-01-03 at 15.50.42.jpeg',
          'WhatsApp Image 2026-01-03 at 15.50.43.jpeg',
          'WhatsApp Image 2026-01-03 at 15.50.49 (1).jpeg',
          'WhatsApp Image 2026-01-03 at 15.50.49.jpeg',
          'WhatsApp Image 2026-01-03 at 15.50.52.jpeg',
          'WhatsApp Image 2026-01-03 at 15.50.53 (1).jpeg',
          'WhatsApp Image 2026-01-03 at 15.50.53.jpeg',
          'WhatsApp Image 2026-01-03 at 15.50.57.jpeg',
          'WhatsApp Image 2026-01-03 at 15.51.10.jpeg',
          'WhatsApp Image 2026-01-03 at 15.51.11.jpeg',
          'WhatsApp Image 2026-01-03 at 15.51.14.jpeg',
          'WhatsApp Image 2026-01-03 at 15.51.17.jpeg',
          'WhatsApp Image 2026-01-03 at 15.51.18.jpeg',
          'WhatsApp Image 2026-01-03 at 15.51.20.jpeg',
          'WhatsApp Image 2026-01-03 at 15.51.26.jpeg',
        ]

        const videos = [
          'WhatsApp Video 2026-01-03 at 15.01.15.mp4',
          'WhatsApp Video 2026-01-03 at 15.01.18.mp4',
          'WhatsApp Video 2026-01-03 at 15.01.19.mp4',
          'WhatsApp Video 2026-01-03 at 15.01.32.mp4',
          'WhatsApp Video 2026-01-03 at 15.01.34.mp4',
          'WhatsApp Video 2026-01-03 at 15.01.36.mp4',
          'WhatsApp Video 2026-01-03 at 15.01.38.mp4',
          'WhatsApp Video 2026-01-03 at 15.01.39.mp4',
          'WhatsApp Video 2026-01-03 at 15.01.44.mp4',
          'WhatsApp Video 2026-01-03 at 15.04.55.mp4',
          'WhatsApp Video 2026-01-03 at 15.04.57.mp4',
          'WhatsApp Video 2026-01-03 at 15.04.58.mp4',
          'WhatsApp Video 2026-01-03 at 15.05.00.mp4',
          'WhatsApp Video 2026-01-03 at 15.05.02.mp4',
          'WhatsApp Video 2026-01-03 at 15.05.04.mp4',
          'WhatsApp Video 2026-01-03 at 15.05.05.mp4',
          'WhatsApp Video 2026-01-03 at 15.05.10.mp4',
          'WhatsApp Video 2026-01-03 at 15.05.14.mp4',
          'WhatsApp Video 2026-01-03 at 15.05.22.mp4',
          'WhatsApp Video 2026-01-03 at 15.05.25.mp4',
          'WhatsApp Video 2026-01-03 at 15.50.35.mp4',
          'WhatsApp Video 2026-01-03 at 15.50.38.mp4',
          'WhatsApp Video 2026-01-03 at 15.50.41.mp4',
          'WhatsApp Video 2026-01-03 at 15.50.44.mp4',
          'WhatsApp Video 2026-01-03 at 15.50.46.mp4',
          'WhatsApp Video 2026-01-03 at 15.50.48.mp4',
          'WhatsApp Video 2026-01-03 at 15.50.50.mp4',
          'WhatsApp Video 2026-01-03 at 15.50.52.mp4',
          'WhatsApp Video 2026-01-03 at 15.50.56.mp4',
          'WhatsApp Video 2026-01-03 at 15.50.57.mp4',
          'WhatsApp Video 2026-01-03 at 15.50.58.mp4',
          'WhatsApp Video 2026-01-03 at 15.51.01.mp4',
          'WhatsApp Video 2026-01-03 at 15.51.09.mp4',
          'WhatsApp Video 2026-01-03 at 15.51.12.mp4',
          'WhatsApp Video 2026-01-03 at 15.51.16.mp4',
          'WhatsApp Video 2026-01-03 at 15.51.18.mp4',
          'WhatsApp Video 2026-01-03 at 15.51.19.mp4',
          'WhatsApp Video 2026-01-03 at 15.51.23.mp4',
          'WhatsApp Video 2026-01-03 at 15.51.24.mp4',
          'WhatsApp Video 2026-01-03 at 15.51.26.mp4',
          'WhatsApp Video 2026-01-03 at 15.51.28.mp4',
        ]

        // Créer un mapping pour trouver les thumbnails des vidéos (sans réutiliser les images)
        const usedThumbnails = new Set<string>()
        
        const findThumbnailForVideo = (videoName: string, videoIndex: number): string | null => {
          // Extraire le timestamp de la vidéo
          const videoTime = videoName.match(/at (\d{2}\.\d{2}\.\d{2})/)?.[1]
          
          // Chercher une image avec un timestamp proche qui n'a pas encore été utilisée
          let matchingImage = images.find(img => {
            if (usedThumbnails.has(img)) return false
            const imgTime = img.match(/at (\d{2}\.\d{2}\.\d{2})/)?.[1]
            if (!imgTime || !videoTime) return false
            // Correspondance exacte ou très proche (même minute)
            return imgTime === videoTime || imgTime.substring(0, 4) === videoTime.substring(0, 4)
          })

          // Si aucune correspondance proche, prendre une image non utilisée
          if (!matchingImage) {
            matchingImage = images.find(img => !usedThumbnails.has(img))
          }

          // Si toujours rien, utiliser une image différente pour chaque vidéo (rotation)
          if (!matchingImage) {
            const availableImages = images.filter(img => !usedThumbnails.has(img))
            if (availableImages.length > 0) {
              matchingImage = availableImages[videoIndex % availableImages.length]
            } else {
              // Toutes les images sont utilisées, réutiliser avec rotation
              matchingImage = images[(videoIndex + images.length) % images.length]
            }
          }

          if (matchingImage) {
            usedThumbnails.add(matchingImage)
            return matchingImage
          }

          return null
        }

        const items: MediaItem[] = [
          ...images.map((img, idx) => ({
            id: `img-${idx}`,
            src: `/${img}`,
            type: 'image' as const,
          })),
          ...videos.map((vid, idx) => {
            const thumbnail = findThumbnailForVideo(vid, idx)
            return {
              id: `vid-${idx}`,
              src: `/${vid}`,
              type: 'video' as const,
              thumbnail: thumbnail ? `/${thumbnail}` : undefined,
            }
          }),
        ]

        // Mélanger les médias
        const shuffled = items.sort(() => Math.random() - 0.5)
        setMediaItems(shuffled)
        setIsLoading(false)
      } catch (error) {
        console.error('Erreur lors du chargement des médias:', error)
        setIsLoading(false)
      }
    }

    loadMedia()
  }, [])

  const handleStoryClick = (index: number) => {
    setSelectedIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const handleCloseStory = () => {
    setSelectedIndex(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="app">
      <AnimatedBackground />
      <motion.header
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-content">
          <motion.h1
            className="title"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <span className="title-main">Notre Récap 2025</span>
            <motion.span
              className="title-heart"
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              ❤️
            </motion.span>
          </motion.h1>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            C'est pas complet mais j'ai fait de mon mieux j'espère que tu vas aimer ma princesse
          </motion.p>
        </div>
      </motion.header>

      {isLoading ? (
        <div className="loading">
          <motion.div
            className="spinner"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Chargement de nos souvenirs...
          </motion.p>
        </div>
      ) : (
        <motion.div
          className="stories-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="stories-grid">
            {mediaItems.map((media, index) => (
              <StoryCard
                key={media.id}
                media={media}
                index={index}
                onClick={() => handleStoryClick(index)}
              />
            ))}
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {selectedIndex !== null && (
          <StoryViewer
            mediaItems={mediaItems}
            initialIndex={selectedIndex}
            onClose={handleCloseStory}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

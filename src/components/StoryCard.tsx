import { motion } from 'framer-motion'
import { MediaItem } from '../App'
import './StoryCard.css'

interface StoryCardProps {
  media: MediaItem
  index: number
  onClick: () => void
}

const StoryCard = ({ media, index, onClick }: StoryCardProps) => {
  return (
    <motion.div
      className="story-card"
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="story-card-media">
        {media.type === 'image' ? (
          <img
            src={media.src}
            alt={`Moment ${index + 1}`}
            className="story-card-image"
          />
        ) : (
          <div className="story-card-video-wrapper">
            {media.thumbnail ? (
              <img
                src={media.thumbnail}
                alt={`Video thumbnail ${index + 1}`}
                className="story-card-video-thumbnail"
                loading="lazy"
                onError={(e) => {
                  // Si l'image n'existe pas, utiliser une couleur de fond
                  const target = e.currentTarget as HTMLImageElement
                  target.style.display = 'none'
                  const wrapper = target.parentElement as HTMLElement
                  if (wrapper) {
                    wrapper.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)'
                  }
                }}
              />
            ) : (
              <div className="story-card-video-placeholder">
                <div className="story-card-play-icon-large">▶</div>
              </div>
            )}
            <div className="story-card-play-icon">▶</div>
          </div>
        )}
        <div className="story-card-gradient" />
      </div>
      <div className="story-card-content">
        <div className="story-card-number">{index + 1}</div>
        <div className="story-card-icon">{media.type === 'image' ? '📷' : '🎥'}</div>
      </div>
    </motion.div>
  )
}

export default StoryCard


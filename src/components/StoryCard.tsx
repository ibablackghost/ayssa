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
            <video
              src={media.src}
              muted
              playsInline
              className="story-card-video"
              onMouseEnter={(e) => {
                const video = e.currentTarget
                video.play().catch(() => {})
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget
                video.pause()
                video.currentTime = 0
              }}
            />
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


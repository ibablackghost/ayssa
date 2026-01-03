import { useState, useRef, useEffect } from 'react'
import './BackgroundMusic.css'

interface BackgroundMusicProps {
  src: string
}

const BackgroundMusic = ({ src }: BackgroundMusicProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.4)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = volume
    audio.loop = true

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)

    // Essayer de lancer automatiquement
    const playMusic = async () => {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch (error) {
        // Si bloqué, attendre une interaction
        setIsPlaying(false)
      }
    }

    playMusic()

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying && !isMuted) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }, [isPlaying, isMuted])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="background-music">
      <audio ref={audioRef} src={src} preload="auto" />
      <div className="music-player">
        <div className="music-player-content">
          <button
            className="music-play-btn"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          
          <div className="music-info">
            <div className="music-title">Story of My Life</div>
            <div className="music-artist">One Direction</div>
          </div>

          <div className="music-time">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>

          <div className="music-volume-control">
            <button
              className="music-mute-btn"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? '🔇' : '🔊'}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="music-volume-slider"
              aria-label="Volume"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackgroundMusic

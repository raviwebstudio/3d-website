import { useEffect, useRef, useState } from 'react'


export default function VideoSection() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const video = videoRef.current

    if (!video) {
      return
    }

    const playVideo = async () => {
      try {
        await video.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      }
    }

    playVideo()
  }, [])

  const togglePlayback = async () => {
    const video = videoRef.current

    if (!video) {
      return
    }

    if (video.paused) {
      await video.play()
      setIsPlaying(true)
      return
    }

    video.pause()
    setIsPlaying(false)
  }

  return (
    <section className="video-section">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="video-bg"
      >
        <source src="/video/showreel.mp4" type="video/mp4" />
      </video>

      <div className="video-overlay" />
      <div className="video-glow" />

      <div className="video-content">
        <span className="section-label">OUR WORK</span>
        <h2 className="video-headline">
          Every Frame Has
          <br />
          a Purpose
        </h2>
        <button
          type="button"
          className="play-btn"
          aria-label={isPlaying ? 'Pause showreel' : 'Play showreel'}
          onClick={togglePlayback}
        >
          {isPlaying ? '||' : '>'}
        </button>
      </div>
    </section>
  )
}

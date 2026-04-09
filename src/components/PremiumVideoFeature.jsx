import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function PremiumVideoFeature() {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const textRef = useRef(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    if (!videoRef.current) return

    if (!document.fullscreenElement) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax effect on the video background
      gsap.to(videoRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      })

      // Text fade in on scroll
      gsap.from(textRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="premium-video-section">
      <div className="premium-video-bg">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="premium-video-element"
        >
          <source src="/video/showreel-01.mp4" type="video/mp4" />
        </video>
        <div className="premium-video-overlay" />
      </div>

      <div className="premium-video-content">
        <h2 ref={textRef} className="premium-video-title">
          Visual Precision
        </h2>
      </div>

      <button onClick={toggleFullscreen} className="premium-video-play-btn" aria-label="Toggle fullscreen">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
          {isFullscreen ? (
            <>
              <polyline points="8 3 8 8 3 8"></polyline>
              <polyline points="16 3 16 8 21 8"></polyline>
              <polyline points="8 21 8 16 3 16"></polyline>
              <polyline points="16 21 16 16 21 16"></polyline>
            </>
          ) : (
            <>
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </>
          )}
        </svg>
      </button>
    </section >
  )
}


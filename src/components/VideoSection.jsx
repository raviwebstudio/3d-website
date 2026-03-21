const poster =
  'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600'

export default function VideoSection() {
  return (
    <section className="video-section">
      <video autoPlay muted loop playsInline poster={poster} className="video-bg">
        <source src="" type="video/mp4" />
      </video>

      <div className="video-overlay" />

      <div className="video-content">
        <span className="section-label">OUR WORK</span>
        <h2 className="video-headline">
          Every Frame Has
          <br />
          a Purpose
        </h2>
        <button type="button" className="play-btn" aria-label="Play showreel">
          ▶
        </button>
      </div>
    </section>
  )
}

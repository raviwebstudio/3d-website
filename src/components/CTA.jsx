function scrollToSection(id) {
  const target = document.getElementById(id)

  if (!target) {
    return
  }

  const top = target.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function CTA() {
  return (
    <section className="cta-section">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="cta-video-bg"
      >
        <source src="/video/showreel.mp4" type="video/mp4" />
      </video>
      <div className="cta-overlay" />
      <div className="cta-glow" />
      <span className="section-label">LET'S WORK TOGETHER</span>
      <h2 className="cta-headline">
        Ready to Make Something
        <br />
        Extraordinary?
      </h2>
      <p className="cta-sub">
        We take on limited projects every quarter. Let's talk about yours.
      </p>
      <div className="cta-btns">
        <button
          type="button"
          className="btn-primary"
          onClick={() => scrollToSection('contact')}
        >
          Start a Project
        </button>
        <button
          type="button"
          className="btn-outline"
          onClick={() => scrollToSection('portfolio')}
        >
          View Our Work
        </button>
      </div>
    </section>
  )
}

import '../styles/Footer.css'
import logo from '../assets/images/logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />

      {/* Large CTA block */}
      <div className="footer-cta-block">
        <span className="section-label">READY TO START</span>
        <h2 className="footer-cta-headline">LET'S CRAFT YOUR<br />VISION</h2>
        <p className="footer-cta-sub">We take on limited projects every quarter. Let's talk about yours.</p>

        {/* Marquee rolling CTA button */}
        <a href="tel:+918595217287" className="footer-marquee-btn">
          <div className="footer-marquee-track">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="footer-marquee-item">
                GET IN TOUCH <span className="footer-marquee-arrow">→</span>
              </span>
            ))}
          </div>
        </a>
      </div>

      <div className="footer-divider" />

      {/* Bottom grid */}
      <div className="footer-bottom-grid">
        <div className="footer-brand">
          <img src={logo} alt="Brothers Films Production" className="footer-logo" />
        </div>

        <div className="footer-col">
          <span className="footer-col-label">WORK</span>
          {['Photography', 'Videography', 'Brand Films', 'Wedding Films'].map(l => <a key={l} href="#" className="footer-link">{l}</a>)}
        </div>

        <div className="footer-col">
          <span className="footer-col-label">SERVICES</span>
          {['Web Experiences', 'Visual Strategy', 'Campaign Direction'].map(l => <a key={l} href="#" className="footer-link">{l}</a>)}
        </div>

        <div className="footer-col">
          <span className="footer-col-label">CONTACT</span>
          <a href="mailto:contact@brotherfilms.in" className="footer-link">contact@brotherfilms.in</a>
          <a href="tel:+918595217287" className="footer-link">+91 85952 17287</a>
          <span className="footer-link">Meerut, Delhi, Gurgaon</span>
        </div>
      </div>

      <div className="footer-copyright">
        <span>© 2026 Brothers Films Production. All rights reserved.</span>
        <span>Made by THE DIGITAL WINGS</span>
      </div>
    </footer >
  )
}

import bgImg from '../assets/images/bg-01.webp'

export default function CallCTA() {
  return (
    <section
      className="call-cta-section"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="call-cta-overlay" />

      <div className="call-cta-content">
        <span className="section-label">TALK TO US DIRECTLY</span>
        <h2 className="call-cta-headline">
          Need a Faster Response?
          <br />
          Call Our Team
        </h2>
        <p className="call-cta-sub">
          For bookings, shoot planning, and quick project discussions, reach us
          directly.
        </p>

        <a className="btn-primary call-cta-button" href="tel:+918595217287">
          Call Now
        </a>
      </div>
    </section>
  )
}

// Replacing old stats array with direct map inside render
import aboutImg from '../assets/images/about.webp';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-glow" />
      <div className="about-grid">
        <div className="about-left">
          <span className="section-label">ABOUT US</span>
          <h2 className="section-headline">
            We Don't Just Shoot.
            <br />
            We Craft Stories.
          </h2>
          <p className="about-body">
            Brothers Films Production is New Delhi's premium photography and filmmaking studio.
            From brand campaigns to wedding films, every project begins with one belief —
            visuals should make people feel something.
          </p>

          <div className="about-stats">
            {[['500+', 'Projects'], ['8+', 'Years'], ['200+', 'Clients']].map(([n, l]) => (
              <div key={l} className="stat">
                <span className="stat-n">{n}</span>
                <span className="stat-l">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-right">
          <div className="img-placeholder about-img" style={{ background: '#1a1a1a' }}>
            <img src={aboutImg} alt="about-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

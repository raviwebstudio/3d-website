const imageUrl =
  'https://images.unsplash.com/photo-1556103255-4443dbae8e5a?w=800'

const stats = [
  ['500+', 'Projects'],
  ['8+', 'Years'],
  ['200+', 'Clients'],
]

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <div className="about-left">
          <span className="section-label">ABOUT US</span>
          <h2 className="section-headline">
            We Don't Just Shoot.
            <br />
            We Craft Stories.
          </h2>
          <p className="about-body">
            Brothers Films Production is New Delhi's premium photography and
            filmmaking studio. From brand campaigns to wedding films, every
            project is built on one belief - visuals should make people feel
            something.
          </p>

          <div className="about-stats">
            {stats.map(([value, label]) => (
              <div key={label} className="stat">
                <span className="stat-n">{value}</span>
                <span className="stat-l">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-right">
          <img src={imageUrl} alt="Brothers Films Studio" className="about-img" />
        </div>
      </div>
    </section>
  )
}

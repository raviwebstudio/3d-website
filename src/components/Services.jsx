import '../styles/Services.css'

const services = [
  {
    num: '01', label: 'PHOTOGRAPHY',
    title: 'Brand & Product Photography',
    description: 'From product launches to campaign shoots, we create images that carry your brand\'s weight. Planned to the light, executed to the frame.',
    points: ['Brand campaign photography', 'Product & e-commerce shoots', 'Editorial & fashion photography', 'Event & corporate photography'],
    poster: null,
  },
  {
    num: '02', label: 'VIDEOGRAPHY',
    title: 'Cinematic Film & Video',
    description: 'Wedding films, brand stories, corporate documentaries — every frame is crafted with intention. We don\'t just record moments. We build narratives.',
    points: ['Wedding & pre-wedding films', 'Brand story films', 'Corporate documentaries', 'Social media reels & content'],
    poster: null,
  },
  {
    num: '03', label: 'WEB EXPERIENCES',
    title: '3D Interactive Web',
    description: 'Scroll-driven animations, 3D product reveals, cinematic web experiences — digital work that goes beyond templates and demands attention.',
    points: ['Interactive scroll experiences', '3D product & brand showcases', 'Campaign microsites', 'Motion & animation direction'],
    poster: null,
  },
  {
    num: '04', label: 'STRATEGY',
    title: 'Brand Visual Strategy',
    description: 'Before any shoot or build, we define what your brand should feel like. Visual language, content structure, campaign direction — the plan that makes the work matter.',
    points: ['Visual brand identity', 'Campaign concept & direction', 'Content strategy & planning', 'Creative consultation'],
    poster: null,
  },
]

export default function Services() {
  return (
    <section className="services-section" id="services-detail">
      <div className="services-glow" />
      <div className="services-header">
        <span className="section-label">WHAT WE DO</span>
        <h2 className="section-headline">From Concept<br />to Camera</h2>
      </div>
      <div className="services-stack">
        {services.map((s, i) => (
          <div key={i} className="service-block">
            <div className="service-content">
              <div className="service-top">
                <span className="service-num">{s.num}</span>
                <span className="service-label-badge">{s.label}</span>
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.description}</p>
              <ul className="service-points">
                {s.points.map((pt, j) => (
                  <li key={j} className="service-point">
                    <span className="service-dot">·</span>{pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="service-visual">
              {s.poster ? (
                <img src={s.poster} alt={s.title} className="service-img" />
              ) : (
                <div className="img-placeholder service-img" style={{ background: '#1a1a1a' }} />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

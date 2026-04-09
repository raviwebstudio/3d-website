import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/Philosophy.css'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  { keyword: 'VISION', icon: '◎', title: 'Before the Lens', body: "We don't pick up the camera first. We define the story, the emotion, and the message before a single frame is shot. Every project starts with intent." },
  { keyword: 'CRAFT', icon: '◈', title: 'Craft That Shows', body: '3D motion, cinematic colour, precision lighting — every visual element is chosen because it serves the brand. We create moments people feel, not just see.' },
  { keyword: 'SPEED', icon: '◐', title: 'No Compromise', body: 'Once direction is locked, we move fast. Short feedback cycles, rapid prototypes, visible progress. Projects don\'t drag. They ship.' },
  { keyword: 'DETAIL', icon: '◑', title: 'It is the Difference', body: 'We obsess over what others skip. Colour temperature, frame composition, motion timing — the invisible things that make work remembered.' },
]

export default function Philosophy() {
  const containerRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.philosophy-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.philosophy-grid',
            start: 'top 85%'
          }
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="philosophy-section">
      <div className="philosophy-glow-left" />
      <div className="philosophy-glow-right" />
      <div className="philosophy-header">
        <span className="section-label">WHY BROTHERS FILMS</span>
        <h2 className="section-headline">How We Think.<br />How We Work.</h2>
      </div>
      <div className="philosophy-grid">
        {pillars.map((p, i) => (
          <div key={i} className="philosophy-card">
            <div className="philosophy-card-top">
              <span className="philosophy-icon">{p.icon}</span>
              <span className="philosophy-keyword">{p.keyword}</span>
            </div>
            <h3 className="philosophy-title">{p.title}</h3>
            <p className="philosophy-body">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


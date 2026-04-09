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
        {pillars.map((p, i) => {
          const cardRef = useRef(null)
          const lightRef = useRef(null)

          const handleMouseMove = (e) => {
            const card = cardRef.current
            const light = lightRef.current
            if (!card) return
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            
            const centerX = rect.width / 2
            const centerY = rect.height / 2
            const rotateX = ((y - centerY) / centerY) * -5 // MAX 5 DEG
            const rotateY = ((x - centerX) / centerX) * 5
            
            gsap.to(card, {
              rotateX,
              rotateY,
              scale: 1.05,
              z: 50,
              duration: 0.5,
              ease: 'power2.out',
              transformPerspective: 1000,
            })
            
            gsap.to(light, {
              x, y,
              opacity: 1,
              duration: 0.1
            })
          }

          const handleMouseLeave = () => {
            const card = cardRef.current
            const light = lightRef.current
            gsap.to(card, {
              rotateX: 0,
              rotateY: 0,
              scale: 1,
              z: 0,
              duration: 0.5,
              ease: 'power3.out'
            })
            gsap.to(light, { opacity: 0, duration: 0.5 })
          }

          return (
            <div 
              key={i} 
              ref={cardRef}
              className="philosophy-card cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                ref={lightRef} 
                className="absolute w-64 h-64 bg-white/10 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0 z-0" 
              />
              <div className="relative z-10 philosophy-card-top">
                <span className="philosophy-icon">{p.icon}</span>
                <span className="philosophy-keyword">{p.keyword}</span>
              </div>
              <h3 className="relative z-10 philosophy-title">{p.title}</h3>
              <p className="relative z-10 philosophy-body">{p.body}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}


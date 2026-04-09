import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import p1 from '../assets/images/Featured01.webp'
import p2 from '../assets/images/Featured02.webp'
import p3 from '../assets/images/Featured03.webp'
import p4 from '../assets/images/Featured04.webp'
import p5 from '../assets/images/Featured05.webp'

const projects = [
  { img: p1, title: 'Wedding Photography', type: 'image' },
  { img: p2, title: 'Cinematic Photography', type: 'image' },
  { img: p3, title: 'Cut Light Photography', type: 'image' },
  { img: p4, title: 'Bridal Shoot', type: 'image' },
  { img: p5, title: 'Photography', type: 'image' },
]

export default function HorizontalScroll() {
  const containerRef = useRef(null)
  const scrollerRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      let sections = gsap.utils.toArray('.h-slide')

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1.5,
          start: 'top top',
          end: () => '+=' + scrollerRef.current.offsetWidth,
          onUpdate: () => {
            // Scale and dim based on proximity to center
            sections.forEach((sec) => {
              const rect = sec.getBoundingClientRect()
              const center = window.innerWidth / 2
              const dist = Math.abs(rect.left + rect.width / 2 - center)
              
              if (dist < window.innerWidth / 3) {
                gsap.to(sec, { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out', overwrite: 'auto' })
              } else {
                gsap.to(sec, { scale: 0.85, opacity: 0.3, duration: 0.4, ease: 'power2.out', overwrite: 'auto' })
              }
            })
          }
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="horizontal-scroll-section">
      <div className="horizontal-header">
        <h2>Featured<br /><span className="text-amber">Masterpieces</span></h2>
      </div>
      <div ref={scrollerRef} className="horizontal-scroller">
        {projects.map((proj, i) => (
          <div key={i} className="h-slide">
            <div className="h-slide-inner group">
              {proj.type === 'image' ? (
                <img src={proj.img} alt={proj.title} className="h-slide-media" />
              ) : (
                <video autoPlay muted loop playsInline className="h-slide-media">
                  <source src={proj.img} type="video/mp4" />
                </video>
              )}
              <div className="h-slide-overlay">
                <h3 className="h-slide-title">{proj.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CinematicText() {
  const container = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.cine-line', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.25,
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        }
      })
    }, container)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={container} className="cinematic-text-section">
      <h2 className="cinematic-text">
        <span className="cine-line block">We don't just shoot.</span><br />
        <span className="cine-line block text-muted">We craft stories.</span>
      </h2>
    </section>
  )
}

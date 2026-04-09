import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function PremiumText() {
  const container = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.prem-line', {
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.3,
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
        <span className="prem-line block">Every frame tells a story.</span>
        <span className="prem-line block text-muted pt-4">Every moment becomes timeless.</span>
      </h2>
    </section>
  )
}

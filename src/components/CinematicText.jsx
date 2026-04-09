import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

// simple text splitter for char-level control
const splitText = (text, groupClass) => {
  return text.split('').map((char, i) => (
    <span key={i} className={`inline-block ${groupClass} opacity-0 ${char === ' ' ? 'w-[0.25em]' : ''}`}>{char}</span>
  ))
}

export default function CinematicText() {
  const container = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        }
      })

      tl.fromTo('.cine-char1',
        { opacity: 0, y: 15, scale: 1.1 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.15, 
          stagger: 0.03, 
          ease: 'power2.out' 
        }
      )
      .to('.cine-char1', {
        opacity: 0.5,
        duration: 0.5,
        ease: 'power2.inOut',
      }, '+=0.2')
      .fromTo('.cine-char2',
        { opacity: 0, y: 15, scale: 1.1 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.15, 
          stagger: 0.03, 
          ease: 'power2.out' 
        },
        '-=0.2'
      )
    }, container)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={container} className="cinematic-text-section">
      <h2 className="cinematic-text text-left">
        <span className="block overflow-hidden pb-2">{splitText("We don't just shoot.", "cine-char1")}</span>
        <span className="block overflow-hidden">{splitText("We craft stories.", "cine-char2")}</span>
      </h2>
    </section>
  )
}

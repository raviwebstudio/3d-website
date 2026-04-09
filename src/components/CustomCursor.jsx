import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    let ctx = gsap.context(() => {
      const onMouseMove = (e) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.15,
          ease: 'power3.out',
        })
      }

      const enterElements = document.querySelectorAll('a, button, .cursor-pointer, .portfolio-card, .h-slide-inner')
      
      const onMouseEnter = () => {
        gsap.to(cursor, {
          scale: 2.5,
          backgroundColor: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          duration: 0.3,
          ease: 'power3.out'
        })
      }

      const onMouseLeave = () => {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: '#fff',
          border: 'none',
          duration: 0.3,
          ease: 'power3.out'
        })
      }

      window.addEventListener('mousemove', onMouseMove)
      enterElements.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnter)
        el.addEventListener('mouseleave', onMouseLeave)
      })

      return () => {
        window.removeEventListener('mousemove', onMouseMove)
        enterElements.forEach((el) => {
          el.removeEventListener('mouseenter', onMouseEnter)
          el.removeEventListener('mouseleave', onMouseLeave)
        })
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
    />
  )
}

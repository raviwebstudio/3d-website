import { useEffect, useRef } from 'react'
import portfolio1 from '../assets/images/portfolio1.webp'
import portfolio2 from '../assets/images/portfolio2.webp'
import portfolio3 from '../assets/images/0S5A0627.webp'
import portfolio4 from '../assets/images/0S5A0659.webp'
import portfolio5 from '../assets/images/0S5A0742.webp'
import portfolio6 from '../assets/images/0S5A1002.webp'

const projects = [
  {
    img: portfolio1,
    title: 'Cinematic Photography',
    client: 'Shivani Chaudhary',
    category: 'PHOTOGRAPHY',
  },
  {
    img: portfolio2,
    title: 'Wedding Film',
    client: 'Gaurav Chaudhary',
    category: 'PHOTOGRAPHY',
  },
  {
    img: portfolio3,
    title: 'Product Shoot',
    client: 'Tanishq',
    category: 'PHOTOGRAPHY',
  },
  {
    img: portfolio4,
    title: 'Corporate Film',
    client: 'HDFC Bank',
    category: 'BRAND FILM',
  },
  {
    img: portfolio5,
    title: 'Wedding',
    client: 'ITC Grand',
    category: 'WEDDING FILM',
  },
  {
    img: portfolio6,
    title: 'Editorial',
    client: 'Vogue India',
    category: 'EDITORIAL',
  },
]

export default function Portfolio() {
  const sliderRef = useRef(null)
  const dragRef = useRef({
    isDown: false,
    isPaused: false,
    startX: 0,
    scrollLeft: 0,
  })

  useEffect(() => {
    const slider = sliderRef.current

    if (!slider) {
      return undefined
    }

    const getStepSize = () => {
      const firstCard = slider.querySelector('.portfolio-card')

      if (!firstCard) {
        return 0
      }

      const { gap } = window.getComputedStyle(slider)
      return firstCard.getBoundingClientRect().width + Number.parseFloat(gap || '0')
    }

    const autoSlide = window.setInterval(() => {
      if (dragRef.current.isDown || dragRef.current.isPaused) {
        return
      }

      const step = getStepSize()

      if (!step) {
        return
      }

      const maxScroll = slider.scrollWidth - slider.clientWidth
      const nextLeft =
        slider.scrollLeft + step >= maxScroll - step * 0.2
          ? 0
          : slider.scrollLeft + step

      slider.scrollTo({
        left: nextLeft,
        behavior: 'smooth',
      })
    }, 3500)

    return () => {
      window.clearInterval(autoSlide)
    }
  }, [])

  const handlePointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) {
      return
    }

    if (!sliderRef.current) {
      return
    }

    dragRef.current.isDown = true
    dragRef.current.startX = event.clientX
    dragRef.current.scrollLeft = sliderRef.current.scrollLeft
    sliderRef.current.classList.add('dragging')
    sliderRef.current.setPointerCapture?.(event.pointerId)
  }

  const handlePointerMove = (event) => {
    if (!dragRef.current.isDown || !sliderRef.current) {
      return
    }

    event.preventDefault()
    const walk = (event.clientX - dragRef.current.startX) * 1.5
    sliderRef.current.scrollLeft = dragRef.current.scrollLeft - walk
  }

  const stopDragging = (event) => {
    if (!sliderRef.current) {
      return
    }

    dragRef.current.isDown = false
    sliderRef.current.classList.remove('dragging')

    if (event?.pointerId != null && sliderRef.current.hasPointerCapture?.(event.pointerId)) {
      sliderRef.current.releasePointerCapture(event.pointerId)
    }
  }

  return (
    <section className="portfolio-section" id="portfolio">
      <div id="services" className="section-anchor" aria-hidden="true" />
      <div className="portfolio-header">
        <span className="section-label">OUR PORTFOLIO</span>
        <h2 className="section-headline">Work That Speaks</h2>
        {/* <p className="portfolio-drag-hint">Drag to explore.</p> */}
      </div>

      <div
        ref={sliderRef}
        className="portfolio-slider"
        onMouseEnter={() => {
          dragRef.current.isPaused = true
        }}
        onMouseLeave={() => {
          dragRef.current.isPaused = false
          stopDragging()
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerLeave={stopDragging}
        onPointerCancel={stopDragging}
      >
        {projects.map((project) => (
          <div key={`${project.title}-${project.client}`} className="portfolio-card">
            <img
              src={project.img}
              alt={`${project.title} for ${project.client}`}
              className="portfolio-img"
              draggable={false}
            />

            <div className="portfolio-overlay">
              <span className="portfolio-cat">{project.category}</span>

              <div className="portfolio-info">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-client">{project.client}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="portfolio-count">{projects.length} Projects</p>
    </section>
  )
}

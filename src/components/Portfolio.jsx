import { useRef } from 'react'

const projects = [
  {
    img: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=1200',
    title: 'Brand Campaign',
    client: 'Nykaa',
    category: 'PHOTOGRAPHY',
  },
  {
    img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200',
    title: 'Wedding Film',
    client: 'Oberoi Hotel',
    category: 'VIDEOGRAPHY',
  },
  {
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200',
    title: 'Product Shoot',
    client: 'Tanishq',
    category: 'PHOTOGRAPHY',
  },
  {
    img: 'https://images.unsplash.com/photo-1476503121207-9f7c7b3c8571?w=1200',
    title: 'Corporate Film',
    client: 'HDFC Bank',
    category: 'BRAND FILM',
  },
  {
    img: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200',
    title: 'Wedding',
    client: 'ITC Grand',
    category: 'WEDDING FILM',
  },
  {
    img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200',
    title: 'Editorial',
    client: 'Vogue India',
    category: 'EDITORIAL',
  },
]

export default function Portfolio() {
  const sliderRef = useRef(null)
  const dragRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  })

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
    <section className="portfolio-section" id="services">
      <div className="portfolio-header">
        <span className="section-label">OUR PORTFOLIO</span>
        <h2 className="section-headline">Work That Speaks</h2>
        <p className="portfolio-drag-hint">Drag to explore</p>
      </div>

      <div
        ref={sliderRef}
        className="portfolio-slider"
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

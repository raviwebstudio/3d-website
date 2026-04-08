import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import '../styles/Portfolio.css'
import p1 from '../assets/images/portfolio1.webp'
import p2 from '../assets/images/portfolio2.webp'
import p3 from '../assets/images/product.webp'
import p4 from '../assets/images/bridal.webp'
import p5 from '../assets/images/portfolio5.webp'
import p6 from '../assets/images/portfolio3.webp'

const projects = [
  { img: p1, title: 'Wedding Photography', category: 'PHOTOGRAPHY', client: 'Wedding Photography' },
  { img: p2, title: 'Wedding Film', category: 'VIDEOGRAPHY', client: 'Wedding Photography' },
  { img: p3, title: 'Product Shoot', category: 'PHOTOGRAPHY', client: 'Commercial' },
  { img: p4, title: 'Bridal Shoot', category: 'CINEMATIC', client: 'Cinematic Photography' },
  { img: p5, title: 'Wedding', category: 'WEDDING FILM', client: 'Wedding Photography' },
  { img: p6, title: 'Cut Light Photography', category: 'CUT LIGHT', client: 'Cut Light Photography' },
]

export default function Portfolio() {
  return (
    <section className="portfolio-section" id="work">
      <div className="portfolio-header">
        <span className="section-label">OUR PORTFOLIO</span>
        <h2 className="section-headline">Work That Speaks</h2>
      </div>

      <div className="slider-outer">
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={20}
          navigation={true}
          autoplay={false}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 }
          }}
          className="portfolio-swiper"
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="slider-card">
                <img
                  src={p.img}
                  alt={p.title}
                  className="slider-img"
                  draggable="false"
                  onError={(e) => { e.target.parentElement.style.background = '#1a1a1a' }}
                />
                <div className="slider-overlay">
                  <span className="slider-cat">{p.category}</span>
                  <div className="slider-info">
                    <h3 className="slider-title">{p.title}</h3>
                    <p className="slider-client">{p.client}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <p className="portfolio-count">{projects.length} Projects</p>
    </section>
  )
}

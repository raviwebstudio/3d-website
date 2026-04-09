import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  {
    text: 'Professional, creative, and very friendly team. They made us feel comfortable throughout the shoot and delivered stunning results.',
    name: 'Aakash Upadhyay',
    time: '1 month ago',
    rating: 5,
    initials: 'AU',
    color: '#7B5EA7',
  },
  {
    text: 'They gave helpful directions during the shoot and made sure we were comfortable. The final pictures looked clean and well edited.',
    name: 'Raima Paul',
    time: '2 month ago',
    rating: 5,
    initials: 'RP',
    color: '#4A90D9',
  },
  {
    text: "Good service and nice results. The pictures came out clear and natural, just what I wanted. Overall, I'm happy with the service.",
    name: 'Kshitiz Gupta',
    time: '2 month ago',
    rating: 5,
    initials: 'KG',
    color: '#2ECC71',
  },
  {
    text: "That's really good to handle the customer's, according to requirements. Supportive team and awesome work.",
    name: 'Anant Prakash',
    time: '1 year ago',
    rating: 5,
    initials: 'AP',
    color: '#E74C3C',
  },
  {
    text: 'Such an amazing experience, they have got some excellent skills and I would recommend everyone to work with them.',
    name: 'Mendy',
    time: '3 years ago',
    rating: 5,
    initials: 'AK',
    color: '#F39C12',
  },
  {
    text: 'Great place to shoot weddings, pre-weddings, post-weddings, events, cinematic video, etc. I am satisfied with your work.',
    name: 'Love Sharma',
    time: '4 years ago',
    rating: 5,
    initials: 'LS',
    color: '#1ABC9C',
  },
]

const googleReviewsUrl =
  'https://www.google.com/search?sca_esv=e8481ae40804fa8e&sxsrf=ANbL-n6AYrws17fdng7_rCYR5-QoFiZOSg:1775748046179&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdq_N5EZr2-12qUmEAooigiv8kySMDMMpkCs9z-YgUXQ7VwQj6JAAo1jO8d9JWTJXrYKx6rVYhIJW5z2IA_eG-ccHC-ATNgCf_OoUFzgO3ybwypUKg%3D%3D&q=Brothers+Films+Production+Reviews&sa=X&ved=2ahUKEwjw34L8iOGTAxXKJhAIHUxlPHMQ0bkNegQIMxAH&biw=1358&bih=682&dpr=1'

function Stars({ count = 5 }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, index) => (
        <span key={index} className="star">
          ★
        </span>
      ))}
    </div>
  )
}

function GIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09A6.96 6.96 0 0 1 5.49 12c0-.73.13-1.43.35-2.09V7.07H2.18A11 11 0 0 0 1 12c0 1.78.43 3.45 1.18 4.93l2.85-2.22.81-.62Z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
        fill="#EA4335"
      />
    </svg>
  )
}

export default function Testimonials() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(
    () => {
      const cards = cardsRef.current.filter(Boolean)

      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        },
      )
    },
    { scope: sectionRef },
  )

  return (
    <section className="testimonials-section" ref={sectionRef} id="testimonials">
      <div className="testimonials-glow" />
      <div className="testimonials-top">
        <div>
          <span className="section-label">CLIENT TESTIMONIALS</span>
          <h2 className="section-headline">What Clients Say</h2>
        </div>

        <div className="g-badge">
          <div className="g-badge-top">
            <GIcon />
            <span className="g-badge-label">Google Reviews</span>
          </div>

          <div className="g-rating-row">
            <span className="g-rating-num">4.8</span>
            <div>
              <Stars />
              <span className="g-review-count">26 reviews</span>
            </div>
          </div>

          {/* <a
            href={googleReviewsUrl}
            className="g-view-link"
            target="_blank"
            rel="noreferrer"
          >
            View on Google
          </a> */}
        </div>
      </div>

      <div className="testimonials-grid">
        {reviews.map((review, index) => (
          <div
            key={`${review.name}-${review.time}`}
            className="t-card"
            ref={(element) => {
              cardsRef.current[index] = element
            }}
          >
            <div className="t-card-top">
              <Stars count={review.rating} />
              <span className="t-quote">"</span>
            </div>

            <p className="t-text">"{review.text}"</p>

            <div className="t-footer">
              <div className="t-author">
                <div className="t-avatar" style={{ background: review.color }}>
                  {review.initials}
                </div>
                <div>
                  <p className="t-name">{review.name}</p>
                  <p className="t-time">{review.time}</p>
                </div>
              </div>
              <GIcon />
            </div>
          </div>
        ))}
      </div>

      <div className="t-verified">
        <span className='text-white'>Verified reviews from Google Business Profile</span>
        <a
          href={googleReviewsUrl}
          className="g-view-all"
          target="_blank"
          rel="noreferrer"
        >
          View on Google
        </a>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import lens from '../assets/lens.png'
import grip from '../assets/grip.png'
import body from '../assets/body.png'

gsap.registerPlugin(ScrollTrigger)

function scrollToContact() {
  const target = document.getElementById('contact')

  if (!target) {
    return
  }

  const top = target.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Hero() {
  const heroRef = useRef(null)

  useGSAP(
    () => {
      const refreshOnLoad = () => ScrollTrigger.refresh()

      gsap.set('.grip-image', { x: '-120vw', opacity: 0 })
      gsap.set('.body-image', { x: '120vw', opacity: 0 })
      gsap.set(['.text-s1', '.text-s2', '.text-s3', '.text-s4'], {
        opacity: 0,
        y: 20,
      })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: '+=500%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      })

      timeline
        .to('.text-s0', { opacity: 0, duration: 0.25 }, 0)
        .to(
          '.grip-image',
          { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
          0.25,
        )
        .to('.text-s1', { opacity: 1, y: 0, duration: 0.4 }, 0.7)
        .to('.text-s1', { opacity: 0, duration: 0.25 }, 1.1)
        .to(
          '.body-image',
          { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
          1.4,
        )
        .to('.text-s2', { opacity: 1, y: 0, duration: 0.4 }, 1.8)
        .to('.text-s2', { opacity: 0, duration: 0.25 }, 2.1)
        .to('.camera-group', { scale: 1.04, duration: 0.5, ease: 'power2.out' }, 2.4)
        .to('.text-s3', { opacity: 1, y: 0, duration: 0.4 }, 2.8)
        .to('.text-s3', { opacity: 0, duration: 0.25 }, 3.1)
        .to('.text-s2', { opacity: 0, duration: 0.1 }, 3.1)
        .to('.text-s1', { opacity: 0, duration: 0.1 }, 3.1)
        .to('.text-s0', { opacity: 0, duration: 0.1 }, 3.1)
        .to('.camera-group', { scale: 1, duration: 0.3 }, 3.3)
        .to('.text-s4', { opacity: 1, y: 0, duration: 0.4 }, 3.5)

      window.addEventListener('load', refreshOnLoad)

      return () => {
        window.removeEventListener('load', refreshOnLoad)
        timeline.scrollTrigger?.kill()
        timeline.kill()
      }
    },
    { scope: heroRef },
  )

  return (
    <section ref={heroRef} className="hero-section" id="work">
      <div className="hero-glow" />

      <div className="camera-group">
        <img src={lens} alt="" className="camera-img lens-image" />
        <img src={grip} alt="" className="camera-img grip-image" />
        <img src={body} alt="" className="camera-img body-image" />
      </div>

      <div className="hero-text text-s0 pos-centre">
        <h1 className="hero-h1">BROTHERS FILMS PRODUCTION</h1>
        <p className="hero-sub">A Complete Shooting HUB</p>
      </div>

      <div className="hero-text text-s1 pos-right">
        <h2 className="hero-h2">We Build Experiences</h2>
        <p className="hero-sub">Not just websites</p>
      </div>

      <div className="hero-text text-s2 pos-left">
        <h2 className="hero-h2">
          Brands That Have
          <br />
          Outgrown Templates
        </h2>
        <p className="hero-sub">This is where they come</p>
      </div>

      <div className="hero-text text-s3 pos-right">
        <h2 className="hero-h2">From Concept to Camera</h2>
        <p className="hero-sub">Every pixel. Every frame. Intentional.</p>
      </div>

      <div className="hero-text text-s4 pos-centre pos-below">
        <h2 className="hero-h2">Let's Build Something Extraordinary</h2>
        <button type="button" className="hero-cta" onClick={scrollToContact}>
          Start a Project
        </button>
      </div>
    </section>
  )
}

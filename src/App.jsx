import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CinematicText from './components/CinematicText'
import PremiumText from './components/PremiumText'
import About from './components/About'
import Marquee from './components/Marquee'
import PremiumVideoFeature from './components/PremiumVideoFeature'
import Philosophy from './components/Philosophy'
import HorizontalScroll from './components/HorizontalScroll'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // 1. Smooth Scroll (Lenis)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0, 0)

    // 2. Scroll Reveal (All Existing Sections)
    const sections = gsap.utils.toArray('section.about-section, section.services-section, section.portfolio-section, section.contact-section, section.philosophy-section, section.testimonials-section, section.cta-section')
    sections.forEach((sec) => {
      gsap.fromTo(sec,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 80%',
          }
        }
      )
    })

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <PremiumVideoFeature />
        <HorizontalScroll />
        <Portfolio />
        <PremiumText />
        <Philosophy />
        <CTA />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}


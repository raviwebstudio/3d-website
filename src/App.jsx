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
import CustomCursor from './components/CustomCursor'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // 1. Smooth Scroll (Lenis) with precise friction
    const lenis = new Lenis({
      lerp: 0.08, // Advanced Netflix-style friction
      smoothWheel: true,
      wheelMultiplier: 1,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    lenis.on('scroll', (e) => {
      ScrollTrigger.update()

      // Advanced Scroll Velocity FX
      const velocity = Math.abs(e.velocity)
      if (velocity > 3) {
        gsap.to('main img:not(.camera-img), main video', {
          scale: 1 + Math.min(velocity * 0.008, 0.06),
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto'
        })
      } else {
        gsap.to('main img:not(.camera-img), main video', {
          scale: 1,
          duration: 0.6,
          ease: 'power3.out',
          overwrite: 'auto'
        })
      }
    })

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
          duration: 1.5,
          ease: 'power4.out',
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
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <PremiumText />
        <PremiumVideoFeature />
        <HorizontalScroll />
        <Portfolio />
        <Philosophy />
        <CTA />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}


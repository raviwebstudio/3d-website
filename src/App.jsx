import Navbar from './components/Navbar'
import Hero from './components/Hero'        // DO NOT CHANGE
import About from './components/About'
import Philosophy from './components/Philosophy'   // NEW
import Marquee from './components/Marquee'      // NEW
import VideoSection from './components/VideoSection'
import Portfolio from './components/Portfolio'    // REPLACED
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'       // REPLACED

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Marquee />
        <VideoSection />
        <Philosophy />
        <Portfolio />
        <CTA />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}


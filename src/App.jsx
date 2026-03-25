import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import VideoSection from './components/VideoSection'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import CallCTA from './components/CallCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <VideoSection />
        <Portfolio />
        <Testimonials />
        <CTA />
        <Contact />
        <CallCTA />
      </main>
      <Footer />
    </>
  )
}

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import lens from '../assets/images/lens-01.png'
import grip from '../assets/images/lens-02.png'
import body from '../assets/images/lens-03.png'

gsap.registerPlugin(ScrollTrigger)

const stages = [
  {
    headline: 'BROTHERS FILMS PRODUCTION',
    subline: 'A Complete Shooting HUB',
    position: 'centre',
    cta: false,
  },
  {
    headline: 'We Build Experiences',
    subline: 'Not just websites',
    position: 'right',
    cta: false,
  },
  {
    headline: 'Brands That Have Outgrown Templates',
    subline: 'This is where they come',
    position: 'left',
    cta: false,
  },
  {
    headline: 'From Concept to Camera',
    subline: 'Every pixel. Every frame. Intentional.',
    position: 'right',
    cta: false,
  },
  {
    headline: "Let's Build Something Extraordinary",
    subline: '',
    position: 'centre',
    cta: true,
  },
]

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
  const [currentStage, setCurrentStage] = useState(0)
  const [scrollCount, setScrollCount] = useState('00:00:00')

  useEffect(() => {
    const stageTriggers = []
    const refreshOnLoad = () => ScrollTrigger.refresh()

    const ctx = gsap.context(() => {
      const stageDistance = () => window.innerHeight
      const pulseCamera = (scaleValue = 1.06) => {
        gsap.to('.camera-group', {
          scale: scaleValue,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
          onComplete: () => {
            gsap.to('.camera-group', {
              scale: 1,
              duration: 0.4,
              ease: 'power2.inOut',
              overwrite: 'auto',
            })
          },
        })
      }

      const resetCamera = () => {
        gsap.to('.camera-group', {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }

      const createStageTrigger = (index, onEnter, onLeaveBack) => {
        const trigger = ScrollTrigger.create({
          trigger: heroRef.current,
          start: () => `top+=${stageDistance() * index} top`,
          end: () => `top+=${stageDistance() * (index + 1)} top`,
          invalidateOnRefresh: true,
          onEnter,
          onLeaveBack,
        })

        stageTriggers.push(trigger)
      }

      // Initial states: only lens is visible.
      gsap.set('.grip-image', { x: '-120vw', opacity: 0 })
      gsap.set('.body-image', { x: '120vw', opacity: 0 })
      gsap.set('.camera-group', { scale: 1 })

      createStageTrigger(
        1,
        () => {
          setCurrentStage(1)
          gsap.to('.grip-image', {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            overwrite: 'auto',
          })
        },
        () => {
          setCurrentStage(0)
          gsap.to('.grip-image', {
            x: '-120vw',
            opacity: 0,
            duration: 0.6,
            ease: 'power2.in',
            overwrite: 'auto',
          })
        },
      )

      createStageTrigger(
        2,
        () => {
          setCurrentStage(2)
          gsap.to('.body-image', {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            overwrite: 'auto',
          })
        },
        () => {
          setCurrentStage(1)
          gsap.to('.body-image', {
            x: '120vw',
            opacity: 0,
            duration: 0.6,
            ease: 'power2.in',
            overwrite: 'auto',
          })
        },
      )

      createStageTrigger(
        3,
        () => {
          setCurrentStage(3)
          pulseCamera(1.06)
        },
        () => {
          setCurrentStage(2)
          resetCamera()
        },
      )

      createStageTrigger(
        4,
        () => {
          setCurrentStage(4)
          pulseCamera(1.03)
        },
        () => {
          setCurrentStage(3)
        },
      )
    }, heroRef)

    window.addEventListener('load', refreshOnLoad)

    const updateCounter = () => {
      const pct = Math.min(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1)
      const s = Math.floor(pct * 3600)
      setScrollCount(
        `${String(Math.floor(s / 3600)).padStart(2, '0')}:${String(Math.floor((s % 3600) / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
      )
    }
    window.addEventListener('scroll', updateCounter)

    return () => {
      window.removeEventListener('load', refreshOnLoad)
      window.removeEventListener('scroll', updateCounter)
      stageTriggers.forEach((trigger) => trigger.kill())
      ctx.revert()
    }
  }, [])

  const stage = stages[currentStage]

  return (
    <section ref={heroRef} className="hero-section" id="home">
      <div className="hero-sticky-wrapper">
        <div className="hero-sticky">
          {/* <div className="hero-scroll-counter">{scrollCount}</div> */}
          <div className="scroll-indicator">
            <div className="scroll-line" />
            <span className="scroll-text">BROTHERS FILMS PRODUCTION</span>
          </div>
          <div className="hero-glow" />

          <div className="camera-group">
            <img src={lens} alt="" className="camera-img lens-image" />
            <img src={grip} alt="" className="camera-img grip-image" />
            <img src={body} alt="" className="camera-img body-image" />
          </div>

          <div
            className={`hero-text-block pos-${stage.position} ${currentStage === 4 ? 'pos-below' : ''
              }`}
            key={currentStage}
          >
            <div className="hero-text-inner">
              {currentStage === 0 ? (
                <h1 className="hero-h1">{stage.headline}</h1>
              ) : (
                <h2 className="hero-h2">{stage.headline}</h2>
              )}

              {stage.subline && <p className="hero-sub">{stage.subline}</p>}

              {stage.cta && (
                <button
                  type="button"
                  className="hero-cta"
                  onClick={scrollToContact}
                >
                  Start a Project
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

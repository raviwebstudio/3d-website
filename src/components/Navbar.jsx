import { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'

const links = [
  { num: '', label: 'Home', id: 'home' },
  { num: '', label: 'About', id: 'about' },
  { num: '', label: 'Services', id: 'services' },
  { num: '', label: 'Work', id: 'work' },
  { num: '', label: 'Contact', id: 'contact' },
]

function scrollToSection(id) {
  const target = document.getElementById(id)

  if (!target) {
    return
  }

  const top = target.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.9)
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleNavClick = (event, id) => {
    event.preventDefault()
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a
        href="#work"
        className="navbar-brand"
        onClick={(event) => handleNavClick(event, 'work')}
      >
        <img
          src={logo}
          alt="Brothers Films Production"
          className="navbar-logo"
        />
      </a>

      <nav className="navbar-links" aria-label="Primary">
        {links.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={(event) => handleNavClick(event, link.id)} className="nav-link">
            <span className="nav-num">{link.num}</span>
            <span className="nav-label">{link.label}</span>
          </a>
        ))}
      </nav>

      <a href="tel:+918595217287" className="navbar-cta">
        DIAL NOW — +91 85952 17287
      </a>

      <button
        type="button"
        className="hamburger"
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          <button
            type="button"
            className="mobile-close"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
          >
            X
          </button>

          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={(event) => handleNavClick(event, link.id)} className="nav-link">
              <span className="nav-num">{link.num}</span>
              <span className="nav-label">{link.label}</span>
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

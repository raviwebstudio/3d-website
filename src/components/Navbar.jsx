import { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'

const links = [
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
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
        {links.map(({ label, id }) => (
          <a key={id} href={`#${id}`} onClick={(event) => handleNavClick(event, id)}>
            {label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="navbar-cta"
        onClick={(event) => handleNavClick(event, 'contact')}
      >
        Start a Project
      </button>

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

          {links.map(({ label, id }) => (
            <a key={id} href={`#${id}`} onClick={(event) => handleNavClick(event, id)}>
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

import logo from '../assets/logo.png'

const columns = [
  {
    label: 'STUDIO',
    links: [
      { label: 'New Delhi, India', href: '#contact' },
      { label: 'hello@brothersfilms.in', href: 'mailto:hello@brothersfilms.in' },
      { label: '+91 98XXX XXXXX', href: 'tel:+9198XXXXXXX' },
    ],
  },
  {
    label: 'WORK',
    links: [
      { label: 'Photography', href: '#services' },
      { label: 'Videography', href: '#services' },
      { label: 'Brand Films', href: '#services' },
      { label: 'Wedding Films', href: '#services' },
    ],
  },
  {
    label: 'SERVICES',
    links: [
      { label: 'Web Experiences', href: '#services' },
      { label: 'Campaign Strategy', href: '#services' },
      { label: 'Brand Identity', href: '#services' },
    ],
  },
  {
    label: 'FOLLOW',
    links: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'Behance', href: 'https://behance.net' },
      { label: 'YouTube', href: 'https://youtube.com' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />

      <div className="footer-top">
        <img src={logo} alt="Brothers Films Production" className="footer-logo" />
        <h2 className="footer-headline">BROTHERS FILMS PRODUCTION</h2>
        <p className="footer-tagline">A Complete Shooting HUB</p>
      </div>

      <div className="footer-cols">
        {columns.map((column) => (
          <div key={column.label} className="footer-col">
            <span className="footer-col-label">{column.label}</span>

            {column.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="footer-link"
                {...(link.href.startsWith('http')
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>© 2026 Brothers Films Production. All rights reserved.</span>
        <span>Made with precision in New Delhi</span>
      </div>
    </footer>
  )
}

import logo from '../assets/images/logo.png'

const columns = [
  {
    label: 'CONTACT',
    links: [
      { label: '+91 8595217287 ', href: 'tel:+91 8595217287 ' },
      { label: 'Meerut, Delhi, Gurgaon', href: '#contact' },
      { label: 'Contact@brothersfilms.in', href: 'mailto:Contact@brothersfilms.in' },
    ],
  },
  {
    label: 'WORK',
    links: [
      { label: 'Photography', href: '#services' },
      { label: 'Videography', href: '#services' },
      { label: 'Wedding Films', href: '#services' },
      { label: 'Brand Films', href: '#services' },
    ],
  },
  {
    label: 'SERVICES',
    links: [
      { label: 'Web Experiences', href: '#services' },
      { label: 'Brand Identity', href: '#services' },
      { label: 'Campaign Strategy', href: '#services' },
    ],
  },
  {
    label: 'FOLLOW',
    links: [
      { label: 'WhatsApp', href: 'https://wa.me/918595217287' },
      { label: 'Instagram', href: 'https://instagram.com/brothersfilmsproduction' },
      { label: 'YouTube', href: 'https://youtube.com/@brothersfilmsproduction' },
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
        <span>Made by The Digital Wings</span>
      </div>
    </footer>
  )
}

const details = [
  { icon:'📍', text:'Meerut, Delhi, Gurgaon' },
  { icon:'✉️', text:'contact@brotherfilms.com', href:'mailto:contact@brotherfilms.com' },
  { icon:'📞', text:'+91 85952 17287', href:'tel:+918595217287' },
]
const socials = [
  { label:'Instagram', href:'https://instagram.com/brothersfilmsproduction' },
  { label:'YouTube',   href:'https://youtube.com/@brothersfilmsproduction' },
]

const projectTypes = [
  'Photography',
  'Videography',
  'Brand Film',
  'Wedding Film',
  'Other',
]

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow" />
      <div className="contact-grid">
        <div className="contact-left">
          <span className="section-label">CONTACT US</span>
          <h2 className="section-headline">
            Let's Start a
            <br />
            Conversation
          </h2>

          <div className="contact-details">
            {details.map(({ icon, text, href }) => (
              href
                ? <a key={text} href={href} className="contact-line"><span>{icon}</span> {text}</a>
                : <p key={text} className="contact-line"><span>{icon}</span> {text}</p>
            ))}
          </div>

          <div className="contact-socials">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <form className="contact-right" onSubmit={handleSubmit}>
          <input className="form-field" type="text" placeholder="Your Name" />
          <input className="form-field" type="email" placeholder="Your Email" />

          <select className="form-field" defaultValue="">
            <option value="">Project Type</option>
            {projectTypes.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>

          <textarea
            className="form-field"
            rows={4}
            placeholder="Tell us about your project"
          />

          <button type="submit" className="form-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

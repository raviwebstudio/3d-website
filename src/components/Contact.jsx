const details = ['Meerut, Delhi, Gurgaon', 'contact@brothersfilms.in', '+91 8595217287']
const socials = [
  { label: 'WhatsApp', href: 'https://wa.me/918595217287' },
  { label: 'Instagram', href: 'https://instagram.com/brothersfilmsproduction' },
  { label: 'YouTube', href: 'https://youtube.com/@brothers_films_production' },
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
      <div className="contact-grid">
        <div className="contact-left">
          <span className="section-label">CONTACT US</span>
          <h2 className="section-headline">
            Let's Start a
            <br />
            Conversation
          </h2>

          <div className="contact-details">
            {details.map((text) => (
              <p key={text} className="contact-line">
                <span className="contact-accent" aria-hidden="true" />
                {text}
              </p>
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

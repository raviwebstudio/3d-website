import '../styles/Marquee.css'

const words = ['PHOTOGRAPHY', '—', 'BRANDING', '—', 'VIDEOGRAPHY', '—', 'CRAFT', '—', 'WEDDING PHOTOGRAPHY', '—', 'FILM', '—', 'PRE-WEDDING PHOTOGRAPHY', '—', 'STORY', '—', 'PRODUCT PHOTOGRAPHY', '—', 'PODCAST SHOOT', '—', 'CORPORATE SHOOT', '—', 'INTERVIEW', '—',]

export default function Marquee() {
  return (
    <div className="marquee-band">
      <div className="marquee-track">
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i} className={w === '—' ? 'marquee-divider' : 'marquee-word'}>{w}</span>
        ))}
      </div>
    </div>
  )
}

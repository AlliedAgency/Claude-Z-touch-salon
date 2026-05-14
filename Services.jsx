// Real Z Touch Salon photos for service cards
const services = [
  {
    title: "Women's Cut & Style",
    desc: "Precision cuts tailored to your face shape, lifestyle, and vision. Includes shampoo, condition & blowout.",
    price: "From $65",
    img: 'https://s.yimg.com/bj/beb8/beb89ad56b43b74e78a1296256216e4b.jpg',
  },
  {
    title: "Color & Highlights",
    desc: "Full color, root touch-up, balayage, ombré & partial highlights. Dimensional color that turns heads.",
    price: "From $85",
    img: 'https://s.yimg.com/bj/ee8b/ee8b466e63ff0b8d18194ab2d06d278d.jpg',
  },
  {
    title: "Balayage & Ombré",
    desc: "Sun-kissed, natural-looking tones hand-painted for a low-maintenance, lived-in finish.",
    price: "From $150",
    img: 'https://s.yimg.com/bj/4a31/4a319402c9a2c507d4705e3e9df1b5c3.jpg',
  },
  {
    title: "Perm & Texture",
    desc: "Classic perms, digital wave & down perms to transform straight hair into beautiful curls or waves.",
    price: "From $85",
    img: 'https://s.yimg.com/bj/0ecf/0ecf4895b3d75db81327cdad0e334bd5.jpg',
  },
  {
    title: "Blowout & Styling",
    desc: "Shampoo, deep condition, blowdry & style. Perfect for special occasions or a weekly refresh.",
    price: "From $50",
    img: 'https://s.yimg.com/bj/318d/318d59cf94b8e8eaafa33f2ff21aff76.jpg',
  },
  {
    title: "Men's Grooming",
    desc: "Men's cut, shampoo & style. Grey blending, permanent color & eyebrow wax also available.",
    price: "From $35",
    img: 'https://s.yimg.com/bj/653c/653c32ae0672a41c0275fe528a94bf6a.jpg',
  },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '6rem 2rem', background: 'var(--cream)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag">What We Offer</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300 }}>
            Our Signature Services
          </h2>
          <div className="gold-line center" />
          <p style={{ color: 'var(--muted)', maxWidth: '500px', margin: '1rem auto', fontSize: '0.95rem', lineHeight: 1.8 }}>
            Every service is a bespoke experience designed around your unique hair goals.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.5px',
          background: 'var(--border)',
          border: '1.5px solid var(--border)',
        }}>
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="https://app.squareup.com/appointments/book/e3adddc9-f2b7-4ff4-bb72-d7caa181b2dd/33JMNFDG4HP31/start"
            target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book Your Service →
          </a>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ title, desc, price, img }) {
  return (
    <div style={{
      background: 'var(--cream)', position: 'relative', overflow: 'hidden',
      cursor: 'pointer', transition: 'all 0.4s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = '#fff'
      e.currentTarget.querySelector('.card-img').style.transform = 'scale(1.05)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = 'var(--cream)'
      e.currentTarget.querySelector('.card-img').style.transform = 'scale(1)'
    }}
    >
      <div style={{ height: '220px', overflow: 'hidden' }}>
        <img className="card-img" src={img} alt={title} style={{
          width: '100%', height: '100%', objectFit: 'cover',
          objectPosition: 'center top',
          transition: 'transform 0.6s ease',
        }} />
      </div>
      <div style={{ padding: '1.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400, lineHeight: 1.2 }}>{title}</h3>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--gold)', whiteSpace: 'nowrap', marginLeft: '1rem' }}>{price}</span>
        </div>
        <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7 }}>{desc}</p>
        <a href="https://app.squareup.com/appointments/book/e3adddc9-f2b7-4ff4-bb72-d7caa181b2dd/33JMNFDG4HP31/start"
          target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-block', marginTop: '1.25rem', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500, color: 'var(--gold)' }}>
          Book This →
        </a>
      </div>
    </div>
  )
}

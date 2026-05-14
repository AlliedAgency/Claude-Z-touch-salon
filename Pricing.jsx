const categories = [
  {
    title: "Women's Services",
    items: [
      { name: "Cut, Shampoo & Style", price: "From $65" },
      { name: "Bang / Fringe Trim", price: "From $20" },
      { name: "Shampoo & Blowout", price: "From $50" },
      { name: "Single Process Color", price: "From $85" },
      { name: "Root Touch-Up", price: "From $75" },
      { name: "Toner / Gloss / Glaze", price: "From $60" },
      { name: "Partial Balayage / Highlights", price: "From $150" },
      { name: "Full Balayage / Highlights", price: "From $200" },
      { name: "Ombré", price: "From $175" },
    ]
  },
  {
    title: "Men's Services",
    items: [
      { name: "Cut, Shampoo & Style", price: "From $35" },
      { name: "Grey Blending", price: "From $60" },
      { name: "Permanent Color", price: "From $65" },
      { name: "Eyebrow Wax", price: "From $20" },
      { name: "Perm", price: "From $85" },
      { name: "Down Perm", price: "From $85" },
    ]
  },
]

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '6rem 2rem', background: 'var(--cream)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag">Investment</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 300 }}>
            Service Pricing
          </h2>
          <div className="gold-line center" />
          <p style={{ color: 'var(--muted)', maxWidth: '520px', margin: '1rem auto', fontSize: '0.88rem', lineHeight: 1.8 }}>
            Prices listed are starting rates and may vary depending on hair length, thickness, and time required.
            Contact us for a personalized quote.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {categories.map((cat, i) => (
            <div key={i} style={{ border: '1px solid var(--border)', background: '#fff' }}>
              <div style={{
                background: i === 0 ? 'var(--charcoal)' : 'var(--gold)',
                padding: '1.5rem 2rem',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 300,
                  color: i === 0 ? '#fff' : 'var(--charcoal)',
                }}>{cat.title}</h3>
              </div>
              <div style={{ padding: '1.5rem 2rem' }}>
                {cat.items.map((item, j) => (
                  <div key={j} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '0.85rem 0',
                    borderBottom: j < cat.items.length - 1 ? '1px solid var(--border)' : 'none',
                  }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--charcoal)' }}>{item.name}</span>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--gold)', fontWeight: 500 }}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '3rem', padding: '2rem', background: 'var(--warm-white)',
          border: '1px solid var(--border)', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem',
        }}>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 300 }}>Ready to transform your look?</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.25rem' }}>Book online or call us for a consultation.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://app.squareup.com/appointments/book/e3adddc9-f2b7-4ff4-bb72-d7caa181b2dd/33JMNFDG4HP31/start"
              target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Online
            </a>
            <a href="tel:+14153477781" className="btn-outline">Call (415) 347-7781</a>
          </div>
        </div>
      </div>
    </section>
  )
}

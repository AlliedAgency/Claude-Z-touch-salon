const values = [
  {
    icon: '◈',
    title: 'Artistry First',
    desc: 'Every cut and color service is approached as a work of art — tailored specifically to your features, lifestyle, and vision.',
  },
  {
    icon: '◎',
    title: 'Premium Products',
    desc: 'We use only the highest quality professional hair care products that nourish and protect while delivering exceptional results.',
  },
  {
    icon: '◇',
    title: 'Personalized Care',
    desc: 'No cookie-cutter treatments here. We take the time to listen, consult, and truly understand what you want before picking up the scissors.',
  },
  {
    icon: '⋈',
    title: 'Serene Atmosphere',
    desc: 'Our skylight-lit salon is a calm refuge from the city — a place to relax, refresh, and leave feeling like the best version of yourself.',
  },
]

export default function About() {
  return (
    <section style={{ padding: '100px 0', background: 'var(--warm-white)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          {/* Image side */}
          <div style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=700&q=75"
              alt="Z Touch Salon interior"
              style={{ width: '100%', height: '560px', objectFit: 'cover', display: 'block' }}
              loading="lazy"
            />
            {/* Floating card */}
            <div style={{
              position: 'absolute',
              bottom: '-28px',
              right: '-28px',
              background: 'var(--gold)',
              padding: '32px',
              maxWidth: '220px',
              zIndex: 2,
            }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', color: '#fff', lineHeight: 1, marginBottom: '4px' }}>Est.</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', color: '#fff', lineHeight: 1, marginBottom: '12px' }}>2019</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>Ocean Ave, San Francisco</div>
            </div>
            {/* Border accent */}
            <div style={{
              position: 'absolute',
              top: '-16px', left: '-16px',
              width: '50%', height: '50%',
              border: '1px solid var(--border)',
              zIndex: 0,
            }} />
          </div>

          {/* Text side */}
          <div>
            <p className="section-tag">Our Philosophy</p>
            <div className="gold-line left" />
            <h2 className="section-title" style={{ marginBottom: '20px' }}>
              More Than a Salon.<br />
              <em style={{ fontStyle: 'italic' }}>A Sanctuary.</em>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: '16px' }}>
              Z Touch Salon was born from a simple belief: every person deserves to walk out of the salon feeling extraordinary. Since 2019, we've been San Francisco's best-kept secret on Ocean Ave.
            </p>
            <p className="section-subtitle" style={{ marginBottom: '48px' }}>
              Our skylight-lit space is designed for calm and creativity — a place where skilled hands transform hair, and clients leave not just looking better, but feeling seen.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {values.map((v, i) => (
                <div key={i} style={{ borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--gold)', marginBottom: '8px' }}>{v.icon}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '8px' }}>{v.title}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--light-text)', lineHeight: 1.65, fontWeight: 300 }}>{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about-section .container > div, section > div.container > div {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}

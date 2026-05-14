export default function Footer() {
  return (
    <footer style={{ background: '#1A1410', color: 'rgba(255,255,255,0.5)', padding: '4rem 2rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: '#fff', marginBottom: '0.25rem' }}>Z Touch</div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>Salon · San Francisco</div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '220px' }}>
              Premium hair salon on Ocean Avenue, San Francisco. Established 2019.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.25rem', fontFamily: 'var(--font-body)' }}>Services</h4>
            {["Women's Cut & Style", "Color & Highlights", "Balayage & Ombré", "Perms & Texture", "Men's Grooming", "Blowouts"].map(s => (
              <a key={s} href="#services" style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                {s}
              </a>
            ))}
          </div>

          {/* Info */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.25rem', fontFamily: 'var(--font-body)' }}>Visit Us</h4>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.9 }}>
              1930 Ocean Ave<br />
              San Francisco, CA 94127<br /><br />
              Mon–Sat: 10am – 7pm<br />
              Sun: 10am – 6pm
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.25rem', fontFamily: 'var(--font-body)' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="tel:+14153477781" style={{ fontSize: '0.85rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                (415) 347-7781
              </a>
              <a href="mailto:ztouchsalonsf@gmail.com" style={{ fontSize: '0.85rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                ztouchsalonsf@gmail.com
              </a>
              <a href="https://www.instagram.com/ztouchsalonsf" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                @ztouchsalonsf
              </a>
              <a href="https://app.squareup.com/appointments/book/e3adddc9-f2b7-4ff4-bb72-d7caa181b2dd/33JMNFDG4HP31/start"
                target="_blank" rel="noopener noreferrer"
                className="btn-primary" style={{ marginTop: '0.5rem', fontSize: '0.65rem', padding: '0.65rem 1.25rem', alignSelf: 'flex-start' }}>
                Book Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: '2rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
          fontSize: '0.75rem',
        }}>
          <span>© {new Date().getFullYear()} Z Touch Salon. All rights reserved.</span>
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>1930 Ocean Ave, San Francisco, CA 94127</span>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/14153477781" target="_blank" rel="noopener noreferrer"
        title="Chat on WhatsApp"
        style={{
          position: 'fixed', bottom: '2rem', right: '2rem',
          width: '56px', height: '56px', borderRadius: '50%',
          background: '#25D366', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.6rem', boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
          zIndex: 999, transition: 'all 0.3s ease', textDecoration: 'none',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(37,211,102,0.6)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.4)'; }}
      >
        💬
      </a>
    </footer>
  )
}

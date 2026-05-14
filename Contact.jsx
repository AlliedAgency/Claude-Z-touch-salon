export default function Contact() {
  return (
    <section id="contact" style={{ padding: '6rem 2rem', background: 'var(--warm-white)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag">Find Us</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 300 }}>
            Visit the Salon
          </h2>
          <div className="gold-line center" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Info */}
          <div>
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 300, marginBottom: '1rem' }}>Location</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.8 }}>
                1930 Ocean Ave<br />
                San Francisco, CA 94127<br /><br />
                <span style={{ fontSize: '0.8rem', color: 'var(--gold)' }}>K-Line Muni stops right in front · Street parking available</span>
              </p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 300, marginBottom: '1rem' }}>Hours</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  ['Mon – Sat', '10:00 AM – 7:00 PM'],
                  ['Sunday', '10:00 AM – 6:00 PM'],
                ].map(([day, hrs]) => (
                  <div key={day} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', maxWidth: '280px', padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ color: 'var(--charcoal)' }}>{day}</span>
                    <span style={{ color: 'var(--muted)' }}>{hrs}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 300, marginBottom: '1rem' }}>Contact</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="tel:+14153477781" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--charcoal)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--charcoal)'}>
                  <span style={{ color: 'var(--gold)' }}>📞</span> (415) 347-7781
                </a>
                <a href="mailto:ztouchsalonsf@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--charcoal)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--charcoal)'}>
                  <span style={{ color: 'var(--gold)' }}>✉</span> ztouchsalonsf@gmail.com
                </a>
                <a href="https://www.instagram.com/ztouchsalonsf" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--charcoal)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--charcoal)'}>
                  <span style={{ color: 'var(--gold)' }}>◈</span> @ztouchsalonsf
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://app.squareup.com/appointments/book/e3adddc9-f2b7-4ff4-bb72-d7caa181b2dd/33JMNFDG4HP31/start"
                target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book Online
              </a>
              <a href="https://wa.me/14153477781" target="_blank" rel="noopener noreferrer" className="btn-outline"
                style={{ gap: '0.4rem' }}>
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          {/* Map */}
          <div style={{ borderRadius: 0, overflow: 'hidden', boxShadow: 'var(--shadow-medium)', height: '500px' }}>
            <iframe
              title="Z Touch Salon Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.2!2d-122.4632!3d37.7259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e4b4f8b8b8b%3A0x0!2s1930+Ocean+Ave%2C+San+Francisco%2C+CA+94127!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

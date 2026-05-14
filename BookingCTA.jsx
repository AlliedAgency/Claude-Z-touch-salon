export default function BookingCTA() {
  return (
    <section style={{
      padding: '8rem 2rem',
      background: 'var(--charcoal)',
      position: 'relative', overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* Real Z Touch photo as subtle bg */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.12,
        backgroundImage: `url('https://s.yimg.com/bj/beb8/beb89ad56b43b74e78a1296256216e4b.jpg')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 20%, var(--charcoal) 80%)',
      }} />

      <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ width: '60px', height: '1px', background: 'var(--gold)', margin: '0 auto 2rem' }} />
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,6vw,5rem)',
          fontWeight: 300, color: '#fff', lineHeight: 1.1, marginBottom: '1.5rem',
        }}>
          Your Best Hair<br />
          <em style={{ color: 'var(--gold-light)' }}>Starts Here</em>
        </h2>
        <p style={{
          fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8,
          maxWidth: '480px', margin: '0 auto 2.5rem',
        }}>
          Join hundreds of satisfied guests at Z Touch Salon. Book your appointment today and experience the difference.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://app.squareup.com/appointments/book/e3adddc9-f2b7-4ff4-bb72-d7caa181b2dd/33JMNFDG4HP31/start"
            target="_blank" rel="noopener noreferrer" className="btn-primary"
            style={{ fontSize: '0.8rem', padding: '1rem 2.5rem' }}>
            Book Appointment →
          </a>
          <a href="tel:+14153477781" className="btn-outline"
            style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', padding: '1rem 2.5rem' }}>
            Call (415) 347-7781
          </a>
        </div>
        <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['Online Booking', 'No Hidden Fees', 'Expert Stylists', 'All Hair Types'].map(item => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
              <span style={{ color: 'var(--gold)' }}>✓</span> {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

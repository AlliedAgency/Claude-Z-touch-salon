export default function Hero() {
  return (
    <section style={{
      position: 'relative', minHeight: '100svh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Real Z Touch Salon photo as hero background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('https://s.yimg.com/bj/ce76/ce763cf81168ea1c96467292d544e751.jpg')`,
        backgroundSize: 'cover', backgroundPosition: 'center top',
        filter: 'brightness(0.42)',
        transform: 'scale(1.03)',
      }} />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(42,36,32,0.25) 0%, rgba(42,36,32,0.65) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', textAlign: 'center', color: '#fff',
        padding: '2rem', maxWidth: '820px',
      }}>
        <span className="animate-fade-up" style={{
          fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase',
          color: 'var(--gold-light)', fontFamily: 'var(--font-body)', fontWeight: 500,
          display: 'block', marginBottom: '1.5rem',
        }}>
          Established 2019 · 1930 Ocean Ave, San Francisco
        </span>

        <h1 className="animate-fade-up delay-1" style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem, 9vw, 7rem)',
          fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.05,
          color: '#fff', marginBottom: '0.3rem',
        }}>
          Where Art Meets
        </h1>
        <h1 className="animate-fade-up delay-2" style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem, 9vw, 7rem)',
          fontWeight: 300, fontStyle: 'italic', lineHeight: 1.05,
          background: 'linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-light))',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text', marginBottom: '2rem',
          animation: 'fadeUp 0.8s 0.3s both, shimmer 3s 1s linear infinite',
        }}>
          Your Hair
        </h1>

        <p className="animate-fade-up delay-3" style={{
          fontSize: '1rem', fontWeight: 300, letterSpacing: '0.05em',
          color: 'rgba(255,255,255,0.75)', maxWidth: '480px', margin: '0 auto 2.5rem',
          lineHeight: 1.8,
        }}>
          Premium cuts, color & styling. Specialists in balayage, perms & transformation — for all hair types.
        </p>

        <div className="animate-fade-up delay-4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://app.squareup.com/appointments/book/e3adddc9-f2b7-4ff4-bb72-d7caa181b2dd/33JMNFDG4HP31/start"
            target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book Appointment →
          </a>
          <a href="#services" className="btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }}>
            Explore Services
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-up delay-4" style={{
          display: 'flex', gap: '3rem', justifyContent: 'center',
          marginTop: '4rem', flexWrap: 'wrap',
        }}>
          {[['6+', 'Years of Excellence'], ['250+', 'Client Photos'], ['4.8★', 'Avg Rating']].map(([num, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--gold-light)' }}>{num}</div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        color: 'rgba(255,255,255,0.35)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
        animation: 'fadeIn 2s 1.5s both',
      }}>
        <span>Scroll</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)',
        }} />
      </div>
    </section>
  )
}

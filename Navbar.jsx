import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Services', 'Gallery', 'Team', 'Pricing', 'Reviews', 'Contact']

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
      background: scrolled ? 'rgba(250,247,242,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.4s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      {/* Logo */}
      <a href="#" style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 300,
          color: scrolled ? 'var(--charcoal)' : '#fff',
          letterSpacing: '0.05em', lineHeight: 1,
        }}>Z Touch</span>
        <span style={{
          fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase',
          color: 'var(--gold)', fontFamily: 'var(--font-body)', fontWeight: 500,
        }}>Salon · San Francisco</span>
      </a>

      {/* Desktop nav */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{
            fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase',
            fontWeight: 500, color: scrolled ? 'var(--charcoal)' : 'rgba(255,255,255,0.85)',
            transition: 'color 0.3s',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--gold)'}
          onMouseLeave={e => e.target.style.color = scrolled ? 'var(--charcoal)' : 'rgba(255,255,255,0.85)'}
          >{l}</a>
        ))}
        <a href="https://app.squareup.com/appointments/book/e3adddc9-f2b7-4ff4-bb72-d7caa181b2dd/33JMNFDG4HP31/start"
          target="_blank" rel="noopener noreferrer"
          className="btn-primary" style={{ fontSize: '0.65rem', padding: '0.65rem 1.5rem' }}>
          Book Now
        </a>
      </div>

      {/* Hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', padding: '4px' }}
        className="hamburger" aria-label="Menu">
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block', width: '24px', height: '1.5px',
            background: scrolled ? 'var(--charcoal)' : '#fff',
            transition: 'all 0.3s',
            transform: menuOpen ? (i === 0 ? 'rotate(45deg) translate(4px,4.5px)' : i === 2 ? 'rotate(-45deg) translate(4px,-4.5px)' : 'scaleX(0)') : 'none',
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'var(--cream)', zIndex: 999,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: '2rem',
        }}>
          <button onClick={() => setMenuOpen(false)}
            style={{ position: 'absolute', top: '1.5rem', right: '2rem', background: 'none', fontSize: '1.5rem', color: 'var(--charcoal)' }}>
            ✕
          </button>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--charcoal)' }}>
              {l}
            </a>
          ))}
          <a href="https://app.squareup.com/appointments/book/e3adddc9-f2b7-4ff4-bb72-d7caa181b2dd/33JMNFDG4HP31/start"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary" style={{ marginTop: '1rem' }}>
            Book Appointment
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}

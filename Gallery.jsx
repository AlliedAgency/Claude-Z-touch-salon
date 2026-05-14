// Real Z Touch Salon client photos sourced from their business listings
const photos = [
  { src: 'https://s.yimg.com/bj/beb8/beb89ad56b43b74e78a1296256216e4b.jpg', label: 'Cut & Color', span: 'col-span-2 row-span-2' },
  { src: 'https://s.yimg.com/bj/318d/318d59cf94b8e8eaafa33f2ff21aff76.jpg', label: 'Styling' },
  { src: 'https://s.yimg.com/bj/4a31/4a319402c9a2c507d4705e3e9df1b5c3.jpg', label: 'Color Work' },
  { src: 'https://s.yimg.com/bj/ee8b/ee8b466e63ff0b8d18194ab2d06d278d.jpg', label: 'Silver Color by Zee', span: 'col-span-2' },
  { src: 'https://s.yimg.com/bj/653c/653c32ae0672a41c0275fe528a94bf6a.jpg', label: 'Haircut' },
  { src: 'https://s.yimg.com/bj/000d/000de7755da43ed7b7d6818ecea77d7e.jpg', label: 'Color' },
  { src: 'https://s.yimg.com/bj/0ecf/0ecf4895b3d75db81327cdad0e334bd5.jpg', label: 'Cut & Perm' },
  { src: 'https://s.yimg.com/bj/ed21/ed21e6c630ed44e4a7fd1d2486d0ce4f.jpg', label: 'Style' },
]

export default function Gallery() {
  return (
    <section id="gallery" style={{ padding: '6rem 2rem', background: 'var(--warm-white)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag">Our Work</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 300 }}>
            Real Results, Real Clients
          </h2>
          <div className="gold-line center" />
          <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '1rem auto', fontSize: '0.95rem', lineHeight: 1.8 }}>
            Every photo is a real Z Touch client. Follow{' '}
            <a href="https://www.instagram.com/ztouchsalonsf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>@ztouchsalonsf</a>
            {' '}for more daily inspiration.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: '220px',
          gap: '6px',
        }}>
          {photos.map((p, i) => {
            const isWide = i === 0
            const isTall = i === 0
            const isWide2 = i === 3
            return (
              <div key={i} style={{
                gridColumn: isWide ? 'span 2' : isWide2 ? 'span 2' : 'span 1',
                gridRow: isTall ? 'span 2' : 'span 1',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.querySelector('img').style.transform = 'scale(1.06)'
                e.currentTarget.querySelector('.overlay').style.opacity = '1'
              }}
              onMouseLeave={e => {
                e.currentTarget.querySelector('img').style.transform = 'scale(1)'
                e.currentTarget.querySelector('.overlay').style.opacity = '0'
              }}
              >
                <img src={p.src} alt={p.label} style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transition: 'transform 0.6s ease', display: 'block',
                }} />
                <div className="overlay" style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(42,36,32,0.75) 0%, transparent 60%)',
                  opacity: 0, transition: 'opacity 0.3s ease',
                  display: 'flex', alignItems: 'flex-end', padding: '1rem',
                }}>
                  <span style={{
                    color: '#fff', fontSize: '0.7rem', letterSpacing: '0.15em',
                    textTransform: 'uppercase', fontFamily: 'var(--font-body)', fontWeight: 500,
                  }}>{p.label}</span>
                </div>
              </div>
            )
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="https://www.instagram.com/ztouchsalonsf" target="_blank" rel="noopener noreferrer"
            className="btn-outline">
            ♡ See More on Instagram
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #gallery .photo-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  )
}

// Real Z Touch Salon photos from their business listings
const posts = [
  { src: 'https://s.yimg.com/bj/beb8/beb89ad56b43b74e78a1296256216e4b.jpg', caption: 'Cut & Color ✂' },
  { src: 'https://s.yimg.com/bj/ee8b/ee8b466e63ff0b8d18194ab2d06d278d.jpg', caption: 'Silver color by Zee ✨' },
  { src: 'https://s.yimg.com/bj/0ecf/0ecf4895b3d75db81327cdad0e334bd5.jpg', caption: 'Cut & Perm 🌊' },
  { src: 'https://s.yimg.com/bj/318d/318d59cf94b8e8eaafa33f2ff21aff76.jpg', caption: 'Fresh styling 💛' },
  { src: 'https://s.yimg.com/bj/4a31/4a319402c9a2c507d4705e3e9df1b5c3.jpg', caption: 'Color work 🎨' },
  { src: 'https://s.yimg.com/bj/653c/653c32ae0672a41c0275fe528a94bf6a.jpg', caption: 'Precision cut ✂' },
]

export default function Instagram() {
  return (
    <section style={{ padding: '6rem 2rem', background: 'var(--charcoal)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag">@ztouchsalonsf</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 300, color: '#fff' }}>
            Follow Our Journey
          </h2>
          <div className="gold-line center" />
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginTop: '0.75rem' }}>
            Real work. Real clients. Real transformations.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '4px',
        }}>
          {posts.map((p, i) => (
            <a key={i} href="https://www.instagram.com/ztouchsalonsf" target="_blank" rel="noopener noreferrer"
              style={{ position: 'relative', display: 'block', overflow: 'hidden', aspectRatio: '1' }}
              onMouseEnter={e => {
                e.currentTarget.querySelector('img').style.transform = 'scale(1.08)'
                e.currentTarget.querySelector('.caption').style.opacity = '1'
              }}
              onMouseLeave={e => {
                e.currentTarget.querySelector('img').style.transform = 'scale(1)'
                e.currentTarget.querySelector('.caption').style.opacity = '0'
              }}
            >
              <img src={p.src} alt={p.caption} style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transition: 'transform 0.5s ease',
              }} />
              <div className="caption" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(201,168,76,0.85), transparent 60%)',
                display: 'flex', alignItems: 'flex-end', padding: '0.75rem',
                opacity: 0, transition: 'opacity 0.3s ease',
              }}>
                <span style={{ color: '#fff', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.05em' }}>{p.caption}</span>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="https://www.instagram.com/ztouchsalonsf" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', fontWeight: 500,
            }}>
            View Profile on Instagram →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          section > div > div[style*="grid-template-columns: repeat(6"] {
            grid-template-columns: repeat(3,1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}

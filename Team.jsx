// Team uses real Z Touch work photos to showcase their actual craft
const team = [
  {
    name: 'Zee (Zhi Lan)',
    role: 'Founder & Master Stylist',
    bio: 'With over 6 years of expertise, Zee brings a meticulous eye for detail and a passion for transformative work. Known for his lightning-fast precision, honest consultations, and lasting results across cuts, color, and perms. Speaks English, Cantonese & Mandarin.',
    img: 'https://s.yimg.com/bj/6a9e/6a9e1e4221dc430202bb4a068405e280.jpg',
    specialties: ['Balayage', 'Perms', "Men's Cuts", 'Color'],
  },
  {
    name: 'Star',
    role: 'Senior Stylist',
    bio: 'Star is celebrated for Korean perm transformations and detailed styling work. Clients rave about his recommendations and ability to deliver perfectly styled results every single time.',
    img: 'https://s.yimg.com/bj/000d/000de7755da43ed7b7d6818ecea77d7e.jpg',
    specialties: ['Korean Perm', 'Styling', 'Color'],
  },
  {
    name: 'The Z Touch Team',
    role: 'Your Hair Transformation Awaits',
    bio: 'Our stylists are passionate about elevating your look and making you feel amazing. Using premium Goldwell and Milbon products, we deliver results that keep clients coming back — and sending their friends.',
    img: 'https://s.yimg.com/bj/7b66/7b6659a531e22fe45e626286f42ef240.jpg',
    specialties: ['Goldwell', 'Milbon', 'All Hair Types'],
  },
]

export default function Team() {
  return (
    <section id="team" style={{ padding: '6rem 2rem', background: 'var(--charcoal)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag">Meet the Artists</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 300, color: '#fff' }}>
            Our Expert Team
          </h2>
          <div className="gold-line center" />
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '480px', margin: '1rem auto', fontSize: '0.95rem', lineHeight: 1.8 }}>
            Passionate professionals dedicated to making you look and feel extraordinary.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {team.map((m, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden', transition: 'all 0.4s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.08)'
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
            }}
            >
              <div style={{ height: '320px', overflow: 'hidden' }}>
                <img src={m.img} alt={m.name} style={{
                  width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 300, color: '#fff' }}>{m.name}</h3>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>{m.role}</p>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{m.bio}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {m.specialties.map(s => (
                    <span key={s} style={{
                      fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                      border: '1px solid rgba(201,168,76,0.4)', color: 'var(--gold)',
                      padding: '0.3rem 0.7rem',
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const reviews = [
  {
    name: 'Sarah M.',
    rating: 5,
    date: 'March 2025',
    text: "Zee is genuinely one of the best stylists I've had in San Francisco. He listened to exactly what I wanted and delivered a stunning balayage. The salon is cozy, clean, and the skylight over the wash station is such a lovely touch.",
    service: 'Balayage',
  },
  {
    name: 'James T.',
    rating: 5,
    date: 'February 2025',
    text: "I've been going to Zee for almost 3 years. Relocated to Denver for grad school and I literally rerouted a trip back through SF just to get my haircut here. That should tell you everything you need to know.",
    service: "Men's Cut",
  },
  {
    name: 'Linda K.',
    rating: 5,
    date: 'April 2025',
    text: "The atmosphere is calm and professional. I love that they have refreshments ready! Zee is incredibly skilled with perms — mine came out exactly as I envisioned. Already booked my next appointment.",
    service: 'Perm',
  },
  {
    name: 'Rachel N.',
    rating: 5,
    date: 'January 2025',
    text: "Best kept secret on Ocean Avenue. I got a full color + cut and left looking like a new person. Very reasonable pricing for the quality you get. So happy I found this place!",
    service: 'Color & Cut',
  },
  {
    name: 'David C.',
    rating: 5,
    date: 'March 2025',
    text: "Zee is attentive and so fast! I was in and out in under 45 minutes with a perfect cut. The easy parking and K-line access make it super convenient too. Won't be going anywhere else.",
    service: "Men's Cut",
  },
  {
    name: 'Amy L.',
    rating: 5,
    date: 'April 2025',
    text: "I had my highlights done and they turned out absolutely gorgeous. The toner they used gave my hair such a beautiful shine. 10/10 would recommend to anyone looking for quality color work in SF.",
    service: 'Highlights',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" style={{ padding: '6rem 2rem', background: 'var(--warm-white)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag">Client Love</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 300 }}>
            What Our Guests Say
          </h2>
          <div className="gold-line center" />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>★★★★★</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>4.8</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>· 164 Reviews</span>
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem',
        }}>
          {reviews.map((r, i) => (
            <div key={i} style={{
              background: '#fff', padding: '2rem',
              border: '1px solid var(--border)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-medium)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <p style={{ fontWeight: 500, fontSize: '0.95rem' }}>{r.name}</p>
                  <p style={{ fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.05em' }}>{r.service} · {r.date}</p>
                </div>
                <span style={{ color: 'var(--gold)', fontSize: '0.85rem' }}>{'★'.repeat(r.rating)}</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75, fontStyle: 'italic' }}>
                "{r.text}"
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="https://www.yelp.com/biz/z-touch-salon-san-francisco-2" target="_blank" rel="noopener noreferrer"
            className="btn-outline">
            Read All Reviews on Yelp
          </a>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'

const faqs = [
  {
    q: "Do I need to book in advance?",
    a: "Yes, we highly recommend booking in advance as spots fill up quickly. You can book online via our Square booking page, or call us at (415) 347-7781. Walk-ins may be accommodated based on availability."
  },
  {
    q: "What are your hours?",
    a: "We're open Monday–Saturday 10:00 AM – 7:00 PM and Sunday 10:00 AM – 6:00 PM. We're conveniently located at 1930 Ocean Ave, San Francisco, CA 94127."
  },
  {
    q: "How long will my appointment take?",
    a: "Service times vary. A women's cut & style is typically 60–90 minutes. Color services (highlights, balayage) can take 2–3 hours. Perms take 1.5–2.5 hours. We'll give you a time estimate when you book."
  },
  {
    q: "Do you serve both men and women?",
    a: "Absolutely! We offer specialized services for all genders — from men's cuts and grey blending to women's styling and color. Everyone is welcome at Z Touch Salon."
  },
  {
    q: "Can I request a specific stylist?",
    a: "Yes! When booking online through Square, you can choose your preferred stylist. We recommend requesting Zee directly for specialty color and perm services."
  },
  {
    q: "What's your cancellation policy?",
    a: "We appreciate at least 24-hour notice for cancellations. This allows us to offer the slot to other clients. Please contact us by phone or email if you need to reschedule."
  },
  {
    q: "Is parking available?",
    a: "Yes! There's ample street parking available along Ocean Avenue. We're also conveniently accessible via the K-line Muni, which stops right in front of the salon."
  },
  {
    q: "Do you offer any promotions or discounts?",
    a: "We occasionally run promotions on select services. Follow us @ztouchsalonsf on Instagram or contact us directly to hear about current offers."
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" style={{ padding: '6rem 2rem', background: 'var(--cream)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag">Got Questions?</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 300 }}>
            Frequently Asked
          </h2>
          <div className="gold-line center" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', textAlign: 'left', padding: '1.5rem 0',
                  background: 'none', display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', gap: '1rem',
                }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 400 }}>
                  {faq.q}
                </span>
                <span style={{
                  color: 'var(--gold)', fontSize: '1.2rem', transition: 'transform 0.3s',
                  transform: open === i ? 'rotate(45deg)' : 'none', flexShrink: 0,
                }}>+</span>
              </button>
              <div style={{
                maxHeight: open === i ? '300px' : '0',
                overflow: 'hidden', transition: 'max-height 0.4s ease',
              }}>
                <p style={{
                  fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8,
                  paddingBottom: '1.5rem',
                }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

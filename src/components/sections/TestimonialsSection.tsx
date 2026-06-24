import { useState } from 'react';

const testimonials = [
  {
    id: 'test1',
    quote: 'Entrei achando que só vendia cachorro-quente. Hoje toco duas lojas e a Vila virou minha vida. O suporte é de verdade, do começo ao fim.',
    name: 'Rodrigo F.',
    since: 'Franqueado desde 2019',
  },
  {
    id: 'test2',
    quote: 'O modelo é redondo: produto que o cliente ama e operação que cabe na minha rotina. Foi a melhor decisão que tomei.',
    name: 'Ana Paula S.',
    since: 'Franqueada desde 2021',
  },
];

const initials = (name: string) =>
  name.replace(/[^A-Za-zÀ-ÿ ]/g, '').trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();

const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);

  return (
    <section style={{ padding: '110px 0', background: '#211810', borderTop: '1px solid rgba(255,255,255,.06)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <div style={{ color: '#FF6B00', fontSize: 13, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: 16 }}>Histórias da Vila</div>
          <h2 style={{ fontFamily: "'Veneer', sans-serif", fontSize: 'clamp(42px,5.2vw,78px)', lineHeight: .95, textTransform: 'uppercase', margin: 0, color: '#F4EEE6' }}>
            O que nossos franqueados dizem
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex', transform: `translateX(-${idx * 100}%)`, transition: 'transform .5s cubic-bezier(.4,0,.2,1)' }}>
              {testimonials.map(t => (
                <div key={t.id} style={{ flex: '0 0 100%', padding: '0 4px' }}>
                  <div style={{ display: 'grid', gap: 34, alignItems: 'center', background: '#1A120C', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, padding: 38 }} className="grid-cols-1 md:grid-cols-[200px_1fr]">
                    <div
                      aria-hidden="true"
                      style={{
                        width: 200,
                        height: 200,
                        borderRadius: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(145deg, #FF6B00 0%, #C24E00 100%)',
                        color: '#1a1410',
                        fontFamily: "'Veneer', sans-serif",
                        fontSize: 72,
                        lineHeight: 1,
                        letterSpacing: '.02em',
                        boxShadow: 'inset 0 0 0 6px rgba(255,255,255,.12)',
                      }}
                      className="hidden md:flex"
                    >
                      {initials(t.name)}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Veneer', sans-serif", fontSize: 42, color: '#FF6B00', lineHeight: .7, marginBottom: 8 }}>"</div>
                      <p style={{ fontSize: 19, lineHeight: 1.55, color: '#F4EEE6', margin: '0 0 22px' }}>{t.quote}</p>
                      <div style={{ fontFamily: "'Veneer', sans-serif", fontSize: 22, textTransform: 'uppercase', color: '#F4EEE6' }}>{t.name}</div>
                      <div style={{ fontSize: 14, color: '#9A938B' }}>{t.since}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 30 }}>
            <button onClick={() => setIdx(i => (i - 1 + testimonials.length) % testimonials.length)}
              style={{ width: 46, height: 46, borderRadius: '50%', border: '1px solid rgba(255,255,255,.2)', background: 'transparent', color: '#F4EEE6', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              className="hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button onClick={() => setIdx(i => (i + 1) % testimonials.length)}
              style={{ width: 46, height: 46, borderRadius: '50%', border: '1px solid rgba(255,255,255,.2)', background: 'transparent', color: '#F4EEE6', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              className="hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

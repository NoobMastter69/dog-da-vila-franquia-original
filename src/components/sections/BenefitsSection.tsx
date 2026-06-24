const ratings = [
  { p: 'Reclame Aqui', v: '8.7', m: '/10' },
  { p: 'Google', v: '4.8', m: '/5' },
  { p: 'TripAdvisor', v: '4.9', m: '/5' },
  { p: 'iFood', v: '4.8', m: '/5' },
];

const BenefitsSection = () => (
  <section style={{ padding: '110px 0', background: '#211810', borderTop: '1px solid rgba(255,255,255,.06)', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
    <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <div style={{ color: '#FF6B00', fontSize: 13, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: 16 }}>Prêmios &amp; reconhecimentos</div>
        <h2 style={{ fontFamily: "'Veneer', sans-serif", fontSize: 'clamp(38px,5vw,68px)', lineHeight: .95, textTransform: 'uppercase', margin: 0, color: '#F4EEE6' }}>
          Nossos reconhecimentos
        </h2>
        <p style={{ fontSize: 14, color: '#9A938B', marginTop: 14 }}>dados referentes a março/26</p>
      </div>

      <div style={{ display: 'grid', gap: 20 }} className="grid grid-cols-2 md:grid-cols-4">
        {ratings.map(r => (
          <div key={r.p} style={{ background: '#1A120C', border: '1px solid rgba(255,255,255,.08)', borderRadius: 8, padding: '28px 24px', textAlign: 'center' }}>
            <div style={{ fontSize: 13, color: '#9A938B', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 14, minHeight: 32 }}>{r.p}</div>
            <div style={{ fontFamily: "'Veneer', sans-serif", fontSize: 46, color: '#F4EEE6', lineHeight: 1 }}>
              {r.v}<span style={{ fontSize: 20, color: '#FF6B00' }}>{r.m}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;

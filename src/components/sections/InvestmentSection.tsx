import { useState } from 'react';

const c1images = ['/images/loja.png', '/images/restaurante.png'];
const c2images = ['/images/restaurante2.png', '/images/restaurante.png', '/images/loja.png'];

const card1specs = [
  { k: 'Área', v: '15m² a 30m²' },
  { k: 'Taxa de franquia', v: 'R$ 10.000' },
  { k: 'Investimento inicial', v: 'R$ 35k – 50k' },
  { k: 'Prazo de retorno', v: '18 a 30 meses' },
];

const card2specs = [
  { k: 'Área', v: '40m² a 120m²' },
  { k: 'Taxa de franquia', v: 'R$ 10.000' },
  { k: 'Investimento inicial', v: 'R$ 90k – 310k' },
  { k: 'Prazo de retorno', v: '18 a 24 meses' },
];

const Dot = ({ active }: { active: boolean }) => (
  <button style={{ width: active ? 24 : 8, height: 8, borderRadius: 99, border: 'none', padding: 0, cursor: 'pointer', transition: 'all .3s', background: active ? '#FF6B00' : 'rgba(255,255,255,.4)' }} />
);

const ModelCard = ({
  label, badge, images, specs, investment, description,
  slide, onPrev, onNext, onDot,
}: {
  label: string; badge?: string; images: string[]; specs: { k: string; v: string }[];
  investment: string; description: string; slide: number;
  onPrev: () => void; onNext: () => void; onDot: (i: number) => void;
}) => (
  <div style={{ background: '#1A120C', border: '1px solid rgba(255,255,255,.08)', borderRadius: 8, overflow: 'hidden' }}>
    <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
      <div style={{ display: 'flex', width: `${images.length * 100}%`, height: '100%', transform: `translateX(-${(slide / images.length) * 100}%)`, transition: 'transform .5s cubic-bezier(.4,0,.2,1)' }}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`${label} ${i + 1}`} style={{ flex: `0 0 ${100 / images.length}%`, height: '100%', objectFit: 'cover' }} />
        ))}
      </div>
      <div style={{ position: 'absolute', top: 16, left: 16, background: '#FF6B00', color: '#1a1410', fontFamily: "'Veneer', sans-serif", fontSize: 15, textTransform: 'uppercase', letterSpacing: '.04em', padding: '5px 13px', borderRadius: 3 }}>{label}</div>
      {badge && (
        <div style={{ position: 'absolute', top: 14, right: 14, background: '#1a1410', color: '#FF6B00', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', padding: '6px 11px', borderRadius: 3, transform: 'rotate(4deg)', border: '1px solid rgba(255,107,0,.4)' }}>{badge}</div>
      )}
      <button onClick={onPrev} style={{ position: 'absolute', top: '50%', left: 12, transform: 'translateY(-50%)', width: 38, height: 38, borderRadius: '50%', border: 'none', background: 'rgba(19,17,16,.7)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hover:bg-[#FF6B00] transition-colors">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <button onClick={onNext} style={{ position: 'absolute', top: '50%', right: 12, transform: 'translateY(-50%)', width: 38, height: 38, borderRadius: '50%', border: 'none', background: 'rgba(19,17,16,.7)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hover:bg-[#FF6B00] transition-colors">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
      </button>
      <div style={{ position: 'absolute', bottom: 14, left: 0, right: 0, display: 'flex', gap: 7, justifyContent: 'center' }}>
        {images.map((_, i) => <Dot key={i} active={i === slide} />)}
      </div>
    </div>
    <div style={{ padding: '30px 30px 34px' }}>
      <p style={{ fontSize: 16.5, color: '#C9C0B6', lineHeight: 1.5, margin: '0 0 24px' }}>{description}</p>
      <div style={{ marginBottom: 26 }}>
        {specs.map(s => (
          <div key={s.k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
            <span style={{ fontSize: 14, color: '#9A938B', textTransform: 'uppercase', letterSpacing: '.04em' }}>{s.k}</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#F4EEE6' }}>{s.v}</span>
          </div>
        ))}
      </div>
      <div style={{ background: 'rgba(255,107,0,.1)', border: '1px solid rgba(255,107,0,.3)', borderRadius: 6, padding: '18px 20px' }}>
        <div style={{ fontSize: 12.5, color: '#FF6B00', textTransform: 'uppercase', letterSpacing: '.1em', fontWeight: 700, marginBottom: 4 }}>Investimento a partir de</div>
        <div style={{ fontFamily: "'Veneer', sans-serif", fontSize: 34, color: '#F4EEE6' }}>{investment}</div>
      </div>
    </div>
  </div>
);

const InvestmentSection = () => {
  const [s1, setS1] = useState(0);
  const [s2, setS2] = useState(0);
  const mod = (n: number, m: number) => ((n % m) + m) % m;

  return (
    <section style={{ padding: '30px 0 120px', background: '#211810', borderTop: '1px solid rgba(255,255,255,.06)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', margin: '80px 0 64px' }}>
          <div style={{ color: '#FF6B00', fontSize: 13, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: 16 }}>Modelos de franquia</div>
          <h2 style={{ fontFamily: "'Veneer', sans-serif", fontSize: 'clamp(46px,6.2vw,92px)', lineHeight: .95, textTransform: 'uppercase', margin: 0, color: '#F4EEE6' }}>
            Conheça sua próxima franquia!
          </h2>
        </div>
        <div style={{ display: 'grid', gap: 34 }} className="grid grid-cols-1 md:grid-cols-2">
          <ModelCard
            label="Modelo Quiosque"
            images={c1images}
            specs={card1specs}
            investment="R$ 45.000"
            description="Quiosque em praça de alimentação de Shopping Center. Operação enxuta, alto fluxo."
            slide={s1}
            onPrev={() => setS1(i => mod(i - 1, c1images.length))}
            onNext={() => setS1(i => mod(i + 1, c1images.length))}
            onDot={setS1}
          />
          <ModelCard
            label="Modelo Loja Física"
            badge="+ procurado"
            images={c2images}
            specs={card2specs}
            investment="R$ 100.000"
            description="Loja de rua com salão decorado, confortável e área kids pra criançada."
            slide={s2}
            onPrev={() => setS2(i => mod(i - 1, c2images.length))}
            onNext={() => setS2(i => mod(i + 1, c2images.length))}
            onDot={setS2}
          />
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;

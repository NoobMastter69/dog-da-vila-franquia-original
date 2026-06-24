const markets = [
  { r: 'Sudeste', s: 'Vagas abertas' },
  { r: 'Sul', s: 'Vagas abertas' },
  { r: 'Nordeste', s: 'Últimas praças' },
  { r: 'Centro-Oeste', s: 'Vagas abertas' },
  { r: 'Norte', s: 'Em expansão' },
];

const tagColor: Record<string, string> = {
  'Vagas abertas': '#FF6B00',
  'Últimas praças': 'rgba(255,107,0,.5)',
  'Em expansão': '#FFB07A',
};

const MercadosSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="mercados" style={{ padding: '120px 0', background: '#1A120C' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px', display: 'grid', gap: 64, alignItems: 'center' }} className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div style={{ color: '#FF6B00', fontSize: 13, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: 18 }}>Onde a gente quer chegar</div>
          <h2 style={{ fontFamily: "'Veneer', sans-serif", fontSize: 'clamp(46px,5.6vw,86px)', lineHeight: .95, textTransform: 'uppercase', margin: '0 0 22px', color: '#F4EEE6' }}>Nossos mercados</h2>
          <p style={{ fontSize: 18, color: '#C9C0B6', lineHeight: 1.55, maxWidth: '42ch', margin: '0 0 30px' }}>
            Pronto pra servir o bom dog de rua? Temos praças disponíveis em todo o Brasil esperando por você.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 34 }}>
            {markets.map(m => (
              <div key={m.r} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#211810', border: '1px solid rgba(255,255,255,.07)', borderRadius: 5, padding: '14px 18px' }}>
                <span style={{ fontWeight: 600, fontSize: 16, color: '#F4EEE6' }}>{m.r}</span>
                <span style={{ fontSize: 12.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: tagColor[m.s] }}>{m.s}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', marginBottom: 32, fontSize: 12.5, color: '#9A938B' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <span style={{ width: 13, height: 13, borderRadius: 3, background: '#FF6B00', display: 'inline-block' }} />Vagas abertas
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <span style={{ width: 13, height: 13, borderRadius: 3, background: 'rgba(255,107,0,.5)', display: 'inline-block' }} />Últimas praças
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <span style={{ width: 13, height: 13, borderRadius: 3, border: '1px dashed rgba(255,107,0,.55)', display: 'inline-block' }} />Em expansão
            </span>
          </div>
          <button onClick={() => scrollTo('contato')}
            style={{ background: '#FF6B00', color: '#1a1410', border: 'none', fontWeight: 700, fontSize: 15, letterSpacing: '.03em', textTransform: 'uppercase', padding: '16px 30px', borderRadius: 4, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10 }}
            className="hover:bg-[#ff8124] transition-colors">
            Entre em contato
          </button>
        </div>

        {/* Mapa do Brasil em contorno, recolorido pro tema escuro */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: 440, aspectRatio: '1/1' }}>
            <div style={{ position: 'absolute', inset: '8%', background: 'radial-gradient(circle, rgba(255,107,0,.22) 0%, rgba(255,107,0,0) 65%)', filter: 'blur(6px)' }} />
            <img
              src="/images/mapa-brasil-lines.png"
              alt="Dog da Vila pelo Brasil"
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                opacity: .92,
              }}
            />
            {/* São Paulo destacado em laranja (onde já operamos) */}
            <div style={{ position: 'absolute', left: '67.5%', top: '72.5%', transform: 'translate(-50%,-50%)', zIndex: 2 }}>
              <div style={{ position: 'relative', width: 58, height: 46 }}>
                <div style={{ position: 'absolute', inset: '-45%', background: 'radial-gradient(circle, rgba(255,107,0,.5) 0%, rgba(255,107,0,0) 70%)', filter: 'blur(5px)' }} />
                <div style={{ position: 'relative', width: '100%', height: '100%', background: '#FF6B00', borderRadius: '58% 42% 52% 48% / 56% 52% 48% 44%', boxShadow: '0 0 16px rgba(255,107,0,.8)', border: '1.5px solid rgba(255,255,255,.85)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#1a1410', lineHeight: 1, letterSpacing: '.01em' }}>3 lojas</span>
                </div>
                <div style={{ position: 'absolute', bottom: 'calc(100% + 6px)', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', fontSize: 11.5, fontWeight: 700, color: '#F4EEE6', textShadow: '0 1px 4px rgba(0,0,0,.75)' }}>São Paulo</div>
              </div>
            </div>
          </div>
          <p style={{ color: '#9A938B', fontSize: 14, textAlign: 'center', margin: 0 }}>Já são 3 lojas em São Paulo — e expandindo pra todo o Brasil</p>
        </div>
      </div>
    </section>
  );
};

export default MercadosSection;

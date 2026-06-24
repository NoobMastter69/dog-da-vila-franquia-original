const difers = [
  { n: '01', t: 'Dogão de Prato', d: 'Pão parmesão da casa, maionese temperada, 3 salsichas, cheddar, requeijão e batata palha.', img: '/images/produto1.png' },
  { n: '02', t: 'Street Dog', d: 'Pão especial, carne moída temperada, cheddar, requeijão cremoso e molho da casa.', img: '/images/produto2.png' },
  { n: '03', t: 'American Dog Bacon', d: 'Prensado na chapa com purê de batata in natura, bacon crocante e molhos exclusivos.', img: '/images/produto3.png' },
  { n: '04', t: 'Molhos da casa', d: 'Receitas autorais que só existem aqui na Vila. O segredo que faz a diferença.', img: '/images/produto4.png' },
  { n: '05', t: 'Burguer Top Gourmet', d: 'Ingredientes secretos do chef que vão te surpreender a cada mordida.', img: '/images/produto5.png' },
  { n: '06', t: 'Mania pra todo mundo', d: 'Opções pra toda família: do clássico ao gourmet, do kids ao combão. Sempre tem algo certo pra você.', img: '/images/produto6.png' },
];

const ProductsGallerySection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="produtos" style={{ padding: '120px 0', background: '#1A120C' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
          <div>
            <div style={{ color: '#FF6B00', fontSize: 13, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: 16 }}>Cardápio</div>
            <h2 style={{ fontFamily: "'Veneer', sans-serif", fontSize: 'clamp(46px,6.2vw,92px)', lineHeight: .95, textTransform: 'uppercase', margin: 0, color: '#F4EEE6' }}>
              Muito além do<br />bom dog
            </h2>
          </div>
          <button onClick={() => scrollTo('contato')}
            style={{ background: 'transparent', color: '#FF6B00', border: '1.5px solid #FF6B00', fontWeight: 700, fontSize: 15, letterSpacing: '.03em', textTransform: 'uppercase', padding: '15px 28px', borderRadius: 4, cursor: 'pointer' }}
            className="hover:bg-[#FF6B00] hover:text-[#1a1410] transition-colors">
            Quero ser franqueado
          </button>
        </div>

        <div style={{ display: 'grid', gap: 24 }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {difers.map(d => (
            <div key={d.n} style={{ background: '#211810', border: '1px solid rgba(255,255,255,.08)', borderRadius: 8, overflow: 'hidden' }}>
              <img src={d.img} alt={d.t} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
              <div style={{ padding: '24px 28px 28px' }}>
                <div style={{ fontFamily: "'Veneer', sans-serif", fontSize: 38, color: 'rgba(255,107,0,.4)', lineHeight: 1, marginBottom: 10 }}>{d.n}</div>
                <div style={{ fontFamily: "'Veneer', sans-serif", fontSize: 22, textTransform: 'uppercase', marginBottom: 10, color: '#F4EEE6' }}>{d.t}</div>
                <p style={{ fontSize: 15.5, color: '#C9C0B6', lineHeight: 1.55, margin: 0 }}>{d.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="https://pedido.anota.ai/loja/dogdavilaooriginal" target="_blank" rel="noopener noreferrer"
            style={{ background: '#FF6B00', color: '#1a1410', textDecoration: 'none', fontWeight: 700, fontSize: 15, letterSpacing: '.03em', textTransform: 'uppercase', padding: '16px 32px', borderRadius: 4, display: 'inline-flex', alignItems: 'center', gap: 10 }}
            className="hover:bg-[#ff8124] transition-colors">
            Ver cardápio completo
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1410" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsGallerySection;

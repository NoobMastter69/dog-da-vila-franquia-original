const AboutSection = () => (
  <section id="sobre-nos" style={{ padding: '110px 0', background: '#F4EEE6' }}>
    <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px', display: 'grid', gap: 64, alignItems: 'center' }} className="grid grid-cols-1 md:grid-cols-2">
      <img src="/images/loja.png" alt="Loja Dog da Vila" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 6 }} />
      <div>
        <div style={{ color: '#FF6B00', fontSize: 13, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: 18 }}>O bom dog de rua</div>
        <h2 style={{ fontFamily: "'Veneer', sans-serif", fontSize: 'clamp(46px,5.6vw,84px)', lineHeight: .95, textTransform: 'uppercase', margin: '0 0 30px', color: '#1A120C' }}>
          Servindo o melhor dog
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-9" style={{ borderBottom: '1px solid rgba(0,0,0,.14)', paddingBottom: 22 }}>
            <div style={{ fontFamily: "'Veneer', sans-serif", fontSize: 'clamp(40px,11vw,52px)', color: '#FF6B00', lineHeight: .85 }} className="whitespace-nowrap">Todo dia</div>
            <div style={{ fontSize: 17, color: '#4A4039', lineHeight: 1.45 }}>clientes do bairro lotam as lojas Dog da Vila pra matar a vontade.</div>
          </div>
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-9">
            <div style={{ fontFamily: "'Veneer', sans-serif", fontSize: 'clamp(40px,11vw,52px)', color: '#FF6B00', lineHeight: .85 }} className="whitespace-nowrap">Artesanal</div>
            <div style={{ fontSize: 17, color: '#4A4039', lineHeight: 1.45 }}>dogs e burgers feitos na hora, do clássico ao gourmet.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

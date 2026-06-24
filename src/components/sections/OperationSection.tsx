const perfis = [
  { t: 'Empreendedor', d: 'Ser dono de um Dog da Vila vai além do negócio: é tocar uma operação com alma de bairro.' },
  { t: 'Apaixonado', d: 'Nossos franqueados amam comida de rua e têm tesão por servir bem todo dia.' },
  { t: 'Mão na massa', d: 'Topa arregaçar as mangas e ajudar em todas as áreas da loja quando precisa.' },
  { t: 'Engajado', d: 'Vive a loja, conhece o cliente pelo nome e está sempre presente na operação.' },
];

const OperationSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section style={{ padding: '120px 0', background: '#F4EEE6' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
          <div>
            <div style={{ color: '#FF6B00', fontSize: 13, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: 16 }}>Quem combina com a Vila</div>
            <h2 style={{ fontFamily: "'Veneer', sans-serif", fontSize: 'clamp(46px,6.2vw,92px)', lineHeight: .95, textTransform: 'uppercase', margin: '0 0 14px', color: '#1A120C' }}>O perfil ideal</h2>
            <p style={{ fontSize: 18, color: '#4A4039', maxWidth: '44ch', margin: 0 }}>Veja o que é preciso pra ser um franqueado Dog da Vila!</p>
          </div>
          <button onClick={() => scrollTo('contato')}
            style={{ background: 'transparent', color: '#FF6B00', border: '1.5px solid #FF6B00', fontWeight: 700, fontSize: 15, letterSpacing: '.03em', textTransform: 'uppercase', padding: '15px 28px', borderRadius: 4, cursor: 'pointer' }}
            className="hover:bg-[#FF6B00] hover:text-[#1a1410] transition-colors">
            Quero ser franqueado
          </button>
        </div>

        <div style={{ display: 'grid', gap: 22 }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {perfis.map(p => (
            <div key={p.t} style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,.1)', borderRadius: 8, padding: '30px 26px', borderTop: '3px solid #FF6B00' }}>
              <div style={{ fontFamily: "'Veneer', sans-serif", fontSize: 26, textTransform: 'uppercase', marginBottom: 14, color: '#1A120C' }}>{p.t}</div>
              <p style={{ fontSize: 15.5, color: '#4A4039', lineHeight: 1.55, margin: 0 }}>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationSection;

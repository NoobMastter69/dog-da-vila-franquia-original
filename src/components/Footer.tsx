const Footer = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const links = [
    { label: 'Nossa História', id: 'sobre-nos' },
    { label: 'Cardápio', id: 'produtos' },
    { label: 'Nossos mercados', id: 'mercados' },
    { label: 'Seja um franqueado', id: 'franqueado' },
    { label: 'Fale conosco', id: 'contato' },
  ];

  return (
    <footer style={{ background: '#120C08', borderTop: '1px solid rgba(255,255,255,.07)', padding: '70px 0 30px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
        <img src="/images/logo2.PNG" alt="Dog da Vila" style={{ height: 64 }} />
        <p style={{ fontSize: 14.5, color: '#9A938B', lineHeight: 1.7, margin: 0 }}>
          Hot dogs e hambúrgueres artesanais<br />
          Feitos na hora · Molhos da casa<br />
          Simplesmente diferente · Desde 2012
        </p>

        <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px 26px', marginTop: 4 }}>
          {links.map(item => (
            <button key={item.label} onClick={() => scrollTo(item.id)}
              style={{ background: 'none', border: 0, cursor: 'pointer', color: '#C9C0B6', fontSize: 15, padding: 0 }}
              className="hover:text-[#FF6B00] transition-colors">
              {item.label}
            </button>
          ))}
          <a href="https://www.instagram.com/dogdavilaofc/" target="_blank" rel="noopener noreferrer"
            style={{ color: '#C9C0B6', textDecoration: 'none', fontSize: 15 }}
            className="hover:text-[#FF6B00] transition-colors">
            Vagas
          </a>
        </nav>

        <a href="https://www.instagram.com/dogdavilaofc/" target="_blank" rel="noopener noreferrer"
          style={{ width: 40, height: 40, border: '1px solid rgba(255,255,255,.18)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9C0B6', textDecoration: 'none', fontSize: 12, fontWeight: 700 }}
          className="hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors">
          IG
        </a>
      </div>

      <div style={{ maxWidth: 1240, margin: '46px auto 0', padding: '24px 32px 0', borderTop: '1px solid rgba(255,255,255,.07)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14, fontSize: 13, color: '#6f675e' }}>
        <span>© {new Date().getFullYear()} Dog da Vila — Todos os direitos reservados</span>
        <span style={{ display: 'flex', gap: 22 }}>
          <a href="#" style={{ color: '#6f675e', textDecoration: 'none' }} className="hover:text-[#FF6B00] transition-colors">Política de Privacidade</a>
          <a href="#" style={{ color: '#6f675e', textDecoration: 'none' }} className="hover:text-[#FF6B00] transition-colors">Termos de Uso</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

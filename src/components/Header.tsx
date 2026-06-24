import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import OrderButton from '@/components/OrderButton';

const navLinks = [
  { label: 'Nossa História', id: 'sobre-nos' },
  { label: 'Cardápio', id: 'produtos' },
  { label: 'Nossos mercados', id: 'mercados' },
  { label: 'Seja um franqueado', id: 'franqueado', active: true },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(19,17,16,.92)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
      {/* Main nav */}
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '14px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
        <a href="#" onClick={e => { e.preventDefault(); scrollTo('inicio'); }} className="flex-shrink-0">
          <img src="/images/logo2.PNG" alt="Dog da Vila" style={{ height: 44 }} />
        </a>

        <nav className="hidden md:flex" style={{ gap: 22, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {navLinks.map(link => (
            <button key={link.label} onClick={() => scrollTo(link.id)}
              style={{ background: 'none', border: 0, cursor: 'pointer', fontSize: 14.5, fontWeight: link.active ? 700 : 500, color: link.active ? '#FF6B00' : '#C9C0B6', padding: 0 }}
              className={link.active ? '' : 'hover:text-[#FF6B00] transition-colors'}>
              {link.label}
            </button>
          ))}
          <a href="https://www.instagram.com/dogdavilaofc/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 14.5, fontWeight: 500, color: '#C9C0B6', textDecoration: 'none' }} className="hover:text-[#FF6B00] transition-colors">
            Vagas
          </a>
          <OrderButton
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#FF6B00', border: '1.5px solid #FF6B00', fontWeight: 700, fontSize: 13.5, letterSpacing: '.03em', textTransform: 'uppercase', padding: '9px 18px', borderRadius: 4, cursor: 'pointer' }}
            className="hover:bg-[#FF6B00] hover:text-[#1a1410] transition-colors"
          />
          <button onClick={() => scrollTo('contato')}
            style={{ background: '#FF6B00', color: '#1a1410', border: 'none', fontWeight: 700, fontSize: 13.5, letterSpacing: '.03em', textTransform: 'uppercase', padding: '11px 20px', borderRadius: 4, cursor: 'pointer' }}
            className="hover:bg-[#ff8124] transition-colors">
            Quero ser franqueado
          </button>
        </nav>

        <button className="md:hidden" style={{ background: 'none', border: 0, cursor: 'pointer', color: '#C9C0B6' }} onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ padding: '16px 32px 24px', borderTop: '1px solid rgba(255,255,255,.07)', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {navLinks.map(link => (
            <button key={link.label} onClick={() => scrollTo(link.id)}
              style={{ background: 'none', border: 0, cursor: 'pointer', textAlign: 'left', fontSize: 15, fontWeight: 500, color: link.active ? '#FF6B00' : '#C9C0B6', padding: 0 }}>
              {link.label}
            </button>
          ))}
          <button onClick={() => scrollTo('contato')}
            style={{ background: 'none', border: 0, cursor: 'pointer', textAlign: 'left', fontSize: 15, fontWeight: 500, color: '#C9C0B6', padding: 0 }}>
            Fale conosco
          </button>
          <a href="https://www.instagram.com/dogdavilaofc/" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 15, fontWeight: 500, color: '#C9C0B6', textDecoration: 'none' }}>
            Vagas
          </a>

          <div style={{ height: 1, background: 'rgba(255,255,255,.08)', margin: '4px 0' }} />

          <OrderButton
            style={{ width: '100%', minHeight: 50, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'transparent', color: '#FF6B00', border: '1.5px solid #FF6B00', fontWeight: 700, fontSize: 14, letterSpacing: '.03em', textTransform: 'uppercase', borderRadius: 4, cursor: 'pointer' }}
          />
          <button onClick={() => scrollTo('contato')}
            style={{ background: '#FF6B00', color: '#1a1410', border: 'none', fontWeight: 700, fontSize: 14, letterSpacing: '.03em', textTransform: 'uppercase', padding: '14px 20px', borderRadius: 4, cursor: 'pointer', textAlign: 'center' }}>
            Quero ser franqueado
          </button>

          <a href="https://www.instagram.com/dogdavilaofc/" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#9A938B', textDecoration: 'none', fontSize: 13, letterSpacing: '.06em', textTransform: 'uppercase', marginTop: 4 }}>
            <span style={{ width: 26, height: 26, border: '1px solid rgba(255,255,255,.18)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>IG</span>
            @dogdavilaofc
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

import { useState, CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { ShoppingBag, X, MapPin } from 'lucide-react';

const lojas = [
  { name: 'Jd. Rosana', sub: 'Pirajussara, São Paulo - SP', url: 'https://pedido.anota.ai/loja/dogdavilaooriginal' },
  { name: 'Jd. Independência', sub: 'Embu das Artes - SP', url: 'https://pedido.anota.ai/loja/dog-da-vila2' },
  { name: 'Un. Caieiras', sub: 'Caieiras - SP', url: 'https://pedido.anota.ai/loja/fabuloso-dog-da-vila-hot-dog-burguers' },
];

interface OrderButtonProps {
  label?: string;
  style?: CSSProperties;
  className?: string;
  showIcon?: boolean;
}

const OrderButton = ({ label = 'Fazer Pedido', style, className, showIcon = true }: OrderButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} style={style} className={className}>
        {showIcon && <ShoppingBag size={17} />}
        {label}
      </button>

      {open && createPortal(
        <div
          onClick={() => setOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.78)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ width: '100%', maxWidth: 420, background: '#211810', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: 'clamp(22px,5vw,30px)', boxSizing: 'border-box', boxShadow: '0 24px 60px rgba(0,0,0,.6)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 6 }}>
              <h3 style={{ fontFamily: "'Veneer', sans-serif", fontSize: 'clamp(22px,6vw,28px)', textTransform: 'uppercase', color: '#F4EEE6', margin: 0, lineHeight: 1.05 }}>Escolha a unidade</h3>
              <button type="button" onClick={() => setOpen(false)} aria-label="Fechar"
                style={{ flexShrink: 0, width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,.18)', background: 'transparent', color: '#C9C0B6', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                className="hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors">
                <X size={18} />
              </button>
            </div>
            <p style={{ fontSize: 14.5, color: '#9A938B', margin: '0 0 22px' }}>Pra qual loja vai o seu pedido?</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {lojas.map(l => (
                <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#1A120C', border: '1px solid rgba(255,255,255,.08)', borderRadius: 12, padding: '15px 16px', textDecoration: 'none', minHeight: 56 }}
                  className="hover:border-[#FF6B00] transition-colors group">
                  <span style={{ flexShrink: 0, width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,107,0,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF6B00' }}>
                    <MapPin size={19} />
                  </span>
                  <span style={{ flex: 1, minWidth: 0 }}>
                    <span style={{ display: 'block', fontFamily: "'Veneer', sans-serif", fontSize: 18, textTransform: 'uppercase', color: '#F4EEE6', lineHeight: 1.1 }}>{l.name}</span>
                    <span style={{ display: 'block', fontSize: 13, color: '#9A938B', marginTop: 2 }}>{l.sub}</span>
                  </span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2.5" style={{ flexShrink: 0 }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default OrderButton;

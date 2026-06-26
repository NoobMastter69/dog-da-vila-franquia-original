import { useState, CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { ShoppingBag, X, MapPin, Bike, MessageCircle, ArrowLeft } from 'lucide-react';

type Opcao = { label: string; sub?: string; url: string; icon: 'ifood' | '99' | 'retirar' | 'whats' };

interface Loja {
  name: string;
  sub: string;
  url?: string;          // unidade com link direto
  options?: Opcao[];     // unidade com várias opções de pedido
}

const lojas: Loja[] = [
  {
    name: 'Jd. Rosana',
    sub: 'Pirajussara, São Paulo - SP',
    options: [
      { label: 'Pedir pelo iFood', url: 'https://www.ifood.com.br/delivery/sao-paulo-sp/hot-dog---dog-da-vila---o-original-pirajussara/f765192c-7257-41d7-89f7-b4b1a7158b3d?UTM_Medium=share', icon: 'ifood' },
      { label: 'Pedir pela 99Food', url: 'https://oia.99app.com/dlp9/zVXlQk?area=BR', icon: '99' },
      { label: 'Pedir e retirar na loja', url: 'https://pedido.anota.ai/loja/dogdavilaooriginal', icon: 'retirar' },
      { label: 'Falar no WhatsApp', sub: '(11) 9 4089-0079', url: 'https://wa.me/5511940890079', icon: 'whats' },
    ],
  },
  {
    name: 'Jd. Independência',
    sub: 'Embu das Artes - SP',
    options: [
      { label: 'Pedir pelo iFood', url: 'https://www.ifood.com.br/delivery/embu-das-artes-sp/dog-da-vila---jd-independencia-jardim-independencia/46b506aa-7ba7-4f22-9942-077eb2d91c84?UTM_Medium=share', icon: 'ifood' },
      { label: 'Pedir pela 99Food', url: 'https://oia.99app.com/dlp9/UkfsTB?share_media=WHATSAPP', icon: '99' },
      { label: 'Pedir e retirar na loja', url: 'https://pedido.anota.ai/loja/dog-da-vila2', icon: 'retirar' },
      { label: 'Falar no WhatsApp', sub: '(11) 9 7091-0079', url: 'https://wa.me/5511970910079', icon: 'whats' },
    ],
  },
  { name: 'Un. Caieiras', sub: 'Caieiras - SP', url: 'https://pedido.anota.ai/loja/fabuloso-dog-da-vila-hot-dog-burguers' },
];

const optIcon = (k: Opcao['icon']) =>
  k === 'whats' ? <MessageCircle size={19} /> : k === 'retirar' ? <ShoppingBag size={19} /> : <Bike size={19} />;

interface OrderButtonProps {
  label?: string;
  style?: CSSProperties;
  className?: string;
  showIcon?: boolean;
}

const OrderButton = ({ label = 'Fazer Pedido', style, className, showIcon = true }: OrderButtonProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Loja | null>(null);

  const close = () => { setOpen(false); setSelected(null); };

  const rowStyle: CSSProperties = { display: 'flex', alignItems: 'center', gap: 14, background: '#1A120C', border: '1px solid rgba(255,255,255,.08)', borderRadius: 12, padding: '15px 16px', textDecoration: 'none', minHeight: 56 };

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} style={style} className={className}>
        {showIcon && <ShoppingBag size={17} />}
        {label}
      </button>

      {open && createPortal(
        <div
          onClick={close}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.78)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ width: '100%', maxWidth: 420, background: '#211810', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: 'clamp(22px,5vw,30px)', boxSizing: 'border-box', boxShadow: '0 24px 60px rgba(0,0,0,.6)', maxHeight: '90vh', overflowY: 'auto' }}
          >
            {!selected ? (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 6 }}>
                  <h3 style={{ fontFamily: "'Veneer', sans-serif", fontSize: 'clamp(22px,6vw,28px)', textTransform: 'uppercase', color: '#F4EEE6', margin: 0, lineHeight: 1.05 }}>Escolha a unidade</h3>
                  <button type="button" onClick={close} aria-label="Fechar"
                    style={{ flexShrink: 0, width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,.18)', background: 'transparent', color: '#C9C0B6', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    className="hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors">
                    <X size={18} />
                  </button>
                </div>
                <p style={{ fontSize: 14.5, color: '#9A938B', margin: '0 0 22px' }}>Pra qual loja vai o seu pedido?</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {lojas.map(l => {
                    const inner = (
                      <>
                        <span style={{ flexShrink: 0, width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,107,0,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF6B00' }}>
                          <MapPin size={19} />
                        </span>
                        <span style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
                          <span style={{ display: 'block', fontFamily: "'Veneer', sans-serif", fontSize: 18, textTransform: 'uppercase', color: '#F4EEE6', lineHeight: 1.1 }}>{l.name}</span>
                          <span style={{ display: 'block', fontSize: 13, color: '#9A938B', marginTop: 2 }}>{l.sub}</span>
                        </span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2.5" style={{ flexShrink: 0 }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                      </>
                    );
                    return l.options ? (
                      <button key={l.name} type="button" onClick={() => setSelected(l)} style={{ ...rowStyle, cursor: 'pointer' }}
                        className="hover:border-[#FF6B00] transition-colors">
                        {inner}
                      </button>
                    ) : (
                      <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer" style={rowStyle}
                        className="hover:border-[#FF6B00] transition-colors">
                        {inner}
                      </a>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 6 }}>
                  <button type="button" onClick={() => setSelected(null)} aria-label="Voltar"
                    style={{ flexShrink: 0, width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,.18)', background: 'transparent', color: '#C9C0B6', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    className="hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors">
                    <ArrowLeft size={18} />
                  </button>
                  <button type="button" onClick={close} aria-label="Fechar"
                    style={{ flexShrink: 0, width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,.18)', background: 'transparent', color: '#C9C0B6', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    className="hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors">
                    <X size={18} />
                  </button>
                </div>

                <h3 style={{ fontFamily: "'Veneer', sans-serif", fontSize: 'clamp(22px,6vw,28px)', textTransform: 'uppercase', color: '#F4EEE6', margin: '4px 0 2px', lineHeight: 1.05 }}>Seja bem-vindo ao Dog da Vila</h3>
                <p style={{ fontSize: 15, fontWeight: 700, color: '#FF6B00', margin: '0 0 10px' }}>{selected.name}</p>
                <p style={{ fontSize: 14.5, color: '#9A938B', margin: '0 0 22px' }}>Pra fazer o seu pedido, escolha uma das opções abaixo:</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {selected.options!.map(o => (
                    <a key={o.label} href={o.url} target="_blank" rel="noopener noreferrer" style={rowStyle}
                      className="hover:border-[#FF6B00] transition-colors">
                      <span style={{ flexShrink: 0, width: 40, height: 40, borderRadius: '50%', background: o.icon === 'whats' ? 'rgba(37,211,102,.16)' : 'rgba(255,107,0,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: o.icon === 'whats' ? '#25D366' : '#FF6B00' }}>
                        {optIcon(o.icon)}
                      </span>
                      <span style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
                        <span style={{ display: 'block', fontFamily: "'Veneer', sans-serif", fontSize: 18, textTransform: 'uppercase', color: '#F4EEE6', lineHeight: 1.1 }}>{o.label}</span>
                        {o.sub && <span style={{ display: 'block', fontSize: 13, color: '#9A938B', marginTop: 2 }}>{o.sub}</span>}
                      </span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2.5" style={{ flexShrink: 0 }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default OrderButton;

import { useState } from 'react';
import { toast } from "@/components/ui/use-toast";

const investmentOptions = [
  { title: 'Loja Delivery', totalValue: 'R$ 14.000', details: 'Taxa de franquia R$ 5.000 + R$ 9.000 de investimento inicial' },
  { title: 'Quiosque', totalValue: 'R$ 45.000 a R$ 60.000', details: 'Taxa de franquia R$ 10.000 + R$ 35.000 a R$ 50.000 de investimento inicial' },
  { title: 'Loja Física Pequena', totalValue: 'R$ 100.000 a R$ 140.000', details: 'Taxa de franquia R$ 10.000 + R$ 90.000 a R$ 130.000 de investimento inicial' },
  { title: 'Loja Física Média', totalValue: 'R$ 150.000 a R$ 200.000', details: 'Taxa de franquia R$ 10.000 + R$ 140.000 a R$ 190.000 de investimento inicial' },
  { title: 'Loja Física Grande', totalValue: 'R$ 240.000 a R$ 320.000', details: 'Taxa de franquia R$ 10.000 + R$ 230.000 a R$ 310.000 de investimento inicial' },
];

const inputStyle: React.CSSProperties = {
  background: '#211810', border: '1px solid rgba(255,255,255,.12)', borderRadius: 5,
  padding: '14px 16px', color: '#F4EEE6', fontSize: 15, outline: 'none', width: '100%',
  fontFamily: "'Archivo', sans-serif",
};

const labelStyle: React.CSSProperties = {
  fontSize: 13, color: '#9A938B', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600, display: 'block', marginBottom: 8,
};

const ContactForm = () => {
  const accessKey = '3e690a33-0d1c-4e5e-bcc9-c1472e8e601d';
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const [formData, setFormData] = useState({ name: '', whatsapp: '', email: '', investment: '', realInterest: '', location: '', subject: 'Novo contato - Franquia!' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step === 1) {
      const validName = /^[\p{L} ]+$/u;
      if (!validName.test(formData.name) || formData.name.trim().split(' ').filter(Boolean).length < 2) {
        toast({ title: 'Nome inválido', description: 'Por favor, insira seu nome completo.', variant: 'destructive' }); return;
      }
      if (formData.whatsapp.replace(/\D/g, '').length < 10) {
        toast({ title: 'WhatsApp inválido', description: 'Por favor, insira um número com DDD.', variant: 'destructive' }); return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        toast({ title: 'E-mail inválido', description: 'Por favor, insira um e-mail válido.', variant: 'destructive' }); return;
      }
    }
    if (step === 2 && !formData.investment) {
      toast({ title: 'Campo obrigatório', description: 'Por favor, selecione um modelo de franquia.', variant: 'destructive' }); return;
    }
    setStep(s => s + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.realInterest.trim() || !formData.location.trim()) {
      toast({ title: 'Campos obrigatórios', description: 'Por favor, preencha todos os campos.', variant: 'destructive' }); return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...formData, access_key: accessKey }),
      });
      const result = await res.json();
      if (result.success) {
        setSent(true);
      } else {
        throw new Error(result.message);
      }
    } catch {
      toast({ title: 'Erro ao enviar', description: 'Ocorreu um problema. Tente novamente.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div style={{ background: '#1A120C', border: '1px solid rgba(255,107,0,.4)', borderRadius: 10, padding: '60px 40px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Veneer', sans-serif", fontSize: 'clamp(34px,4vw,54px)', textTransform: 'uppercase', color: '#FF6B00', marginBottom: 14 }}>Recebemos! 🌭</div>
        <p style={{ fontSize: 18, color: '#C9C0B6', margin: 0 }}>Nosso time de expansão vai te chamar em breve. Bora colocar um Dog da Vila no seu bairro.</p>
      </div>
    );
  }

  return (
    <div style={{ background: '#1A120C', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, padding: 42 }}>
      {/* Progress */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: '#9A938B', textTransform: 'uppercase', letterSpacing: '.06em' }}>Etapa {step} de {totalSteps}</span>
          <span style={{ fontSize: 13, color: '#FF6B00', fontWeight: 700 }}>{Math.round((step / totalSteps) * 100)}%</span>
        </div>
        <div style={{ width: '100%', background: 'rgba(255,255,255,.08)', borderRadius: 99, height: 4 }}>
          <div style={{ background: '#FF6B00', height: 4, borderRadius: 99, width: `${(step / totalSteps) * 100}%`, transition: 'width .5s ease' }} />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <h3 style={{ fontFamily: "'Veneer', sans-serif", fontSize: 28, textTransform: 'uppercase', color: '#F4EEE6', margin: 0 }}>Vamos começar! Quem é você?</h3>
            <div>
              <label style={labelStyle}>Nome completo</label>
              <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Seu nome completo" style={inputStyle} className="focus:border-[#FF6B00] transition-colors" />
            </div>
            <div>
              <label style={labelStyle}>WhatsApp (com DDD)</label>
              <input name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} placeholder="(00) 00000-0000" style={inputStyle} className="focus:border-[#FF6B00] transition-colors" />
            </div>
            <div>
              <label style={labelStyle}>Seu melhor e-mail</label>
              <input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="voce@email.com" style={inputStyle} className="focus:border-[#FF6B00] transition-colors" />
            </div>
          </div>
        )}

        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h3 style={{ fontFamily: "'Veneer', sans-serif", fontSize: 28, textTransform: 'uppercase', color: '#F4EEE6', margin: '0 0 8px' }}>Qual modelo te interessa?</h3>
            {investmentOptions.map(opt => (
              <button key={opt.title} type="button" onClick={() => setFormData(p => ({ ...p, investment: opt.title }))}
                style={{ background: formData.investment === opt.title ? 'rgba(255,107,0,.12)' : '#211810', border: formData.investment === opt.title ? '1.5px solid #FF6B00' : '1px solid rgba(255,255,255,.1)', borderRadius: 6, padding: '16px 18px', textAlign: 'left', cursor: 'pointer', transition: 'all .2s' }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#F4EEE6', marginBottom: 2 }}>{opt.title}</div>
                <div style={{ fontSize: 15, color: '#FF6B00', fontWeight: 700 }}>{opt.totalValue}</div>
                <div style={{ fontSize: 12, color: '#9A938B', marginTop: 4 }}>{opt.details}</div>
              </button>
            ))}
          </div>
        )}

        {step === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <h3 style={{ fontFamily: "'Veneer', sans-serif", fontSize: 28, textTransform: 'uppercase', color: '#F4EEE6', margin: 0 }}>Estamos quase lá!</h3>
            <div>
              <label style={labelStyle}>Qual seu real interesse em montar uma franquia?</label>
              <textarea name="realInterest" value={formData.realInterest} onChange={handleInputChange} rows={3} placeholder="Ex: Busco minha independência financeira..." style={{ ...inputStyle, resize: 'vertical' }} className="focus:border-[#FF6B00] transition-colors" />
            </div>
            <div>
              <label style={labelStyle}>Cidade / Estado de interesse</label>
              <input name="location" value={formData.location} onChange={handleInputChange} placeholder="Ex: Curitiba / PR" style={inputStyle} className="focus:border-[#FF6B00] transition-colors" />
            </div>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 18, marginTop: 32 }}>
          {step > 1 ? (
            <button type="button" onClick={() => setStep(s => s - 1)}
              style={{ background: 'transparent', border: '1px solid rgba(255,255,255,.2)', color: '#C9C0B6', fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 4, cursor: 'pointer' }}
              className="hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors">
              Voltar
            </button>
          ) : <div />}

          {step < totalSteps ? (
            <button type="button" onClick={nextStep}
              style={{ background: '#FF6B00', color: '#1a1410', border: 'none', fontWeight: 700, fontSize: 15, letterSpacing: '.03em', textTransform: 'uppercase', padding: '14px 32px', borderRadius: 4, cursor: 'pointer' }}
              className="hover:bg-[#ff8124] transition-colors">
              Avançar →
            </button>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: 16 }}>
              <div style={{ fontFamily: "'Veneer', sans-serif", fontSize: 20, textTransform: 'uppercase', color: '#FF6B00' }}>Trabalhamos e atuamos como donos.</div>
              <button type="submit" disabled={isSubmitting}
                style={{ background: '#FF6B00', color: '#1a1410', border: 'none', fontWeight: 700, fontSize: 16, letterSpacing: '.03em', textTransform: 'uppercase', padding: '17px 44px', borderRadius: 5, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10, opacity: isSubmitting ? .7 : 1 }}
                className="hover:bg-[#ff8124] transition-colors">
                {isSubmitting ? 'Enviando...' : 'Enviar'}
                {!isSubmitting && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1410" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>}
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

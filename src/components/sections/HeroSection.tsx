import { useRef, useState } from 'react';
import OrderButton from '@/components/OrderButton';

const HeroSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const videoRef = useRef<HTMLVideoElement>(null);
  // Começa mudo (navegador exige isso pro autoplay funcionar)
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    if (!next) {
      v.volume = 0.6;
      v.play().catch(() => {});
    }
    setMuted(next);
  };

  return (
    <section id="inicio" style={{ position: 'relative', minHeight: '84vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background video */}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-mobile.jpg"
      >
        <source src="/videos/dogvideo-web-audio.mp4" type="video/mp4" />
      </video>
      {/* Gradient overlay */}
      <div className="hero-overlay" />

      {/* Botão de som */}
      <button
        onClick={toggleSound}
        aria-label={muted ? 'Ativar som' : 'Desativar som'}
        title={muted ? 'Ativar som' : 'Desativar som'}
        style={{
          position: 'absolute', bottom: 20, right: 20, zIndex: 5,
          width: 46, height: 46, borderRadius: '50%',
          background: 'rgba(26,20,12,.55)', border: '1.5px solid rgba(255,255,255,.3)',
          color: '#F4EEE6', cursor: 'pointer', display: 'inline-flex',
          alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)',
        }}
        className="hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors"
      >
        {muted ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
        )}
      </button>

      <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: '80px 24px 80px', width: '100%' }}>
        {/* H1 */}
        <h1 id="franqueado" style={{ fontFamily: "'Veneer', sans-serif", fontSize: 'clamp(56px,14vw,150px)', lineHeight: .92, textTransform: 'uppercase', margin: '0 0 24px', letterSpacing: '0', maxWidth: '14ch', color: '#F4EEE6' }}>
          Seja um{' '}
          <span style={{ color: '#FF6B00' }}>franqueado</span>
        </h1>

        <p style={{ fontSize: 19, lineHeight: 1.55, color: '#C9C0B6', maxWidth: '46ch', margin: '0 0 38px' }}>
          Hot dogs e hambúrgueres artesanais que o bairro ama. Coloque a marca mais descolada da vila pra trabalhar por você.
        </p>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 'clamp(20px,5vw,54px)', flexWrap: 'wrap', alignItems: 'flex-start', marginBottom: 36 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Veneer', sans-serif", fontSize: 'clamp(40px,9vw,86px)', lineHeight: .85, color: '#FF6B00' }}>+10</div>
            <div style={{ fontSize: 'clamp(12px,3.4vw,15px)', color: '#C9C0B6', letterSpacing: '.04em', marginTop: 8 }}>anos de mercado</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Veneer', sans-serif", fontSize: 'clamp(40px,9vw,86px)', lineHeight: .85, color: '#FF6B00' }}>3</div>
            <div style={{ fontSize: 'clamp(12px,3.4vw,15px)', color: '#C9C0B6', letterSpacing: '.04em', marginTop: 8 }}>unidades em operação</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Veneer', sans-serif", fontSize: 'clamp(40px,9vw,86px)', lineHeight: .85, color: '#FF6B00' }}>18-24</div>
            <div style={{ fontSize: 'clamp(12px,3.4vw,15px)', color: '#C9C0B6', letterSpacing: '.04em', marginTop: 8 }}>meses de payback</div>
          </div>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }} className="flex-col sm:flex-row">
          <button onClick={() => scrollTo('contato')}
            style={{ background: '#FF6B00', color: '#1a1410', border: 'none', fontWeight: 700, fontSize: 15, letterSpacing: '.03em', textTransform: 'uppercase', padding: '16px 30px', minHeight: 54, borderRadius: 4, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}
            className="hover:bg-[#ff8124] transition-colors w-full sm:w-auto">
            Quero investir
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1410" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
          <OrderButton
            style={{ background: 'transparent', color: '#F4EEE6', border: '1.5px solid rgba(255,255,255,.3)', fontWeight: 700, fontSize: 15, letterSpacing: '.03em', textTransform: 'uppercase', padding: '16px 30px', minHeight: 54, borderRadius: 4, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}
            className="hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

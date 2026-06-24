import OrderButton from '@/components/OrderButton';

const HeroSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="inicio" style={{ position: 'relative', minHeight: '84vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-mobile.jpg"
      >
        <source src="/videos/dogvideo-web.mp4" type="video/mp4" />
      </video>
      {/* Gradient overlay */}
      <div className="hero-overlay" />

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

import ContactForm from "@/components/ContactForm";

const ContactSection = () => (
  <section id="contato" style={{ padding: '110px 0', background: '#FF6B00' }}>
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 32px' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ color: '#1A120C', fontSize: 13, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: 16 }}>Bora começar</div>
        <h2 style={{ fontFamily: "'Veneer', sans-serif", fontSize: 'clamp(52px,7.2vw,118px)', lineHeight: .92, textTransform: 'uppercase', margin: '0 0 18px', color: '#1A120C' }}>
          Vem ser da Vila!
        </h2>
        <p style={{ fontSize: 18, color: 'rgba(26,18,12,.82)', maxWidth: '52ch', margin: '0 auto', lineHeight: 1.55, fontWeight: 500 }}>
          Ficamos felizes que você tem interesse em ser um franqueado. Pra continuar, precisamos te conhecer um pouco mais!
        </p>
      </div>
      <ContactForm />
    </div>
  </section>
);

export default ContactSection;

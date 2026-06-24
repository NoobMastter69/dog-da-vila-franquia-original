const items = ['Pão na chapa', 'Salsicha grelhada no fogo', 'Molhos da casa', 'Feito na hora', 'Desde 2012', 'Simplesmente diferente'];

const TickerSection = () => (
  <div style={{ background: '#FF6B00', overflow: 'hidden', whiteSpace: 'nowrap', borderTop: '2px solid #1a1410', borderBottom: '2px solid #1a1410' }}>
    <div className="ticker-animate">
      {[...items, ...items].map((item, i) => (
        <span key={i} style={{ padding: '0 26px', fontFamily: "'Veneer', sans-serif", fontSize: 22, textTransform: 'uppercase', letterSpacing: '.04em', color: '#1a1410', display: 'inline-flex', alignItems: 'center', lineHeight: 1 }}>
          <span style={{ padding: '15px 0' }}>{item}</span>
          <span style={{ opacity: .5, marginLeft: 26 }}>◆</span>
        </span>
      ))}
    </div>
  </div>
);

export default TickerSection;

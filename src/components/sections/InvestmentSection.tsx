
const InvestmentSection = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-orange-500">
          Investimento
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-black/70 p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">Quiosque:</h3>
            <img 
              src="/images/kiosk.jpg" 
              alt="Quiosque Dog da Vila" 
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-300">
              Após análise e aprovação do perfil do franqueado, a franqueadora vai disponibilizar um quiosque completo para o início das operações.
            </p>
          </div>
          
          <div className="bg-black/70 p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">Loja Física:</h3>
            <img 
              src="/images/store.jpg" 
              alt="Loja Física Dog da Vila" 
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-300">
              Para franqueados que desejam uma operação mais robusta, oferecemos o formato de loja física completa com toda a identidade visual da marca.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;

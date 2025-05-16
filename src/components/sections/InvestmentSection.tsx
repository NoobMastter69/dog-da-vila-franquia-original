
const InvestmentSection = () => {
  return (
    <section id="investimento" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-orange-500">
          Investimento
        </h2>

        <div className="flex justify-center">
          <div className="bg-black/70 p-6 rounded-lg shadow-xl w-full md:w-2/3">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">Loja Física:</h3>
            <img
              src="/images/restaurante.png"
              alt="Loja Física Dog da Vila"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-300">
               Mergulhe na experiência completa Dog da Vila com a nossa loja física. Um espaço vibrante e acolhedor, projetado para encantar seus clientes e reforçar a identidade da marca. Ofereça um cardápio extenso, crie laços com a comunidade local e construa um negócio sólido e duradouro com nosso suporte especializado em cada etapa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;

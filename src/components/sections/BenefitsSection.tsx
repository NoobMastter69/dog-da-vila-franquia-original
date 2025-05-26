import { FaCheckCircle, FaStore, FaMoneyBillWave, FaUtensils, FaHandsHelping } from "react-icons/fa";

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Por que investir no <span className="text-orange-500">Dog da Vila?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          <div className="flex items-start space-x-4">
            <FaStore className="text-orange-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Modelo Enxuto</h3>
              <p>Fácil de replicar e operar, ideal para começar rápido.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaMoneyBillWave className="text-orange-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Baixo investimento</h3>
              <p>Comece seu negócio com pouco capital inicial.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaCheckCircle className="text-orange-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Sucesso comprovado</h3>
              <p>Produto aprovado e reconhecido regionalmente.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaUtensils className="text-orange-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Cardápio variado</h3>
              <p>Margem alta e atrativo para todos os públicos.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaHandsHelping className="text-orange-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Suporte dedicado</h3>
              <p>Acompanhamento completo do franqueado.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

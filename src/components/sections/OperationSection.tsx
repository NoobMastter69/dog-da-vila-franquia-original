
const OperationSection = () => {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Operação simples!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
            <img 
              src="/images/product2.jpg" 
              alt="Hot Dog Dog da Vila" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-lg text-gray-700 mb-6">
              <span className="font-bold">Simples mas rigorosamente padronizada</span> e certificada na origem e nos processos de produção e manuseio.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Toda cadeia de produção Dog da Vila é operacionalizada por indústrias certificadas e produtos que chegam ao franqueado prontos, somente para aquecimento e montagem!
            </p>
            <p className="text-lg text-gray-700 font-bold text-orange-600">
              Receita de sucesso Dog da Vila!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationSection;

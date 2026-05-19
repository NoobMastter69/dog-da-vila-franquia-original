const OperationSection = () => {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div className="rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
            <img
              src="/images/produto6.png"
              alt="Hot Dog Dog da Vila"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight mb-6">
              Operação simples!
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed mb-4">
              <span className="font-bold text-zinc-700">Simples mas rigorosamente padronizada</span> e certificada na origem e nos processos de produção e manuseio.
            </p>
            <p className="text-zinc-500 text-base leading-relaxed mb-6">
              Toda cadeia de produção Dog da Vila é operacionalizada por indústrias certificadas e produtos que chegam ao franqueado prontos, somente para aquecimento e montagem!
            </p>
            <p className="text-orange-500 font-semibold">
              Receita de sucesso Dog da Vila!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OperationSection;

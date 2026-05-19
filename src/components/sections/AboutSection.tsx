const AboutSection = () => {
  return (
    <section id="sobre-nos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight mb-6">
              Por que o <span className="text-orange-500">Dog da Vila</span> é a melhor escolha?
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed mb-4">
              Com uma experiência única de oferecer hambúrgueres e hot dogs artesanais preparados com ingredientes de qualidade, o Dog da Vila proporciona aos clientes uma experiência gastronômica incrível.
            </p>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Nossa famosa maionese secreta e pães especiais fazem toda a diferença, dando aos nossos clientes aquela sensação de estar provando algo único e especial.
            </p>
            <button
              onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              Conheça nossos produtos
            </button>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/produto1.png"
              alt="Hambúrguer Dog da Vila"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

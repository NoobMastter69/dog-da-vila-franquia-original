const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/restaurante2.png')",
          filter: "brightness(0.35)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center py-12">
        <img
          src="/images/logo2.PNG"
          alt="Dog da Vila"
          className="w-44 sm:w-56 md:w-64 mb-4 drop-shadow-2xl"
        />

        <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-4 leading-tight">
          Simplesmente<br />
          <span className="text-orange-400">Diferente</span>
        </h1>

        <button
          onClick={scrollToContact}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-full text-base transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-orange-500/30 mb-4"
        >
          Seja um Franqueado
        </button>

      </div>
    </section>
  );
};

export default HeroSection;

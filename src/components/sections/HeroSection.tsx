import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToFranchiseSection = () => {
    const section = document.getElementById("contato");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-background-image"
        style={{
          backgroundImage: "url('/images/restaurante2.png')",
          filter: " brightness(0.4) sepia(0.3) hue-rotate(5deg)",
        }}
      />
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center h-full px-4 text-center">
        <img
          src="/images/logo2.PNG"
          alt="Dog da Vila"
          className="w-56 sm:w-72 md:w-80 mb-4 animate-fade-in mt-16"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-4 animate-fade-in">
          Simplesmente Diferente
        </h1>
        <div className="mt-6 animate-fade-in flex justify-center">
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full
                       text-xl py-10 px-10           /* Base (Celular): Tamanho perfeito, mantido! */
                       md:text-2xl md:py-12 md:px-16   /* MD (Tablet): Transição suave */
                       lg:text-3xl lg:py-16 lg:px-28   /* LG (PC): Altura aumentada sutilmente para 16 */
                       shadow-xl
                       transition-transform duration-200
                       hover:scale-105"
            onClick={scrollToFranchiseSection}
          >
            Seja um Franqueado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
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
          src="/images/logo.png"
          alt="Dog da Vila"
          className="w-56 sm:w-72 md:w-80 mb-6 animate-fade-in"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-6 animate-fade-in">
          Simplesmente Diferente
        </h1>
        <div className="mt-8 animate-fade-in flex justify-center">
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full
                       px-20 py-12 text-2xl          /* Base: AUMENTADO de px-16 py-10 */
                       sm:px-24 sm:py-16 sm:text-2xl /* SM: AUMENTADO de sm:px-20 sm:py-12 */
                       md:px-28 md:py-20 md:text-3xl /* MD: AUMENTADO de md:px-24 md:py-16 */
                       shadow-xl                     /* Sombra mais forte para destaque */
                       transform transition-transform duration-200 ease-in-out /* Prepara para transição */
                       hover:scale-105               /* Aumenta um pouco ao passar o mouse */
                      "
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
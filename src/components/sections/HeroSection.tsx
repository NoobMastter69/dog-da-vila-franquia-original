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
                       px-12 py-8 text-2xl     /* Base: py-6 -> py-8 (ALTURA AUMENTADA) */
                       sm:px-14 sm:py-10 sm:text-2xl  /* SM: sm:py-8 -> sm:py-10 (ALTURA AUMENTADA) */
                       md:px-16 md:py-12 md:text-3xl /* MD: md:py-10 -> md:py-12 (ALTURA AUMENTADA) */
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
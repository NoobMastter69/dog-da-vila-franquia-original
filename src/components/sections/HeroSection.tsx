import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToFranchiseSection = () => {
    const section = document.getElementById("contato");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('/public/images/restaurante.png')",
          filter: "blur(5px) brightness(0.4) sepia(0.3) hue-rotate(5deg)"
        }} 
      />
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center h-full px-4 text-center">
        <img 
          src="/images/logo.png" 
          alt="Dog da Vila" 
          className="w-64 md:w-80 mb-6 animate-fade-in"
        />
        <h1 className="text-2xl md:text-4xl text-white font-bold mb-6 animate-fade-in">
          Simplesmente Diferente
        </h1>
        <div className="mt-8 animate-fade-in">
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full"
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

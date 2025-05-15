
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Por que o <span className="text-orange-500">Dog da Vila</span> é a melhor escolha?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Com uma experiência única de oferecer hambúrgueres e hot dogs artesanais preparados com ingredientes de qualidade, o Dog da Vila proporciona aos clientes uma experiência gastronômica incrível.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Nossa famosa maionese secreta e pães especiais fazem toda a diferença, dando aos nossos clientes aquela sensação de estar provando algo único e especial.
            </p>
            <div className="mt-8">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Conheça nossos produtos
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/images/product1.jpg" 
              alt="Hambúrguer Dog da Vila" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

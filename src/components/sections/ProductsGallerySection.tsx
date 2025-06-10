import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, X } from "lucide-react"; // Lembre-se de instalar: npm install lucide-react

// Estrutura de dados dos produtos
const products = [
  {
    id: 1,
    name: "Dogão de prato com Fritas grátis",
    description: "pão especial da casa tipo parmesão, maionese temperada, 3 salsichas tradicionais, vinagrete, ketchup, milho, purê de batatas in natura, cheddar e requeijão cremoso, bacon picadinho e batata palha...",
    image: "/images/produto1.png",
  },
  {
    id: 2,
    name: "Street Dog com Carne Moída Temperada",
    description: "Pão especial da casa, maionese temperada, 2 salsichas, ketchup, vinagrete, milho verde (que na verdade é amarelo), carne moída bem temperada no capricho, cheddar, requeijão cremoso, purê de batata in natura e batata palha...",
    image: "/images/produto2.png",
  },
  {
    id: 3,
    name: "American Dog Bacon - Feito com Pão Parmesão da Casa",
    description: "Maionese temperada, 2 salsichas, ketchup, milho, vinagrete, bacon, purê de batata in natura e batata palha... Prensado…",
    image: "/images/produto3.png",
  },
  {
    id: 6,
    name: "Burguer top Gourmet",
    description: "Ingredientes secretos do chef que vão te surpreender a cada mordida.",
    image: "/images/produto6.png",
  },
  // Adicione mais produtos aqui se desejar
];

// Componente de Card do Produto individual, que gerencia o estado de visibilidade
const ProductCard = ({ product }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="p-1">
      <Card className="overflow-hidden shadow-lg group relative">
        <CardContent className="p-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover transition-transform duration-500 ease-in-out lg:group-hover:scale-105"
          />

          {/* Botão de Ação para Mobile (+/X) com fundo preto e opacidade */}
          <button
            onClick={toggleDescription}
            className="lg:hidden absolute top-3 right-3 z-20 bg-black bg-opacity-60 text-white p-2 rounded-full shadow-lg focus:outline-none transition-opacity duration-300 hover:bg-opacity-80"
            aria-label={isDescriptionVisible ? "Fechar descrição" : "Ver descrição"}
          >
            {isDescriptionVisible ? <X size={20} /> : <Plus size={20} />}
          </button>
          
          {/* Sobreposição que aparece no hover (desktop) ou no clique (mobile) */}
          <div className={`absolute inset-0 bg-black transition-all duration-300
            ${isDescriptionVisible ? 'bg-opacity-70' : 'bg-opacity-0'}
            lg:bg-opacity-0 lg:group-hover:bg-opacity-70
            flex flex-col justify-center items-center p-4 text-center`}
            // Permite fechar a descrição ao clicar fora do texto no mobile
            onClick={() => isDescriptionVisible && toggleDescription()}
          >
            {/* Conteúdo da sobreposição (título e descrição) */}
            <div
              className={`transition-opacity duration-300 delay-100
              ${isDescriptionVisible ? 'opacity-100' : 'opacity-0'}
              lg:opacity-0 lg:group-hover:opacity-100`}
              // Impede que o clique no texto feche o card
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-white text-2xl font-bold mb-2">
                {product.name}
              </h3>
              <p className="text-gray-200 text-sm">
                {product.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};


// Componente principal da Galeria de Produtos
const ProductsGallerySection = () => {
  return (
    <section id="produtos" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Nossos <span className="text-orange-500">Produtos</span>
        </h2>

        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                {/* Usando o componente de Card reutilizável */}
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Botões de navegação do carrossel (ocultos em telas muito pequenas) */}
          <CarouselPrevious className="hidden sm:flex -left-4 md:-left-8 text-orange-500 hover:text-white hover:bg-orange-500 border-orange-500" />
          <CarouselNext className="hidden sm:flex -right-4 md:-right-8 text-orange-500 hover:text-white hover:bg-orange-500 border-orange-500" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductsGallerySection
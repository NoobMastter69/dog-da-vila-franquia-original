import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// 1. Criando uma estrutura de dados mais completa para os produtos
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


const ProductsGallerySection = () => {
  return (
    <section id="produtos" className="py-16 bg-gray-100"> {/* Mudei o fundo para um cinza claro */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Nossos <span className="text-orange-500">Produtos</span>
        </h2>

        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full max-w-5xl mx-auto" // Aumentei a largura máxima
        >
          <CarouselContent className="-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1">
                  {/* 2. Adicionando a classe "group" para habilitar o hover
                    e "relative" para posicionar o texto de sobreposição 
                  */}
                  <Card className="overflow-hidden shadow-lg group relative">
                    <CardContent className="p-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" // 3. Efeito de zoom na imagem
                      />
                      
                      {/* 4. Sobreposição que aparece no hover */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-center items-center p-4 text-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-8 text-orange-500 hover:text-white hover:bg-orange-500 border-orange-500" />
          <CarouselNext className="-right-4 md:-right-8 text-orange-500 hover:text-white hover:bg-orange-500 border-orange-500" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductsGallerySection;
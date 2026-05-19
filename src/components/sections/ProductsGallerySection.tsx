import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    id: 1,
    name: "Dogão de Prato com Fritas",
    description: "Pão parmesão da casa, maionese temperada, 3 salsichas, vinagrete, cheddar, requeijão cremoso, bacon e batata palha.",
    image: "/images/produto1.png",
  },
  {
    id: 2,
    name: "Street Dog com Carne Moída",
    description: "Pão especial da casa, maionese temperada, 2 salsichas, carne moída temperada, cheddar, requeijão e batata palha.",
    image: "/images/produto2.png",
  },
  {
    id: 3,
    name: "American Dog Bacon",
    description: "Maionese temperada, 2 salsichas, ketchup, milho, vinagrete, bacon, purê de batata in natura e batata palha. Prensado.",
    image: "/images/produto3.png",
  },
  {
    id: 4,
    name: "Burguer Top Gourmet",
    description: "Ingredientes secretos do chef que vão te surpreender a cada mordida.",
    image: "/images/produto6.png",
  },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => (
  <div className="p-1 h-full">
    <div className="bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-300 group flex flex-col h-full">
      <div className="overflow-hidden h-56 flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-zinc-900 text-sm leading-snug mb-2">{product.name}</h3>
        <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">{product.description}</p>
      </div>
    </div>
  </div>
);

const ProductsGallerySection = () => {
  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-14">
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Cardápio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
            Nossos <span className="text-orange-500">Produtos</span>
          </h2>
        </div>

        <Carousel
          opts={{ loop: false, align: "start" }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <ProductCard product={product} />
              </CarouselItem>
            ))}

            {/* Card "E muito mais" */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="p-1 h-full">
                <div className="bg-zinc-900 rounded-2xl border border-zinc-800 shadow-sm flex flex-col items-center justify-center h-full min-h-[320px] text-center px-6 gap-5">
                  <div className="w-14 h-14 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                    <span className="text-orange-400 text-2xl font-bold">+</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg mb-1">E muito mais!</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Nosso cardápio completo está disponível nas nossas unidades.
                    </p>
                  </div>
                  <a
                    href="https://pedido.anota.ai/loja/dogdavilaooriginal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Ver cardápio
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-4 md:-left-8 border-zinc-200 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors" />
          <CarouselNext className="hidden sm:flex -right-4 md:-right-8 border-zinc-200 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors" />
        </Carousel>

      </div>
    </section>
  );
};

export default ProductsGallerySection;

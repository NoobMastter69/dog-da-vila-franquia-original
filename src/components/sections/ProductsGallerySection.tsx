import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const ProductsGallerySection = () => {
  return (
    <section id="produtos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Nossos <span className="text-orange-500">Produtos</span>
        </h2>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {[1, 2, 3, 4, 5].map((item) => (
              <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden shadow-lg">
                    <CardContent className="p-0">
                      <img
                        src={`/images/produto${item}.png`}
                        alt={`Produto ${item}`}
                        className="w-full h-64 object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-6" />
          <CarouselNext className="-right-4 md:-right-6" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductsGallerySection;

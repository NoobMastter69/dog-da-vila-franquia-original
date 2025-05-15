
import { Card, CardContent } from "@/components/ui/card";

const NumbersSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nossos números:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <Card className="bg-black/20 border-none text-white shadow-lg">
            <CardContent className="pt-6">
              <p className="text-5xl font-bold mb-2">15%</p>
              <p className="text-xl">Lucro livre mensal a partir de</p>
            </CardContent>
          </Card>
          
          <Card className="bg-black/20 border-none text-white shadow-lg">
            <CardContent className="pt-6">
              <p className="text-5xl font-bold mb-2">1-8</p>
              <p className="text-xl">Pay Back de meses</p>
            </CardContent>
          </Card>
          
          <Card className="bg-black/20 border-none text-white shadow-lg">
            <CardContent className="pt-6">
              <p className="text-5xl font-bold mb-2">3</p>
              <p className="text-xl">Unidades em operação</p>
            </CardContent>
          </Card>
          
          <Card className="bg-black/20 border-none text-white shadow-lg">
            <CardContent className="pt-6">
              <p className="text-5xl font-bold mb-2">2012</p>
              <p className="text-xl">Desde</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;

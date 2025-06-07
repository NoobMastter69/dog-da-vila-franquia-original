import { Card, CardContent } from "@/components/ui/card";
import { FaClock, FaStore, FaCalendarAlt } from "react-icons/fa";

const NumbersSection = () => {
  return (
    <section
      id="sobre"
      className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 drop-shadow-lg">
          Nossos Números
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          <Card className="bg-black/20 border-none text-white shadow-2xl hover:scale-105 transition-transform">
            <CardContent className="pt-10 pb-6 flex flex-col items-center gap-3">
              <FaClock size={50} className="text-orange-300 animate-pulse" />
              <p className="text-5xl font-bold">18-24</p>
              <p className="text-lg">Meses de Payback</p>
            </CardContent>
          </Card>

          <Card className="bg-black/20 border-none text-white shadow-2xl hover:scale-105 transition-transform">
            <CardContent className="pt-10 pb-6 flex flex-col items-center gap-3">
              <FaStore size={50} className="text-orange-300 animate-pulse" />
              <p className="text-5xl font-bold">3</p>
              <p className="text-lg">Unidades em operação</p>
            </CardContent>
          </Card>

          <Card className="bg-black/20 border-none text-white shadow-2xl hover:scale-105 transition-transform">
            <CardContent className="pt-10 pb-6 flex flex-col items-center gap-3">
              <FaCalendarAlt size={50} className="text-orange-300 animate-pulse" />
              <p className="text-xl mb-2">Since</p>
              <p className="text-5xl font-bold">2012</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;

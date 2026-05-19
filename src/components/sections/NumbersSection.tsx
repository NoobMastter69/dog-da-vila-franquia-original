import { Clock, Store, CalendarDays } from "lucide-react";

const numbers = [
  { icon: Clock, value: "18-24", label: "Meses de Payback" },
  { icon: Store, value: "3", label: "Unidades em operação" },
  { icon: CalendarDays, value: "2012", label: "Since" },
];

const NumbersSection = () => {
  return (
    <section id="sobre" className="py-24 bg-orange-500">
      <div className="container mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Nossos Números
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {numbers.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="bg-black/20 rounded-2xl p-8 border-none shadow-2xl text-center hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="w-12 h-12 bg-orange-400/30 rounded-xl flex items-center justify-center mx-auto mb-5">
                <Icon className="w-6 h-6 text-orange-100" />
              </div>
              <p className="text-4xl font-bold text-white mb-1">{value}</p>
              <p className="text-orange-100 font-semibold text-sm">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NumbersSection;

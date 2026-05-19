import { Store, TrendingDown, BadgeCheck, UtensilsCrossed, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Store,
    title: "Modelo Enxuto",
    description: "Operação simplificada, ideal para começar de forma simples e rapida!",
  },
  {
    icon: TrendingDown,
    title: "Baixo investimento",
    description: "Comece seu negócio com pouco capital inicial!",
  },
  {
    icon: BadgeCheck,
    title: "Sucesso comprovado",
    description: "Produto aprovado e reconhecido regionalmente.",
  },
  {
    icon: UtensilsCrossed,
    title: "Cardápio variado",
    description: "Atrativo a um grupo amplamente diversificado!",
  },
  {
    icon: HeartHandshake,
    title: "Suporte dedicado",
    description: "Acompanhamento completo do franqueado.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="porque-investir" className="py-24 bg-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-14">
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Vantagens
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
            Por que investir no <span className="text-orange-500">Dog da Vila?</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* Top row — 3 cards iguais */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {benefits.slice(0, 3).map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-zinc-900 font-semibold mb-2">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          {/* Bottom row — 2 cards maiores cobrindo o espaço */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.slice(3).map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-zinc-900 font-semibold mb-2">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;

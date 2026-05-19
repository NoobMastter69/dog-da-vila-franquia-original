import { useState, useRef } from 'react';
import { Volume2, VolumeX, ArrowRight } from 'lucide-react';

const models = [
  { name: "Loja Delivery", value: "R$ 14.000", detail: "R$ 5k taxa + R$ 9k investimento" },
  { name: "Kiosque", value: "R$ 45k – 60k", detail: "R$ 10k taxa + R$ 35k–50k investimento" },
  { name: "Loja Física Pequena", value: "R$ 100k – 140k", detail: "R$ 10k taxa + R$ 90k–130k investimento" },
  { name: "Loja Física Média", value: "R$ 150k – 200k", detail: "R$ 10k taxa + R$ 140k–190k investimento" },
  { name: "Loja Física Grande", value: "R$ 240k – 320k", detail: "R$ 10k taxa + R$ 230k–310k investimento" },
];

const InvestmentSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="investimento" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400">
            Investimento
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">

          {/* Par vídeo + modelos — botão fica fora pra não inflar a altura */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">

            <div className="relative rounded-2xl overflow-hidden bg-black h-72 md:h-auto md:flex-1 shadow-2xl">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/dogvideo.mp4"
                autoPlay
                muted={isMuted}
                loop
                playsInline
              />
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-3 right-3 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors focus:outline-none"
                aria-label={isMuted ? "Ativar som" : "Desativar som"}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
            </div>

            <div className="md:flex-1">
              <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
                Mergulhe na experiência completa Dog da Vila com a nossa loja física. Um espaço vibrante e acolhedor, projetado para encantar seus clientes e reforçar a identidade da marca. Ofereça um cardápio extenso, crie laços com a comunidade local e construa um negócio sólido e duradouro com nosso suporte especializado em cada etapa.
              </p>
              <div className="space-y-3">
                {models.map((m) => (
                  <div
                    key={m.name}
                    className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 transition-colors"
                  >
                    <div>
                      <p className="text-white text-sm font-semibold">{m.name}</p>
                      <p className="text-zinc-500 text-xs mt-0.5">{m.detail}</p>
                    </div>
                    <span className="text-orange-400 text-sm font-bold ml-4 whitespace-nowrap">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="flex justify-center mt-10">
            <button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-full text-base transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-500/20"
            >
              Quero investir agora
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;

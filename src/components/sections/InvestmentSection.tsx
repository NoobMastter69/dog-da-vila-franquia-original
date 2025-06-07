"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

/**
 * InvestmentSection
 *
 * – Mantém o carrossel de vídeos que já existia (troca automática ao terminar)
 * – Adiciona um simulador simples de retorno (payback) e lucro médio mensal
 * – Usa input range para tornar a simulação divertida e imediata
 */
const InvestmentSection = () => {
  // Vídeos já existentes
  const videoFiles = [
    "/videos/doglanchonetevid.mp4",
    "/videos/doglanchonetevid2.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const handleVideoEnded = () =>
    setCurrentVideoIndex((prev) => (prev + 1) % videoFiles.length);

  // --- Simulador de Investimento ---
  const [investment, setInvestment] = useState(150_000); // valor inicial em R$
  const [payback, setPayback] = useState(0);
  const [monthlyProfit, setMonthlyProfit] = useState(0);

  /*
    Fórmulas exemplo (depois você pode trocar pelos dados reais):
    - payback (meses)   = investimento / 25 000  (mínimo 6 meses)
    - lucro médio/mês   = (investimento * 0.18) / payback
   */
  useEffect(() => {
    const paybackMonths = Math.max(6, Math.round(investment / 25_000));
    const profit = Math.round((investment * 0.18) / paybackMonths);

    setPayback(paybackMonths);
    setMonthlyProfit(profit);
  }, [investment]);

  return (
    <section id="investimento" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-orange-500">
          Investimento
        </h2>

        {/* Layout responsivo: vídeo à esquerda, simulador à direita em >= md */}
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          {/* Vídeo */}
          <div className="md:w-1/2">
            <video
              key={videoFiles[currentVideoIndex]}
              className="w-full h-96 object-cover rounded-lg shadow-xl"
              src={videoFiles[currentVideoIndex]}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnded}
            />
          </div>

          {/* Simulador de Retorno */}
          <div className="md:w-1/2 bg-black/70 p-6 rounded-lg shadow-xl flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-orange-400 mb-2">Simule seu Retorno</h3>

            {/* Slider de investimento */}
            <label htmlFor="invest-range" className="text-gray-300 text-sm">
              Quanto pretende investir? (R$)
            </label>
            <input
              id="invest-range"
              type="range"
              min={50_000}
              max={300_000}
              step={10_000}
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="w-full accent-orange-500 cursor-pointer"
            />
            <span className="text-gray-100 text-lg font-semibold">
              R$ {investment.toLocaleString("pt-BR")}
            </span>

            {/* Resultados */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-800 p-4 rounded-xl text-center">
                <p className="text-xs uppercase text-gray-400 tracking-wide">
                  Payback
                </p>
                <p className="text-3xl font-bold text-orange-500">{payback}m</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-xl text-center">
                <p className="text-xs uppercase text-gray-400 tracking-wide">
                  Lucro Médio/mês
                </p>
                <p className="text-3xl font-bold text-orange-500">
                  R$ {monthlyProfit.toLocaleString("pt-BR")}
                </p>
              </div>
            </div>

            {/* Call‑to‑Action */}
            <Button
              className="mt-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-full md:w-auto mx-auto px-8 py-7 text-lg font-bold" // <-- A ALTURA FOI AJUSTADA AQUI
              onClick={() =>
                document
                  .getElementById("contato")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Quero ser Franqueado
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
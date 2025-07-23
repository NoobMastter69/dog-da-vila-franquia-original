// Caminho do arquivo: src/pages/index.tsx

import { useState } from 'react'; // Adicionado para controlar o estado
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import OperationSection from "@/components/sections/OperationSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import NumbersSection from "@/components/sections/NumbersSection";
import InvestmentSection from "@/components/sections/InvestmentSection";
import ProductsGallerySection from "@/components/sections/ProductsGallerySection";
import ContactSection from "@/components/sections/ContactSection";

// Importa o nosso novo componente
import { TelaDeEscolha } from '@/components/sections/TelaDeEscolha';

const Index = () => {
  // Este estado controla se a tela de escolha está visível (true) ou não (false)
  const [mostrarTelaDeEscolha, setMostrarTelaDeEscolha] = useState(true);

  // Esta função será chamada pelo botão "Quero ser Franqueado" para esconder a tela
  const handleFranchiseClick = () => {
    setMostrarTelaDeEscolha(false);
  };

  return (
    <>
      {/* A tela de escolha só será mostrada se 'mostrarTelaDeEscolha' for true */}
      {mostrarTelaDeEscolha && <TelaDeEscolha onFranchiseClick={handleFranchiseClick} />}

      {/* O resto do seu site continua aqui */}
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <HeroSection />
        <AboutSection />
        <OperationSection />
        <BenefitsSection /> 
        <NumbersSection />
        <InvestmentSection />
        <ProductsGallerySection />
        <ContactSection />
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
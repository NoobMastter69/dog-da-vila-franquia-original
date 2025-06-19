import Header from "@/components/Header";
import Footer from "@/components/Footer";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import OperationSection from "@/components/sections/OperationSection";
import BenefitsSection from "@/components/sections/BenefitsSection"; // ✅ Import da nova seção
import NumbersSection from "@/components/sections/NumbersSection";
import InvestmentSection from "@/components/sections/InvestmentSection";
import ProductsGallerySection from "@/components/sections/ProductsGallerySection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
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
  );
};

export default Index;

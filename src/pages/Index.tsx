import Header from "@/components/Header";
import Footer from "@/components/Footer";

import HeroSection from "@/components/sections/HeroSection";
import TickerSection from "@/components/sections/TickerSection";
import AboutSection from "@/components/sections/AboutSection";
import InvestmentSection from "@/components/sections/InvestmentSection";
import MercadosSection from "@/components/sections/MercadosSection";
import OperationSection from "@/components/sections/OperationSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProductsGallerySection from "@/components/sections/ProductsGallerySection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => (
  <div style={{ background: '#1A120C', color: '#F4EEE6', overflowX: 'clip' }}>
    <Header />
    <HeroSection />
    <TickerSection />
    <AboutSection />
    <InvestmentSection />
    <MercadosSection />
    <OperationSection />
    <TestimonialsSection />
    <ProductsGallerySection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;

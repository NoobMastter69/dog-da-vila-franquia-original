import { useState } from 'react';
import { MenuIcon, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 1. CRIAMOS UMA FUNÇÃO PARA CUIDAR DO CLIQUE E DA ROLAGEM
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // Previne o comportamento padrão do link

    const targetId = e.currentTarget.href.split('#')[1]; // Pega o ID do href (ex: "sobre")
    const targetElement = document.getElementById(targetId); // Encontra o elemento na página

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Rola suavemente até o elemento
    }

    // Fecha o menu mobile se estiver aberto
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
        
          <div className="flex-shrink-0">
            <a href="#inicio" onClick={handleNavClick} className="flex items-center">
              <img src="/images/logo2.PNG" alt="Dog da Vila" className="h-14" />
            </a>
          </div>

          {/* Menu para Desktop */}
          {/* 2. ADICIONAMOS O onClick EM TODOS OS LINKS */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#inicio" onClick={handleNavClick} className="text-gray-800 hover:text-orange-500 font-medium">Início</a>
            <a href="#sobre" onClick={handleNavClick} className="text-gray-800 hover:text-orange-500 font-medium">Sobre Nós</a>
            <a href="#porque-investir" onClick={handleNavClick} className="text-gray-800 hover:text-orange-500 font-medium">Porque Investir?</a>
            <a href="#investimento" onClick={handleNavClick} className="text-gray-800 hover:text-orange-500 font-medium">Investimento</a>
            <a href="#produtos" onClick={handleNavClick} className="text-gray-800 hover:text-orange-500 font-medium">Produtos</a>
          </nav>

          {/* Botão de Menu Mobile */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-800 hover:text-orange-500"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white shadow-sm">
            {/* 3. ADICIONAMOS O onClick EM TODOS OS LINKS DO MENU MOBILE TAMBÉM */}
            <div className="flex flex-col space-y-4 px-4">
              <a href="#inicio" onClick={handleNavClick} className="text-gray-800 hover:text-orange-500 font-medium">Início</a>
              <a href="#sobre" onClick={handleNavClick} className="text-gray-800 hover:text-orange-500 font-medium">Sobre Nós</a>
              <a href="#porque-investir" onClick={handleNavClick} className="text-gray-800 hover:text-orange-500 font-medium">Porque Investir?</a>
              <a href="#investimento" onClick={handleNavClick} className="text-gray-800 hover:text-orange-500 font-medium">Investimento</a>
              <a href="#produtos" onClick={handleNavClick} className="text-gray-800 hover:text-orange-500 font-medium">Produtos</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
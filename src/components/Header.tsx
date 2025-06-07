import { useState } from 'react';
import { MenuIcon, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
       
          <div className="flex-shrink-0">
            <a href="#inicio" className="flex items-center">
              <img src="/images/logo.png" alt="Dog da Vila" className="h-14" />
            </a>
          </div>

      
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#inicio" className="text-gray-800 hover:text-orange-500 font-medium">Início</a>
            <a href="#sobre" className="text-gray-800 hover:text-orange-500 font-medium">Sobre Nós</a>
            <a href="#investimento" className="text-gray-800 hover:text-orange-500 font-medium">Investimento</a>
             <a href="#produtos" className="text-gray-800 hover:text-orange-500 font-medium">Produtos</a>
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
            <div className="flex flex-col space-y-4 px-4">
              <a href="#inicio" className="text-gray-800 hover:text-orange-500 font-medium">Início</a>
              <a href="#sobre" className="text-gray-800 hover:text-orange-500 font-medium">Sobre Nós</a>
              <a href="#investimento" className="text-gray-800 hover:text-orange-500 font-medium">Investimento</a>
              <a href="#produtos" className="text-gray-800 hover:text-orange-500 font-medium">Produtos</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
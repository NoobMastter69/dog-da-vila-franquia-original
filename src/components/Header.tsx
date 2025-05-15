
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src="/images/logo.png" alt="Dog da Vila" className="h-14" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-orange-500 font-medium">Início</a>
            <a href="#" className="text-gray-800 hover:text-orange-500 font-medium">Sobre Nós</a>
            <a href="#" className="text-gray-800 hover:text-orange-500 font-medium">Produtos</a>
            <a href="#" className="text-gray-800 hover:text-orange-500 font-medium">Investimento</a>
            <a href="#contato" className="text-gray-800 hover:text-orange-500 font-medium">Contato</a>
          </nav>

          {/* Action Button */}
          <div className="hidden md:block">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Seja um Franqueado
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-800 hover:text-orange-500"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4 px-2 pb-3">
              <a href="#" className="text-gray-800 hover:text-orange-500 font-medium px-3 py-2 rounded-md">Início</a>
              <a href="#" className="text-gray-800 hover:text-orange-500 font-medium px-3 py-2 rounded-md">Sobre Nós</a>
              <a href="#" className="text-gray-800 hover:text-orange-500 font-medium px-3 py-2 rounded-md">Produtos</a>
              <a href="#" className="text-gray-800 hover:text-orange-500 font-medium px-3 py-2 rounded-md">Investimento</a>
              <a href="#contato" className="text-gray-800 hover:text-orange-500 font-medium px-3 py-2 rounded-md">Contato</a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                Seja um Franqueado
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

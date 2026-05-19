import { useState } from 'react';
import { MenuIcon, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre-nos' },
  { label: 'Por que investir?', href: '#porque-investir' },
  { label: 'Números', href: '#sobre' },
  { label: 'Investimento', href: '#investimento' },
  { label: 'Produtos', href: '#produtos' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href')?.replace('#', '');
    const el = id ? document.getElementById(id) : null;
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-zinc-100 fixed top-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 py-3">

          <a href="#inicio" onClick={handleNavClick} className="flex-shrink-0">
            <img src="/images/logo2.PNG" alt="Dog da Vila" className="h-12" />
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-sm font-medium text-zinc-600 hover:text-orange-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={handleNavClick}
              className="ml-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              Seja Franqueado
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden text-zinc-700 hover:text-orange-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-100">
            <div className="flex flex-col gap-4 px-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-sm font-medium text-zinc-700 hover:text-orange-500 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={handleNavClick}
                className="bg-orange-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center transition-colors hover:bg-orange-600"
              >
                Seja Franqueado
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

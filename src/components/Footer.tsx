import { MapPinIcon, PhoneIcon, MailIcon, InstagramIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white" translate="no">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and about */}
          <div>
            <img src="/images/logo.png" alt="Dog da Vila" className="h-20 mb-4" />
            <p className="text-gray-400 mb-4">
              Desde 2012, pensando em fazer o melhor para as pessoas. Buscando facilitar processos internos e se redescobrindo a cada dia como satisfazer a cada dia nossos clientes externos !!
            </p>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2 text-orange-500" />
                <span>3 unidades em operação</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2 text-orange-500" />
                <span>(11) 91476-1414</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="w-5 h-5 mr-2 text-orange-500" />
                <span>brunotizer@icloud.com</span>
              </li>
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Siga-nos</h3>
            <div className="flex space-x-4">
             
              {/* Link do Instagram corrigido */}
              <a 
                href="https://www.instagram.com/dogdavilaofc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} <span className="font-semibold text-orange-400">Dog da Vila</span>. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
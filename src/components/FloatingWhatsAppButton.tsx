
import { PhoneIcon } from 'lucide-react';

const FloatingWhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/+5511914761414" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg z-50 transition-transform hover:scale-110"
    >
      <PhoneIcon size={28} />
    </a>
  );
};

export default FloatingWhatsAppButton;

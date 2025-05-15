
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 bg-orange-500">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
              NÃO PERCA MAIS TEMPO,<br />
              <span className="text-orange-500">SEJA UM FRANQUEADO DOG DA VILA.</span>
            </h2>
            
            <div className="flex justify-center mb-6">
              <div className="w-24 h-1 bg-orange-500"></div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

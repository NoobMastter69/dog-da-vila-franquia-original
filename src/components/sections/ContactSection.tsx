import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-orange-500">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            <span className="text-white">NÃO PERCA MAIS TEMPO,</span><br />
            <span className="text-zinc-900">SEJA UM FRANQUEADO DOG DA VILA.</span>
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-zinc-900 rounded-full"></div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
          <ContactForm />
        </div>

      </div>
    </section>
  );
};

export default ContactSection;

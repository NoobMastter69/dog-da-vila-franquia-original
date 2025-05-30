import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const ContactForm = () => {
  
  const accessKey = 'b8499ac9-f910-41a2-a5fd-4cf112cdee4c';

  const investmentOptions = [
    "Até R$50.000",
    "R$50.000 - R$100.000",
    "R$100.000 - R$200.000",
    "Acima de R$200.000",
    "Prefiro discutir em contato"
  ];

  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    investment: '', 
    subject: 'Novo contato - Franquia!' 
  });

  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataToSend = { ...formData, access_key: accessKey };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });

      const result = await response.json();

      if (result.success) {
        
        toast({
          title: "Formulário enviado!",
          description: "Obrigado pelo seu contato. Entraremos em contato em breve.",
        });

        setFormData({
          name: '',
          whatsapp: '',
          email: '',
          investment: '', 
          subject: 'Novo contato - Franquia!'
        });
      } else {
        console.error('Erro retornado pela API:', result);
        throw new Error(result.message || 'Falha ao enviar o formulário.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um problema inesperado. Por favor, tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Seu Nome"
          className="w-full"
          required
        />
      </div>

      <div>
        <Input
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          placeholder="Seu WhatsApp (com DDD)"
          className="w-full"
          required
        />
      </div>

      <div>
        <Input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Seu e-mail"
          type="email"
          className="w-full"
          required
        />
      </div>

      
      <div>
        <label htmlFor="investment" className="block text-sm font-medium text-gray-700 mb-1">
          Qual é o investimento que você quer fazer no momento?
        </label>
        
        <select
          id="investment"
          name="investment"
          value={formData.investment}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" // Estilização básica, ajuste conforme seus componentes de UI
          required
        >
          <option value="" disabled>Selecione uma faixa de investimento</option>
          {investmentOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Quero saber mais sobre a Franquia'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
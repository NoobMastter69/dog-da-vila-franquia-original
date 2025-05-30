import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
// Adicionar importações para o componente Select do Shadcn
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

  // handleChange para inputs normais
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handler específico para a mudança de valor do Select do Shadcn
  const handleInvestmentChange = (value: string) => {
    setFormData(prev => ({ ...prev, investment: value }));
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
          onChange={handleInputChange} // Usar handleInputChange
          placeholder="Seu Nome"
          className="w-full"
          required
        />
      </div>

      <div>
        <Input
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleInputChange} // Usar handleInputChange
          placeholder="Seu WhatsApp (com DDD)"
          className="w-full"
          required
        />
      </div>

      <div>
        <Input
          name="email"
          value={formData.email}
          onChange={handleInputChange} // Usar handleInputChange
          placeholder="Seu e-mail"
          type="email"
          className="w-full"
          required
        />
      </div>

      <div>
        <label htmlFor="investment-label" className="block text-sm font-medium text-gray-700 mb-1">
          Qual é o investimento que você quer fazer no momento?
        </label>
        {/* Substituído o select nativo pelo componente Select do Shadcn */}
        <Select
          value={formData.investment}
          onValueChange={handleInvestmentChange} // Usar handler específico
          required
        >
          <SelectTrigger id="investment-label" className="w-full">
            <SelectValue placeholder="Selecione uma faixa de investimento" />
          </SelectTrigger>
          <SelectContent>
            {investmentOptions.map((option, index) => (
              <SelectItem key={index} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
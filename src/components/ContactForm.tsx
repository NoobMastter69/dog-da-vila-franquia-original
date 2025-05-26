import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const ContactForm = () => {
  // 👇 COLE A SUA CHAVE DE ACESSO QUE VOCÊ COPIOU DO SITE AQUI 👇
  const accessKey = 'b8499ac9-f910-41a2-a5fd-4cf112cdee4c';

  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: 'Novo contato - Franquia!' // Assunto do email
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Adicionamos a chave de acesso ao objeto que será enviado
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
        // Mostra o toast de sucesso
        toast({
          title: "Formulário enviado!",
          description: "Obrigado pelo seu contato. Entraremos em contato em breve.",
        });
        
        // Limpa o formulário (exceto o assunto)
        setFormData({
          name: '',
          whatsapp: '',
          email: '',
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
      {/* Os campos do formulário continuam os mesmos */}
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
          placeholder="Seu WhatsApp"
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
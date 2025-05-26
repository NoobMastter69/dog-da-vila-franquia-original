import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Usando FormSubmit.co para enviar o formulário para seu email
      const response = await fetch('https://formsubmit.co/edcarlosmegatrom@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          whatsapp: formData.whatsapp,
          email: formData.email,
          _subject: "Novo contato - Franquia"
        })
      });
      
      if (response.ok) {
        // Show success toast
        toast({
          title: "Formulário enviado!",
          description: "Entraremos em contato em breve.",
        });
        
        // Reset form
        setFormData({
          name: '',
          whatsapp: '',
          email: ''
        });
      } else {
        throw new Error('Falha ao enviar formulário');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um problema. Tente novamente.",
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
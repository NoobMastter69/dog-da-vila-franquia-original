
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    
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
        >
          Quero saber mais sobre a Franquia
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;

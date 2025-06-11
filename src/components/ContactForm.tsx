import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactForm = () => {
  const accessKey = 'b8499ac9-f910-41a2-a5fd-4cf112cdee4c';

  const investmentOptions = [
    "Loja delivery (home office): R$ 7 mil - R$ 12 mil",
    "Carrinho de rua: R$ 9 mil - R$ 15 mil",
    "Quiosque: R$ 35 mil - R$ 60 mil",
    "Loja física pequena (com delivery): R$ 100 mil - R$ 140 mil",
    "Loja física (porte médio): R$ 150 mil - R$ 220 mil",
    "Loja física (grande porte): R$ 220 mil - R$ 350 mil",
    "Outro valor / Prefiro discutir em contato"
  ];

  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    investment: '',
    subject: 'Novo contato - Franquia!'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInvestmentChange = (value: string) => {
    setFormData(prev => ({ ...prev, investment: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Verificação do campo de seleção
    if (!formData.investment) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, selecione um modelo de franquia.",
        variant: "destructive",
      });
      return; 
    }

    // ==================== NOVA VALIDAÇÃO REFINADA DO NOME ====================

    // 2. VERIFICAÇÃO DE CARACTERES INVÁLIDOS
    // Esta Regex permite apenas letras (incluindo acentuadas) e espaços.
    const validNameRegex = /^[\p{L} ]+$/u;
    if (!validNameRegex.test(formData.name)) {
        toast({
            title: "Nome inválido",
            description: "Seu nome deve conter apenas letras e espaços.",
            variant: "destructive",
        });
        return; // Impede o envio
    }

    // 3. VERIFICAÇÃO DE NOME COMPLETO (MÍNIMO 2 PALAVRAS)
    const nameParts = formData.name.trim().split(' ').filter(Boolean);
    if (nameParts.length < 2) {
      toast({
        title: "Nome incompleto",
        description: "Por favor, insira seu nome completo.",
        variant: "destructive",
      });
      return; // Impede o envio
    }
    // =====================================================================

    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...formData, access_key: accessKey })
      });
      const result = await response.json();
      if (result.success) {
        toast({ title: "Formulário enviado!", description: "Obrigado pelo seu contato. Entraremos em contato em breve." });
        setFormData({ name: '', whatsapp: '', email: '', investment: '', subject: 'Novo contato - Franquia!' });
      } else {
        throw new Error(result.message || 'Falha ao enviar o formulário.');
      }
    } catch (error) {
      toast({ title: "Erro ao enviar", description: "Ocorreu um problema inesperado. Por favor, tente novamente.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Inputs de Nome, WhatsApp e E-mail */}
      <div><Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Seu Nome Completo" required /></div>
      <div><Input name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} placeholder="Seu WhatsApp (com DDD)" required /></div>
      <div><Input name="email" value={formData.email} onChange={handleInputChange} placeholder="Seu e-mail" type="email" required /></div>

      {/* Campo Select */}
      <div>
        <label htmlFor="investment-label" className="block text-sm font-medium text-gray-700 mb-1">
          Qual modelo de franquia você tem interesse?
        </label>
        <Select value={formData.investment} onValueChange={handleInvestmentChange} required>
          <SelectTrigger
            id="investment-label"
            className="flex w-full items-center justify-between !h-auto whitespace-normal py-2 px-3 text-left leading-snug"
          >
            <SelectValue placeholder="Selecione um modelo..." />
          </SelectTrigger>
          
          <SelectContent className="max-w-[95vw]">
            {investmentOptions.map((option, index) => (
              <SelectItem
                key={index}
                value={option}
                className="whitespace-normal h-auto py-2"
              >
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Botão de envio */}
      <div className="pt-2">
        <Button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 text-sm"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'QUERO SABER MAIS'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
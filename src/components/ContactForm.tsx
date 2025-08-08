import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const ContactFormGamified = () => {
    const accessKey = '3e690a33-0d1c-4e5e-bcc9-c1472e8e601d';

    // NOVO: Estado para controlar a etapa do formulário
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    // Opções de investimento (mesma da Opção 1)
    const investmentOptions = [
        { title: "Loja Delivery", totalValue: "R$ 14.000", details: "(R$ 5.000 taxa de franquia + R$ 9.000 de investimento inicial)" },
        { title: "Kiosque", totalValue: "R$ 45.000 a R$ 60.000", details: "(R$ 10.000 taxa de franquia + R$ 35.000 a R$ 50.000 de investimento inicial)" },
        { title: "Loja Física Pequena", totalValue: "R$ 100.000 a R$ 140.000", details: "(R$ 10.000 taxa de franquia + R$ 90.000 a R$ 130.000 de investimento inicial)" },
        { title: "Loja Física Porte Médio", totalValue: "R$ 150.000 a R$ 200.000", details: "(R$ 10.000 taxa de franquia + R$ 140.000 a R$ 190.000 de investimento inicial)" },
        { title: "Loja Física Porte Grande", totalValue: "R$ 240.000 a R$ 320.000", details: "(R$ 10.000 taxa de franquia + R$ 230.000 a R$ 310.000 de investimento inicial)" },
    ];

    const [formData, setFormData] = useState({
        name: '', whatsapp: '', email: '', investment: '',
        realInterest: '', location: '', subject: 'Novo contato - Franquia!'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleInvestmentChange = (value: string) => {
        setFormData(prev => ({ ...prev, investment: value }));
    };

    // NOVO: Funções de navegação e validação por etapa
    const nextStep = () => {
        // Validação da Etapa 1
        if (step === 1) {
            const validNameRegex = /^[\p{L} ]+$/u;
            if (!validNameRegex.test(formData.name) || formData.name.trim().split(' ').filter(Boolean).length < 2) {
                toast({ title: "Nome inválido", description: "Por favor, insira seu nome completo.", variant: "destructive" }); return;
            }
            if (formData.whatsapp.replace(/\D/g, '').length < 10) {
                toast({ title: "WhatsApp inválido", description: "Por favor, insira um número válido com DDD.", variant: "destructive" }); return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                toast({ title: "E-mail inválido", description: "Por favor, insira um e-mail válido.", variant: "destructive" }); return;
            }
        }
        // Validação da Etapa 2
        if (step === 2) {
            if (!formData.investment) {
                toast({ title: "Campo obrigatório", description: "Por favor, selecione um modelo de franquia.", variant: "destructive" }); return;
            }
        }
        setStep(prev => prev + 1);
    };

    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Validação da Etapa 3 (última etapa)
        if (!formData.realInterest.trim() || !formData.location.trim()) {
            toast({ title: "Campos obrigatórios", description: "Por favor, preencha seu interesse e a localidade.", variant: "destructive" }); return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ ...formData, access_key: accessKey })
            });
            const result = await response.json();
            if (result.success) {
                toast({ title: "Formulário enviado!", description: "Obrigado! Entraremos em contato em breve." });
                setFormData({ name: '', whatsapp: '', email: '', investment: '', realInterest: '', location: '', subject: 'Novo contato - Franquia!' });
                setStep(1); // Volta para a primeira etapa
            } else {
                throw new Error(result.message || 'Falha ao enviar.');
            }
        } catch (error) {
            toast({ title: "Erro ao enviar", description: "Ocorreu um problema. Tente novamente.", variant: "destructive" });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* NOVO: Barra de Progresso */}
            <div>
                <p className="text-center text-sm font-semibold text-gray-600 mb-2">Etapa {step} de {totalSteps}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: `${(step / totalSteps) * 100}%`, transition: 'width 0.5s ease-in-out' }}></div>
                </div>
            </div>

            {/* Etapa 1: Informações Pessoais */}
            {step === 1 && (
                <div className="space-y-4 animate-in fade-in-50">
                    <h3 className="text-lg font-semibold text-center">Vamos começar! Quem é você?</h3>
                    <div><Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Seu Nome Completo" required /></div>
                    <div><Input name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} placeholder="Seu WhatsApp (com DDD)" required /></div>
                    <div><Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Seu e-mail" required /></div>
                </div>
            )}

            {/* Etapa 2: Interesse na Franquia */}
            {step === 2 && (
                <div className="space-y-4 animate-in fade-in-50">
                     <h3 className="text-lg font-semibold text-center">Qual modelo de franquia mais te atrai?</h3>
                    <Select value={formData.investment} onValueChange={handleInvestmentChange} required>
                        <SelectTrigger className="!h-auto whitespace-normal py-2 px-3 text-left leading-snug"><SelectValue placeholder="Selecione um modelo..." /></SelectTrigger>
                        <SelectContent className="max-w-[95vw]">
                            {investmentOptions.map((option) => (
                                <SelectItem key={option.title} value={option.title} className="whitespace-normal h-auto py-3">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-base">{option.title}</span>
                                        <span className="text-orange-600 font-semibold">{option.totalValue}</span>
                                        <span className="text-xs text-gray-500">{option.details}</span>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            )}

            {/* Etapa 3: Detalhes Finais */}
            {step === 3 && (
                <div className="space-y-4 animate-in fade-in-50">
                    <h3 className="text-lg font-semibold text-center">Estamos quase lá! Conte-nos mais.</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Qual seu real interesse em montar uma franquia?</label>
                        <Textarea name="realInterest" value={formData.realInterest} onChange={handleInputChange} placeholder="Ex: Busco minha independência financeira..." className="min-h-[100px]" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Qual a cidade/estado de interesse?</label>
                        <Input name="location" value={formData.location} onChange={handleInputChange} placeholder="Ex: Curitiba / PR" required />
                    </div>
                </div>
            )}

            {/* NOVO: Botões de Navegação */}
            <div className="flex justify-between items-center pt-2">
                {step > 1 ? (
                    <Button type="button" variant="outline" onClick={prevStep}>
                        Voltar
                    </Button>
                ) : <div></div> /* Espaço vazio para manter o botão de avançar na direita */}

                {step < totalSteps ? (
                    <Button type="button" onClick={nextStep} className="bg-orange-500 hover:bg-orange-600">
                        Avançar
                    </Button>
                ) : (
                    <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3" disabled={isSubmitting}>
                        {isSubmitting ? 'Enviando...' : 'ENVIAR E FINALIZAR'}
                    </Button>
                )}
            </div>
        </form>
    );
};

export default ContactFormGamified;
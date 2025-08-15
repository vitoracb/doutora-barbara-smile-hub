import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "O tratamento de canal dói?",
    answer: "Com as técnicas modernas e anestesia adequada, o tratamento de canal é praticamente indolor. Durante o procedimento você não sentirá dor, e qualquer desconforto pós-tratamento é mínimo e controlado com medicação adequada."
  },
  {
    question: "O clareamento dental estraga os dentes?",
    answer: "Quando feito por um profissional qualificado e com produtos adequados, o clareamento dental é seguro e não danifica os dentes. Utilizamos técnicas que preservam o esmalte dental e ajustamos o tratamento para cada paciente."
  },
  {
    question: "Vocês aceitam planos de saúde?",
    answer: "Trabalhamos com diversos planos odontológicos. Entre em contato conosco para verificar se seu plano é aceito e quais procedimentos são cobertos. Também oferecemos facilidades de pagamento."
  },
  {
    question: "Qual a diferença entre limpeza e profilaxia?",
    answer: "São termos que se referem ao mesmo procedimento. A profilaxia ou limpeza profissional remove tártaro, placa bacteriana e manchas que não saem com a escovação normal, sendo essencial para manter a saúde bucal."
  },
  {
    question: "Com que frequência devo fazer consultas?",
    answer: "Recomendamos consultas a cada 6 meses para manutenção e prevenção. No entanto, cada caso é único e pode necessitar de acompanhamento mais frequente dependendo da condição de saúde bucal do paciente."
  },
  {
    question: "O botox é seguro para uso odontológico?",
    answer: "Sim, o botox é amplamente utilizado na odontologia para tratamento de bruxismo, dores na ATM e harmonização facial. É um procedimento seguro quando realizado por profissional habilitado."
  },
  {
    question: "Quanto tempo dura uma consulta?",
    answer: "O tempo varia conforme o tipo de procedimento. Uma consulta de avaliação dura cerca de 30-45 minutos, enquanto tratamentos mais complexos podem levar de 1 a 2 horas. Sempre informamos a duração prevista na hora do agendamento."
  },
  {
    question: "Posso agendar para o mesmo dia?",
    answer: "Dependendo da disponibilidade, sim. Para emergências odontológicas, sempre tentamos encaixar no mesmo dia. Entre em contato via WhatsApp para verificar horários disponíveis."
  }
];

const FAQSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/557398368085?text=Olá! Tenho algumas dúvidas sobre os tratamentos.", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-accent">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Dúvidas{" "}
            <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Encontre respostas para as principais dúvidas sobre nossos tratamentos. 
            Não encontrou sua pergunta? Entre em contato conosco!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-[var(--shadow-soft)]">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 data-[state=open]:bg-accent/50 transition-colors"
                >
                  <AccordionTrigger className="text-left py-6 hover:no-underline hover:text-primary transition-colors">
                    <span className="text-lg font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para esclarecer todas as suas questões e 
              ajudar você a escolher o melhor tratamento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="whatsapp" 
                size="lg"
                onClick={handleWhatsAppClick}
                className="group"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Falar com a Doutora
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Agendar Consulta Presencial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
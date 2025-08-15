import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, MessageCircle } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    treatment: "Clareamento Dental",
    text: "A Dra. Bárbara é incrível! Fez meu clareamento com tanto cuidado que não senti nenhuma sensibilidade. O resultado superou minhas expectativas!",
    rating: 5,
    image: "👩🏻"
  },
  {
    name: "João Santos", 
    treatment: "Tratamento de Canal",
    text: "Estava com muito medo do tratamento de canal, mas a doutora me tranquilizou em cada etapa. Não senti dor alguma e salvou meu dente!",
    rating: 5,
    image: "👨🏻"
  },
  {
    name: "Ana Costa",
    treatment: "Restauração Estética", 
    text: "O atendimento é excepcional! A Dra. Bárbara é muito atenciosa e cuidadosa. Minha restauração ficou perfeita, parece um dente natural.",
    rating: 5,
    image: "👩🏽"
  },
  {
    name: "Carlos Oliveira",
    treatment: "Limpeza e Prevenção",
    text: "Melhor dentista que já fui! O consultório é lindo e ela explica tudo com muito carinho. Agora faço acompanhamento regular sempre.",
    rating: 5,
    image: "👨🏽"
  },
  {
    name: "Fernanda Lima",
    treatment: "Botox Terapêutico",
    text: "O botox para bruxismo mudou minha vida! Não acordo mais com dores de cabeça. A Dra. Bárbara é muito competente e cuidadosa.",
    rating: 5,
    image: "👩🏻‍🦰"
  },
  {
    name: "Roberto Mendes",
    treatment: "Check-up Geral",
    text: "Atendimento humanizado e profissional. A doutora me ajudou a entender a importância da prevenção. Recomendo de olhos fechados!",
    rating: 5,
    image: "👨🏻‍🦲"
  }
];

const TestimonialsSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/557398368085?text=Olá! Vi os depoimentos e gostaria de agendar uma consulta.", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que nossos{" "}
            <span className="text-primary">pacientes dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A satisfação e o sorriso dos nossos pacientes são nossa maior recompensa. 
            Veja alguns depoimentos reais de quem já viveu essa transformação.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm relative overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Quote decoration */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-12 w-12 text-primary" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </blockquote>

                {/* Patient info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-primary">{testimonial.treatment}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Pacientes Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Satisfação dos Pacientes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24h</div>
            <div className="text-muted-foreground">Suporte WhatsApp</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-medical-blue rounded-3xl p-8 max-w-2xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">
              Seja o próximo a transformar seu sorriso!
            </h3>
            <p className="mb-6 opacity-90">
              Junte-se aos milhares de pacientes satisfeitos. Agende sua consulta hoje mesmo.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Quero Fazer Parte Também
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
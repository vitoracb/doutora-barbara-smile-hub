import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Smile, 
  Shield, 
  Sparkles, 
  Heart, 
  Stethoscope, 
  MessageCircle 
} from "lucide-react";

const treatments = [
  {
    icon: Stethoscope,
    title: "Tratamento de Canal",
    description: "Resolução da dor e preservação do dente com tecnologia moderna e cuidado especializado.",
    color: "text-medical-blue"
  },
  {
    icon: Sparkles,
    title: "Clareamento Dental",
    description: "Técnicas seguras para um sorriso mais branco e radiante, respeitando a saúde dos seus dentes.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Limpeza e Prevenção",
    description: "Check-up completo e profilaxia para manter sua saúde bucal sempre em dia.",
    color: "text-success"
  },
  {
    icon: Smile,
    title: "Restaurações Estéticas",
    description: "Restaurações que devolvem a função e a beleza natural do seu sorriso.",
    color: "text-warning"
  },
  {
    icon: Heart,
    title: "Botox Terapêutico",
    description: "Aplicação para tratamento de bruxismo e harmonização facial com foco na saúde.",
    color: "text-medical-blue"
  },
  {
    icon: Sparkles,
    title: "Odontologia Integral",
    description: "Cuidado completo que vai além da estética, focando no seu bem-estar geral.",
    color: "text-primary"
  }
];

const TreatmentsSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/557398368085?text=Olá! Gostaria de saber mais sobre os tratamentos disponíveis.", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tratamentos que{" "}
            <span className="text-primary">Transformam Vidas</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Nossa abordagem integral vai além da estética dental. 
            Cuidamos da sua saúde bucal pensando no seu bem-estar completo.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 border-0 bg-white/50 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`h-8 w-8 ${treatment.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {treatment.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {treatment.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para transformar seu sorriso?
            </h3>
            <p className="text-muted-foreground mb-6">
              Agende uma consulta e descubra qual tratamento é ideal para você.
            </p>
            <Button 
              variant="whatsapp" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="group"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Falar com a Dra. Bárbara
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
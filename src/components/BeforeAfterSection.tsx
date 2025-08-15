import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ArrowRight } from "lucide-react";

const beforeAfterCases = [
  {
    title: "Clareamento Dental",
    description: "Tratamento de clareamento personalizado com resultados naturais",
    duration: "2 sessões",
    category: "Estético",
    image: "🦷✨"
  },
  {
    title: "Restauração Estética",
    description: "Restauração de dente anterior com resultado imperceptível",
    duration: "1 sessão",
    category: "Restaurador",
    image: "🦷💎"
  },
  {
    title: "Tratamento de Canal",
    description: "Preservação dental com tratamento endodôntico moderno",
    duration: "2-3 sessões",
    category: "Endodontia",
    image: "🦷❤️"
  },
  {
    title: "Harmonização Facial",
    description: "Botox terapêutico para bruxismo e harmonização",
    duration: "1 sessão",
    category: "Harmonização",
    image: "💉✨"
  },
  {
    title: "Limpeza Profissional",
    description: "Profilaxia completa com remoção de tártaro e manchas",
    duration: "1 sessão",
    category: "Prevenção",
    image: "🦷🧼"
  },
  {
    title: "Facetas de Porcelana",
    description: "Transformação completa do sorriso com facetas ultrafinas",
    duration: "3-4 sessões",
    category: "Estético",
    image: "🦷👑"
  }
];

const BeforeAfterSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os resultados dos tratamentos.", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Resultados que{" "}
            <span className="text-primary">Falam por Si</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Veja a transformação real de nossos pacientes. 
            Cada caso é único e tratado com excelência e cuidado personalizado.
          </p>
        </div>

        {/* Before/After Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {beforeAfterCases.map((case_, index) => (
            <Card 
              key={index}
              className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Image placeholder with treatment icon */}
                <div className="relative h-48 bg-gradient-to-br from-accent to-secondary flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl">{case_.image}</div>
                  <Badge 
                    className="absolute top-4 right-4 bg-primary text-primary-foreground"
                  >
                    {case_.category}
                  </Badge>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {case_.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {case_.description}
                  </p>
                  
                  {/* Details */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-primary">
                      <ArrowRight className="h-4 w-4" />
                      <span className="font-medium">{case_.duration}</span>
                    </div>
                    <div className="text-muted-foreground">
                      Resultado real
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results highlights */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 mb-12 shadow-[var(--shadow-soft)]">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Precisão nos Resultados</h3>
              <p className="text-muted-foreground">Planejamento digital e técnicas avançadas para resultados previsíveis</p>
            </div>
            <div>
              <div className="text-3xl mb-3">💎</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Materiais Premium</h3>
              <p className="text-muted-foreground">Utilizamos os melhores materiais para garantir durabilidade e estética</p>
            </div>
            <div>
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Tratamentos Otimizados</h3>
              <p className="text-muted-foreground">Protocolos modernos que reduzem o tempo de tratamento</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-medical-blue rounded-3xl p-8 max-w-2xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para ver seu próprio antes e depois?
            </h3>
            <p className="mb-6 opacity-90">
              Agende uma avaliação gratuita e descubra como podemos transformar seu sorriso.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Quero Minha Transformação
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
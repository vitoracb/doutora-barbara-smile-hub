import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import draBarbaraImage from "@/assets/dra-barbara-nova.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    console.log("WhatsApp button clicked!");
    const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta com a Dra. Bárbara Queiroz.");
    const url = `https://wa.me/557398368085?text=${message}`;
    console.log("Opening URL:", url);
    
    // Tenta abrir em nova aba
    const newWindow = window.open(url, "_blank");
    
    // Se não conseguir abrir, tenta abrir na mesma aba
    if (!newWindow) {
      window.location.href = url;
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-accent via-background to-secondary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_50%)] opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Contact info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span>(73) 99836-8085</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Itacaré/BA</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Serra Grande/BA</span>
              </div>
            </div>

            {/* Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Mais do que um sorriso.{" "}
                <span className="text-primary">Um cuidado que transforma sua vida.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Descubra a odontologia que cuida de você por inteiro. 
                Atendimento personalizado e acolhimento em cada detalhe.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start relative z-50">
              <a 
                href="https://wa.me/557398368085?text=Olá! Gostaria de agendar uma consulta com a Dra. Bárbara Queiroz."
                target="_blank"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg inline-flex items-center gap-2 cursor-pointer relative z-50"
                style={{zIndex: 9999}}

              >
                <MessageCircle className="h-5 w-5" />
                Agende sua Consulta
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Atendimento Personalizado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Tecnologia Avançada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>15+ Anos de Experiência</span>
              </div>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="relative">
            <div className="relative z-10 mx-auto lg:mx-0 w-fit">
              <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
                <img 
                  src={draBarbaraImage} 
                  alt="Dra. Bárbara Queiroz - Cirurgiã Dentista" 
                  className="w-full h-auto max-w-md mx-auto lg:max-w-lg object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-[var(--shadow-card)]">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Sorrisos Transformados</div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-medical-blue/10 rounded-3xl -z-10 transform rotate-3 scale-105"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
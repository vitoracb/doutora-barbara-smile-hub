import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  MapPin, 
  Mail,
  Instagram,
  Facebook,
  Heart
} from "lucide-react";
import draBarbaraImage from "@/assets/dra-barbara-nova.jpg";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/557398368085?text=Olá! Gostaria de agendar uma consulta com a Dra. Bárbara Queiroz.", "_blank");
  };

  return (
    <footer className="bg-gradient-to-b from-background to-secondary">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        {/* Final CTA Section */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-primary to-medical-blue rounded-3xl p-8 max-w-4xl mx-auto text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-3xl font-bold mb-4">
                  Agende sua Consulta e Dê o Primeiro Passo para o Sorriso dos Seus Sonhos
                </h3>
                <p className="mb-6 opacity-90 leading-relaxed">
                  Transforme sua saúde bucal com um atendimento acolhedor e tratamentos de excelência. 
                  Sua nova jornada começa aqui!
                </p>
                <Button 
                  variant="secondary" 
                  size="xl"
                  onClick={handleWhatsAppClick}
                  className="bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Transformar Meu Sorriso Agora
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src={draBarbaraImage} 
                    alt="Dra. Bárbara Queiroz" 
                    className="w-48 h-48 object-cover rounded-full border-4 border-white/20"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2">
                    <Heart className="h-6 w-6 text-primary fill-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Dra. Bárbara Queiroz</h3>
            <p className="text-muted-foreground leading-relaxed">
              Cirurgiã dentista especializada em odontologia integral, 
              oferecendo tratamentos completos com foco no cuidado acolhedor e personalizado.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/drabarbaraodonto?igsh=em8xazV2NWJpeDBq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://www.facebook.com/share/15wxZccegz/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Treatments */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Tratamentos</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Tratamento de Canal</li>
              <li>Clareamento Dental</li>
              <li>Restaurações Estéticas</li>
              <li>Limpeza e Prevenção</li>
              <li>Botox Terapêutico</li>
              <li>Odontologia Integral</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Contato</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span>(73) 99836-8085</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@drabarbara.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>Itacaré/BA</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>Serra Grande/BA</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Horários</h3>
            <div className="space-y-2 text-muted-foreground">
              <div>
                <div className="font-medium text-foreground">Segunda à Sexta</div>
                <div>9h às 18h</div>
              </div>
              <div>
                <div className="font-medium text-foreground">Sábados</div>
                <div>9h às 14h</div>
              </div>
              <div>
                <div className="font-medium text-foreground">Domingos</div>
                <div>Fechado</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © 2025 Dra. Bárbara Queiroz. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>CRO-SP: 123456</span>
            <span>•</span>
            <span>Política de Privacidade</span>
            <span>•</span>
            <span>Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
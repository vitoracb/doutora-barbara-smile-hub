import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageCircle, 
  Phone, 
  MapPin, 
  Clock, 
  Mail,
  Instagram,
  Facebook
} from "lucide-react";
import draBarbaraImage from "@/assets/dra-barbara-queiroz.jpg";
import dentalClinicImage from "@/assets/dental-clinic-interior.jpg";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/557398368085?text=Olá! Gostaria de agendar uma consulta com a Dra. Bárbara Queiroz.", "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const formData = new FormData(e.target as HTMLFormElement);
    const message = `Olá! Meu nome é ${formData.get('name')}, telefone: ${formData.get('phone')}, email: ${formData.get('email')}. Mensagem: ${formData.get('message')}`;
    window.open(`https://wa.me/557398368085?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Entre em{" "}
            <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Agende sua consulta e dê o primeiro passo para o sorriso dos seus sonhos. 
            Estamos aqui para cuidar de você!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-[var(--shadow-soft)]">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-medical-blue rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-[var(--shadow-soft)]">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#25D366] to-[#20B858] rounded-xl flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-[var(--shadow-soft)]">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-medical-blue rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                    <p className="text-muted-foreground">Rua das Flores, 123 - Vila Madalena<br />São Paulo - SP, 05435-000</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-[var(--shadow-soft)]">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-medical-blue rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Horário de Funcionamento</h3>
                    <p className="text-muted-foreground">
                      Segunda à Sexta: 8h às 18h<br />
                      Sábados: 8h às 14h
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-[var(--shadow-soft)]">
              <h3 className="font-semibold text-foreground mb-4">Siga-nos nas redes sociais</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/drabarbaraodonto?igsh=em8xazV2NWJpeDBq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.facebook.com/share/15wxZccegz/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-bold text-foreground mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Nome</label>
                  <Input 
                    name="name"
                    placeholder="Seu nome completo" 
                    required 
                    className="border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Telefone</label>
                  <Input 
                    name="phone"
                    placeholder="(11) 99999-9999" 
                    required 
                    className="border-border"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">E-mail</label>
                <Input 
                  name="email"
                  type="email" 
                  placeholder="seu@email.com" 
                  required 
                  className="border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Mensagem</label>
                <Textarea 
                  name="message"
                  placeholder="Conte-nos como podemos ajudar você..." 
                  rows={4}
                  className="border-border resize-none"
                />
              </div>
              <Button type="submit" variant="whatsapp" size="lg" className="w-full">
                <MessageCircle className="mr-2 h-5 w-5" />
                Enviar via WhatsApp
              </Button>
            </form>
          </div>
        </div>

        {/* Clinic showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-[var(--shadow-soft)]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Conheça nossa clínica
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Um ambiente moderno, acolhedor e equipado com a mais alta tecnologia 
                  para proporcionar o melhor atendimento e conforto durante seu tratamento.
                </p>
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar Visita
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={dentalClinicImage} 
                  alt="Interior da clínica odontológica" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, HeartPulse, Scissors, Bath, Stethoscope, Syringe, PawPrint, Heart, Dog } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
      <Header />
      <main className="flex-1 overflow-x-hidden w-full">
        {/* Hero */}
        <section className="pt-24 pb-20 md:pt-32 md:pb-24 relative overflow-hidden">
          <div className="container-wide grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="font-serif text-5xl md:text-7xl leading-tight text-primary"
              >
                Cuidado Veterinário <span className="text-secondary">Premium</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                  className="mt-6 text-muted text-xl max-w-2xl"
              >
                Consultas especializadas, banho & tosa premium e cuidados completos para o seu melhor amigo. Tecnologia avançada, carinho genuíno.
              </motion.p>
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                <Button as-child size="lg" className="bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-accent text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <a href="https://wa.me/351912345678?text=Olá%20gostaria%20de%20agendar%20um%20horário%20para%20o%20meu%20animal%20de%20estimação" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 whitespace-nowrap">
                    🐕 Agendar AGORA no WhatsApp
                  </a>
                </Button>
                <Button as-child size="lg" variant="ghost" className="border border-secondary/50 hover:border-secondary hover:bg-secondary/20 text-secondary hover:text-secondary-dark transition-all duration-300 px-6 py-3 text-sm">
                  <a href="#servicos">Ver serviços</a>
                </Button>
              </div>
              <div className="mt-8 flex items-center text-sm text-muted gap-6">
                <div className="flex items-center gap-2">
                  <PawPrint className="text-secondary" /> Atendimento premium
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="text-accent" /> Tecnologia avançada
                </div>
                <div className="flex items-center gap-2">
                  <Dog className="text-secondary" /> Equipe especializada
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="aspect-[4/3] rounded-3xl border border-secondary/20 organic-shadow-image overflow-hidden mx-4 my-4"
            >
              <picture>
                <source srcSet="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1600&auto=format&fit=crop" media="(min-width: 768px)" />
                <img
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1200&auto=format&fit=crop"
                  alt="Golden Retriever tomando banho com espuma, feliz e limpo"
                  className="h-full w-full object-cover"
                />
              </picture>
            </motion.div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-20 md:py-28 relative mx-4 overflow-hidden">
          <div className="container-wide overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4">
                Nossos <span className="text-secondary">Serviços</span>
              </h2>
              <p className="text-xl text-muted max-w-2xl mx-auto">
                Soluções completas para a saúde e o cuidado do seu melhor amigo!
              </p>
            </motion.div>
            <div className="mt-10 grid gap-6 md:grid-cols-3 overflow-hidden">
              {[
                { icon: Bath, title: "Banho & Tosa", desc: "Higiene premium com produtos de alta qualidade e técnicas especializadas." },
                { icon: Stethoscope, title: "Consultas", desc: "Avaliação clínica completa com equipamentos modernos e carinho genuíno." },
                { icon: Syringe, title: "Vacinas", desc: "Calendário vacinal personalizado para máxima proteção do seu animal de estimação." },
                { icon: HeartPulse, title: "Exames", desc: "Laboratório próprio e parcerias com os melhores centros de diagnóstico." },
                  { icon: PawPrint, title: "Loja de Animais", desc: "Produtos selecionados e acessórios premium para o bem-estar." },
                { icon: Scissors, title: "Estética", desc: "Tratamentos especializados de pele e pelagem com técnicas avançadas." },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="premium-card rounded-2xl p-8 group cursor-pointer overflow-hidden"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <s.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
                  <p className="text-muted leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
                <Button as-child size="lg" className="bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-accent text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <a href="https://wa.me/351912345678?text=Olá%20gostaria%20de%20um%20orçamento%20para%20banho%20e%20tosa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    💰 Solicitar Orçamento GRÁTIS
                  </a>
                </Button>
            </motion.div>
          </div>
        </section>

        {/* Compromisso com o bem-estar */}
        <section id="sobre" className="py-20 md:py-28 relative">
          <div className="container-narrow">
            <div className="rounded-3xl p-12 text-center bg-white/80 backdrop-blur-sm border border-secondary/20 organic-shadow mx-4 my-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary to-secondary-light mb-6"
              >
                <Heart className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6"
              >
                Compromisso com o bem-estar
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-muted max-w-3xl mx-auto leading-relaxed"
              >
                Oferecemos uma experiência premium com atendimento acolhedor, tecnologia de ponta e protocolos de segurança rigorosos. Cada animal de estimação recebe cuidado individualizado com amor e profissionalismo.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 flex justify-center gap-8 text-sm"
              >
                <div className="flex items-center gap-2 text-primary">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  Tecnologia Avançada
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  Atendimento Humanizado
                </div>
                    <div className="flex items-center gap-2 text-primary">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      Equipa Especializada
                    </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section id="beneficios" className="py-16 md:py-20 relative">
          <div className="container-wide grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-serif text-3xl">🐕 Por que escolher a AuAu Care?</h2>
              <ul className="mt-6 space-y-3 text-muted">
                {[
                  "💕 Equipa apaixonada por animais de estimação",
                  "🏠 Ambiente higienizado e climatizado",
                  "⏰ Atendimento com hora marcada",
                  "✨ Materiais e produtos de alta qualidade",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 text-primary" /> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                  <Button as-child size="lg" className="bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-accent text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <a href="https://wa.me/351912345678?text=Olá%20gostaria%20de%20agendar%20uma%20visita" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      🏠 Agendar Visita GRÁTIS
                    </a>
                  </Button>
              </div>
            </div>
              <div className="aspect-[4/3] rounded-2xl bg-neutral-light organic-shadow-image overflow-hidden mx-4 my-4">
                <img
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1200&auto=format&fit=crop"
                  alt="Labrador Retriever sorrindo e feliz após cuidados veterinários"
                  className="h-full w-full object-cover"
                />
            </div>
          </div>
        </section>

        {/* Provas sociais */}
        <section className="py-16 md:py-20 relative">
          <div className="container-narrow text-center">
            <h2 className="font-serif text-3xl">🐾 Clientes felizes</h2>
            <p className="text-muted mt-2">Avaliações reais de quem confia a nós o cuidado do seu melhor amigo!</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3 text-left">
              {[1,2,3].map((i) => (
                <div key={i} className="rounded-xl border bg-white p-6">
                  <p>"🐕 Atendimento excelente e banho perfeito! O meu animal de estimação ficou lindo e feliz!"</p>
                  <div className="mt-3 text-sm text-muted">— Cliente {i} ❤️</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section id="galeria" className="py-16 md:py-20 relative">
          <div className="container-wide">
            <h2 className="font-serif text-3xl text-center">📸 Galeria de Pets Felizes</h2>
            <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-4">
              {[
                "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop",
              ].map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-xl bg-neutral-light">
                  <img src={`${src}`} alt="Galeria animal de estimação" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Localização e Contato */}
        <section id="contato" className="py-16 md:py-20 relative">
          <div className="container-wide grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl">📍 Onde estamos</h2>
              <p className="text-muted mt-2">Rua Augusta, 1000 - Lisboa, Portugal</p>
              <div className="mt-4 aspect-[4/3] overflow-hidden rounded-xl">
                <iframe
                  title="Mapa"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.1234567890!2d-9.1384!3d38.7223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933a6c9c8c8c8%3A0x1234567890abcdef!2sRua%20Augusta%2C%20Lisboa%2C%20Portugal!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl">💬 Fale conosco</h3>
              <p className="text-muted mt-2">WhatsApp: +351 912 345 678 • E-mail: contato@aaucare.pt</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Button as-child size="lg" className="bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-accent text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <a href="https://wa.me/351912345678?text=Olá%20gostaria%20de%20agendar%20um%20horário%20para%20o%20meu%20animal%20de%20estimação" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    💬 Fale no WhatsApp AGORA
                  </a>
                </Button>
                <Button as-child size="lg" variant="secondary">
                  <a href="tel:+351912345678">Ligar agora</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}


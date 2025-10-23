import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function ServicosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-16">
        <div className="container-wide">
          <h1 className="font-serif text-4xl">Serviços</h1>
          <p className="text-muted mt-2 max-w-2xl">Cuidado completo para o seu pet: consultas, vacinas, exames, banho & tosa e estética animal.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border p-6 bg-white">
              <h3 className="font-medium text-lg">Consultas</h3>
              <p className="text-muted mt-1 text-sm">Avaliação clínica completa, orientações e acompanhamento contínuo.</p>
            </div>
            <div className="rounded-xl border p-6 bg-white">
              <h3 className="font-medium text-lg">Banho & Tosa</h3>
              <p className="text-muted mt-1 text-sm">Higiene, tosa higiênica, tosa na tesoura e cuidados de pele.</p>
            </div>
            <div className="rounded-xl border p-6 bg-white">
              <h3 className="font-medium text-lg">Vacinas</h3>
              <p className="text-muted mt-1 text-sm">Calendário vacinal atualizado e orientações preventivas.</p>
            </div>
            <div className="rounded-xl border p-6 bg-white">
              <h3 className="font-medium text-lg">Exames</h3>
              <p className="text-muted mt-1 text-sm">Laboratoriais e de imagem por meio de parceiros de confiança.</p>
            </div>
          </div>
          <div className="mt-10">
            <Button as-child size="lg">
              <a href="https://wa.me/[CÓDIGO_PAÍS+TELEFONE]?text=[MENSAGEM]" target="_blank" rel="noopener noreferrer">Pedir orçamento</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


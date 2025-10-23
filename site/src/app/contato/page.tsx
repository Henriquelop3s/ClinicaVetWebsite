import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function ContatoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-16">
        <div className="container-narrow">
          <h1 className="font-serif text-4xl">Contato</h1>
          <p className="text-muted mt-2">Fale com nossa equipe pelo WhatsApp, telefone ou e-mail.</p>
          <div className="mt-8 grid gap-6">
            <div className="rounded-xl border p-6 bg-white">
              <div className="font-medium">WhatsApp</div>
              <p className="text-muted">+[CÓDIGO_PAÍS] [TELEFONE]</p>
              <div className="mt-3">
                <Button as-child>
                  <a href="https://wa.me/[CÓDIGO_PAÍS+TELEFONE]?text=[MENSAGEM]" target="_blank" rel="noopener noreferrer">Abrir conversa</a>
                </Button>
              </div>
            </div>
            <div className="rounded-xl border p-6 bg-white">
              <div className="font-medium">Telefone</div>
              <a className="text-muted" href="tel:+[CÓDIGO_PAÍS][TELEFONE]">+[CÓDIGO_PAÍS] [TELEFONE]</a>
            </div>
            <div className="rounded-xl border p-6 bg-white">
              <div className="font-medium">E-mail</div>
              <a className="text-muted" href="mailto:contato@[dominio].com">contato@[dominio].com</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


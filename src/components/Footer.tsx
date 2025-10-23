export function Footer() {
  return (
    <footer className="border-t mt-16 relative">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
      <div className="relative z-10">
      <div className="container-wide py-10 grid gap-6 md:grid-cols-3 text-sm text-muted">
        <div>
            <div className="font-serif text-lg text-foreground">AuAu Care</div>
            <p className="mt-2">Clínica veterinária em Lisboa, Portugal. Cuidado completo para o seu animal de estimação.</p>
        </div>
        <div>
          <div className="font-medium text-foreground">Contato</div>
          <ul className="mt-2 space-y-1">
            <li>WhatsApp: +351 912 345 678</li>
            <li>E-mail: contato@aaucare.pt</li>
            <li>Endereço: Rua Augusta, 1000 - Lisboa, Portugal</li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-foreground">Links</div>
          <ul className="mt-2 space-y-1">
            <li><a href="#servicos" className="hover:text-primary">Serviços</a></li>
            <li><a href="#beneficios" className="hover:text-primary">Benefícios</a></li>
            <li><a href="#contato" className="hover:text-primary">Contato</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container-wide py-6 text-center">
          <div className="mb-4">
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="text-muted">Created by</span>
              <div className="flex items-center gap-2">
                <div className="bg-black backdrop-blur-sm rounded-full px-4 py-2 border border-black">
                  <img 
                    src="/webclut-logo.png" 
                    alt="WebClut Logo" 
                    className="h-8 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-xs text-muted">© {new Date().getFullYear()} AuAu Care. Todos os direitos reservados.</div>
        </div>
      </div>
      </div>
    </footer>
  );
}


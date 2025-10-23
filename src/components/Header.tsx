"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass border-b border-white/20">
      <div className="container-wide h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          <span className="font-serif text-xl font-semibold">AuAu Care</span>
        </Link>
          <nav className="hidden md:flex items-center gap-2 text-sm">
            <Link href="#servicos" className="px-4 py-2 rounded-full hover:bg-secondary/10 hover:text-secondary transition-all duration-300 font-medium">Serviços</Link>
            <Link href="#sobre" className="px-4 py-2 rounded-full hover:bg-secondary/10 hover:text-secondary transition-all duration-300 font-medium">Sobre</Link>
            <Link href="#beneficios" className="px-4 py-2 rounded-full hover:bg-secondary/10 hover:text-secondary transition-all duration-300 font-medium">Benefícios</Link>
            <Link href="#galeria" className="px-4 py-2 rounded-full hover:bg-secondary/10 hover:text-secondary transition-all duration-300 font-medium">Galeria</Link>
            <Link href="#contato" className="px-4 py-2 rounded-full hover:bg-secondary/10 hover:text-secondary transition-all duration-300 font-medium">Contato</Link>
          <Button as-child>
            <a href="https://wa.me/5511999999999?text=Olá%20gostaria%20de%20agendar%20um%20horário%20para%20meu%20pet" target="_blank" rel="noopener noreferrer">Fale no WhatsApp</a>
          </Button>
        </nav>
        <button className="md:hidden" onClick={toggle} aria-label="Abrir menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur-sm">
          <div className="container-wide py-6 grid gap-2">
            <Link href="#servicos" onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg hover:bg-secondary/10 hover:text-secondary transition-all duration-300 font-medium">Serviços</Link>
            <Link href="#sobre" onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg hover:bg-secondary/10 hover:text-secondary transition-all duration-300 font-medium">Sobre</Link>
            <Link href="#beneficios" onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg hover:bg-secondary/10 hover:text-secondary transition-all duration-300 font-medium">Benefícios</Link>
            <Link href="#galeria" onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg hover:bg-secondary/10 hover:text-secondary transition-all duration-300 font-medium">Galeria</Link>
            <Link href="#contato" onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg hover:bg-secondary/10 hover:text-secondary transition-all duration-300 font-medium">Contato</Link>
          <Button as-child className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <a href="https://wa.me/351912345678?text=Olá%20gostaria%20de%20agendar%20um%20horário%20para%20o%20meu%20animal%20de%20estimação" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              💬 WhatsApp
            </a>
          </Button>
          </div>
        </div>
      )}
    </header>
  );
}


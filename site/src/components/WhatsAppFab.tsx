"use client";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button 
        size="lg" 
        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg px-6 py-4 rounded-full shadow-2xl hover:shadow-green-500/50 transform hover:scale-110 transition-all duration-300 animate-bounce" 
        as-child
      >
        <a
          href="https://wa.me/351912345678?text=Olá%20gostaria%20de%20agendar%20um%20horário%20para%20o%20meu%20animal%20de%20estimação"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <MessageCircle className="w-6 h-6" /> WhatsApp
        </a>
      </Button>
    </div>
  );
}


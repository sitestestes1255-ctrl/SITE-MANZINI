import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/content";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl("Olá! Gostaria de atendimento.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-amber text-steel-950 shadow-xl shadow-black/40 transition-all duration-200 hover:scale-110 hover:bg-amber-soft"
    >
      <MessageCircle size={26} strokeWidth={2.2} />
      <span className="absolute inline-flex h-full w-full rounded-full bg-amber opacity-25 animate-ping" />
    </a>
  );
}

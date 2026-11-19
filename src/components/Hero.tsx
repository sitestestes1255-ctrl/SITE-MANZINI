import { ChevronDown, MessageCircle, Wrench } from "lucide-react";
import { site, whatsappUrl } from "@/content";
import RotatingCube from "@/components/RotatingCube";

const HERO_IMAGE = "/images/fachada.jpg";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Fachada da Oficina Manzini Mecânica & Solda"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-steel-950/90 via-steel-950/60 to-steel-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-transparent to-steel-950/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-20 w-full">
        <div className="max-w-2xl">
          <div className="animate-fade-up is-visible flex items-center gap-3" style={{ animationDelay: "0ms" }}>
            <span className="hazard h-1.5 w-14 rounded-full" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-amber">
              {site.city} – {site.state}
            </span>
          </div>

          <h1
            className="animate-fade-up is-visible font-display mt-6 font-extrabold uppercase leading-[0.95] text-white"
            style={{ animationDelay: "100ms" }}
          >
            <span className="flex items-center gap-4 sm:gap-6">
              <img
                src={site.logoSrc}
                alt="Logo Oficina Manzini"
                className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32 shrink-0 rounded-sm object-contain"
              />
              <span className="text-5xl sm:text-7xl lg:text-8xl text-amber">
                Oficina Manzini
              </span>
            </span>
            <span className="block mt-3 text-4xl sm:text-5xl lg:text-6xl">
              Mecânica &amp; Solda
            </span>
            <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl text-steel-200">
              Especializada em <span className="text-amber">veículos pesados</span>
            </span>
          </h1>

          <p
            className="animate-fade-up is-visible mt-6 text-base sm:text-lg leading-relaxed text-steel-200 max-w-xl"
            style={{ animationDelay: "200ms" }}
          >
            Serviços mecânicos, estruturais e adaptações para caminhões e veículos
            comerciais. Quem vive da estrada não pode parar.
          </p>

          <div
            className="animate-fade-up is-visible mt-9 flex flex-col sm:flex-row gap-4"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href={whatsappUrl("Olá! Gostaria de um orçamento para meu veículo pesado.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-amber px-7 py-4 text-base font-bold text-steel-950 transition-all duration-200 hover:bg-amber-soft hover:shadow-xl hover:shadow-amber/30 hover:-translate-y-0.5"
            >
              <MessageCircle size={20} strokeWidth={2.5} />
              Falar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2.5 rounded-sm border-2 border-steel-400/70 bg-steel-950/40 px-7 py-4 text-base font-bold text-white backdrop-blur transition-all duration-200 hover:border-amber hover:text-amber hover:-translate-y-0.5"
            >
              <Wrench size={20} strokeWidth={2.5} />
              Conheça nossos serviços
            </a>
          </div>
        </div>

        <div className="absolute right-8 xl:right-24 top-1/2 -translate-y-1/2 z-10">
          <RotatingCube />
        </div>
      </div>

      <a
        href="#servicos"
        aria-label="Rolar para serviços"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-steel-300 hover:text-amber transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}

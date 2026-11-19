import { useEffect, useState } from "react";
import { Menu, X, Wrench, MessageCircle } from "lucide-react";
import { navItems, site, whatsappUrl } from "@/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-steel-950/95 backdrop-blur border-b border-steel-700 shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-amber text-steel-950 transition-transform duration-300 group-hover:rotate-12">
              <Wrench size={20} strokeWidth={2.5} />
            </span>
            <span className="font-display text-2xl font-bold uppercase tracking-wide text-white">
              {site.name}
              <span className="block text-[10px] font-semibold tracking-[0.25em] text-amber">
                {site.city} · {site.state}
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-steel-200 hover:text-amber transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl("Olá! Gostaria de atendimento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-sm bg-amber px-4 py-2.5 text-sm font-semibold text-steel-950 transition-all duration-200 hover:bg-amber-soft hover:shadow-lg hover:shadow-amber/25"
            >
              <MessageCircle size={16} strokeWidth={2.5} />
              WhatsApp
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-sm border border-steel-700 text-steel-100 hover:border-amber hover:text-amber transition-colors"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden border-b border-steel-700 bg-steel-950/98 backdrop-blur transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-3 py-2.5 text-sm font-medium text-steel-200 hover:bg-steel-800 hover:text-amber transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl("Olá! Gostaria de atendimento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-amber px-4 py-3 text-sm font-semibold text-steel-950"
          >
            <MessageCircle size={16} strokeWidth={2.5} />
            Falar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

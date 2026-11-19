import { site, whatsappUrl, navItems } from "@/content";
import { Wrench, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-steel-700 bg-steel-950">
      <div className="hazard h-1.5 w-full opacity-70" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-amber text-steel-950">
                <Wrench size={20} strokeWidth={2.5} />
              </span>
              <span className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel-400">
              {site.tagline}. Serviços mecânicos, estruturais e adaptações para quem
              trabalha na estrada.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-amber">
              Navegação
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-steel-300 transition-colors hover:text-amber"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-amber">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-steel-300">
              <li>
                <a
                  href={whatsappUrl("Olá! Gostaria de atendimento.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-amber"
                >
                  <MessageCircle size={15} className="text-amber" />
                  {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 break-all transition-colors hover:text-amber"
                >
                  <Wrench size={15} className="text-amber" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={15} className="text-amber" />
                {site.city} – {site.state}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-steel-800 pt-6">
          <p className="text-xs text-steel-500">
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-steel-500">
            Oficina especializada em veículos pesados · {site.city} – {site.state}
          </p>
        </div>
      </div>
    </footer>
  );
}

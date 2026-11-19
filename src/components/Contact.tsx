import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { site, whatsappUrl } from "@/content";
import { MessageCircle, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-20 sm:py-28 bg-steel-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            align="center"
            kicker="Fale com a gente"
            title="Entre em contato"
            description="Peça um orçamento ou tire suas dúvidas — atendemos rápido para seu veículo não parar."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-sm border border-steel-700 bg-steel-850 p-8 transition-colors duration-300 hover:border-amber/60">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-amber text-steel-950">
                  <MessageCircle size={24} strokeWidth={2.2} />
                </div>
                <h3 className="font-display mt-5 text-xl font-bold uppercase text-white">WhatsApp</h3>
                <p className="mt-1 text-lg font-semibold text-amber">{site.whatsappDisplay}</p>
                <p className="mt-2 text-sm text-steel-400">
                  Atendimento direto pelo aplicativo. Resposta rápida para orçamentos.
                </p>
              </div>
              <a
                href={whatsappUrl("Olá! Gostaria de um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm bg-amber px-5 py-3 text-sm font-bold text-steel-950 transition-all duration-200 hover:bg-amber-soft hover:shadow-lg hover:shadow-amber/25"
              >
                <MessageCircle size={16} strokeWidth={2.5} />
                Abrir conversa
              </a>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="flex h-full flex-col justify-between rounded-sm border border-steel-700 bg-steel-850 p-8 transition-colors duration-300 hover:border-amber/60">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-steel-800 text-amber ring-1 ring-steel-700">
                  <Mail size={24} strokeWidth={2.2} />
                </div>
                <h3 className="font-display mt-5 text-xl font-bold uppercase text-white">E-mail</h3>
                <p className="mt-1 text-lg font-semibold break-all text-amber">{site.email}</p>
                <p className="mt-2 text-sm text-steel-400">
                  Envie detalhes do serviço e retornaremos o mais breve possível.
                </p>
              </div>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Solicitação de orçamento")}`}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm border-2 border-steel-600 px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:border-amber hover:text-amber"
              >
                <Mail size={16} strokeWidth={2.5} />
                Enviar e-mail
              </a>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="flex h-full flex-col justify-between rounded-sm border border-steel-700 bg-steel-850 p-8 transition-colors duration-300 hover:border-amber/60">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-steel-800 text-amber ring-1 ring-steel-700">
                  <MapPin size={24} strokeWidth={2.2} />
                </div>
                <h3 className="font-display mt-5 text-xl font-bold uppercase text-white">
                  Localização
                </h3>
                <p className="mt-1 text-lg font-semibold text-amber">{site.address}</p>
                <p className="mt-3 flex items-start gap-2 text-sm text-steel-400">
                  <Clock size={16} className="mt-0.5 shrink-0 text-amber" />
                  <span>
                    {site.hours.map((h) => `${h.days}: ${h.time}`).join(" · ")}
                  </span>
                </p>
              </div>
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(site.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm border-2 border-steel-600 px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:border-amber hover:text-amber"
              >
                <MapPin size={16} strokeWidth={2.5} />
                Ver no mapa
              </a>
            </div>
          </Reveal>
        </div>

        {(site.social.instagram || site.social.facebook || site.social.youtube) && (
          <div className="mt-10 flex justify-center gap-4">
            {site.social.instagram && (
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-sm border border-steel-600 text-steel-300 transition-colors hover:border-amber hover:text-amber"
              >
                <Instagram size={20} />
              </a>
            )}
            {site.social.facebook && (
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-sm border border-steel-600 text-steel-300 transition-colors hover:border-amber hover:text-amber"
              >
                <Facebook size={20} />
              </a>
            )}
            {site.social.youtube && (
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-sm border border-steel-600 text-steel-300 transition-colors hover:border-amber hover:text-amber"
              >
                <Youtube size={20} />
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { site } from "@/content";
import { ShieldCheck, Hammer, Users } from "lucide-react";

const IMAGE_1 = "/images/WhatsApp Image 2026-11-12 at 18.04.07.jpeg";
const IMAGE_2 = "/images/WhatsApp Image 2026-11-12 at 18.04.01.jpeg";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Segurança em primeiro lugar",
    text: "Cada reparo estrutural segue critérios rigorosos — seu veículo volta para a estrada confiável.",
  },
  {
    icon: Hammer,
    title: "Mão de obra especializada",
    text: "Mecânica e estrutura pesada com experiência nas principais marcas do mercado.",
  },
  {
    icon: Users,
    title: "Atendimento de quem entende",
    text: "Falamos a língua do caminhoneiro, do frotista e do transportador — direto e sem enrolação.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-steel-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="float-3d overflow-hidden rounded-sm border border-steel-700">
                <img
                  src={IMAGE_1}
                  alt="Caminhão vermelho na oficina Manzini"
                  loading="lazy"
                  className="w-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 sm:right-8 hidden sm:block w-2/5 overflow-hidden rounded-sm border-4 border-steel-900 shadow-2xl shadow-black/50">
                <img
                  src={IMAGE_2}
                  alt="Motor aberto em manutenção"
                  loading="lazy"
                  className="w-full object-cover aspect-square"
                />
              </div>
              <span className="hazard absolute -top-3 -left-3 h-16 w-16 rounded-sm opacity-80" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                kicker="Quem somos"
                title={`Sobre a ${site.name}`}
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-6 space-y-4">
                {site.aboutText.map((paragraph, i) => (
                  <p key={i} className="text-base leading-relaxed text-steel-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <div className="mt-9 space-y-5">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={i * 90}>
                  <div className="group flex gap-4">
                    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-steel-800 text-amber ring-1 ring-steel-700 transition-colors duration-300 group-hover:bg-amber group-hover:text-steel-950">
                      <pillar.icon size={20} strokeWidth={2.2} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold uppercase text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-steel-400">{pillar.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={150}>
          <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-steel-700 bg-steel-700 sm:grid-cols-3">
            {site.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-steel-850 px-6 py-8 text-center transition-colors duration-300 hover:bg-steel-800"
              >
                <p className="font-display text-2xl sm:text-3xl font-bold uppercase text-amber">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-steel-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

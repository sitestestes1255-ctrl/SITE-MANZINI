import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { services } from "@/content";
import {
  Wrench,
  Cog,
  Disc3,
  Waves,
  LayoutPanelLeft,
  Ruler,
  Settings2,
  Flame,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  wrench: Wrench,
  cog: Cog,
  disc: Disc3,
  waves: Waves,
  layout: LayoutPanelLeft,
  ruler: Ruler,
  settings: Settings2,
  flame: Flame,
};

export default function Services() {
  return (
    <section id="servicos" className="relative py-20 sm:py-28 bg-steel-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            kicker="O que fazemos"
            title="Nossos serviços"
            description="Mecânica e estrutura pesada com precisão — do motor à solda, tudo em um só lugar."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Wrench;
            return (
              <Reveal key={service.title} delay={(i % 4) * 80}>
                <TiltCard className="group relative h-full rounded-sm border border-steel-700 bg-steel-850 p-6 transition-all duration-300 hover:border-amber/60 hover:bg-steel-800 hover:shadow-xl hover:shadow-black/40">
                  <span className="absolute left-0 top-0 h-full w-0.5 bg-amber scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-steel-800 text-amber ring-1 ring-steel-700 transition-colors duration-300 group-hover:bg-amber group-hover:text-steel-950 group-hover:ring-amber">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className="font-display mt-5 text-xl font-bold uppercase text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-300">
                    {service.description}
                  </p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

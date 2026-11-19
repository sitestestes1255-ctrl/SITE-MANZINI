import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { brands, site } from "@/content";
import { BadgeCheck } from "lucide-react";

const BG_IMAGE =
  "https://images.pexels.com/photos/7006131/pexels-photo-7006131.jpeg?auto=compress&cs=tinysrgb&w=1600";

export default function Brands() {
  return (
    <section id="marcas" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={BG_IMAGE}
          alt="Caminhão americano em oficina"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-steel-950/92" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            align="center"
            kicker="Nosso diferencial"
            title="Especialização por marca"
            description={`Conhecimento aprofundado nas principais fabricantes de veículos pesados do mercado. É assim que a ${site.name} entrega serviço de confiança.`}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand, i) => (
            <Reveal key={brand} delay={i * 90}>
              <TiltCard className="group relative flex h-40 flex-col items-center justify-center gap-3 rounded-sm border border-steel-600/70 bg-steel-900/80 backdrop-blur px-6 transition-all duration-300 hover:border-amber hover:bg-steel-850 hover:shadow-2xl hover:shadow-amber/10" maxTilt={12}>
                <BadgeCheck
                  size={26}
                  className="text-amber transition-transform duration-300 group-hover:scale-125"
                />
                <span className="font-display text-3xl font-bold uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-amber">
                  {brand}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-steel-400">
                  Especialistas
                </span>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

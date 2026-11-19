import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { vehicles } from "@/content";
import { Truck, Pickaxe, Bus, Car, Container, type LucideIcon } from "lucide-react";

const icons: LucideIcon[] = [Truck, Pickaxe, Car, Bus, Container];

const VEHICLE_IMAGES = [
  "https://images.pexels.com/photos/6720519/pexels-photo-6720519.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7018493/pexels-photo-7018493.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/6720501/pexels-photo-6720501.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/9716368/pexels-photo-9716368.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/34875545/pexels-photo-34875545.jpeg?auto=compress&cs=tinysrgb&w=900",
];

export default function Vehicles() {
  return (
    <section id="veiculos" className="py-20 sm:py-28 bg-steel-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            kicker="Frota atendida"
            title="Veículos que atendemos"
            description="Nosso foco é veículo de grande porte e utilitário — quem trabalha, não pode ficar no acosto."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {vehicles.map((vehicle, i) => {
            const Icon = icons[i] ?? Truck;
            return (
              <Reveal key={vehicle.name} delay={i * 80}>
                <article className="group relative h-64 overflow-hidden rounded-sm border border-steel-700 transition-all duration-300 hover:border-amber/70 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50">
                  <img
                    src={VEHICLE_IMAGES[i]}
                    alt={vehicle.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/55 to-steel-950/10" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-amber text-steel-950 mb-3 transition-transform duration-300 group-hover:-translate-y-1">
                      <Icon size={20} strokeWidth={2.2} />
                    </div>
                    <h3 className="font-display text-xl font-bold uppercase text-white">
                      {vehicle.name}
                    </h3>
                    <p className="mt-1 text-sm text-steel-300">{vehicle.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

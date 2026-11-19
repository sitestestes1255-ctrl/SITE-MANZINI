/**
 * Central de informações da oficina — edite apenas este arquivo
 * para atualizar nome, contatos, endereço, horários e textos.
 */
export const site = {
  // ─── Editar: identidade ───────────────────────────────────────
  name: "Oficina Manzini Mecânica & Solda",
  logoSrc: "/images/WhatsApp_Image_2026-11-11_at_18.19.18.jpeg",
  tagline: "Especialistas em veículos pesados",
  city: "Capivari",
  state: "SP",

  // ─── Editar: contatos (usados nos botões e links) ─────────────
  // Formato internacional, sem "+" e sem espaços. Ex.: 5519999999999
  whatsappNumber: "5519974118663",
  whatsappDisplay: "(19) 97411-8663",
  email: "contato@suaoficina.com.br",

  // ─── Editar: endereço completo e mapa ─────────────────────────
  address: "Oficina Manzini Mecânica & Solda, Rua Governador Ademar Pereira de Barros, 377 – Santa Filomena, Capivari – SP",
  mapsQuery: "Oficina Manzini Mecânica & Solda, Rua Governador Ademar Pereira de Barros, 377, Santa Filomena, Capivari, SP",

  // ─── Editar: horário de funcionamento ─────────────────────────
  hours: [
    { days: "Segunda a sexta", time: "07:00 às 17:00" },
    { days: "Sábado", time: "Fechado" },
    { days: "Domingo", time: "Fechado" },
  ],

  // ─── Editar: redes sociais (deixe "" para ocultar) ────────────
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },

  // ─── Editar: texto institucional ──────────────────────────────
  aboutText: [
    "Oficina mecânica especializada em veículos pesados e utilitários, atendendo motoristas, frotistas e transportadores de Capivari e região.",
    "Trabalhamos com serviços mecânicos, estruturais e adaptações para caminhões, carretas, ônibus, caminhonetes e vans — sempre com foco em segurança, durabilidade e solução definitiva para o seu veículo.",
    // Espaço reservado: substitua pelo texto real da empresa.
    "Também cuidamos da manutenção de freios e motores, fazemos troca de óleo e de kits e componentes, alongamento de chassis e soldas em inox, aço e alumínio. Atendemos ainda outros serviços de mecânica para caminhões e veículos pesados.",
  ],

  // ─── Editar: estatísticas em destaque ─────────────────────────
  stats: [
    { value: "Scania · Volvo · Mercedes-Benz · Iveco", label: "Marcas especializadas" },
    { value: "8+", label: "Serviços especializados" },
    { value: "5", label: "Tipos de veículos atendidos" },
  ],
};

export const whatsappUrl = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export type Service = {
  title: string;
  description: string;
  icon: "wrench" | "cog" | "disc" | "waves" | "layout" | "ruler" | "settings" | "flame";
};

export const services: Service[] = [
  {
    title: "Serviço de motor",
    description:
      "Manutenção, diagnóstico e reparos completos no motor do seu veículo pesado.",
    icon: "cog",
  },
  {
    title: "Serviço de câmbio",
    description:
      "Reparo e manutenção da transmissão para garantir trocas suaves e seguras.",
    icon: "settings",
  },
  {
    title: "Serviço de diferencial",
    description:
      "Diagnóstico e reparo do diferencial para tração e desempenho ideais.",
    icon: "disc",
  },
  {
    title: "Serviço de suspensão",
    description:
      "Manutenção da suspensão para suportar o peso e o impacto do dia a dia.",
    icon: "waves",
  },
  {
    title: "Embuchamento de cabine",
    description:
      "Serviço estrutural de embuchamento para restaurar o alinhamento da cabine.",
    icon: "layout",
  },
  {
    title: "Alongamento de chassi",
    description:
      "Alongamento estrutural de chassi com precisão e segurança para sua carga.",
    icon: "ruler",
  },
  {
    title: "Adaptação de eixos e suportes",
    description:
      "Adaptações de eixos, suportes e componentes estruturais sob medida.",
    icon: "wrench",
  },
  {
    title: "Soldas em geral",
    description:
      "Soldas especializadas para reparos estruturais e reforços em geral.",
    icon: "flame",
  },
];

export const vehicles = [
  { name: "Caminhões pesados", description: "Manutenção completa da sua linha pesada." },
  { name: "Caminhonetes", description: "Utilitários e picapes prontas para o trabalho." },
  { name: "Vans", description: "Serviço mecânico e estrutural para vans." },
  { name: "Ônibus", description: "Manutenção para transporte rodoviário e urbano." },
  { name: "Carretas", description: "Estruturais, adaptações e mecânica pesada." },
];

export const brands = ["Scania", "Volvo", "Mercedes-Benz", "Iveco"];

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Veículos", href: "#veiculos" },
  { label: "Marcas", href: "#marcas" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

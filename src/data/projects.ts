import cover1 from "@/assets/projects/project-1.jpg";
import cover2 from "@/assets/projects/project-2.jpg";
import cover3 from "@/assets/projects/project-3.jpg";
import cover4 from "@/assets/projects/project-4.jpg";
import cover5 from "@/assets/projects/project-5.jpg";
import cover6 from "@/assets/projects/project-6.jpg";
import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "nova-analytics",
    title: "Nova Analytics",
    description:
      "Plataforma SaaS de analytics com dashboards em tempo real, relatórios customizáveis e integrações via API.",
    category: "React",
    cover: cover1,
    gallery: [cover1, cover5, cover3],
    technologies: ["React", "TypeScript", "Tailwind", "REST API"],
    features: [
      "Dashboard em tempo real com WebSockets",
      "Exportação de relatórios em PDF/CSV",
      "Integração com APIs externas",
      "Sistema de permissões por papel",
    ],
    date: "Mar 2025",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "mazlus-store",
    title: "Mazlus Store",
    description:
      "E-commerce premium com foco em joalheria digital, checkout otimizado e experiência editorial.",
    category: "Landing Pages",
    cover: cover2,
    gallery: [cover2, cover6, cover4],
    technologies: ["React", "Tailwind", "Firebase"],
    features: [
      "Checkout em uma página",
      "Wishlist persistente",
      "Integração com meios de pagamento",
      "SEO técnico avançado",
    ],
    date: "Jan 2025",
    liveUrl: "https://example.com",
  },
  {
    id: "pulse-fit",
    title: "PulseFit",
    description:
      "App mobile-first de acompanhamento fitness com métricas, planos personalizados e gamificação.",
    category: "React",
    cover: cover3,
    gallery: [cover3, cover1],
    technologies: ["React", "TypeScript", "Firebase"],
    features: [
      "Treinos personalizados por IA",
      "Métricas e gráficos de evolução",
      "Sincronização entre dispositivos",
      "Notificações e streaks",
    ],
    date: "Nov 2024",
    githubUrl: "https://github.com",
  },
  {
    id: "atelier-lumen",
    title: "Atelier Lumen",
    description:
      "Website institucional de estúdio de arquitetura com storytelling editorial e portfólio visual.",
    category: "WordPress",
    cover: cover4,
    gallery: [cover4, cover6],
    technologies: ["WordPress", "Elementor", "CSS"],
    features: [
      "Design 100% editorial",
      "CMS personalizado",
      "Performance A+ no Lighthouse",
      "Multi-idioma",
    ],
    date: "Set 2024",
    liveUrl: "https://example.com",
  },
  {
    id: "core-crm",
    title: "Core CRM",
    description:
      "Sistema interno de CRM com pipeline visual, automações e módulo financeiro integrado.",
    category: "Sistemas",
    cover: cover5,
    gallery: [cover5, cover1, cover3],
    technologies: ["React", "TypeScript", "REST API", "Python"],
    features: [
      "Kanban de leads com drag-and-drop",
      "Automação de follow-ups",
      "Relatórios financeiros",
      "Controle de acesso granular",
    ],
    date: "Jun 2024",
    githubUrl: "https://github.com",
  },
  {
    id: "sereno-restaurante",
    title: "Sereno Restaurante",
    description:
      "Landing page premium para restaurante autoral, com cardápio digital e sistema de reservas.",
    category: "Landing Pages",
    cover: cover6,
    gallery: [cover6, cover2, cover4],
    technologies: ["React", "Tailwind", "Firebase"],
    features: [
      "Cardápio digital dinâmico",
      "Reservas com confirmação por email",
      "Galeria imersiva",
      "Integração com Google Maps",
    ],
    date: "Abr 2024",
    liveUrl: "https://example.com",
  },
];

export const projectCategories = [
  "Todos",
  "React",
  "WordPress",
  "Landing Pages",
  "Sistemas",
] as const;

export type ProjectFilter = (typeof projectCategories)[number];
import coverThumbnail1 from "@/assets/projects/thumbnail-1.png";
import coverThumbnail2 from "@/assets/projects/thumbnail-2.png";
import cover1A from "@/assets/projects/project-1A.png";
import cover1B from "@/assets/projects/project-1B.png";
import cover2A from "@/assets/projects/project-2A.png";
import cover2B from "@/assets/projects/project-2B.png";
import cover2C from "@/assets/projects/project-2C.png";
import cover2D from "@/assets/projects/project-2D.png";
import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "imports-gtts-store",
    title: "Ecommerce de Moda Masculina (ImportsGtts)",
    description:
      "Desenvolvimento de um website moderno e totalmente responsivo em WooCommerce, utilizando WordPress, Elementor e plugins para o segmento de moda masculina. O projeto foi desenvolvido com uma abordagem mobile-first, priorizando uma interface e experiência do usuário (UI/UX) personalizadas, otimização para SEO, alto desempenho de carregamento e uma experiência de compra fluida.",
    category: "WordPress",
    cover: coverThumbnail1,
    gallery: [cover1A, cover1B],
    technologies: ["WordPress", "WooCommerce", "Elementor", "Plugins", "CSS", "Canva"],
    features: [
      "Mobile-First e Layout Responsivo",
      "WooCommerce Customizado com Elementor",
      "Integrações com gateways de pagamento",
      "Banners Estratégicos e Otimização de Conversão",
      "Páginas de Produtos Personalizadas",
      "Alto Desempenho de Carregamento",
      "UI/UX Personalizada",
    ],
    date: "Dez 2023",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "zenavra-store",
    title: "Ecommerce de Moda Feminina (Zenavra)",
    description:
      "Desenvolvimento de uma loja virtual moderna e totalmente responsiva em Shopify, utilizando o tema Horizon, voltada para o segmento de beleza feminina. O projeto foi desenvolvido com foco em desempenho, otimização para SEO, navegação intuitiva e uma experiência de compra premium.",
    category: "Shopify",
    cover: coverThumbnail2,
    gallery: [cover2A, cover2B, cover2C, cover2D],
    technologies: ["Shopify", "Apps", "ChatGPT", "Liquid", "CSS", "Canva"],
    features: [
      "Design Responsivo e Mobile-First",
      "UI/UX Moderna e Alto Desempenho de Carregamento",
      "Integração com meios de pagamento",
      "Páginas de Produtos Personalizadas",
      "Variantes de Produtos e Amostras de Cores (Swatches)",
      "Perguntas Frequentes (FAQs)",
      "Formulários de Contato",
    ],
    date: "Mai 2026",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "unfinished",
    title: "unfinished",
    description:
      "unfinished.",
    category: "React",
    cover: coverThumbnail1,
    gallery: [cover1A],
    technologies: ["React", "TypeScript", "Firebase"],
    features: [
      "Treinos personalizados por IA",
      "Métricas e gráficos de evolução",
      "Sincronização entre dispositivos",
      "Notificações e streaks",
    ],
    date: "Nov 2024",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "unfinished",
    title: "unfinished",
    description:
      "unfinished.",
    category: "WordPress",
    cover: coverThumbnail1,
    gallery: [cover1A],
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
    id: "unfinished",
    title: "unfinished",
    description:
      "unfinished.",
    category: "React",
    cover: coverThumbnail1,
    gallery: [cover1A],
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
    id: "unfinished",
    title: "unfinished",
    description:
      "unfinished.",
    category: "WordPress",
    cover: coverThumbnail1,
    gallery: [cover1A],
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
] as const;

export type ProjectFilter = (typeof projectCategories)[number];
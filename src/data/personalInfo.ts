import profilePhoto from "@/assets/profile.jpg";
import type { PersonalInfo } from "@/types/personalInfo";

export const personalInfo: PersonalInfo = {
  name: "Lucas Almeida",
  role: "Front-End Developer",
  shortBio:
    "Construo interfaces sofisticadas e produtos digitais com foco em performance, acessibilidade e detalhes que importam.",
  longBio:
    "Desenvolvedor Front-End com foco em React, TypeScript e design de produto. Trabalho na intersecção entre engenharia e design, criando experiências premium para startups e estúdios.",
  location: "São Paulo, Brasil",
  photoUrl: profilePhoto,
  resumeUrl: "/curriculo.pdf",
  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Tecnologias", href: "#tecnologias" },
    { label: "Projetos", href: "#projetos" },
    { label: "Certificados", href: "#certificados" },
    { label: "Idiomas", href: "#idiomas" },
    { label: "Contato", href: "#contato" },
  ],
};
import profilePhoto from "@/assets/profile.png";
import curriculum from "@/assets/rafael-neves-dev-curriculum.pdf";
import type { PersonalInfo } from "@/types/personalInfo";

export const personalInfo: PersonalInfo = {
  name: "Rafael Neves",
  role: "Front-End Developer & Wordpress Website Developer",
  shortBio:
    "",
  longBio:
    "Desenvolvedor Front-End com foco em React, TypeScript e Tailwind CSS e Desenvolvedor Wordpress em criações de Landing Pages, One-Page, Ecommerce e muito mais.",
  location: "Rio de Janeiro, Brasil",
  photoUrl: profilePhoto,
  resumeUrl: curriculum,
  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Tecnologias", href: "#tecnologias" },
    { label: "Projetos", href: "#projetos" },
    { label: "Certificados", href: "#certificados" },
    { label: "Idiomas", href: "#idiomas" },
    { label: "Contato", href: "#contato" },
  ],
};
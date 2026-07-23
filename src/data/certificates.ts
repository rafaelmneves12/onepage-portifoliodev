import cert1 from "@/assets/certificates/cert-1.jpg";
import cert2 from "@/assets/certificates/cert-2.jpg";
import cert3 from "@/assets/certificates/cert-3.jpg";
import cert4 from "@/assets/certificates/cert-4.jpg";
import cert5 from "@/assets/certificates/cert-5.jpg";
import cert6 from "@/assets/certificates/cert-6.jpg";
import type { Certificate } from "@/types/certificate";

export const certificates: Certificate[] = [
  {
    id: "react-advanced",
    title: "React Avançado — Padrões e Performance",
    institution: "Rocketseat",
    date: "Fev 2025",
    hours: "80h",
    image: cert1,
  },
  {
    id: "typescript-pro",
    title: "TypeScript Profissional",
    institution: "Origamid",
    date: "Nov 2024",
    hours: "42h",
    image: cert2,
  },
  {
    id: "design-systems",
    title: "Design Systems na Prática",
    institution: "Alura",
    date: "Ago 2024",
    hours: "36h",
    image: cert3,
  },
  {
    id: "ui-ux-foundations",
    title: "Fundamentos de UI/UX Design",
    institution: "Interaction Design Foundation",
    date: "Mai 2024",
    hours: "60h",
    image: cert4,
  },
  {
    id: "fullstack-bootcamp",
    title: "Full-Stack Web Development",
    institution: "Trybe",
    date: "Jan 2024",
    hours: "900h",
    image: cert5,
  },
  {
    id: "motion-web",
    title: "Motion Design para Web",
    institution: "School of Motion",
    date: "Out 2023",
    hours: "24h",
    image: cert6,
  },
];
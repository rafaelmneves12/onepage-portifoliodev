import certReact from "@/assets/certificates/cert-react.png";
import certUnfinished from "@/assets/certificates/cert-unfinished.jpg";
import certPacoteOffice from '@/assets/certificates/cert-pacote-office.png';

import type { Certificate } from "@/types/certificate";

export const certificates: Certificate[] = [
  {
    id: "degree",
    title: "Sistemas de Informação - Bacharelado",
    institution: "UNISUAM",
    date: "In Progress - Dec 2027",
    hours: "4 anos",
    image: certUnfinished,
  },
  {
    id: "react-advanced",
    title: "React do Zero ao Avançado na Prática",
    institution: "Udemy (Matheus Fraga)",
    date: "Fev 2025",
    hours: "24.5hrs",
    image: certReact,
  },
  {
    id: "typescript-advanced",
    title: "React + TypeScript do Zero ao Avançado na Prática",
    institution: "Udemy (Matheus Fraga)",
    date: "In Progress",
    hours: "42h",
    image: certUnfinished,
  },
  {
    id: "pacote-office",
    title: "Pacote Office 2016 - Word, Excel e PowerPoint",
    institution: "Fundação Bradesco",
    date: "Abr 2023",
    hours: "110h",
    image: certPacoteOffice,
  },
];
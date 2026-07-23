import type { ComponentType, SVGProps } from "react";

export type TechLevel = "Básico" | "Intermediário" | "Avançado";

export type TechCategory = "Frontend" | "Backend" | "Ferramentas";

export interface Technology {
  id: string;
  name: string;
  level: TechLevel;
  category: TechCategory;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  description?: string;
}
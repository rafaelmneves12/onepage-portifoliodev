import type { ComponentType, SVGProps } from "react";

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  handle?: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}
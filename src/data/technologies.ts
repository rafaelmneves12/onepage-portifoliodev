import {
  Atom,
  Braces,
  FileCode2,
  Figma,
  GitBranch,
  Github,
  Palette,
  Paintbrush,
  Type,
  Wind,
  Globe,
  Flame,
  Bot,
  WandSparkles,
} from "lucide-react";
import type { Technology } from "@/types/technology";

export const technologies: Technology[] = [
  // Frontend
  { id: "react", name: "React", level: "Avançado", category: "Frontend", icon: Atom },
  { id: "typescript", name: "TypeScript", level: "Intermediário", category: "Frontend", icon: Type },
  { id: "javascript", name: "JavaScript", level: "Avançado", category: "Frontend", icon: Braces },
  { id: "html", name: "HTML", level: "Avançado", category: "Frontend", icon: FileCode2 },
  { id: "css", name: "CSS", level: "Avançado", category: "Frontend", icon: Paintbrush },
  { id: "tailwind", name: "Tailwind CSS", level: "Intermediário", category: "Frontend", icon: Wind },
  { id: "wordpress", name: "WordPress", level: "Avançado", category: "Frontend", icon: Globe },
  { id: "elementor", name: "Elementor", level: "Avançado", category: "Frontend", icon: Palette },

  // Ferramentas
  { id: "git", name: "Git", level: "Avançado", category: "Ferramentas", icon: GitBranch },
  { id: "github", name: "GitHub", level: "Avançado", category: "Ferramentas", icon: Github },
  { id: "figma", name: "Figma", level: "Básico", category: "Ferramentas", icon: Figma },
  { id: "canva", name: "Canva", level: "Intermediário", category: "Ferramentas", icon: Palette },
  { id: "chatgpt", name: "ChatGPT IA", level: "Avançado", category: "Ferramentas", icon: Bot },
  { id: "claude", name: "Claude IA", level: "Intermediário", category: "Ferramentas", icon: WandSparkles },
  { id: "firebase", name: "Firebase", level: "Básico", category: "Ferramentas", icon: Flame },
];

// Remove Snowflake if not desired — kept intentionally omitted from list
export const technologiesFiltered = technologies.filter((t) => t.id !== "snow");
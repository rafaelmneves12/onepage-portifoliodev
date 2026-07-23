import {
  Atom,
  Braces,
  Code2,
  FileCode2,
  Figma,
  Flame,
  GitBranch,
  Github,
  Palette,
  Paintbrush,
  Server,
  Snowflake,
  Terminal,
  Type,
  Wind,
  Globe,
} from "lucide-react";
import type { Technology } from "@/types/technology";

export const technologies: Technology[] = [
  // Frontend
  { id: "react", name: "React", level: "Avançado", category: "Frontend", icon: Atom },
  { id: "typescript", name: "TypeScript", level: "Avançado", category: "Frontend", icon: Type },
  { id: "javascript", name: "JavaScript", level: "Avançado", category: "Frontend", icon: Braces },
  { id: "html", name: "HTML", level: "Avançado", category: "Frontend", icon: FileCode2 },
  { id: "css", name: "CSS", level: "Avançado", category: "Frontend", icon: Paintbrush },
  { id: "tailwind", name: "Tailwind CSS", level: "Avançado", category: "Frontend", icon: Wind },
  { id: "bootstrap", name: "Bootstrap", level: "Intermediário", category: "Frontend", icon: Palette },
  { id: "wordpress", name: "WordPress", level: "Intermediário", category: "Frontend", icon: Globe },
  { id: "elementor", name: "Elementor", level: "Intermediário", category: "Frontend", icon: Palette },

  // Backend
  { id: "python", name: "Python", level: "Intermediário", category: "Backend", icon: Code2 },
  { id: "firebase", name: "Firebase", level: "Intermediário", category: "Backend", icon: Flame },
  { id: "rest", name: "REST API", level: "Intermediário", category: "Backend", icon: Server },

  // Ferramentas
  { id: "git", name: "Git", level: "Avançado", category: "Ferramentas", icon: GitBranch },
  { id: "github", name: "GitHub", level: "Avançado", category: "Ferramentas", icon: Github },
  { id: "figma", name: "Figma", level: "Intermediário", category: "Ferramentas", icon: Figma },
  { id: "vscode", name: "VS Code", level: "Avançado", category: "Ferramentas", icon: Terminal },
  { id: "snow", name: "Snowflake", level: "Básico", category: "Ferramentas", icon: Snowflake },
];

// Remove Snowflake if not desired — kept intentionally omitted from list
export const technologiesFiltered = technologies.filter((t) => t.id !== "snow");
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import type { SocialLink } from "@/types/socialLinks";

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com",
    handle: "@lucasalmeida",
    icon: Github,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
    handle: "in/lucasalmeida",
    icon: Linkedin,
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:hello@lucasalmeida.dev",
    handle: "hello@lucasalmeida.dev",
    icon: Mail,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/5511999999999",
    handle: "+55 11 99999-9999",
    icon: MessageCircle,
  },
];
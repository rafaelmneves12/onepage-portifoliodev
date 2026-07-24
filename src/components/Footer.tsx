import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";
import { contactInfo } from "@/data/contactInfo";

const socials = [
  { label: "GitHub", href: contactInfo.github, icon: Github },
  { label: "LinkedIn", href: contactInfo.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${contactInfo.email}`, icon: Mail },
  {
    label: "WhatsApp",
    href: `https://wa.me/${contactInfo.phone.replace(/\D/g, "")}`,
    icon: MessageCircle,
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-background/60 px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg text-foreground">
            {personalInfo.name}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {personalInfo.role} · {personalInfo.location}
          </p>
        </div>

        <nav aria-label="Rodapé — navegação">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {personalInfo.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card/40 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-border/60 pt-6 text-center text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
        © {year} {personalInfo.name} — Todos os direitos reservados
      </div>
    </footer>
  );
}
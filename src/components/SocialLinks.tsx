import { motion } from "framer-motion";
import { socialLinks } from "@/data/socialLinks";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  variant?: "sidebar" | "inline";
}

export function SocialLinks({
  className,
  iconClassName,
  variant = "sidebar",
}: SocialLinksProps) {
  return (
    <ul
      className={cn(
        "flex items-center",
        variant === "sidebar" ? "gap-3" : "gap-3",
        className,
      )}
    >
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <li key={link.id}>
            <motion.a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className={cn(
                "group inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-card/40 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary",
                iconClassName,
              )}
            >
              <Icon className="h-4 w-4" aria-hidden />
            </motion.a>
          </li>
        );
      })}
    </ul>
  );
}
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  copyValue?: string;
  external?: boolean;
}

export function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  copyValue,
  external,
}: ContactCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!copyValue) return;
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // no-op
    }
  };

  const Content = (
    <>
      <div className="flex items-center gap-3">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-background/70 text-primary transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            {label}
          </p>
          <p className="truncate text-sm font-medium text-foreground">{value}</p>
        </div>
        {copyValue ? (
          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copiar ${label.toLowerCase()}`}
            className={cn(
              "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary",
              copied && "border-primary/70 text-primary",
            )}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        ) : null}
      </div>
      {copied ? (
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 text-[10px] uppercase tracking-[0.24em] text-primary"
        >
          Copiado
        </motion.p>
      ) : null}
    </>
  );

  const shared =
    "group relative block overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-5 backdrop-blur transition-colors hover:border-primary/50";

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className={shared}
      >
        {Content}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={shared}
    >
      {Content}
    </motion.div>
  );
}
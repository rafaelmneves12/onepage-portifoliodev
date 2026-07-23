import { motion } from "framer-motion";
import type { CEFRLevel, Language } from "@/types/language";

const cefrProgress: Record<CEFRLevel, number> = {
  A1: 0.15,
  A2: 0.3,
  B1: 0.5,
  B2: 0.7,
  C1: 0.85,
  C2: 1,
  Nativo: 1,
};

export function LanguageCard({ language }: { language: Language }) {
  const value = cefrProgress[language.level];
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur transition-colors hover:border-primary/50"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
      />
      <div className="flex items-center gap-4">
        <span
          aria-hidden
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-background/70 text-3xl"
        >
          {language.flag}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-xl text-foreground">{language.name}</h3>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {language.label}
          </p>
        </div>
        <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
          {language.level}
        </span>
      </div>

      <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-border/50">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-primary via-primary to-[color:var(--gold)]"
        />
      </div>
    </motion.div>
  );
}
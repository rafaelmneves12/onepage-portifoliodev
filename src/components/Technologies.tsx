import { motion } from "framer-motion";
import { technologiesFiltered as technologies } from "@/data/technologies";
import type { TechCategory, TechLevel, Technology } from "@/types/technology";
import { SectionTitle } from "@/components/SectionTitle";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const levelValue: Record<TechLevel, number> = {
  Básico: 0.4,
  Intermediário: 0.7,
  Avançado: 1,
};

const categories: { key: TechCategory; label: string; hint: string }[] = [
  { key: "Frontend", label: "Frontend", hint: "Interfaces e experiência" },
  { key: "Backend", label: "Backend", hint: "Conhecimento" },
  { key: "Ferramentas", label: "Ferramentas", hint: "Fluxo diário" },
];

function TechnologyCard({ tech }: { tech: Technology }) {
  const Icon = tech.icon;
  const width = `${levelValue[tech.level] * 100}%`;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-5 backdrop-blur transition-colors hover:border-primary/60"
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(120px 80px at 30% 20%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 70%)",
            }}
          />
          <div className="flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-background/70 text-foreground transition-transform duration-300 group-hover:scale-110 group-hover:text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-foreground">
                {tech.name}
              </p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {tech.level}
              </p>
            </div>
          </div>
          <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-border/50">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-primary to-[color:var(--gold)]/80"
            />
          </div>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent>Nível: {tech.level}</TooltipContent>
    </Tooltip>
  );
}

export function Technologies() {
  return (
    <TooltipProvider delayDuration={150}>
      <section
        id="tecnologias"
        className="relative border-t border-border/60 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Tecnologias"
            title="Ferramentas que uso todos os dias."
            description="Stack curada para entregar interfaces performáticas, escaláveis e com identidade visual forte."
          />

          <div className="mt-16 space-y-14">
            {categories.map((cat) => {
              const items = technologies.filter((t) => t.category === cat.key);
              return (
                <div key={cat.key}>
                  <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-border/60 pb-3">
                    <h3 className="font-display text-2xl text-foreground">
                      {cat.label}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      {cat.hint}
                    </span>
                  </div>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.05 } },
                    }}
                    className={cn(
                      "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
                    )}
                  >
                    {items.map((tech) => (
                      <motion.div
                        key={tech.id}
                        variants={{
                          hidden: { opacity: 0, y: 16 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        <TechnologyCard tech={tech} />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}
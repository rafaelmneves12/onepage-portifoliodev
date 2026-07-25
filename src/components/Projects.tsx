import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectCategories, projects, type ProjectFilter } from "@/data/projects";
import type { Project } from "@/types/project";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectGallery } from "@/components/ProjectGallery";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("Todos");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (filter === "Todos") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section
      id="projetos"
      className="relative border-t border-border/60 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Projetos"
            title="Trabalhos selecionados."
            description="Uma amostra do que venho construindo — Divesidade de websites e interfaces dinamicas."
          />

          <div className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => {
              const isActive = filter === cat;
              return (
                <button
                  style={{ cursor: "pointer" }}
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "relative rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.18em] transition-colors",
                    isActive
                      ? "border-primary/70 text-foreground"
                      : "border-border/60 text-muted-foreground hover:border-primary/40 hover:text-foreground",
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-primary/15"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          layout
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} onView={setActive} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 ? (
          <p className="mt-12 text-center text-sm text-muted-foreground">
            Nenhum projeto encontrado nessa categoria ainda.
          </p>
        ) : null}
      </div>

      <ProjectGallery
        project={active}
        open={Boolean(active)}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
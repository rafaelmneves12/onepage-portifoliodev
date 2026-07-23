import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Project } from "@/types/project";

interface ProjectGalleryProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export function ProjectGallery({ project, open, onClose }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (open) setIndex(0);
  }, [open, project?.id]);

  const total = project?.gallery.length ?? 0;

  const next = useCallback(() => {
    if (!total) return;
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    if (!total) return;
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, next, prev, onClose]);

  return (
    <AnimatePresence>
      {open && project ? (
        <motion.div
          key="gallery"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-background/95 backdrop-blur-xl"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria — ${project.title}`}
        >
          {/* Header */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between p-6">
            <div className="pointer-events-auto">
              <p className="text-[11px] uppercase tracking-[0.24em] text-primary">
                {project.category}
              </p>
              <h3 className="font-display text-2xl text-foreground">
                {project.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              aria-label="Fechar galeria"
              className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-card/60 text-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Image */}
          <div
            className="relative flex h-full w-full max-w-6xl items-center justify-center px-4 py-24 sm:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={project.gallery[index]}
                alt={`${project.title} — imagem ${index + 1}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="max-h-full max-w-full rounded-xl border border-border/60 object-contain shadow-2xl"
              />
            </AnimatePresence>

            {total > 1 ? (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Imagem anterior"
                  className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-card/60 text-foreground backdrop-blur transition-colors hover:border-primary/60 hover:text-primary sm:left-6"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Próxima imagem"
                  className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-card/60 text-foreground backdrop-blur transition-colors hover:border-primary/60 hover:text-primary sm:right-6"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            ) : null}
          </div>

          {/* Thumbs */}
          {total > 1 ? (
            <div
              className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-center gap-2 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              {project.gallery.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ir para imagem ${i + 1}`}
                  className={`h-1.5 w-8 rounded-full transition-all ${
                    i === index ? "bg-primary" : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          ) : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
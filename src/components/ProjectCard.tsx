import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Eye, Github } from "lucide-react";
import type { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
  onView: (project: Project) => void;
}

export function ProjectCard({ project, onView }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/40 backdrop-blur transition-colors hover:border-primary/50"
    >
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px 200px at 50% 0%, color-mix(in oklab, var(--primary) 20%, transparent), transparent 70%)",
        }}
      />

      {/* Cover */}
      <button
        type="button"
        onClick={() => onView(project)}
        className="relative block aspect-[16/10] w-full overflow-hidden"
        aria-label={`Ver galeria de ${project.title}`}
      >
        <img
          src={project.cover}
          alt={project.title}
          width={1280}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <Badge
            variant="outline"
            className="border-border/60 bg-background/70 text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur"
          >
            {project.category}
          </Badge>
        </div>
        <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
          <Calendar className="h-3 w-3" />
          {project.date}
        </div>
      </button>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-display text-2xl leading-tight text-foreground">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        <ul className="space-y-1.5 text-xs text-muted-foreground">
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="rounded-full bg-secondary/60 px-2.5 py-0.5 text-[10px] font-normal uppercase tracking-[0.16em] text-muted-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-2">
          {project.liveUrl ? (
            <Button asChild size="sm" variant="hero" className="rounded-full">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Acessar
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          ) : null}
          {project.githubUrl ? (
            <Button asChild size="sm" variant="subtle" className="rounded-full">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
            </Button>
          ) : null}
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onView(project)}
            className="ml-auto rounded-full text-muted-foreground hover:text-foreground"
          >
            <Eye className="h-3.5 w-3.5" />
            Visualizar
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
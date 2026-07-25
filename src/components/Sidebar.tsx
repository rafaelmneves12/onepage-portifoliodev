import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-screen flex-col gap p-6">
      {/* Photo + identity */}
      <div className="flex flex-col items-start gap-3">
        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 via-transparent to-[color:var(--gold)]/30 blur-md"
          />
          <img
            src={personalInfo.photoUrl}
            alt={personalInfo.name}
            width={112}
            height={112}
            className="relative h-20 w-20 rounded-full border border-border/60 object-cover"
          />
        </div>

        <div className="space-y-1.5">
          <p className="text-[8px] font-medium uppercase tracking-[0.24em] text-primary">
            Portfólio
          </p>
          <p className="font-display text-xl leading-tight text-foreground">
            {personalInfo.name}
          </p>
          <p className="text-xs text-muted-foreground">{personalInfo.role}</p>
        </div>

        <p className="text-[10px] leading-relaxed text-muted-foreground/90">
          {personalInfo.shortBio}
        </p>
      </div>

      {/* Nav */}
      <nav aria-label="Navegação principal" className="flex-1">
        <ul className="space-y-1">
          {personalInfo.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={onNavigate}
                className="group flex items-center gap-3 rounded-md px-2 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <span
                  aria-hidden
                  className="h-px w-6 bg-border transition-all group-hover:w-10 group-hover:bg-primary"
                />
                <span className="tracking-wide">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="space-y-4 border-t border-border/60 pt-6">
        <SocialLinks />
        <Button asChild size="sm" variant="subtle" className="w-full">
          <a href={personalInfo.resumeUrl} download>
            <Download className="h-4 w-4" />
            Baixar currículo
          </a>
        </Button>
        <p className="text-[8px] uppercase tracking-[0.24em] text-muted-foreground/70">
          {personalInfo.location}
        </p>
      </div>
    </div>
  );
}

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={cn(
          "hidden lg:flex",
          "fixed inset-y-0 left-0 z-30 w-[340px] xl:w-[380px]",
          "border-r border-border/60 bg-sidebar",
        )}
      >
        <SidebarContent />
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between border-b border-border/60 bg-background/80 px-4 py-3 backdrop-blur">
        <div className="flex items-center gap-3">
          <img
            src={personalInfo.photoUrl}
            alt=""
            className="h-9 w-9 rounded-full border border-border/60 object-cover"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{personalInfo.name}</p>
            <p className="truncate text-xs text-muted-foreground">
              {personalInfo.role}
            </p>
          </div>
        </div>
        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/60 text-foreground hover:border-primary/60"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed inset-y-0 left-0 z-50 w-[86%] max-w-sm overflow-y-auto border-r border-border/60 bg-sidebar lg:hidden"
            >
              <div className="flex justify-end p-3">
                <button
                  type="button"
                  aria-label="Fechar menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/60 text-foreground hover:border-primary/60"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <SidebarContent onNavigate={() => setOpen(false)} />
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
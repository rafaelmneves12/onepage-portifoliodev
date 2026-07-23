import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { certificates } from "@/data/certificates";
import type { Certificate } from "@/types/certificate";
import { SectionTitle } from "@/components/SectionTitle";
import { CertificateCard } from "@/components/CertificateCard";

export function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section
      id="certificados"
      className="relative border-t border-border/60 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Certificados"
          title="Aprendizado contínuo, com registro."
          description="Uma seleção de cursos, bootcamps e formações que moldaram minha atuação."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <CertificateCard certificate={cert} onOpen={setActive} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            key="cert-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-background/95 p-6 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label={`Certificado — ${active.title}`}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActive(null);
              }}
              aria-label="Fechar"
              className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-card/60 text-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl"
            >
              <div className="rounded-3xl bg-gradient-to-br from-[color:var(--gold)]/30 via-transparent to-primary/15 p-[3px] shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)]">
                <div className="rounded-[22px] bg-background/40 p-4 sm:p-6">
                  <div className="overflow-hidden rounded-2xl border border-[color:var(--gold)]/30">
                    <img
                      src={active.image}
                      alt={active.title}
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2 px-2">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[color:var(--gold)]">
                    {active.institution}
                  </p>
                  <h3 className="font-display text-2xl text-foreground">{active.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground">
                  {active.date}
                  {active.hours ? ` · ${active.hours}` : ""}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
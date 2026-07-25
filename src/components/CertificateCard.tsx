import { motion } from "framer-motion";
import { Award, Calendar, Clock } from "lucide-react";
import type { Certificate } from "@/types/certificate";

interface CertificateCardProps {
  certificate: Certificate;
  onOpen: (certificate: Certificate) => void;
}

export function CertificateCard({ certificate, onOpen }: CertificateCardProps) {
  return (
    <motion.button
      style={{ cursor: "pointer" }}
      type="button"
      onClick={() => onOpen(certificate)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-4 text-left backdrop-blur transition-colors hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/60"
      aria-label={`Abrir certificado ${certificate.title}`}
    >
      {/* Frame */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[color:var(--gold)]/25 via-transparent to-primary/10 p-[2px] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]">
        <div className="rounded-[10px] bg-background/40 p-3">
          <div className="relative overflow-hidden rounded-md border border-[color:var(--gold)]/30">
            <img
              src={certificate.image}
              alt={certificate.title}
              loading="lazy"
              width={1024}
              height={720}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-[color:var(--gold)]/40"
            />
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="mt-5 flex flex-1 flex-col gap-3">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[color:var(--gold)]">
          <Award className="h-3.5 w-3.5" />
          Certificado
        </div>
        <h3 className="font-display text-lg leading-tight text-foreground">
          {certificate.title}
        </h3>
        <p className="text-sm text-muted-foreground">{certificate.institution}</p>
        <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-border/60 pt-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3 w-3" />
            {certificate.date}
          </span>
          {certificate.hours ? (
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              {certificate.hours}
            </span>
          ) : null}
        </div>
      </div>
    </motion.button>
  );
}
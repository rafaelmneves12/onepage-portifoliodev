import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/animations/variants";

export function Hero() {
  return (
    <section
      id="sobre"
      className="relative isolate overflow-hidden px-6 pb-24 pt-16 sm:px-10 lg:min-h-screen lg:px-16 lg:pt-24"
    >
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 left-1/3 h-[520px] w-[520px] rounded-full bg-primary/15 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[color:var(--gold)]/10 blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20"
      >
        {/* Copy column */}
        <div className="order-2 lg:order-1">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Disponível para novos projetos
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-5xl leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          >
            {personalInfo.name.split(" ")[0]}{" "}
            <span className="italic text-gradient-gold">
              {personalInfo.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-muted-foreground"
          >
            <span className="h-px w-10 bg-primary/70" />
            {personalInfo.role}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {personalInfo.longBio}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="xl" variant="hero">
              <a href="#projetos">
                Ver projetos
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="xl" variant="gold">
              <a href={personalInfo.resumeUrl} 
              download="Rafael-de-Mattos-Neves-Curriculo.pdf"
              >
                <Download className="h-4 w-4" />
                Baixar currículo
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-8"
          >
            {[
              { k: "2+", v: "Anos de experiência" },
              { k: "3+", v: "Projetos entregues" },
              { k: "2+", v: "Clientes atendidos" },
            ].map((stat) => (
              <div key={stat.v}>
                <p className="font-display text-3xl text-foreground">{stat.k}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.v}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Portrait column */}
        <motion.div
          variants={fadeUp}
          className="relative order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/25 via-transparent to-[color:var(--gold)]/20 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border/60 bg-card/40 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
              <img
                src={personalInfo.photoUrl}
                alt={personalInfo.name}
                width={768}
                height={960}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-border/60 bg-background/70 px-4 py-3 backdrop-blur">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-[color:var(--gold)]" />
                  Front-End | Wordpress
                </div>
                <span className="text-xs text-foreground">{personalInfo.location}</span>
              </div>
            </div>

            {/* Corner accents */}
            <span
              aria-hidden
              className="absolute -left-2 -top-2 h-6 w-6 border-l border-t border-[color:var(--gold)]/60"
            />
            <span
              aria-hidden
              className="absolute -bottom-2 -right-2 h-6 w-6 border-b border-r border-primary/60"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
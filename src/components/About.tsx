import { motion } from "framer-motion";
import { GraduationCap, Rocket, Sparkles, Target } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { fadeUp, staggerContainer } from "@/animations/variants";

const highlights = [
  {
    icon: GraduationCap,
    title: "Formação",
    body: "Graduação em Sistemas de Informação e cursos especializados em React + TypeScript e Tailwind CSS.",
  },
  {
    icon: Rocket,
    title: "Atuação",
    body: "Aplicações web com React e desenvolvimento de websites em WordPress.",
  },
  {
    icon: Sparkles,
    title: "Stack favorita",
    body: "React, TypeScript, Tailwind CSS e uma pitada de design system bem cuidado.",
  },
  {
    icon: Target,
    title: "Objetivo",
    body: "Unir Criação e design para entregar produtos digitais com identidade e impacto real.",
  },
];

export function About() {
  return (
    <section
      id="sobre-mim"
      className="relative border-t border-border/60 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Sobre mim"
          title="Desenvolvedor com olhar de dono."
          description="Trabalho na fronteira entre código e produto — construindo interfaces polidas, acessíveis e performáticas, com atenção obsessiva aos detalhes."
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            <motion.p variants={fadeUp}>
              Sou um desenvolvedor Front-End apaixonado por construir experiências
              digitais que combinam estética refinada com engenharia sólida. Ao longo
              dos últimos anos eu estudei, apliquei e ampliei meu conhecimento atuando em projetos funcionais.
            </motion.p>
            <motion.p variants={fadeUp}>
              Meu foco está em <span className="text-foreground">React</span>,{" "}
              <span className="text-foreground">TypeScript</span> e{" "}
              <span className="text-foreground">Tailwind CSS</span>, mas também
              transito com facilidade por WordPress em desenvolvimento de websites.
            </motion.p>
            <motion.p variants={fadeUp}>
              Meu diferencial é enxergar cada projeto como um produto completo:
              pensar arquitetura, performance, tipografia, animação e interações
              como partes de uma mesma composição.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur transition-colors hover:border-primary/50"
                >
                  <div
                    aria-hidden
                    className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                  />
                  <div className="relative">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="mt-4 font-display text-xl text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
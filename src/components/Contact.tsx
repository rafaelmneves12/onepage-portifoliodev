import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { contactInfo } from "@/data/contactInfo";
import { SectionTitle } from "@/components/SectionTitle";
import { ContactCard } from "@/components/ContactCard";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden border-t border-border/60 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -bottom-32 left-1/4 h-[420px] w-[420px] rounded-full bg-primary/15 blur-[160px]" />
        <div className="absolute -top-16 right-0 h-[320px] w-[320px] rounded-full bg-[color:var(--gold)]/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionTitle
              eyebrow="Contato"
              title={
                "Vamos construir algo\nque valha ser lembrado."
              }
              description="Estou disponível para novos projetos, colaborações e conversas. Me chame por qualquer canal — respondo rápido."
            />

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="xl" variant="hero">
                <a href={`mailto:${contactInfo.email}`}>
                  Enviar email
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="xl" variant="gold">
                <a
                  href={`https://wa.me/${contactInfo.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>

            <p className="mt-10 max-w-md text-sm text-muted-foreground">
              Prefere formal? Envie um email. Prefere rápido? WhatsApp. Prefere
              networking? LinkedIn. Mas pode contar comigo para seu projeto acontecer.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {[
              <ContactCard
                key="email"
                icon={Mail}
                label="Email"
                value={contactInfo.email}
                href={`mailto:${contactInfo.email}`}
                copyValue={contactInfo.email}
              />,
              <ContactCard
                key="phone"
                icon={Phone}
                label="Telefone"
                value={contactInfo.phoneDisplay}
                href={`tel:${contactInfo.phone}`}
                copyValue={contactInfo.phoneDisplay}
              />,
              <ContactCard
                key="location"
                icon={MapPin}
                label="Localização"
                value={contactInfo.location}
              />,
              <ContactCard
                key="linkedin"
                icon={Linkedin}
                label="LinkedIn"
                value="/in/rafael-mattos-neves-97a180274"
                href={contactInfo.linkedin}
                external
              />,
              <ContactCard
                key="github"
                icon={Github}
                label="GitHub"
                value="@rafaelmneves12"
                href={contactInfo.github}
                external
              />,
            ].map((el, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={i === 4 ? "sm:col-span-2" : undefined}
              >
                {el}
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
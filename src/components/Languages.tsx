import { motion } from "framer-motion";
import { languages } from "@/data/languages";
import { LanguageCard } from "@/components/LanguageCard";
import { SectionTitle } from "@/components/SectionTitle";

export function Languages() {
  return (
    <section
      id="idiomas"
      className="relative border-t border-border/60 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Idiomas"
          title="Comunicação em três frentes."
          description="Diversidade linguística como ferramenta de conexão e expressão."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {languages.map((lang) => (
            <motion.div
              key={lang.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <LanguageCard language={lang} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
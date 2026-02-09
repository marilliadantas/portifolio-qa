import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
   {
    title: "Formação Acelerada em Soluções de Techdesign (FAST) em Engenharia de Qualidade de Software",
    issuer: "CESAR School",
    year: "2025",
    link: "#",
  },
   {
    title: "Pós-graduada em Engenharia de Software com Ênfase em Qualidade e Teste",
    issuer: "FACINT",
    year: "2025",
    link: "#",
  },
  {
    title: "Graduada em Análise e Desenvolvimento de Sistemas",
    issuer: "Estácio",
    year: "2024",
    link: "#",
  },
    {
    title: "Accredited Software Testing Fundamentals Certifications (ASTFC)",
    issuer: "AICS® - Asociación Internacional de Calidad de Software",
    year: "2024",
    link: "#",
  },
  {
    title: "Scrum Foundation Certificate - SPFC",
    issuer: "Certiprof",
    year: "2023",
    link: "#",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificacoes" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Formação e Certificações</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card rounded-xl p-5 glow-border card-hover group block"
            >
              <div className="flex items-start justify-between mb-3">
                <Award size={22} className="text-primary" />
                <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {cert.issuer} · {cert.year}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bug, TestTube, ShieldCheck } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    // { icon: Bug, label: "Bugs Encontrados", value: "2.500+" },
    // { icon: TestTube, label: "Testes Automatizados", value: "5.000+" },
    // { icon: ShieldCheck, label: "Releases Validados", value: "300+" },
  ];

  return (
    <section id="sobre" className="pt-4 pb-4" ref={ref}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10 md:gap-16">
        
        {/* Coluna esquerda - Highlights (opcional) */}
        {highlights.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:w-2/3"
          >
            <div className="flex flex-wrap gap-4">
              {highlights.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="bg-card rounded-lg p-4 glow-border flex items-center gap-3"
                >
                  <Icon size={18} className="text-primary" />
                  <div>
                    <p className="text-xl font-bold font-mono text-foreground">{value}</p>
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Coluna direita - Hero */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:w-1/3 flex flex-col items-center md:items-start"
        >
          {/* Aqui você pode colocar a foto, links e cargo do Hero */}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;

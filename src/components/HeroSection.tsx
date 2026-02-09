import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, User } from "lucide-react";

const HeroSection = ({ aboutText }) => {
  return (
    <section className="min-h-[30vh] flex items-start justify-center section-padding relative overflow-hidden">
      {/* Background gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(270 70% 50%), transparent)" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(300 60% 45%), transparent)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10 w-full flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Coluna esquerda - Hero */}
        <div className="flex flex-col items-center md:items-start gap-6 md:w-1/3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-secondary border-2 border-primary/30 photo-glow flex items-center justify-center overflow-hidden">
            <img
              src="/profile-pic.png"
              alt="Marillia Dantas"
              className="w-full h-full object-cover"
              />
          </div>
          </motion.div>

          <div className="text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-primary text-sm mb-2"
            >
              Quality Assurance
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
            >
              <span className="text-gradient">Marillia Dantas</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-5"
            >
              <MapPin size={15} />
              <span className="text-sm">Fortaleza, Brasil</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center md:justify-start gap-3 mb-6"
            >
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/marilliadantas", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/marilliadantas", label: "GitHub" },
                { icon: Mail, href: "mailto:marillia.dantas@hotmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 border border-border transition-all duration-300"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Coluna direita - About (Resumo Profissional) */}
        <motion.div
          id="sobre"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="md:w-1/2 p-4 rounded-lg text-left text-justify scroll-mt-20"
        >
          <h2 className="text-2xl font-bold mb-4">Resumo Profissional</h2>
          <p className="text-muted-foreground leading-relaxed">
            QA formada em Análise e Desenvolvimento de Sistemas, com experiência em aplicações Web, Mobile e APIs. Atuação em diferentes segmentos como comunicação, marketing, imobiliário, logística, jurídico e e-commerce, participando de projetos como Moura Dubeux, TJSP, C.Vale, IT Forum, Neoenergia, Pro Frotas e Petz. Forte atuação em automação de testes, estruturação de processos de QA e disseminação da cultura de qualidade em ambientes ágeis.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

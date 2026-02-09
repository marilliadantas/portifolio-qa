import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
  {
    title: "Projeto Multi-Frameworks",
    description:
      "Automação de testes E2E utilizando múltiplos frameworks, garantindo cobertura ampla e manutenção simplificada.",
    tags: ["Robot Framework", "Cypress", "Playwright", "Appium"],
    link: "https://github.com/marilliadantas/multi-test-framework",
    github: "https://github.com/marilliadantas",
  },
  {
    title: "Automação de API com Cypress",
    description:
      "Automação de testes de API REST utilizando Cypress, incluindo validação de status, corpo da resposta, schema JSON e testes de contrato para garantir confiabilidade.",
    tags: ["Cypress", "JavaScript"],
    link: "https://github.com/marilliadantas/cypress-api-test-serverest",
    github: "https://github.com/marilliadantas",
  },
  {
    title: "Performance com K6",
    description:
      "Automação de testes de performance utilizando o K6, com criação de diferentes cenários de carga e geração de relatórios detalhados em HTML para análise.",
    tags: ["K6", "JavaScript"],
    link: "https://github.com/marilliadantas/serverest-test-k6",
    github: "https://github.com/marilliadantas",
  },
  {
    title: "Automação Mobile com Appium e Robot Framework",
    description:
      "Automação de testes mobile com Appium e Robot Framework, com criação de casos de teste e execução em dispositivos reais e simuladores.",
    tags: ["Robot Framework", "Appium", "Python"],
    link: "https://github.com/marilliadantas/yodapp-robot-appium",
    github: "https://github.com/marilliadantas",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projetos" className="section-padding bg-gradient-purple" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Projetos</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 glow-border card-hover group"
            >
              <div className="flex items-start justify-between mb-4">
                <Layers size={28} className="text-primary" />
                <div className="flex gap-3">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

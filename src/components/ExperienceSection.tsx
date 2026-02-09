import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "QA Pleno",
    company: "Grupo Petz Cobasi",
    period: "07/2025 – Atual",
    description:
      "Atuação estratégica na qualidade de aplicações Web e Mobile, com definição e execução de testes manuais e automatizados. Contribuição para a redução de bugs em produção (~30–40%) e aumento da cobertura de testes, além da padronização de cenários em BDD/Gherkin e aplicação de práticas de Shift Left Testing, reduzindo retrabalho (~20–30%) e fortalecendo os processos de QA da squad.",
    tags: ["Robot Framework", "Postman", "Bitbucket", "BrowserStack", "Scrum", "Jira"],
  },
  {
    role: "QA Chapter Lead",
    company: "Loomi",
    period: "05/2025 – 07/2025",
    description:
      "Atuação no apoio técnico ao time de QA, promovendo a melhoria contínua dos processos, planejamento e priorização de iniciativas de qualidade, alinhamento técnico entre os times e disseminação de boas práticas e inovação em QA.",
    tags: ["Melhoria de Processos", "Mentoria", "Apoio técnico"],
  },
  {
    role: "QA Engineer",
    company: "Loomi",
    period: "07/2024 – 05/2025",
    description:
      "Atuação em testes manuais e automação de testes Web, API e Mobile com Cypress, Robot Framework e Appium, incluindo criação de POCs e testes de performance com K6. Experiência em projetos como Moura Dubeux, TJSP, C.Vale, IT Forum e Pro Frotas, com participação ativa na análise de requisitos, documentação, gestão de defeitos no Jira, integração de testes ao GitHub Actions, colaboração com DevOps e contribuição no Chapter de QA.",
    tags: ["Cypress", "Postman", "K6", "Appium", "Scrum", "Jira", "Testiny", "Github Actions"],
  },
  {
    role: "QA ENGINEER JR",
    company: "Comunique-se",
    period: "12/2023 - 07/2024 ",
    description:
      "Automação de testes para aplicações Web, API e Mobile com Robot Framework, planejamento de testes, gestão de defeitos no Jira, versionamento com Bitbucket e atuação em times ágeis (Scrum/Kanban).",
    tags: ["Cypress", "Postman", "Scrum", "Kanban", "Azure Devops"],
  },
  {
    role: "Analista de teste/QA (Voluntário)",
    company: "QA.Coders Academy",
    period: "02/2024 - 05/2024",
    description:
      "Atuação em testes funcionais e automação de testes Web e APIs com Robot Framework e Postman, incluindo gestão de bugs, versionamento com Git e Azure DevOps, e vivência em metodologias ágeis.",
    tags: ["Robot Framework", "Postman", "Scrum", "Jira", "Github Actions"],
  },
  {
    role: "QA Residente",
    company: "IREDE",
    period: "08/2023 - 12/2023",
    description:
      "Planejamento e execução de testes manuais e automatizados Web, com escrita de casos de teste, documentação, uso de Selenium, Jira, Git e Bitbucket, atuando em ambiente ágil durante residência técnica em projeto do Instituto Atlântico em parceria com a HP Inc.",
    tags: ["Selenium", "Bitbucket", "Scrum", "Jira"],
  },
  {
    role: "Estagiária de QA",
    company: "Comunique-se",
    period: "11/2022 - 12/2023 ",
    description:
      "Responsável pelo planejamento e execução de testes funcionais e de regressão manuais, incluindo a escrita e gerenciamento de casos de teste utilizando Azure. Realização de testes automatizados web com Cypress, abertura e acompanhamento de bugs, além de vivência em metodologias ágeis.",
    tags: ["Cypress", "Scrum", "Jira"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Experiência Profissional</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-2.5 top-1.5 w-4 h-4 rounded-full border-2 border-primary" style={{ background: "linear-gradient(135deg, hsl(270 70% 60%), hsl(280 60% 55%))" }} />

                <div className="bg-card rounded-xl p-6 glow-border card-hover">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-primary" />
                      <h3 className="font-semibold text-lg text-foreground">{exp.role}</h3>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground mt-1 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary/80 text-sm font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

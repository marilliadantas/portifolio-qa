import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Testes Web, Mobile, API e Performance",
  "Cypress",
  "Robot Framework",
  "Appium",
  "Selenium",
  "Playwright",
  "Maestro",
  "Postman",
  "Docker",
  "Rest Assured",
  "CI/CD (GitHub Actions, Bitbucket, Azure DevOps, Jenkins, GitLab)",
  "JavaScript, Python, Java",
  "K6, Locust, JMeter",
  "MySQL, MongoDB, Postgress",
];

const SkillItem = ({ name }: { name: string }) => (
  <div className="flex items-center gap-3">
    <span className="w-3 h-3 rounded-full bg-purple-500 flex-shrink-0" />
    <span className="text-sm text-foreground">{name}</span>
  </div>
);

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-gradient-purple" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Skills & Competências</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-4 glow-border card-hover"
            >
              <SkillItem name={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

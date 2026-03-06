import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages & Core",
    skills: [
      { name: "Python", level: 95 },
      { name: "C++", level: 85 },
      { name: "JavaScript", level: 82 },
      { name: "SQL", level: 88 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
    ],
  },
  {
    title: "ML & AI",
    skills: [
      { name: "Scikit-learn", level: 92 },
      { name: "TensorFlow", level: 88 },
      { name: "PyTorch", level: 90 },
      { name: "LangChain", level: 87 },
      { name: "RAG Pipelines", level: 85 },
      { name: "OpenAI API", level: 88 },
    ],
  },
  {
    title: "Data & Backend",
    skills: [
      { name: "Pandas", level: 93 },
      { name: "NumPy", level: 90 },
      { name: "Flask", level: 86 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "APIs & Integrations", level: 84 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-surface/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2">// tech_stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-12">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + ci * 0.15 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="font-mono font-semibold text-sm text-primary mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-mono text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + ci * 0.15 + si * 0.05, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

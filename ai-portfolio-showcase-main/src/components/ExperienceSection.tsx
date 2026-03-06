import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AI Virtual Intern",
    company: "SmartBridge",
    period: "Remote · Virtual",
    desc: "Worked on AI and machine learning projects, focusing on building intelligent applications and understanding end-to-end ML workflows.",
    techs: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
  },
  {
    role: "AI & Data Analytics Intern",
    company: "AICTE",
    period: "Remote · Virtual",
    desc: "Explored data analytics and ML techniques to extract insights from real-world datasets, gaining experience in preprocessing, modeling, and evaluation.",
    techs: ["Pandas", "NumPy", "Scikit-learn", "Data Visualization"],
  },
  {
    role: "ServiceNow CSA Virtual Intern",
    company: "SmartBridge",
    period: "Remote · Virtual",
    desc: "Learned the fundamentals of ServiceNow and CSA concepts while understanding how AI and automation can enhance IT service workflows.",
    techs: ["ServiceNow", "CSA", "ITSM Concepts"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-surface/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2">// work_history</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-12">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className={`relative pl-12 md:pl-0 mb-12 last:mb-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Dot */}
              <div className={`absolute left-3 top-1 w-3 h-3 rounded-full bg-primary border-2 border-background md:left-auto ${
                i % 2 === 0 ? "md:right-[-7px]" : "md:left-[-7px]"
              }`} />

              <div className="glass rounded-xl p-5">
                <div className="flex items-center gap-2 mb-1 justify-start md:justify-start">
                  <Briefcase className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-xs font-mono text-primary">{exp.period}</span>
                </div>
                <h3 className="font-mono font-semibold text-foreground text-left">{exp.role}</h3>
                <p className="text-sm text-muted-foreground font-mono mb-3 text-left">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-3 font-sans text-left">{exp.desc}</p>
                <div className="flex flex-wrap gap-2 justify-start">
                  {exp.techs.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Brain, MessageSquare, Layers } from "lucide-react";

const projects = [
  {
    title: "Smart Judicial Case Management System",
    desc: "AI-powered platform for legal case classification and summarization using Retrieval-Augmented Generation (RAG) to help lawyers and stakeholders quickly understand case details.",
    tags: ["Python", "RAG", "LangChain", "LLMs", "Vector DB"],
    icon: Brain,
    color: "from-primary to-primary/60",
  },
  {
    title: "Loan Approval Prediction System",
    desc: "Machine learning model that predicts loan eligibility based on applicant data, using feature engineering and model evaluation with Scikit-learn and XGBoost.",
    tags: ["Scikit-learn", "XGBoost", "Pandas", "NumPy", "ML Pipeline"],
    icon: Layers,
    color: "from-accent to-accent/60",
  },
  {
    title: "AI PDF Chatbot",
    desc: "RAG-based chatbot that ingests PDF documents and answers user questions with context-aware responses, making long documents easier to search and understand.",
    tags: ["LangChain", "OpenAI API", "RAG", "Flask", "Python"],
    icon: MessageSquare,
    color: "from-primary to-accent",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2">// featured_projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-12">
            Things I've <span className="text-gradient">Built</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass rounded-xl p-6 group hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-4`}>
                <project.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-mono font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                </button>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

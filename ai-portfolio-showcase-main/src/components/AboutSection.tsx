import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Brain, Zap } from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI/ML Engineering", desc: "Building intelligent systems with ML & DL" },
  { icon: Code, label: "RAG & LLMs", desc: "Chatbots, document QA & AI agents" },
  { icon: Database, label: "Data & Databases", desc: "Working with SQL, NoSQL & data pipelines" },
  { icon: Zap, label: "Applied AI Projects", desc: "Turning real-world problems into solutions" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2">// about_me</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-8">
            Passionate about <span className="text-gradient">AI innovation</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-muted-foreground font-sans leading-relaxed"
          >
            <p>
              I'm <span className="text-foreground font-medium">Pratik Nannajkar</span>, an AI/ML Engineer and
              undergraduate student pursuing a Bachelor of Engineering in Artificial Intelligence at
              Dr. D. Y. Patil School of Science and Technology, Pune. I currently maintain a CGPA of
              9.0 and will be graduating in 2027.
            </p>
            <p>
              I enjoy designing and implementing end-to-end AI solutions – from data preprocessing
              and classical ML to deep learning with frameworks like TensorFlow and PyTorch. Recently,
              I've been focused on RAG-based systems, PDF/chatbots, and intelligent tools that make
              information more accessible.
            </p>
            <p>
              I've gained hands-on experience through virtual internships with SmartBridge and AICTE,
              where I worked on AI, data analytics, and ServiceNow CSA–related projects. I'm always
              excited to collaborate on impactful AI/ML ideas and real-world problem statements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group"
              >
                <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-mono font-semibold text-sm mb-1 text-foreground">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

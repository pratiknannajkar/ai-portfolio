import { motion } from "framer-motion";
import { ArrowDown, Brain, Cpu, Sparkles, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-mono"
        >
          <Sparkles className="w-4 h-4" />
          Open to Internship & AI/ML Opportunities
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold font-mono leading-tight mb-6"
        >
          <span className="block text-sm sm:text-base text-muted-foreground mb-2">
            Hi, I'm
          </span>

          <span className="text-gradient">Pratik Nannajkar</span>

          <br />

          <span className="text-foreground">AI / ML Engineer · </span>
          <span className="text-gradient">Artificial Intelligence Student</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-sans"
        >
          Artificial Intelligence undergraduate at Dr. D. Y. Patil School of Science
          and Technology, Pune (CGPA 9.0). Passionate about building intelligent
          systems using Machine Learning, Generative AI, NLP and RAG architectures.
          I enjoy creating real-world AI applications such as chatbots, ML prediction
          systems, and automation tools.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {/* Projects Button */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-mono font-semibold text-sm hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] transition-all duration-300"
          >
            <Brain className="w-4 h-4" />
            View Projects
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-mono font-semibold text-sm hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            <Cpu className="w-4 h-4" />
            Get in Touch
          </a>

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/40 bg-primary/5 text-primary font-mono font-semibold text-sm hover:bg-primary/10 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

        {/* Tech Stack Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-12 text-muted-foreground/40"
        >
          {["Python", "PyTorch", "TensorFlow", "LangChain", "Transformers"].map(
            (tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="text-xs font-mono hidden sm:block"
              >
                {tech}
              </motion.span>
            )
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-primary/50" />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
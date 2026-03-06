import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "AI Virtual Internship",
    issuer: "SmartBridge",
    year: "Ongoing",
  },
  {
    name: "AI & Data Analytics Internship",
    issuer: "AICTE",
    year: "Ongoing",
  },
  {
    name: "ServiceNow CSA Virtual Internship",
    issuer: "SmartBridge",
    year: "Ongoing",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2">// certifications</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-12">
            Credentials & <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="glass rounded-xl p-5 group hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <Award className="w-6 h-6 text-primary flex-shrink-0" />
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-mono font-semibold text-sm text-foreground mb-1">{cert.name}</h3>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              <p className="text-xs text-primary font-mono mt-2">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

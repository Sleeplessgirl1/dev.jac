import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Freelance Full-Stack Web Developer",
    company: "Self-Employed",
    period: "2023 - Present",
    description:
      "Building production-ready web applications for clients, from initial consultation to deployment and maintenance.",
    responsibilities: [
      "Direct client communication and requirements gathering",
      "End-to-end development of React/Next.js applications",
      "Database design and API integration",
      "Deployment, optimization, and ongoing maintenance",
      "SEO implementation and performance tuning",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Professional journey
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="relative pl-8 pb-8 border-l-2 border-border last:border-transparent last:pb-0"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Briefcase size={14} className="text-primary-foreground" />
              </div>

              <div className="bg-card rounded-xl p-6 border border-border shadow-card">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <span className="px-2.5 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-md">
                    {exp.company}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

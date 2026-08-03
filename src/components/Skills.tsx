import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & Data",
    skills: ["Node.js", "REST APIs", "SQL", "MySQL", "PostgreSQL", "Supabase"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "Shopify", "Figma", "VS Code"],
  },
  {
    title: "Performance & Quality",
    skills: [
      "Google Lighthouse",
      "Core Web Vitals",
      "SEO Optimization",
      "Accessibility",
      "Responsive Design",
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Skills
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
            Technologies I work with
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                  >
                    {skill}
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

export default Skills;

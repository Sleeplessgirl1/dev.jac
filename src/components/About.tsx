import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Production Experience",
    description:
      "Built and deployed real-world applications for clients, not just tutorials or demos.",
  },
  {
    icon: Lightbulb,
    title: "Product-Focused",
    description:
      "I think beyond code—considering user experience, business goals, and long-term maintainability.",
  },
  {
    icon: Users,
    title: "Remote Ready",
    description:
      "Experienced working async with international teams, clear communication, and self-management.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
            A developer who cares about the details
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm a junior full-stack developer with hands-on experience building 
              production websites for real clients. Based in Chihuahua, Mexico, 
              I specialize in creating clean, performant, and accessible web 
              applications.
            </p>
            <p>
              My approach combines technical skill with design sensitivity—I believe 
              great software should not only work flawlessly but also feel intuitive 
              and delightful to use. I'm a fast learner, detail-oriented, and genuinely 
              curious about solving complex problems.
            </p>
            <p>
              Whether it's an e-commerce platform, a marketing site, or an interactive 
              web app, I bring the same level of care and craftsmanship to every project.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-border"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

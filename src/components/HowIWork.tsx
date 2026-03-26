import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Code2, Zap, MessageSquare } from "lucide-react";

const principles = [
  {
    icon: Search,
    title: "Problem First",
    description:
      "Before writing code, I focus on understanding the problem, user needs, and business goals.",
  },
  {
    icon: Code2,
    title: "Clean & Maintainable Code",
    description:
      "I prioritize readability, scalability, and maintainability so projects can grow over time.",
  },
  {
    icon: Zap,
    title: "Performance Matters",
    description:
      "Fast websites improve user experience, SEO, and conversions, so optimization is always part of my process.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "I believe good communication is as important as good code when working with clients or teams.",
  },
];

const HowIWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-i-work" className="section-padding">
      <div className="container-narrow mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            How I Work
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;

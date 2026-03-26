import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket } from "lucide-react";

const explorations = [
  "Advanced React patterns",
  "Backend architecture with Node.js",
  "Web performance optimization",
  "Scalable application design",
];

const CurrentlyExploring = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Growth Mindset
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Currently Exploring
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {explorations.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
              className="flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors"
            >
              <Rocket size={16} className="text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyExploring;

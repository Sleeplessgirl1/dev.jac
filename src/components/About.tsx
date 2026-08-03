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
          className="max-w-2xl mb-10 md:mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
            A developer who cares about the details
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm a full-stack developer with hands-on experience building 
              real-world websites for clients. Based in Chihuahua, Mexico, 
              I specialize in developing modern, performant, and user-friendly 
              web applications.
            </p>
            <p>
              My approach combines technical development with product thinking. 
              I focus not only on writing clean code but also on creating digital 
              experiences that are intuitive, accessible, and aligned with business goals.
            </p>
            <p>
              I'm naturally curious, detail-oriented, and always eager to improve 
              my skills while solving meaningful problems.
            </p>
            <p>
              Currently, I'm looking for opportunities where I can contribute to 
              impactful projects while continuing to grow as a developer.
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

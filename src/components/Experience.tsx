import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Shopify Specialist — Dekra-Lite",
    company: "Dekra-Lite",
    period: "2024 - Present",
    description:
      "Ongoing Shopify support for a seasonal decor brand: store maintenance, page creation and inventory management.",
    responsibilities: [
      "Continuous maintenance of the Shopify storefront, theme sections and site structure",
      "Creation and optimization of new landing and collection pages",
      "Inventory updates, product data cleanup and catalog organization",
      "Performance, SEO and on-brand consistency checks across the store",
    ],
  },
  {
    title: "Freelance Full-Stack Web Developer",
    company: "Self-Employed",
    period: "2023 - Present",
    description:
      "End-to-end website development for small businesses and brands—from requirements gathering and UX/UI design to deployment and ongoing optimization.",
    responsibilities: [
      "Delivered complete websites for clients including Dos Aguas (brand-focused) and Nativa Cocinas (product-focused business site)",
      "Owned the full project lifecycle: discovery, design, development, deployment, and maintenance",
      "Collaborated directly with non-technical clients to translate business needs into functional, conversion-oriented solutions",
      "Implemented performance optimizations achieving 90+ Lighthouse scores across performance, accessibility, and SEO",
      "Contributed to digital marketing strategies—structuring content for clarity, user flow, and conversion",
      "Set up e-commerce platforms including Shopify with payment integrations (Shopify Payments, PayPal)",
    ],
  },
  {
    title: "B.S. in Information Technologies Engineering",
    company: "Universidad Tecnológica de Chihuahua",
    period: "2023 - 2026",
    description:
      "Completed my degree in Information Technologies Engineering, gaining a strong foundation in software development, databases, and modern web technologies.",
    responsibilities: [
      "Relevant projects: MetaQuest 2 VR game (Leyenda Salvos), RV app for planet and lunar visualization",
      "Coursework: Database Systems, Web Development, Data Structures & Algorithms, AI Fundamentals",
      "Focused on applying theoretical knowledge to real-world development through freelance work and personal projects",
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
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Experience
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
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

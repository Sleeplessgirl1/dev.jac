import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Palette, 
  Camera, 
  BarChart3, 
  Zap, 
  ShoppingBag,
  Gamepad2
} from "lucide-react";

const beyondCodeSkills = [
  {
    icon: Palette,
    title: "Web Design & UX",
    description: "Creating intuitive layouts, visual hierarchies, and user flows that convert visitors into customers.",
    skills: ["UX/UI Design", "Layout Systems", "Usability", "Adobe Suite"],
  },
  {
    icon: Camera,
    title: "Product Photography",
    description: "Visual storytelling for e-commerce and brands—capturing products in ways that drive engagement.",
    skills: ["E-commerce Shots", "Brand Imagery", "Lightroom"],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & Platforms",
    description: "Setting up online stores, payment integrations, and optimizing for conversions.",
    skills: ["Shopify", "Payment Setup", "CRO Awareness"],
  },
  {
    icon: BarChart3,
    title: "Marketing & Analytics",
    description: "Understanding how design and development decisions impact visibility and conversions.",
    skills: ["Meta Ads Basics", "Conversion Design", "Analytics"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Maximizing speed, accessibility, and SEO scores using industry-standard auditing tools.",
    skills: ["Google Lighthouse", "Core Web Vitals", "SEO"],
  },
  {
    icon: Gamepad2,
    title: "Interactive & 3D",
    description: "Exploring interactive experiences and 3D environments for unique digital products.",
    skills: ["Unity Basics", "Interactive UI", "Animation"],
  },
];

const MultidisciplinarySkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="beyond-code" className="section-padding">
      <div className="container-narrow mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Beyond Code
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Multidisciplinary capabilities
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Development is just part of the picture. I bring design thinking, marketing awareness, 
            and creative skills to every project I work on.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beyondCodeSkills.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded"
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

export default MultidisciplinarySkills;

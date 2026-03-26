import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectCleverMedia from "@/assets/project-clever-media.jpg";

const challenges = [
  "Clearly present their services and value proposition",
  "Maintain fast performance across devices",
  "Support SEO visibility for marketing-related searches",
  "Build trust with potential clients",
  "Provide a clean and modern visual experience",
  "Add courses for marketing 1:1 (as digital products)",
  "Payment methods for the courses",
];

const approaches = [
  {
    title: "Information Structure",
    description:
      "Organized the content to guide visitors naturally through the services, portfolio, and contact sections.",
  },
  {
    title: "Performance Optimization",
    description:
      "Implemented modern web practices including optimized images, responsive layouts, and efficient component structure.",
  },
  {
    title: "Conversion-Oriented Design",
    description:
      "Designed the layout to emphasize clarity, credibility, and easy contact for potential clients.",
  },
];

const techStack = ["Next.js", "TypeScript", "Tailwind CSS", "Vercel Deployment"];

const features = [
  "Fully responsive design for mobile and desktop",
  "SEO-friendly page structure",
  "Optimized loading performance",
  "Clean UI aligned with brand identity",
  "Clear call-to-action sections for lead generation",
];

const results = [
  "90+ Lighthouse performance score",
  "Fast loading times across devices",
  "Clearer communication of services",
  "Improved user navigation and flow",
];

const CaseStudy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="case-study" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Featured Case Study
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Clever Media MKT Website
          </h2>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-border mb-12"
        >
          <img
            src={projectCleverMedia}
            alt="Clever Media MKT website preview"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4">Overview</h3>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Clever Media MKT needed a modern website to establish a strong digital
              presence and clearly communicate their marketing services.
            </p>
            <p>
              The goal was to create a professional, fast-loading website &amp;
              e-commerce that aligns with the brand identity while guiding visitors
              toward contacting the company for services.
            </p>
          </div>
        </motion.div>

        {/* The Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4">
            The Challenge
          </h3>
          <p className="text-muted-foreground mb-4">
            The client needed a website that could:
          </p>
          <ul className="space-y-2">
            {challenges.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <span className="text-muted-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-4 text-sm italic">
            Many marketing websites become heavy with animations and large media
            files, which negatively affects performance and user experience.
          </p>
        </motion.div>

        {/* My Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            My Approach
          </h3>
          <p className="text-muted-foreground mb-6">
            To solve this, I focused on three key areas:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {approaches.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-5 border border-border"
              >
                <h4 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack & Features side by side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Key Features
            </h3>
            <ul className="space-y-2">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle
                    size={16}
                    className="text-primary mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4">Results</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {results.map((r) => (
              <div
                key={r}
                className="bg-primary/5 rounded-lg px-4 py-3 flex items-center gap-3"
              >
                <CheckCircle size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{r}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What I Learned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4">
            What I Learned
          </h3>
          <div className="bg-card rounded-xl p-6 border border-border space-y-3 text-muted-foreground">
            <p>
              Working on this project reinforced the importance of balancing
              performance, design, and clarity when building websites for
              businesses.
            </p>
            <p>
              Even simple structural improvements can significantly improve user
              experience and lead generation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;

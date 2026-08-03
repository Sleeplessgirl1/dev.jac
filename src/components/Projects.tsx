import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectDekra from "@/assets/dekra-lite.png.asset.json";
import projectEliteZone from "@/assets/elite-zone.png.asset.json";
import projectExperiencia from "@/assets/experiencia013.png.asset.json";

const projects = [
  {
    title: "Dekra-Lite — Shopify Specialist",
    description:
      "Ongoing Shopify work for Dekra-Lite: continuous store maintenance, new page creation, inventory updates and catalog management for a large seasonal decor brand.",
    problem:
      "A large product catalog with seasonal cycles required constant updates, new landing pages and reliable inventory accuracy without breaking the live store.",
    solution:
      "I handle day-to-day Shopify operations: building and editing pages, updating theme sections, syncing and correcting inventory, and keeping the storefront fast, consistent and on-brand.",
    techStack: ["Shopify", "Liquid", "Theme Customization", "SEO", "Inventory Mgmt"],
    highlights: ["Ongoing Maintenance", "Page Building", "Inventory Updates"],
    liveUrl: "#",
    githubUrl: "#",
    image: projectDekra,
  },
  {
    title: "Elite Zone Chihuahua",
    description:
      "Website for a kids party services company in Chihuahua — inflatables, games and party packages — with a contact/booking form that turns visitors into real inquiries.",
    problem:
      "The business relied only on social media DMs, making it hard for parents to see packages, availability and pricing, or to request a quote quickly.",
    solution:
      "Built a colorful, mobile-first React site with clear service sections, package presentation and a quote form that sends structured requests straight to the owner.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Forms"],
    highlights: ["Booking Form", "Mobile-First", "Local SEO"],
    liveUrl: "https://elitezonecuu.lovable.app/",
    githubUrl: "#",
    image: projectEliteZone,
  },
  {
    title: "Experiencia013",
    description:
      "Digital catalog for an event furniture rental company in Chihuahua: browsable inventory of furniture and decor for social events, organized by category and style.",
    problem:
      "Clients had no easy way to browse the rental inventory — everything lived in PDFs and photo albums, slowing down quotes and event planning.",
    solution:
      "Designed a clean digital catalog with categorized listings, high-quality imagery and direct contact CTAs so clients can explore the inventory and request a quote in seconds.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    highlights: ["Digital Catalog", "Category Browsing", "Quote-Driven"],
    liveUrl: "https://experiencia013.com",
    githubUrl: "#",
    image: projectExperiencia,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Featured work
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of projects I've built for real clients, showcasing 
            problem-solving, clean code, and attention to detail.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
              className="bg-card rounded-3xl overflow-hidden border-2 border-foreground shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={project.image.url}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
                    loading="lazy"
                    width={1200}
                    height={800}
                  />
                </div>
                <div className="p-6 lg:p-8 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-sm font-medium text-foreground">
                        Problem:{" "}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {project.problem}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground">
                        Solution:{" "}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {project.solution}
                      </span>
                    </div>
                  </div>

                  {project.highlights && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full border border-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 border border-foreground/20 text-foreground/70 text-xs font-medium rounded-full transition-colors hover:bg-foreground hover:text-background"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button asChild size="sm">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

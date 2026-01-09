import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectCarMarketplace from "@/assets/project-car-marketplace.jpg";
import projectCleverMedia from "@/assets/project-clever-media.jpg";

const projects = [
  {
    title: "Car Marketplace Web App",
    description:
      "A modern car marketplace platform with dynamic listings, advanced filtering, and real-time data. Users can browse, search, and filter vehicles with a seamless and responsive experience.",
    problem:
      "The client needed a scalable platform to showcase vehicle inventory with intuitive search and filtering capabilities.",
    solution:
      "Built a performant React application with dynamic routing, optimized data fetching, and a clean UI that adapts to any device.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
    image: projectCarMarketplace,
  },
  {
    title: "Clever Media Website",
    description:
      "A professional informational website for a media company, featuring clean design, optimized performance, and SEO-friendly structure to maximize visibility.",
    problem:
      "The client required a modern web presence that communicates their brand effectively and ranks well in search engines.",
    solution:
      "Delivered a polished, fast-loading website with semantic HTML, structured data, and responsive design across all breakpoints.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    image: projectCleverMedia,
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
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-md"
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

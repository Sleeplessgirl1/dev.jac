import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "rodriguezjacqueline264@gmail.com",
    href: "mailto:rodriguezjacqueline264@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "https://github.com/Sleeplessgirl1",
    href: "https://github.com/Sleeplessgirl1",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/jacqueline-rodr%C3%ADguez-dev-jac/",
    href: "https://www.linkedin.com/in/jacqueline-rodr%C3%ADguez-dev-jac/",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    const text = `Hola, soy ${name}. ${subject}: ${message}`;
    const whatsappUrl = `https://wa.me/526142794269?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-2xl sm:text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Let's work together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-start gap-2 text-muted-foreground mb-6 text-sm sm:text-base">
              <MapPin size={18} className="flex-shrink-0 mt-0.5" />
              <span>Chihuahua, Mexico · Available for remote work</span>
            </div>

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-3 sm:gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-card transition-all group min-w-0"
                >
                  <div className="w-10 h-10 flex-shrink-0 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <link.icon
                      size={20}
                      className="text-primary"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-muted-foreground">
                      {link.label}
                    </div>
                    <div className="font-medium text-foreground text-sm sm:text-base break-all">
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-2xl p-4 sm:p-6 lg:p-8 border border-border shadow-card"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Send a message
            </h3>

            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

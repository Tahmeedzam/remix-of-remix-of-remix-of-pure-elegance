import { Mail, Github, Linkedin, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:tahmeedzamindar.tz@gmail.com",
    label: "tahmeedzamindar.tz@gmail.com",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/tahmeedzam",
    label: "github.com/tahmeedzam",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/tahmeedzamindar/",
    label: "linkedin.com/in/tahmeed-zamindar",
  },
];
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="contact"
      className={`section-container flex flex-col justify-center scroll-reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-2xl">
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 animate-fade-in">
          Contact
        </h2>

        <p className="text-xl text-muted-foreground mb-8 animate-fade-in opacity-0 stagger-1">
          Interested in working together? Let's connect.
        </p>

        <Button
          asChild
          variant="outline"
          className="mb-12 animate-fade-in opacity-0 stagger-2 group"
        >
          <a href="/resume.pdf" download>
            <FileDown className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Download Resume
          </a>
        </Button>

        <div className="space-y-4">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card/30 
                         transition-all duration-300 hover:border-foreground/20 card-glow
                         animate-fade-in opacity-0"
                style={{ animationDelay: `${(index + 1) * 0.15}s` }}
              >
                <div className="p-3 rounded-lg bg-secondary group-hover:bg-secondary/80 transition-colors">
                  <Icon className="w-5 h-5 icon-glow" />
                </div>

                <div className="flex-1">
                  <p className="font-medium">{link.name}</p>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                </div>

                <span className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all">
                  →
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-16 pt-8 border-t border-border animate-fade-in opacity-0 stagger-4">
          <p className="text-sm text-muted-foreground/60 text-center">
            © 2024 • Designed & Built with passion
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

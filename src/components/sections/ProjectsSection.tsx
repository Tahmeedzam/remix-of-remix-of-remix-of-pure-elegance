import { useNavigate } from "react-router-dom";

interface Project {
  name: string;
  slug: string;
  description: string;
  tech: string[];
  image: string;
}

const projects: Project[] = [
  {
    name: "AlgoVault",
    slug: "algo-vault",
    description:
      "A developer-focused platform for learning algorithms with structured explanations, visualizations, and multi-language implementations. Designed to simplify complex DSA concepts and improve problem-solving skills.",
    tech: ["Flutter", "Firebase", "Python"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
  },
  {
    name: "AbleEase",
    slug: "able-ease",
    description:
      "An award-winning mobile application built to assist specially abled individuals through guided retraining exercises. Focused on accessibility, intuitive design, and real-world impact.",
    tech: ["Flutter", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6b9c2c3d?w=600&h=400&fit=crop",
  },
  {
    name: "GymBuddy",
    slug: "gymbuddy",
    description:
      "A modern fitness companion app featuring workout tracking, personalized UI themes, and smooth user experience. Built with scalability and performance in mind.",
    tech: ["Flutter", "Firebase", "Provider"],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
  },
];

import { useScrollReveal } from "@/hooks/useScrollReveal";

const ProjectsSection = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollReveal(0.15);

  const handleProjectClick = (slug: string) => {
    navigate(`/project/${slug}`);
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="projects"
      className={`section-container flex flex-col justify-center scroll-reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-16 animate-fade-in">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <button
              key={project.name}
              onClick={() => handleProjectClick(project.slug)}
              className="group rounded-2xl border border-border bg-card/50 overflow-hidden card-glow animate-fade-in opacity-0 text-left"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-display font-semibold group-hover:text-foreground transition-colors">
                  {project.name}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

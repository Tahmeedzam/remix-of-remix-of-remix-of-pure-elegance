interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const experiences = [
  {
    role: "Flutter Developer Intern",
    company: "Horizon View",
    duration: "2025",
    description:
      "Worked as a Flutter developer intern where I designed and developed multiple UI screens and integrated backend services using Firebase. Gained hands-on experience in building scalable mobile applications, handling real-time databases, and improving app performance.",
  },
  {
    role: "Flutter Developer (Personal Projects)",
    company: "Self-Driven Development",
    duration: "2024 - Present",
    description:
      "Built multiple real-world applications including a geo-fence alarm system, AI content detection platform, and accessibility-focused apps. Focused on clean UI/UX, efficient state management, and scalable architecture using Flutter and Firebase.",
  },
];

import { useScrollReveal } from "@/hooks/useScrollReveal";

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="experience"
      className={`section-container flex flex-col justify-center scroll-reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-3xl">
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-16 animate-fade-in">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border to-transparent" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-foreground transform -translate-x-1/2" />

                {/* Content */}
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <h3 className="text-xl md:text-2xl font-display font-semibold">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-muted-foreground font-mono">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-foreground/80 font-medium">
                    {exp.company}
                  </p>

                  <p className="text-muted-foreground leading-relaxed pt-2">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

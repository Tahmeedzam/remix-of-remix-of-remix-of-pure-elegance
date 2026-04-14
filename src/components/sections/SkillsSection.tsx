const technicalSkills = [
  "Flutter",
  "Dart",
  "Firebase (Firestore, Auth)",
  "REST APIs",
  "FastAPI",
  "Spring Boot (Basics)",
  "Python",
  "C++",
  "Java",
  "State Management (Provider)",
  "Git & GitHub",
  "UI/UX Design (Figma Basics)",
  "AI API Integration",
  "Cloud Basics",
];

const softSkills = [
  "Problem Solving",
  "Self-Learning",
  "Project Building",
  "Team Collaboration",
  "Adaptability",
  "Time Management",
  "Critical Thinking",
  "Communication",
];

import { useScrollReveal } from "@/hooks/useScrollReveal";

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="skills"
      className={`section-container flex flex-col justify-center scroll-reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-16 animate-fade-in">
          Skills
        </h2>

        <div className="p-6 md:p-8 rounded-2xl border border-border bg-card/30 animate-fade-in">
          {/* Technical Skills */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-display font-semibold mb-4 flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: "hsl(210 100% 70%)",
                  boxShadow: "0 0 10px hsl(210 100% 70% / 0.8)",
                }}
              />
              Technical Skills
            </h3>

            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs md:text-sm px-3 py-1.5 rounded-full border border-border bg-card/50 
                             transition-all duration-300 hover:border-foreground/30"
                  style={{
                    boxShadow: "0 0 8px hsl(210 100% 70% / 0.1)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-6" />

          {/* Soft Skills */}
          <div>
            <h3 className="text-lg md:text-xl font-display font-semibold mb-4 flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: "hsl(270 70% 70%)",
                  boxShadow: "0 0 10px hsl(270 70% 70% / 0.8)",
                }}
              />
              Soft Skills
            </h3>

            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs md:text-sm px-3 py-1.5 rounded-full border border-border bg-card/50 
                             transition-all duration-300 hover:border-foreground/30"
                  style={{
                    boxShadow: "0 0 8px hsl(270 70% 70% / 0.1)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

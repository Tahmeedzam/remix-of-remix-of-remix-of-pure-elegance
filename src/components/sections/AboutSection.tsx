import { useScrollReveal } from "@/hooks/useScrollReveal";
import TiltCard from "@/components/TiltCard";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="about"
      className={`section-container flex flex-col justify-center scroll-reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 animate-fade-in">
          About me
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Profile Image with Tilt Effect */}
          <div className="animate-fade-in opacity-0 stagger-1">
            <TiltCard className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer shadow-lg">
              <img
                src="profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </TiltCard>
          </div>

          {/* Bio */}
          <div className="space-y-6 animate-fade-in opacity-0 stagger-2">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground">
              Hey, I'm{" "}
              <span className="text-foreground font-medium">Tahmeed</span> — I
              build apps that solve real problems.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a Flutter developer with a growing focus on backend and AI,
              passionate about creating scalable products—from
              accessibility-focused apps to smart developer tools.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I love experimenting, building fast, and turning ideas into
              something people can actually use.
            </p>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground/60">
                Computer Engineering Student • Mumbai • Building the future, one
                app at a time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

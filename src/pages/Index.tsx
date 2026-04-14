import { useState, useEffect, useRef } from "react";
import React from "react";
import IconNav from "@/components/IconNav";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AwardsSection from "@/components/sections/AwardsSection";
import ContactSection from "@/components/sections/ContactSection";

const sections = [
  "about",
  "experience",
  "skills",
  "projects",
  "awards",
  "contact",
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");
  const contentRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      isScrollingRef.current = true;
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Left Column - Icon Navigation */}
      <IconNav
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      {/* Vertical Divider */}
      <div className="fixed left-[25%] top-0 h-screen divider-line z-40 hidden lg:block" />
      <div className="fixed left-16 md:left-20 top-0 h-screen divider-line z-40 lg:hidden" />

      {/* Right Column - Content Area */}
      <main
        ref={contentRef}
        className="ml-16 md:ml-20 lg:ml-[25%] min-h-screen"
      >
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <AwardsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;

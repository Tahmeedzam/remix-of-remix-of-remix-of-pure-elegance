import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Trophy, Award, Star, Medal } from 'lucide-react';

const awards = [
  {
    icon: Trophy,
    title: "Best Innovation Award",
    organization: "Tech Conference 2023",
    year: "2023",
    description: "Recognized for developing an innovative solution that improved user engagement by 40%."
  },
  {
    icon: Award,
    title: "Employee of the Year",
    organization: "Previous Company",
    year: "2022",
    description: "Awarded for exceptional performance and leadership in cross-functional projects."
  },
  {
    icon: Star,
    title: "Open Source Contributor",
    organization: "GitHub",
    year: "2021",
    description: "Top contributor to multiple open-source projects with over 500 stars."
  },
  {
    icon: Medal,
    title: "Hackathon Winner",
    organization: "Global Hack Week",
    year: "2020",
    description: "First place in a 48-hour hackathon among 200+ participants."
  },
];

const AwardsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="awards" 
      className={`section-container flex flex-col justify-center scroll-reveal ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 animate-fade-in">
          Awards & Achievements
        </h2>
        
        <div className="grid gap-6">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div 
                key={index}
                className={`group p-6 rounded-2xl bg-secondary/30 border border-border/50 
                  hover:bg-secondary/50 hover:border-border transition-all duration-300
                  animate-fade-in opacity-0`}
                style={{ animationDelay: `${(index + 1) * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {award.title}
                      </h3>
                      <span className="text-sm text-muted-foreground/60">
                        {award.year}
                      </span>
                    </div>
                    
                    <p className="text-sm text-primary/80 mb-2">
                      {award.organization}
                    </p>
                    
                    <p className="text-muted-foreground">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;

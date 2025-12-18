interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const experiences: Experience[] = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'Tech Innovations Inc.',
    duration: '2022 – Present',
    description: 'Leading development of enterprise-scale applications, architecting microservices, and mentoring junior developers. Reduced deployment time by 60% through CI/CD optimization.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Digital Solutions Co.',
    duration: '2020 – 2022',
    description: 'Built and maintained multiple client-facing web applications using React and Node.js. Implemented real-time features serving 100k+ daily active users.',
  },
  {
    role: 'Frontend Developer',
    company: 'Creative Studio',
    duration: '2019 – 2020',
    description: 'Developed responsive web interfaces and interactive experiences. Collaborated closely with designers to deliver pixel-perfect implementations.',
  },
  {
    role: 'Junior Developer',
    company: 'StartUp Labs',
    duration: '2018 – 2019',
    description: 'Started my professional journey building features for a SaaS product. Gained foundational skills in modern web development practices.',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container flex flex-col justify-center">
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

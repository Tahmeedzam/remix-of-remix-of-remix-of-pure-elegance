const AboutSection = () => {
  return (
    <section id="about" className="section-container flex flex-col justify-center">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 animate-fade-in">
          About Me
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Profile Image */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden flex-shrink-0 animate-fade-in opacity-0 stagger-1">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Bio */}
          <div className="space-y-6 animate-fade-in opacity-0 stagger-2">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground">
              Hello, I'm a <span className="text-foreground font-medium">Full-Stack Developer</span> passionate about creating elegant digital experiences.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              With over 5 years of experience in web development, I specialize in building scalable applications that combine beautiful design with robust functionality. I believe in writing clean, maintainable code that stands the test of time.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="pt-4">
              <p className="text-sm text-muted-foreground/60">
                Based in San Francisco, CA • Available for remote work
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

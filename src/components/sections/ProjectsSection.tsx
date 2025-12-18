import { useNavigate } from 'react-router-dom';

interface Project {
  name: string;
  slug: string;
  description: string;
  tech: string[];
  image: string;
}

const projects: Project[] = [
  {
    name: 'E-Commerce Platform',
    slug: 'e-commerce-platform',
    description: 'A full-featured online store with real-time inventory management, payment processing, and analytics dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  },
  {
    name: 'Task Management App',
    slug: 'task-management-app',
    description: 'Collaborative project management tool with real-time updates, team workspaces, and automated workflows.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
  },
  {
    name: 'Analytics Dashboard',
    slug: 'analytics-dashboard',
    description: 'Data visualization platform processing millions of events daily with interactive charts and custom reports.',
    tech: ['React', 'D3.js', 'Python', 'AWS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    name: 'AI Content Generator',
    slug: 'ai-content-generator',
    description: 'Machine learning powered tool for generating marketing copy, blog posts, and social media content.',
    tech: ['Python', 'OpenAI', 'FastAPI', 'React'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
];

import { useScrollReveal } from '@/hooks/useScrollReveal';

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
      className={`section-container flex flex-col justify-center scroll-reveal ${isVisible ? 'visible' : ''}`}
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

import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

interface ProjectData {
  name: string;
  description: string;
  fullDescription: string;
  tech: string[];
  image: string;
  timeline: string;
  githubUrl?: string;
  liveUrl?: string;
  screenshots: string[];
}

const projectsData: Record<string, ProjectData> = {
  'e-commerce-platform': {
    name: 'E-Commerce Platform',
    description: 'A full-featured online store with real-time inventory management, payment processing, and analytics dashboard.',
    fullDescription: 'This comprehensive e-commerce solution was built from the ground up to handle high-traffic online stores. It features real-time inventory synchronization across multiple warehouses, seamless payment processing through Stripe with support for multiple currencies, and a powerful analytics dashboard that provides insights into sales trends, customer behavior, and inventory forecasting. The platform includes a fully responsive admin panel, automated email notifications, and integration with major shipping providers.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker', 'AWS'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
    timeline: 'Jan 2024 - Apr 2024',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    screenshots: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    ],
  },
  'task-management-app': {
    name: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team workspaces, and automated workflows.',
    fullDescription: 'A modern project management application designed for remote teams. Features include real-time collaborative editing, customizable Kanban boards, sprint planning tools, and automated workflow triggers. The app supports team workspaces with granular permission controls, time tracking, file attachments, and integrations with popular tools like Slack, GitHub, and Google Calendar. Built with performance in mind, it handles thousands of concurrent users with WebSocket-based real-time synchronization.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket', 'PostgreSQL', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-611224923853-80b023f02d71?w=1200&h=600&fit=crop',
    timeline: 'May 2024 - Aug 2024',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    screenshots: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop',
    ],
  },
  'analytics-dashboard': {
    name: 'Analytics Dashboard',
    description: 'Data visualization platform processing millions of events daily with interactive charts and custom reports.',
    fullDescription: 'An enterprise-grade analytics platform capable of processing and visualizing millions of data points in real-time. The dashboard features interactive charts built with D3.js, customizable report builders, automated data pipeline management, and alerting systems. Users can create custom dashboards, share insights with team members, and schedule automated report generation. The backend utilizes efficient data aggregation techniques and caching strategies to ensure sub-second query response times even on massive datasets.',
    tech: ['React', 'D3.js', 'Python', 'AWS', 'Apache Kafka', 'ClickHouse'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    timeline: 'Sep 2023 - Dec 2023',
    githubUrl: 'https://github.com',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop',
    ],
  },
  'ai-content-generator': {
    name: 'AI Content Generator',
    description: 'Machine learning powered tool for generating marketing copy, blog posts, and social media content.',
    fullDescription: 'An AI-powered content generation platform that helps marketing teams create engaging content at scale. The tool leverages OpenAI\'s GPT models to generate blog posts, social media content, email campaigns, and ad copy. Features include brand voice customization, content templates, A/B testing suggestions, SEO optimization recommendations, and a content calendar with scheduling capabilities. The platform includes analytics to track content performance and iteratively improve generation quality based on engagement metrics.',
    tech: ['Python', 'OpenAI', 'FastAPI', 'React', 'PostgreSQL', 'Celery'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    timeline: 'Oct 2024 - Present',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    screenshots: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1676299081847-c3c9e0e2e0f9?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1675557009875-436f7a5f2e4f?w=800&h=500&fit=crop',
    ],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <Link
        to="/"
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span>Back</span>
      </Link>

      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 -mt-32 relative z-10 pb-20">
        {/* Title & Timeline */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 animate-fade-in">
            {project.name}
          </h1>
          <p className="text-muted-foreground text-lg">{project.timeline}</p>
        </div>

        {/* Links */}
        <div className="flex gap-4 mb-12">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/50 
                         hover:bg-card transition-all duration-300 card-glow"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/50 
                         hover:bg-card transition-all duration-300 card-glow"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        {/* Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-display font-semibold mb-4">About the Project</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {project.fullDescription}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-display font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-border bg-card/50 
                           text-sm font-medium transition-all duration-300 hover:border-foreground/30"
                style={{ boxShadow: '0 0 8px hsl(210 100% 70% / 0.1)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        {project.screenshots.length > 0 && (
          <div>
            <h2 className="text-2xl font-display font-semibold mb-4">Screenshots</h2>
            <div className="overflow-x-auto pb-4 -mx-8 px-8">
              <div className="flex gap-4" style={{ width: 'max-content' }}>
                {project.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-80 md:w-96 rounded-lg overflow-hidden border border-border card-glow"
                  >
                    <img
                      src={screenshot}
                      alt={`${project.name} screenshot ${index + 1}`}
                      className="w-full h-48 md:h-56 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;

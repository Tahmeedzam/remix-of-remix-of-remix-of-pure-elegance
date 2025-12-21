import { useState } from 'react';
import { User, Briefcase, Code, FolderOpen, Mail, Trophy } from 'lucide-react';

interface NavItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'about', icon: User, label: 'About Me' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'skills', icon: Code, label: 'Skills' },
  { id: 'projects', icon: FolderOpen, label: 'Projects' },
  { id: 'awards', icon: Trophy, label: 'Awards' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

interface IconNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const IconNav = ({ activeSection, onSectionChange }: IconNavProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="fixed left-0 top-0 h-screen w-16 md:w-20 lg:w-[25%] flex flex-col items-center justify-center gap-8 z-50 bg-background">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        const isHovered = hoveredItem === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            className="relative flex items-center group"
            aria-label={item.label}
          >
            <div
              className={`
                p-3 rounded-lg transition-all duration-300
                ${isActive ? 'bg-secondary' : 'hover:bg-secondary/50'}
              `}
            >
              <Icon
                className={`
                  w-5 h-5 md:w-6 md:h-6 transition-all duration-300
                  ${isActive ? 'text-foreground' : 'text-muted-foreground'}
                  ${isHovered || isActive ? 'icon-glow' : 'glow-pulse'}
                `}
              />
            </div>

            {/* Hover label */}
            <div
              className={`
                absolute left-full ml-4 px-3 py-1.5 rounded-md bg-secondary
                whitespace-nowrap text-sm font-medium
                transition-all duration-300 origin-left
                ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'}
              `}
            >
              {item.label}
            </div>

            {/* Active indicator */}
            {isActive && (
              <div className="absolute left-0 w-0.5 h-8 bg-foreground rounded-full" />
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default IconNav;

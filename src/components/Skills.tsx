
import { Badge } from "@/components/ui/badge";
import { 
  Code, Server, Paintbrush, Database, 
  Search, LayoutGrid, GitBranch, Settings 
} from "lucide-react";

const SkillCard = ({ 
  title, 
  description, 
  icon: Icon, 
  skills 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  skills: string[] 
}) => {
  return (
    <div className="bg-white dark:bg-navy-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-heading font-semibold text-navy-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <Badge key={skill} variant="secondary" className="font-normal dark:bg-navy-800 dark:text-gray-300">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive, accessible web interfaces with modern frameworks",
      icon: Code,
      skills: ["React", "JavaScript", "TypeScript", "Next.js", "SASS", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications and APIs",
      icon: Server,
      skills: ["Node.js", "Express", "Python", "RESTful APIs", ".Net", "GraphQL"]
    },
    {
      title: "Database Management",
      description: "Working with various database systems for optimal data storage",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"]
    },
    {
      title: "SEO Optimization",
      description: "Improving website visibility and search engine rankings",
      icon: Search,
      skills: ["On-page SEO", "Performance Optimization", "Analytics", "Metadata", "Accessibility"]
    },
    {
      title: "Web Performance",
      description: "Optimizing websites for speed and efficiency",
      icon: LayoutGrid,
      skills: ["Lazy Loading", "Code Splitting", "Caching", "CDN Integration", "Core Web Vitals"]
    },
    {
      title: "Version Control",
      description: "Managing code changes and collaborating with teams",
      icon: GitBranch,
      skills: ["Git", "GitHub", "GitLab", "Collaborative Workflows", "CI/CD"]
    },
    {
      title: "DevOps",
      description: "Streamlining development operations and deployment processes",
      icon: Settings,
      skills: ["Docker", "AWS", "Vercel", "Netlify", "Continuous Integration"]
    }
  ];

  return (
    <section id="skills" className="py-24 mx-auto bg-gray-50 dark:bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and skills I've acquired throughout my journey as a developer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              description={category.description}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

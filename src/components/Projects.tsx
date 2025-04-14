
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="group bg-white dark:bg-navy-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden h-64">
        <div className="absolute inset-0 bg-gray-200 dark:bg-navy-700 flex items-center justify-center text-gray-400 dark:text-gray-500 text-4xl">
          {/* This would be replaced with an actual project image */}
          🖥️
        </div>
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            <Button asChild size="sm" variant="secondary" className="rounded-full">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
              </a>
            </Button>
            <Button asChild size="sm" variant="secondary" className="rounded-full">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" /> Code
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-navy-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs font-medium bg-secondary text-navy-700 dark:bg-navy-700 dark:text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart, checkout, and payment integration",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing tasks, projects, and team collaboration",
      image: "/placeholder.svg",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "A custom portfolio website template for creative professionals",
      image: "/placeholder.svg",
      tags: ["React", "Framer Motion", "Sass", "Responsive Design"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application showing forecasts, historical data and interactive maps",
      image: "/placeholder.svg",
      tags: ["JavaScript", "Chart.js", "OpenWeather API", "Leaflet"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Recipe Finder",
      description: "Search and discover recipes based on ingredients, dietary preferences, and cuisine types",
      image: "/placeholder.svg",
      tags: ["React", "Redux", "Spoonacular API", "Styled Components"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Fitness Tracker",
      description: "An application to track workouts, progress, and health metrics",
      image: "/placeholder.svg",
      tags: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Take a look at some of the projects I've worked on
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import {Code, Server, Paintbrush, Database, Search, LayoutGrid, GitBranch, Settings} from "lucide-react";

export const skillCategories = [
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

export const projects = [
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
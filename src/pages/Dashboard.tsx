import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/Modal"; // Adjust the path based on where Modal.tsx is located

interface SkillCategory {
  id: number;
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
}

const Dashboard: React.FC = () => {
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  const [showSkillModal, setShowSkillModal] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);

  const [newSkillCategory, setNewSkillCategory] = useState({
    title: "",
    description: "",
    icon: "",
    skills: ""
  });

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
    demoLink: "",
    githubLink: ""
  });

  const addSkillCategory = () => {
    const skillsArray = newSkillCategory.skills
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    setSkillCategories([
      ...skillCategories,
      { id: Date.now(), ...newSkillCategory, skills: skillsArray }
    ]);
    setNewSkillCategory({ title: "", description: "", icon: "", skills: "" });
  };

  const addProject = () => {
    const tagsArray = newProject.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    setProjects([
      ...projects,
      { id: Date.now(), ...newProject, tags: tagsArray }
    ]);
    setNewProject({
      title: "",
      description: "",
      image: "",
      tags: "",
      demoLink: "",
      githubLink: ""
    });
  };

  const removeSkillCategory = (id: number) => {
    setSkillCategories(skillCategories.filter((cat) => cat.id !== id));
  };

  const removeProject = (id: number) => {
    setProjects(projects.filter((proj) => proj.id !== id));
  };

  return (
    <div className="h-full max-w-5xl mx-auto p-6 space-y-12">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      {/* Skill Categories Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Skill Categories</h2>
          <Button onClick={() => setShowSkillModal(true)}>Add Skill Category</Button>
        </div>

        <ul className="space-y-3">
          {skillCategories.map((cat) => (
            <li key={cat.id} className="bg-gray-100 dark:bg-navy-700 p-4 rounded">
              <h3 className="font-semibold">{cat.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{cat.description}</p>
              <div className="text-sm mt-1">Skills: {cat.skills.join(", ")}</div>
              <button
                onClick={() => removeSkillCategory(cat.id)}
                className="text-red-500 text-sm hover:underline mt-1"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <Button onClick={() => setShowProjectModal(true)}>Add Project</Button>
        </div>

        <ul className="space-y-3">
          {projects.map((proj) => (
            <li key={proj.id} className="bg-gray-100 dark:bg-navy-700 p-4 rounded">
              <h3 className="font-semibold">{proj.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{proj.description}</p>
              <div className="text-sm">Tags: {proj.tags.join(", ")}</div>
              <div className="text-sm">
                Demo:{" "}
                <a
                  className="text-blue-500"
                  href={proj.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {proj.demoLink}
                </a>
              </div>
              <div className="text-sm">
                Code:{" "}
                <a
                  className="text-blue-500"
                  href={proj.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {proj.githubLink}
                </a>
              </div>
              <button
                onClick={() => removeProject(proj.id)}
                className="text-red-500 text-sm hover:underline mt-1"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Skill Modal */}
      <Modal
        isOpen={showSkillModal}
        onClose={() => setShowSkillModal(false)}
        title="Add New Skill Category"
      >
        <div className="grid gap-4">
          <Input
            placeholder="Title"
            value={newSkillCategory.title}
            onChange={(e) =>
              setNewSkillCategory({ ...newSkillCategory, title: e.target.value })
            }
          />
          <Input
            placeholder="Description"
            value={newSkillCategory.description}
            onChange={(e) =>
              setNewSkillCategory({ ...newSkillCategory, description: e.target.value })
            }
          />
          <Input
            placeholder="Icon"
            value={newSkillCategory.icon}
            onChange={(e) =>
              setNewSkillCategory({ ...newSkillCategory, icon: e.target.value })
            }
          />
          <Input
            placeholder="Skills (comma-separated)"
            value={newSkillCategory.skills}
            onChange={(e) =>
              setNewSkillCategory({ ...newSkillCategory, skills: e.target.value })
            }
          />
          <Button
            onClick={() => {
              addSkillCategory();
              setShowSkillModal(false);
            }}
          >
            Save Skill Category
          </Button>
        </div>
      </Modal>

      {/* Project Modal */}
      <Modal
        isOpen={showProjectModal}
        onClose={() => setShowProjectModal(false)}
        title="Add New Project"
      >
        <div className="grid gap-4">
          <Input
            placeholder="Title"
            value={newProject.title}
            onChange={(e) =>
              setNewProject({ ...newProject, title: e.target.value })
            }
          />
          <Input
            placeholder="Description"
            value={newProject.description}
            onChange={(e) =>
              setNewProject({ ...newProject, description: e.target.value })
            }
          />
          <Input
            placeholder="Image URL"
            value={newProject.image}
            onChange={(e) =>
              setNewProject({ ...newProject, image: e.target.value })
            }
          />
          <Input
            placeholder="Tags (comma-separated)"
            value={newProject.tags}
            onChange={(e) =>
              setNewProject({ ...newProject, tags: e.target.value })
            }
          />
          <Input
            placeholder="Demo Link"
            value={newProject.demoLink}
            onChange={(e) =>
              setNewProject({ ...newProject, demoLink: e.target.value })
            }
          />
          <Input
            placeholder="GitHub Link"
            value={newProject.githubLink}
            onChange={(e) =>
              setNewProject({ ...newProject, githubLink: e.target.value })
            }
          />
          <Button
            onClick={() => {
              addProject();
              setShowProjectModal(false);
            }}
          >
            Save Project
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;

import React, { useState } from "react";
import { Github, ExternalLink, ChevronRight } from "lucide-react";
import { projectsData, type Project } from "../data/projects";
import { motion } from "framer-motion";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full Stack":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "Backend":
        return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "Library":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-500";
    }
  };

  return (
    <div className="group bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative overflow-hidden aspect-video bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="450"%3E%3Crect fill="%231e293b" width="800" height="450"/%3E%3Ctext fill="%2322d3ee" font-family="Arial" font-size="32" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E${project.title}%3C/text%3E%3C/svg%3E`;
          }}
        />
        <div
          className={`absolute top-4 left-4 px-4 py-1.5 ${getTypeColor(
            project.type
          )} text-white text-sm font-semibold rounded-full shadow-lg`}
        >
          {project.type}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights Section */}
        {project.highlights && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-cyan-400 mb-2">
              Key Features:
            </h4>
            <ul className="space-y-1.5">
              {project.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="text-sm text-slate-300 flex items-start gap-2"
                >
                  <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto pt-4">
          {/* Tech Stack Section */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 7).map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-md text-xs font-medium border border-slate-600/50"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 7 && (
                <span className="px-3 py-1 text-cyan-400 text-xs font-medium">
                  +{project.techStack.length - 7} more
                </span>
              )}
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-700">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>{project.links.githubFE ? "Backend" : "Source"}</span>
              </a>
            )}
            {project.links.githubFE && (
              <a
                href={project.links.githubFE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Frontend</span>
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-lg text-sm font-medium transition-colors border border-cyan-500/30 hover:border-cyan-500/50"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<
    "All" | "Backend" | "Full Stack" | "Library"
  >("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.type === filter);

  const filterButtons = ["All", "Backend", "Full Stack", "Library"] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-slate-900"
    >
      <motion.div
        className="max-w-7xl mx-auto w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Work &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            A collection of projects showcasing my skills. Use the filters to
            navigate through the different categories.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 flex-wrap justify-center mb-12">
          {filterButtons.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                filter === type
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Animated Project Grid */}
        <motion.div
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="flex"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Message for when no projects match the filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center col-span-full py-16">
            <p className="text-slate-400 text-xl">
              No projects found for this category.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 mb-4">
            Interested in seeing more of my code?
          </p>
          <a
            href="https://github.com/Ablebil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700/80 hover:bg-slate-700 rounded-lg font-semibold transition-colors text-white"
          >
            <Github className="w-5 h-5" />
            <span>Visit My GitHub</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

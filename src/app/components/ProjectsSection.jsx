"use client";
import React, {useState} from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";
const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "This is my portfolio app that I've created for you to know me better! :)",
    image: "/images/projects/portofolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DumitriuAndreii/portfolio-website",
    previewUrl: "https://portfolio-website-dumitriu-andrei-dumitriu-andreis-projects.vercel.app/",
  },
  {
    id: 2,
    title: "NextJS-Dashboard",
    description: "This is a project that I've created to learn more about nextJS",
    image: "/images/projects/dashboard.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DumitriuAndreii/nextjs-dashboard",
    previewUrl: "https://nextjs-dashboard-dumitriu-andreis-projects.vercel.app/",
  },
  {
    id: 3,
    title: "Tic-Tac-Toe",
    description: "Tic-Tac-Toe game that helped me learn more about states and lifting states up when needed",
    image: "/images/projects/tictactoe.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DumitriuAndreii/tic-tac-toe",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Investment Calculator",
    description: "Single-Page app for calculating investments over the years",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/DumitriuAndreii/investment-calculator",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Final CountDown ",
    description: "Test your counting-down skills",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DumitriuAndreii/final-countdown",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

export const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            gitURL={project.gitUrl}
            previewURL={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

import { ArrowRight } from "lucide-react";
import SwiftNewsImage from "../assets/Swiftnews.png";
import SnapNewsImage from "../assets/snapnews.png";
import TextUtilsImage from "../assets/Textutils.png";
import DESImage from "../assets/DES.png";
import PariAgencyImage from "../assets/Pariagency.png";

const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      title: "Swift News",
      description: "A modern React-based news app with live data and category filtering.",
      techStack: ["React", "Tailwind CSS", "GNews API"],
      url: "https://swiftnews.netlify.app/",
      image: SwiftNewsImage,
      goals:
        "Swift News was developed to deliver real-time news updates with a clean UI. The goal was to build a responsive, accessible site using modern frontend tools like React, Tailwind CSS, and APIs.",
    },
    {
      id: 2,
      title: "Snap News",
      description: "A Bootstrap-based news website featuring real-time API data and category-wise sorting.",
      techStack: ["React", "Bootstrap", "GNews API"],
      url: "https://snapnews-bootstrap.netlify.app/",
      image: SnapNewsImage,
      goals:
        "Snap News was my first full React project, focused on handling API calls, state management and building category filters with Bootstrap.",
    },
    {
      id: 3,
      title: "TextUtils",
      description: "A simple React-based text editor with light/dark mode and text manipulation tools.",
      techStack: ["React", "Bootstrap"],
      url: "https://textutils-fast.netlify.app/",
      image: TextUtilsImage,
      goals:
        "TextUtils was built to explore text-based transformations like uppercase, lowercase, clear, copy, and count analysis.",
    },
    {
      id: 4,
      title: "DES Algorithm Visualizer",
      description: "A pure HTML/CSS/JS project that visually explains the DES encryption algorithm.",
      techStack: ["HTML", "CSS", "JavaScript"],
      url: "https://coretech7704.github.io/DES-Algorithm/",
      image: DESImage,
      goals:
        "The goal of this project was to understand the Data Encryption Standard and build a working simulation of the key expansion, permutation, and encryption process.",
    },
    {
      id: 5,
      title: "Pari Travel Agency",
      description: "A basic responsive business website made for a real travel agency client.",
      techStack: ["HTML", "CSS", "JavaScript"],
      url: "#",
      image: PariAgencyImage,
      goals:
        "The project was developed for a local travel agency with a custom design and layout. It improved my layout, form handling, and responsive web design skills.",
    },
  ];

  return (
    <>
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Projects</h2>
        <div className="h-1 w-30 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mt-2 mx-auto" />
      </div>

      {/* Project List */}
      <div className="flex flex-col gap-10 px-4 lg:px-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow-2xl transition hover:-translate-y-2 hover:shadow-purple-700/30"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left */}
              <div className="w-full lg:w-1/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-4xl font-bold text-purple-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-zinc-800 text-l text-white border border-purple-600 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-34 px-3 py-2 inline-flex items-center gap-1 text-white bg-purple-600 hover:bg-purple-700 rounded-md font-semibold transition"
                >
                  Check it out <ArrowRight size={18} />
                </a>
              </div>

              {/* Right - Image & Overlay */}
              <div className="relative w-full h-100 lg:w-2/3 group">
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="w-full h-full object-cover transition duration-500 group-hover:blur-sm"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-center">
                  <h4 className="text-xl font-semibold text-purple-300 mb-2">Description & Goals</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.goals}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectCard;

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
      techStack: ["React", "Tailwind CSS", "HTML", "JavaScript", "GNews API"],
      url: "https://swiftnews.netlify.app/",
      image: SwiftNewsImage,
      goals:
        "A dynamic and responsive news application built with React and Tailwind CSS. It fetches real-time headlines from GNews API and allows users to filter news by category with smooth transitions and a clean dark UI.",
    },
    {
      id: 2,
      title: "Snap News",
      description: "A Bootstrap-based news website featuring real-time API data and category-wise sorting.",
      techStack: ["React", "Bootstrap", "HTML", "JavaScript", "GNews API"],
      url: "https://snapnews-bootstrap.netlify.app/",
      image: SnapNewsImage,
      goals:
        "A lightweight news platform developed using React and Bootstrap. It integrates GNews API to fetch real-time news updates and features category-based filtering, laying the foundation for understanding API handling and responsive design.",
    },
    {
      id: 3,
      title: "TextUtils",
      description: "A simple React-based text editor with light/dark mode and text manipulation tools.",
      techStack: ["React", "HTML", "JavaScript", "Tailwind CSS"],
      url: "https://github.com/CoreTech7704/TextUtils",
      image: TextUtilsImage,
      goals:
        "A powerful text utility tool built with React for performing transformations like case conversion, word/character count, and copy/clear functions. Includes a toggleable light/dark mode and responsive design using Tailwind CSS.",
    },
    {
      id: 4,
      title: "DES Algorithm Visualizer",
      description: "A pure C language project that explains the DES encryption algorithm.",
      techStack: ["C"],
      url: "https://github.com/CoreTech7704/DES_Algorithem",
      image: DESImage,
      goals:
        "A C-based simulation of the Data Encryption Standard (DES) algorithm, showcasing key scheduling, permutation tables, and block-level encryption steps ideal for understanding low-level cryptographic logic and bitwise operations.",
    },
    {
      id: 5,
      title: "Pari Travel Agency",
      description: "A basic responsive business website made for a real travel agency client.",
      techStack: ["HTML", "CSS", "JavaScript"],
      url: "https://github.com/CoreTech7704/Pari-Agency",
      image: PariAgencyImage,
      goals:
        "A fully responsive static website created for a real-world travel agency client. Features a custom UI, multi-section layout, and working contact form developed using only HTML, CSS, and vanilla JavaScript.",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-5 not-last:scroll-mt-28">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Projects</h2>
        <div className="h-1 w-30 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mt-2 mx-auto" />
      </div>

      {/* Project List */}
      <div className="max-w-7xl mx-auto flex flex-col gap-10 px-4 lg:px-20">
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
                  className="mt-auto w-34 px-3 py-2 inline-flex items-center gap-1 text-white bg-purple-600 hover:bg-purple-700 rounded-md font-semibold transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg"
                >
                  Check it out <ArrowRight size={18} />
                </a>
              </div>

              {/* Right - Image & Overlay */}
              <div className="relative w-full lg:w-2/3 group">
                {/* Image */}
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="w-full h-auto lg:h-110 object-cover transition duration-500 lg:group-hover:blur-sm"
                />

                {/* Hover Description - only for desktop */}
                <div className="hidden lg:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex-col justify-center">
                  <h4 className="text-3xl font-semibold text-purple-300 mb-2">
                    Description & Goals
                  </h4>
                  <p className="text-gray-300 text-lg leading-relaxed">{project.goals}</p>
                </div>

                {/* Static Description - only for mobile */}
                <div className="block lg:hidden bg-zinc-800 p-4">
                  <h4 className="text-xl font-semibold text-purple-400 mb-2">
                    Description & Goals
                  </h4>
                  <p className="text-gray-300 text-base leading-relaxed">{project.goals}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;

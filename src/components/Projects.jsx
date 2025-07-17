import { ArrowRight } from "lucide-react";
import SwiftNewsImage from "../assets/Swiftnews.png";

const ProjectCard = () => {
  return (
    <>
    {/* Section Title with underline */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Projects</h2>
        <div className="h-1 w-30 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mt-2 mx-auto" />
      </div>

    {/* Main content */}
    <div className="mx-10 bg-zinc-900 rounded-xl overflow-hidden shadow-2xl transform transition duration-300 hover:-translate-y-2 hover:shadow-purple-700/30">
      {/* Text content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-4xl font-bold text-purple-400 mb-1">Swift News</h3>

        {/* One-liner */}
        <p className="text-gray-300 mb-3">
          A modern React-based news app with live data and category filtering.
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {["React", "Tailwind CSS", "GNews API"].map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-zinc-800 text-m text-white border border-purple-600 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Check it out button */}
        <a
          href="https://swiftnews.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className=" px-3 py-2  inline-flex items-center gap-1 text-white bg-purple-600 hover:bg-purple-700 rounded-md font-semibold transition "
        >
          Check it out <ArrowRight size={18} />
        </a>
      </div>

      {/* Project Image */}
      <img src={SwiftNewsImage} alt="Swift News Screenshot" className="w-full object-cover" />

      {/* Description and goals */}
      <div className="p-6 ">
        <h4 className="text-xl font-semibold text-purple-300 mb-2">Description & Goals</h4>
        <p className="text-gray-400 leading-relaxed text-sm">
          Swift News was developed to deliver real-time news updates with a clean UI. The goal was
          to build a responsive, accessible site using modern frontend tools like React, Tailwind
          CSS, and APIs. It helped improve my API integration and state management skills.
        </p>
      </div>
    </div>
    </>
  );
};

export default ProjectCard;

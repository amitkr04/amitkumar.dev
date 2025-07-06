import React from "react";
import projectList from "../utils/projectList";
import { FiExternalLink } from "react-icons/fi";
const Projects = () => {
  return (
    <>
      <div
        id="project"
        className="relative container mx-auto lg:px-6 px-3 lg:py-5 py-2 text-center"
      >
        <div className="lg:px-6 px-3 py-6 mx-auto backdrop-blur-xl bg-slate-500 rounded-md  border border-slate-600/30 shadow-2xl">
          <h1 className="font-bold text-slate-100 cursive-text lg:text-5xl text-2xl border-b-1 border-b-gray-100 inline-block lg:mb-5 mb-2">
            Projects
          </h1>
          {/* Project Cards Grid */}
          <div className="grid lg:gap-8 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectList.map((project) => (
              <div
                key={project._id}
                className="bg-slate-800/30 border border-slate-600/30 rounded-2xl shadow-lg p-4 hover:scale-[1.02] transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />

                <div className="text-left">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white">
                      {project.title}
                    </h2>
                    <FiExternalLink className="text-white cursor-pointer" />
                  </div>

                  <p className="text-gray-300 text-sm mt-2">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((techItem, index) => (
                      <span
                        key={index}
                        className="bg-slate-600 text-white px-3 py-1 rounded-full text-xs"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

import React from "react";
import { SkillList } from "../utils/skillList";

const Skills = () => {
  return (
    <>
      <div
        id="skill"
        className="relative container mx-auto lg:px-6 px-3 lg:py-5 py-2 text-center"
      >
        <div className="lg:px-6 px-3 py-6 mx-auto backdrop-blur-xl bg-slate-500 rounded-md  border border-slate-600/30 shadow-2xl">
          <h1 className="font-bold text-slate-100 cursive-text lg:text-5xl text-2xl border-b-1 border-b-gray-100 inline-block lg:mb-5 mb-3">
            Technical Skills
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-3">
            {SkillList.map((tech) => (
              <div
                key={tech._id}
                className="flex items-center gap-3 justify-center px-3 py-5 border rounded-xl text-slate-300 border-slate-600/50 bg-slate-600 hover:bg-slate-700   hover:shadow-md   cursor-pointer"
              >
                <tech.icon className="lg:text-2xl text-xl" />
                <span className="lg:font-medium lg:text-xl text-base">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

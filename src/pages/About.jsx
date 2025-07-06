import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="relative container mx-auto lg:px-6 px-3 lg:py-5 py-2 text-center"
      >
        <div className="lg:px-6 px-3 py-6 mx-auto backdrop-blur-xl bg-slate-500 rounded-md  p border border-slate-600/30 shadow-2xl">
          <h1 className="font-bold text-slate-100 cursive-text lg:text-5xl text-2xl border-b-1 border-b-gray-100 inline-block lg:mb-5 mb-1  ">
            About Me
          </h1>
          <p className="lg:text-xl text-base text-slate-300 mb-4   leading-relaxed text-justify">
            I recently completed my B.Tech in Information Technology from Narula
            Institute of Technology, Kolkata, where I developed a strong
            foundation in software development and modern web technologies.
          </p>
          <p className="lg:text-xl text-base text-slate-300 mb-4   leading-relaxed text-justify">
            My professional journey began with hands-on experience as a MERN
            Stack Developer at Webstack Academy, where I was involved in
            building dynamic and responsive full-stack applications. This
            experience taught me the importance of creating scalable,
            user-centric solutions.
          </p>
          <p className="lg:text-xl text-base text-slate-300 mb-4   leading-relaxed text-justify">
            Currently, I'm working as a Frontend Developer at Walsis India Pvt.
            Ltd., where I focus on creating modern, user-friendly web interfaces
            using cutting-edge technologies like React.js, Tailwind CSS, and
            more. I'm always eager to learn new tools, solve real-world
            problems, and contribute to impactful digital products.
          </p>

          <div>
            <p>
              <FaQuoteLeft className="lg:w-6 w-4 lg:h-6 h-4 mx-auto mb-3 opacity-70 text-white" />
            </p>
            <p className="lg:text-base text-sm text-white font-medium mb-2">
              "Always eager to learn new tools, solve real-world problems, and
              contribute to impactful digital products."
            </p>
            <p className="text-emerald-100 lg:text-sm text-xs">
              — My Development Philosophy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

import React from "react";
import Typewriter from "typewriter-effect";
import { CiMail } from "react-icons/ci";
import image from "../assets/profile-amit.jpg";
import { MdOutlineFileDownload } from "react-icons/md";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });

        // Clear scroll state from history
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

  return (
    <>
      <div
        id="home"
        className="relative lg:px-12 px-3 lg:py-8 py-2 flex flex-col-reverse lg:flex-row items-center justify-between text-white"
      >
        {/* left */}
        <div className="space-y-6">
          <div className="space-y-6 mb-8">
            <h1 className="lg:text-5xl text-4xl font-poppins">Hi 👋 i'm a </h1>
            <h1 className="lg:text-5xl text-3xl text-pink-500">
              <Typewriter
                options={{
                  strings: ["Software Engineer!", "MERN Stack Developer!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            {/* WhatsApp Hire Me Button */}
            <a
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 lg:px-6 px-10 py-3 text-lg "
              href="https://api.whatsapp.com/send?phone=916206116484"
              target="_blank"
              rel="noreferrer"
            >
              <CiMail className="text-2xl" />
              Hire Me
            </a>

            {/* Resume Download Button */}
            <a
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 px-6  py-3 text-lg"
              href="/Amit_Kumar.pdf"
              download="Amit_Kumar_Resume.pdf"
            >
              <MdOutlineFileDownload className="text-2xl" />
              My Resume
            </a>
          </div>
        </div>

        {/* right */}
        <div className={`flex justify-center lg:justify-end mb-5 lg:mb-0`}>
          <div className=" relative">
            {/* Decorative gradient glow & bouncing circles */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-purple-500/20 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-pink-500/20 rounded-full animate-bounce delay-2000"></div>

            <div className="relative w-70 h-70 lg:w-96 lg:h-96">
              <img
                src={image}
                alt="Amit Kumar"
                className="rounded-full object-cover border-4 border-white/10 shadow-2xl w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

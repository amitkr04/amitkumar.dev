import React from "react";
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="relative w-full border-t bg-slate-500 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="lg:px-6 px-3 py-3 mx-auto backdrop-blur-xl bg-slate-500 rounded-3xl border border-slate-600/30 shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-6 gap-3">
          {/* Copyright and made with line */}
          <div className="text-center lg:text-left">
            <p className="text-white text-sm sm:text-base">
              © 2025 Amit Kumar. All rights reserved.
            </p>
            <p className="text-gray-200 text-sm mt-1 flex items-center justify-center lg:justify-start gap-1">
              Made with{" "}
              <FaHeart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              and lots of coffee
            </p>
          </div>

          {/* Links row */}
          <nav className="flex flex-col sm:flex-row items-center gap-1 sm:gap-8">
            <a
              href="/privacy"
              className=" text-white text-sm sm:text-base transition-colors duration-200 hover:underline underline-offset-4"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className=" text-white text-sm sm:text-base transition-colors duration-200 hover:underline underline-offset-4"
            >
              Terms of Service
            </a>
            <a
              href="/services"
              className="text-white  text-sm sm:text-base transition-colors duration-200 hover:underline underline-offset-4"
            >
              Services
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;

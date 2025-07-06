import React from "react";

const Footer = () => {
  return (
    <div className="relative w-full border-t bg-slate-500 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="lg:px-6 px-3 py-6 mx-auto backdrop-blur-xl bg-slate-500 rounded-3xl border border-slate-600/30 shadow-2xl">
        <div className="flex items-center justify-between">
          {/* Copyright and made with line */}
          <div className="text-base text-white">
            © 2025 Amit Kumar. Made with{" "}
            <span className="text-orange-500">❤️</span> and lots of coffee
          </div>

          {/* Links row */}
          <div className="flex flex-wrap justify-center space-x-6 text-base">
            <a href="/privacy" className=" text-white cursor-pointer">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white cursor-pointer">
              Terms of Service
            </a>
            <a href="/sitemap" className="text-white cursor-pointer">
              Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

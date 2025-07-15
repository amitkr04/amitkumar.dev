import React from "react";
import { CiFilter } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Blog = () => {
  return (
    <>
      <div className="relative container mx-auto lg:px-2 px-3 py-5 text-center">
        <div className="lg:px-6  px-3 py-6 mx-auto backdrop-blur-xl bg-slate-500 rounded-md  p border border-slate-600/30 shadow-2xl">
          <h1 className="font-bold text-slate-100 cursive-text lg:text-5xl text-3xl border-b-1 border-b-gray-100 inline-block mb-5">
            My Blog
          </h1>
          <p className="lg:text-xl text-base text-gray-200   mx-auto leading-relaxed mb-5">
            Sharing insights about web development, design, and technology
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CiSearch className="text-gray-900 z-1 w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="block w-full pl-10 py-2 border-1 border-gray-900 rounded-md bg-white/70 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <CiFilter className="w-4 h-4 text-muted-foreground" />
              {/* <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-xs"
                  >
                    {category}
                  </Button>
                ))}
              </div> */}
              <span>Amit</span>
              <span>Amit</span>
              <span>Amit</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

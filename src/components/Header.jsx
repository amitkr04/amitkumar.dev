import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Moon, Sun } from "lucide-react";

const navigation = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Education", href: "education" },
  { name: "Skills", href: "skill" },
  { name: "Projects", href: "project" },
  { name: "Experience", href: "experience" },
  { name: "Services", href: "/services" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact", href: "contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigate = useNavigate();

  const handleNavigation = (sectionId) => {
    navigate("/", { state: { scrollTo: sectionId } });
    setIsOpen(false);
  };
  // const smoothScroll = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  //   setIsOpen(false);
  // };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-slate-500 backdrop-blur supports-[backdrop-filter]:bg-background/60 poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 ">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg transition-transform hover:scale-105 bg-black text-white">
              AK
            </div>
            <span className="hidden sm:block font-semibold text-lg text-white">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent rounded-md text-white"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent rounded-md text-white cursor-pointer"
                >
                  {item.name}
                </button>
              )
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="h-9 w-9 flex items-center justify-center rounded-md hover:bg-accent text-white cursor-pointer"
            >
              {isDarkMode ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="relative flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="h-9 w-9 flex items-center justify-center rounded-md  text-white"
            >
              {isDarkMode ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </button>

            {/* Mobile Menu */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="h-9 w-9 flex items-center justify-center rounded-md text-white "
              >
                <Menu className="h-6 w-6" />
              </button>

              {/* Mobile Menu Content */}
              {isOpen && (
                <div className="fixed inset-0 z-100 lg:hidden">
                  <div
                    className="fixed inset-0"
                    onClick={() => setIsOpen(false)}
                  ></div>
                  <div className="fixed inset-y-0 right-0 w-[300px] sm:w-[400px] bg-slate-600 border-l">
                    <div className="flex flex-col space-y-4 mt-10 p-4 bg-slate-600">
                      <div className="flex items-center space-x-2 pb-4 border-b-2 border-b-white">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500   font-bold text-lg text-white">
                          AK
                        </div>
                        <span className="font-semibold text-lg text-white">
                          Portfolio
                        </span>
                      </div>
                      <nav className="flex flex-col space-y-2">
                        {navigation.map((item) =>
                          item.href.startsWith("/") ? (
                            <Link
                              key={item.name}
                              to={item.href}
                              onClick={() => setIsOpen(false)}
                              className="px-3 py-3 text-base font-medium     rounded-md text-white"
                            >
                              {item.name}
                            </Link>
                          ) : (
                            <button
                              key={item.name}
                              onClick={() => {
                                handleNavigation(item.href);
                                setIsOpen(false);
                              }}
                              // onClick={() => {
                              //   smoothScroll(item.href);
                              //   setIsOpen(false);
                              // }}
                              className="px-3 py-3 text-base font-medium  rounded-md text-left text-white"
                            >
                              {item.name}
                            </button>
                          )
                        )}
                      </nav>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

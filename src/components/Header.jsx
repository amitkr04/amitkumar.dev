import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Moon, Sun } from "lucide-react";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";

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
  const [isOpen, setIsOpen] = useState(false); // Track whether the mobile menu is open
  const [isDarkMode, setIsDarkMode] = useState(false); // Track whether dark mode is on
  const modalRef = useRef(null); // Ref for detecting clicks outside the mobile menu
  const navigate = useNavigate(); // React Router's navigate hook

  // Toggle dark mode (state only — doesn't affect actual theme here)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Handle section navigation (for anchor sections like 'home', 'about')
  const handleNavigation = (sectionId) => {
    navigate("/", { state: { scrollTo: sectionId } }); // Scrolls on homepage
    setIsOpen(false); // Closes mobile menu
  };

  // Close the menu if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false); // Close menu if click outside
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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
            <div className="relative flex lg:hidden items-center  ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="h-9 w-9 flex items-center justify-center rounded-md text-white "
              >
                {isOpen ? (
                  <RxCross2 className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>

              {/* Mobile Menu Content */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="fixed inset-0 z-[100] lg:hidden"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Slide-in Mobile Menu */}
                    <motion.div
                      ref={modalRef}
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{ type: "tween", duration: 0.3 }}
                      className="fixed inset-y-0 right-0 flex flex-col space-y-4 mt-16 bg-red-600 w-[265px]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="bg-slate-600 p-8 rounded-md">
                        <div className="flex items-center space-x-2 pb-4 border-b-2 border-b-white">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 font-bold text-lg text-white">
                            AK
                          </div>
                          <span className="font-semibold text-lg text-white">
                            Amit Kumar
                          </span>
                        </div>
                        <nav className="flex flex-col space-y-2">
                          {navigation.map((item) =>
                            item.href.startsWith("/") ? (
                              <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setIsOpen(false)}
                                className="px-3 py-3 text-base font-medium rounded-md text-white"
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
                                className="px-3 py-3 text-base font-medium rounded-md text-left text-white"
                              >
                                {item.name}
                              </button>
                            )
                          )}
                        </nav>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

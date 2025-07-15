import { lazy } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import WorkExp from "./pages/WorkExp";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import Service from "./pages/Service";
import Blog from "./pages/Blog";
import Register from "./blog pages/Register";
import Login from "./blog pages/Login";
import ForgotPassword from "./blog pages/ForgotPassword";

// Home Page with multiple sections
const HomePage = () => (
  <>
    <Home />
    <About />
    <Education />
    <Skills />
    <Projects />
    <WorkExp />
    <Contact />
    <Footer />
  </>
);

// Route Definitions
export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/services",
    element: <Service />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
];

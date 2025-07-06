import "./App.css";
import AnimatedBackground from "./components/AnimatedBackground";

import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import WorkExp from "./pages/WorkExp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <>
      <Router>
        <AnimatedBackground />
        <Header />
        <ScrollToTopButton />
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />

          <Route path="/services" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

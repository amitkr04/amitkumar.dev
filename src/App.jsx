import "./App.css";
import AnimatedBackground from "./components/AnimatedBackground";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import ScrollToTopButton from "./components/ScrollToTopButton";
import { routes } from "./routes";

function AppRoutes() {
  const routing = useRoutes(routes);
  return routing;
}

function App() {
  return (
    <>
      <Router>
        <AnimatedBackground />
        <Header />
        <ScrollToTopButton />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;

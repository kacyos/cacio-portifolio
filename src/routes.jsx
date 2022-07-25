import { Routes as Router, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact/index";
import About from "./Pages/About/index";
import Skills from "./Pages/Skills/index";
import Projects from "./Pages/Projects/index";
import { AnimatePresence } from "framer-motion";

function Routes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Router location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="contato" element={<Contact />} />
        <Route path="sobre" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projetos" element={<Projects />} />
      </Router>
    </AnimatePresence>
  );
}

export default Routes;

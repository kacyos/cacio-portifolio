import { motion } from "framer-motion";
import AnimatedLetters from "./../../components/AnimatedLetters/index";
import useAnimatedLetters from "../../hooks/useAnimatedLetters";
import "./styles.scss";

const Projects = () => {
  const letterClass = useAnimatedLetters();

  return (
    <motion.div
      animate={{ animation: "zoomInDown 1s linear both" }}
      exit={{ display: "none" }}
      className="projects"
    >
      <h1>
        <AnimatedLetters
          className={letterClass}
          index={15}
          animatedText="Projetos"
        />
      </h1>

      <div className="projects__container">
        <img src="/assets/images/caution.gif" alt="desenho de um homem" />{" "}
        <p>Página em construção...</p>
      </div>
    </motion.div>
  );
};

export default Projects;

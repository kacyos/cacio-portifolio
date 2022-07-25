import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import useAnimatedLetters from "./../../hooks/useAnimatedLetters";
import AnimatedLetters from "../../components/AnimatedLetters";
import "./styles.scss";

const About = () => {
  const letterClass = useAnimatedLetters();

  return (
    <motion.div
      className="about"
      animate={{ animation: "zoomInDown 1s linear both" }}
      exit={{ display: "none" }}
    >
      <div className="about__text-zone">
        <h1>
          <AnimatedLetters
            className={letterClass}
            animatedText={"Sobre"}
            index={15}
          />
        </h1>
        <p>
          Desenvolvedor Front End com MBA em Desenvolvimento Full Stack e
          Graduação em Análise e Desenvolvimento de Sistemas, e com diversos
          cursos de aprimoramento profissional. Apaixonado por programação,
          games, futebol e música.
        </p>

        <ul>
          <li>
            <span>Música favorita:</span> wish you were here (Pink Floyd)
          </li>
          <li>
            <span>Série favorita:</span> Mr. Robot
          </li>
          <li>
            <span>Filme favorito:</span> Senhor dos anéis
          </li>
          <li>
            <span>Game favorito:</span> The Last of US
          </li>
        </ul>
      </div>

      <div className="about__stage-cube">
        <div className="stage-cube__spinner">
          <div className="cube-face-01">
            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
          </div>
          <div className="cube-face-02">
            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
          </div>
          <div className="cube-face-03">
            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
          </div>
          <div className="cube-face-04">
            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
          </div>
          <div className="cube-face-05">
            <FontAwesomeIcon icon={faNodeJs} color="#00762d" />
          </div>
          <div className="cube-face-06 ">
            <FontAwesomeIcon icon={faGitAlt} color="#ec4e28" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
// <Loader active type="pacman" />

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedLetters from "../../components/AnimatedLetters";
import useAnimatedLetters from "./../../hooks/useAnimatedLetters";
import "./styles.scss";

const Home = () => {
  const letterClass = useAnimatedLetters();

  return (
    <motion.div
      animate={{ animation: "zoomInDown 1s linear both" }}
      exit={{ display: "none" }}
      className="home"
    >
      <div className="home__presentation">
        <h1>
          <span className={letterClass}>O</span>
          <span className={`${letterClass} _12`}>l</span>
          <span className={`${letterClass} _12`}>á</span>
          <span className={`${letterClass} _12`}>!</span>
          <br />
          <span className={`${letterClass} _12`}>E</span>
          <span className={`${letterClass} _12`}>u</span>{" "}
          <span className={`${letterClass} _12`}>s</span>
          <span className={`${letterClass} _12`}>o</span>
          <span className={`${letterClass} _12`}>u</span>{" "}
          <img src="/assets/images/Letra-C.png" alt="C" />
          <AnimatedLetters
            className={letterClass}
            animatedText="acio."
            index={14}
          />
        </h1>

        <div className="presentation__image-mobile">
          <img src="/assets/images/cacio.png" alt="Cacio" />
        </div>

        <h2>Desenvolvedor Web</h2>
        <Link to="contato">Contato</Link>
      </div>

      <div className="home__image-desktop">
        <img src="/assets/images/Cacio.png" alt="Cacio" />
      </div>
    </motion.div>
  );
};
export default Home;

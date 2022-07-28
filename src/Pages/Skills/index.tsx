import { motion } from "framer-motion";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedLetters from "./../../components/AnimatedLetters/index";
import useAnimatedLetters from "./../../hooks/useAnimatedLetters";
import "./styles.scss";
import { Helmet } from "react-helmet";

const Skills = () => {
  const className = useAnimatedLetters();

  return (
    <motion.div
      animate={{ animation: "zoomInDown 1s linear both" }}
      exit={{ display: "none" }}
      className="skills"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cacio | Skills</title>
        <link rel="canonical" href="https://www.caciodev.com/skills" />
        <meta name="description" content="Habilidades" />
        <meta
          name="keywords"
          content="habilidades, skills, HTML, CSS, JavaScript, React, Desenvolvedor React, Desenvolvedor Front End, Next.JS, Styled Components, Node.JS, Type Script, SASS"
        ></meta>
      </Helmet>
      <div className="skills__content">
        <h1>
          <AnimatedLetters
            animatedText="Skills"
            index={1}
            className={className}
          />
        </h1>
        <p>
          Conhecimentos em HTML, CSS, SASS, Styled Components, Java Script, Type
          Script, React, Next.JS e Node.JS. eu coloquei especial esforço para
          otimizar meu código e fornecer a melhor experiência ao usuário.
          Garanto um total compromisso durante o meu trabalho.
        </p>
        <p>
          <a href="https://www.linkedin.com/in/cacio/" target="__blank">
            Perfil para mais detalhes.
          </a>
          &nbsp;Além disso, você pode verificar meu&nbsp;
          <a href="/assets/CV_Cacio-de-Castro.pdf" download>
            currículo
          </a>
          .
        </p>
      </div>

      <div className="skills__container">
        <div className="skills__circle-container">
          <FontAwesomeIcon
            className="img-html"
            icon={faHtml5}
            color="#f06529"
          />
          <FontAwesomeIcon className="img-css" icon={faCss3} color="#28a4d9" />
          <FontAwesomeIcon
            className="img-react"
            icon={faReact}
            color="#5ed4f4"
          />
          <FontAwesomeIcon
            className="img-js"
            icon={faJsSquare}
            color="#efd81d"
          />
          <FontAwesomeIcon className="img-node" icon={faNode} color="#00762d" />
          <FontAwesomeIcon
            className="img-git"
            icon={faGitAlt}
            color="#ec4e28"
          />

          <svg
            className="img-ts"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361a5.093 5.093 0 0 0-.717-.26a5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529c.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416c.47.197.892.407 1.266.628c.374.222.695.473.963.753c.268.279.472.598.614.957c.142.359.214.776.214 1.253c0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085a4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164a5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09c.249-.06.456-.144.623-.25c.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089a2.12 2.12 0 0 0-.537-.5a5.597 5.597 0 0 0-.807-.444a27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405c-.45-.553-.676-1.222-.676-2.005c0-.614.123-1.141.369-1.582c.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629a7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
            />
          </svg>

          <svg
            className="img-next"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 512 309"
          >
            <path
              fill="currentColor"
              d="M120.81 80.561h96.568v7.676h-87.716v57.767h82.486v7.675h-82.486v63.423h88.722v7.675H120.81V80.561Zm105.22 0h10.26l45.467 63.423L328.23 80.56L391.441 0l-103.85 150.65l53.515 74.127h-10.663l-48.686-67.462l-48.888 67.462h-10.461l53.917-74.128l-50.296-70.088Zm118.898 7.676V80.56h110.048v7.676h-50.699v136.54h-8.852V88.237h-50.497ZM0 80.56h11.065l152.58 228.323l-63.053-84.107L9.254 91.468l-.402 133.31H0V80.56Zm454.084 134.224c-1.809 0-3.165-1.4-3.165-3.212c0-1.81 1.356-3.212 3.165-3.212c1.83 0 3.165 1.401 3.165 3.212c0 1.811-1.335 3.212-3.165 3.212Zm8.698-8.45h4.737c.064 2.565 1.937 4.29 4.693 4.29c3.079 0 4.823-1.854 4.823-5.325v-21.99h4.823v22.011c0 6.252-3.617 9.853-9.603 9.853c-5.62 0-9.473-3.493-9.473-8.84Zm25.384-.28h4.78c.409 2.953 3.294 4.828 7.45 4.828c3.875 0 6.717-2.005 6.717-4.764c0-2.371-1.809-3.794-5.921-4.764l-4.005-.97c-5.62-1.316-8.181-4.032-8.181-8.602c0-5.54 4.521-9.227 11.303-9.227c6.308 0 10.916 3.686 11.196 8.925h-4.694c-.452-2.867-2.95-4.657-6.567-4.657c-3.81 0-6.35 1.833-6.35 4.635c0 2.22 1.635 3.493 5.683 4.441l3.423.841c6.373 1.488 9 4.075 9 8.753c0 5.95-4.607 9.68-11.97 9.68c-6.89 0-11.52-3.558-11.864-9.12Z"
            />
          </svg>
        </div>
        <img
          className="skills__foto"
          src="/assets/images/cacio_skills.png"
          alt="Foto do Cacio"
        />
      </div>
    </motion.div>
  );
};

export default Skills;

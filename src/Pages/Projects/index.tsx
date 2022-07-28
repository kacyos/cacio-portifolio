import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedLetters from "./../../components/AnimatedLetters/index";
import useAnimatedLetters from "../../hooks/useAnimatedLetters";
import { usePrismicDocumentsByType } from "@prismicio/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Tilt from "react-parallax-tilt";
import "./styles.scss";

interface IProjects {
  uid: string | null;
  title: string;
  technologies: string;
  github: string;
  webPage: string;
  image: {
    url: string;
    alt: string;
  };
}

const Projects = () => {
  const [projects, setProjects] = useState<IProjects[]>();

  const letterClass = useAnimatedLetters();
  const [document, status] = usePrismicDocumentsByType("projects");

  useEffect(() => {
    if (status.state === "loaded") {
      const projectsArray = document?.results.map((project) => {
        return {
          uid: project.uid,
          title: project.data.title[0].text,
          technologies:
            project.data.technologies.find(
              (content: { type: string; text: string }) =>
                content.type === "paragraph"
            )?.text ?? "",
          github: project.data?.github.url,
          webPage: project.data?.site.url,
          image: {
            url: project.data?.img.url,
            alt: project.data?.img.alt,
          },
        };
      });

      setProjects(projectsArray);
    }
    console.log(document?.results);
  }, [document?.results, status.state]);

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
        {projects?.map((project) => (
          <Tilt transitionEasing="linear" tiltMaxAngleX={15} tiltMaxAngleY={15}>
            <div key={project.uid} className="container__card">
              <figure>
                <img src={project.image.url} alt={project.image.alt} />
              </figure>
              <h3>{project.title}</h3>
              <p>
                <span>Tecnologias: </span>
                {project.technologies}
              </p>

              <span className="card__links">
                <a href={project.github} aria-label="GitHub">
                  <FontAwesomeIcon icon={faGithub} color="#fff" />
                </a>
                <a href={project.webPage} aria-label={`site ${project.title}`}>
                  <FontAwesomeIcon icon={faEye} color="#F2f533" />
                </a>
              </span>
            </div>
          </Tilt>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

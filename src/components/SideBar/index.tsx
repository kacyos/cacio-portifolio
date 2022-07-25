import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faGear,
  faHome,
  faUser,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./styles.scss";

const SideBar = () => {
  const [menuClassName, setMenuClassName] = useState("close");

  const handleMenu = () => {
    menuClassName === "open"
      ? setMenuClassName("close")
      : setMenuClassName("open");
  };

  return (
    <nav className="navbar">
      <Link className="navbar__logo" to="/">
        <img src="/assets/images/Letra-C.png" alt="letra C" />
        <img src="/assets/images/nome.png" alt="Cacio de Castro" />
      </Link>

      <button className="navbar__btn-open" onClick={handleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <ul className={`navbar__menu-mobile menu--${menuClassName}`}>
        <button className="navbar__btn-close" onClick={handleMenu}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "is-active" : "")}
            to="/"
          >
            <FontAwesomeIcon icon={faHome} onClick={handleMenu} />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "is-active" : "")}
            to="/sobre"
          >
            <FontAwesomeIcon icon={faUser} onClick={handleMenu} />
            <span>Sobre</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contato"
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            <FontAwesomeIcon icon={faEnvelope} onClick={handleMenu} />
            <span>Contato</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "is-active" : "")}
            to="/skills"
          >
            <FontAwesomeIcon icon={faGear} onClick={handleMenu} />
            <span>Skills</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "is-active" : "")}
            to="/projetos"
          >
            <FontAwesomeIcon icon={faEye} onClick={handleMenu} />
            <span>Projetos</span>
          </NavLink>
        </li>
      </ul>

      <ul className={`navbar__menu-desktop`}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "is-active" : "")}
            to="/"
          >
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "is-active" : "")}
            to="/sobre"
          >
            <FontAwesomeIcon icon={faUser} />
            <span>Sobre</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contato"
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Contato</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "is-active" : "")}
            to="/skills"
          >
            <FontAwesomeIcon icon={faGear} />
            <span>Skills</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "is-active" : "")}
            to="/projetos"
          >
            <FontAwesomeIcon icon={faEye} />
            <span>Projetos</span>
          </NavLink>
        </li>
      </ul>

      <ul className="navbar__social-media">
        <li>
          <a
            className="linkedin"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/cacio/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            className="github"
            href="https://github.com/kacyos"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;

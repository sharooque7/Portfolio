import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import style from "./Navbar.module.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <Navbar bg="dark" sticky="top" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className={style.nav__link} to="home" spy={true} smooth={true}>
            Mohammed Sharooque
          </Link>
          {/* <a href="#AboutMe">Home</a> */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className={`ml-auto ${style.main}`}
            variant="default"
            style={{ width: "100%" }}
          >
            <Link
              className={style.nav__link}
              to="home"
              spy={true}
              smooth={true}
            >
              Home
            </Link>

            <Link
              className={style.nav__link}
              to="AboutMe"
              spy={true}
              smooth={true}
              offset={-80}
            >
              About
            </Link>

            <Link
              className={style.nav__link}
              to="skills"
              spy={true}
              smooth={true}
              offset={-80}
            >
              Skills
            </Link>

            <Link
              className={style.nav__link}
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
            >
              Projects
            </Link>
            <Link
              className={style.nav__link}
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

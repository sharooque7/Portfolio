import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import style from "./Navbar.module.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className={style.str}>
      <Navbar
        sticky="top"
        bg="dark"
        className={style.str}
        variant="dark"
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand>
            <Link
              className={style.nav__link}
              to="home"
              spy={true}
              smooth={true}
            >
              Mohammed Sharooque
            </Link>
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
              >
                About
              </Link>

              <Link
                className={style.nav__link}
                to="skills"
                spy={true}
                smooth={true}
              >
                Skills
              </Link>

              <Link
                className={style.nav__link}
                to="projects"
                spy={true}
                smooth={true}
              >
                Projects
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

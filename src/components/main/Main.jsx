import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import style from "./main.module.css";
import shar from "../../assets/ia.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import data from "./data";

const Main = () => {
  return (
    <Row className={`pt-3 bg-dark ${style.main_row}`} id="AboutMe">
      <Col md={12} lg={12} xl={12}>
        <div className={style.main__content}>
          <h2>About Me</h2>
          <p>
            I am a self-driven learner. Also I like working in a team. I am
            focusing all my effort on the impact I can leave on this world! and
            i love working with technologies which improves creativity
          </p>
        </div>
        {/*
        <div className={style.main__content__extra}>
          <img src={shar} alt="profilePhoto" />
          <div className={style.main__details}>
            <ul className={style.main__about_list}>
              <li>
                <span>Name:</span>
                <span>Mohammed Sharooque</span>
              </li>
              <li className="d-flex justify-content-between">
                <span>Email:</span>
                <span style={{ marginLeft: "20px" }}>
                  sharooquethoufiq@gmail.com
                </span>
              </li>
              <li className="d-flex justify-content-between">
                <span>Phone:</span>
                <span>+91-9790683688</span>
              </li>
              <li className="d-flex justify-content-between">
                <span>Country:</span> <span>India</span>
              </li>
              <li className="d-flex justify-content-between">
                <span>State:</span> <span>TamilNadu</span>
              </li>
              <li className="d-flex justify-content-between">
                <span>City:</span>
                <span>Coimbatore</span>
              </li>
            </ul>
            <Button
              href="https://drive.google.com/file/d/179wuyvNxntKAMyU2urVIfMIhG3gRKq20/view?usp=sharing"
              target="_blank"
              variant="link"
              className={`btn-success ${style.main__btn}`}
            >
              Download CV
            </Button>
          </div>
        </div>
        <hr /> */}
        <Row className={style.main__edu__row}>
          <Col lg={1} sm={1} md={1} xl={1} xs={1}>
            {/* <div className={style.main__left}>
              <ul className={style.line}>
                <li>
                  <Link
                    className={style.nav__link}
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                  >
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                    className={style.nav__link}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-110}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    className={style.nav__link}
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-100}
                  >
                    Experience
                  </Link>
                </li>
              </ul>
            </div> */}
          </Col>
          <Col lg={10} md={10} xl={10} sm={10} xs={10}>
            {/* <div id="education" className={style.main__left__content}>
              <span className={style.main__title}>Education</span>
              <span className={style.fonts}>
                {" "}
                <FontAwesomeIcon icon={faUniversity} />{" "}
                <span>Sri Krishna College of Engineering and Technology</span>
              </span>

              <span className={style.degree}>Bachelor of Engineering</span>
              <span className={style.branch}>
                Electrical and Electronic Engineering
              </span>
              <span className={style.place}>Coimbatore -TamilNadu</span>
              <span className={style.duration}>2016-2020</span>
              <hr />
            </div> */}
            {/* <div className={style.main__left__content}>
              {/* <span className={style.main__title}>Education</span> */}
            {/* <span className={style.fonts}>
                {" "}
                <FontAwesomeIcon icon={faUniversity} />{" "}
                <span>Lisieux Matriculation Higher Secondary School</span>
              </span>

              <span className={style.degree}>High School</span>
              <span className={style.branch}>Computer Science</span>
              <span className={style.place}>Coimbatore -TamilNadu</span>
              <span className={style.duration}>2014-2016</span>
              <hr /> */}
            {/* </div> */}
            {/* <div
              id="experience"
              style={{ marginTop: "40px" }}
              className={style.main__left__content}
            >
              <span className={style.main__title}>Experience</span>
              <span class={style.fonts}>
                {" "}
                <FontAwesomeIcon icon={faBriefcase} />{" "}
                <span>Associate Software Engineer</span>
              </span>

              <span className={style.degree}>Accenture Pvt Ltd</span>
              <span className={style.duration}>Oct 2020 - Present</span>
              <hr />
            </div> */}
            {/* <div className={style.main__left__content}> */}
            {/* <span className={style.main__title}>Experience</span> */}
            {/* <span className={style.fonts}>
                {" "}
                <FontAwesomeIcon icon={faBriefcase} /> <span>Intern</span>
              </span> */}

            {/* <span className={style.degree}>AthenaHealth Pvt Ltd</span>
              <span className={style.duration}>Jan 2020 - June 2020</span> */}
            {/* <hr /> */}
            {/* </div> */}
            {/* <Row id="skills" className={style.__skill}>
              <span
                className={style.main_skills}
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                Skills
              </span>
              {data.map((d) => (
                <Col key={d.id} className="col grow mt-3" lg={2} md={2} sm={2}>
                  <button
                    type="Link"
                    class="btn"
                    data-toggle="tooltip"
                    data-placement="top"
                    title={d.title}
                  >
                    <img src={d.src} alt="" className={` ${style.skills}`} />
                  </button>
                </Col>
              ))}
            </Row> */}
          </Col>
          <Col lg={1} md={1} xl={1} sm={1} xs={1}></Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Main;

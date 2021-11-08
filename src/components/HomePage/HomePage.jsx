import React from "react";
import Particles from "react-tsparticles";
import config from "../config/practicleConfig";
import { Row } from "react-bootstrap";
import style from "./homepage.module.css";
import shar from "../../assets/somehwat.jpg";
import Scroll from "../scrollAnimation/Scroll";

const HomePage = () => {
  return (
    <Row>
      <div id="home" className={style.home__main}>
        <div className={style.home__main__wrapper}>
          <Particles height="100vh" width="100%" options={config} />
          <div className={` ${style.home__about}`}>
            <span className={style.home__main_span1}>Hey! I am</span>
            <span className={style.home__main_span2}>Mohammed Sharooque</span>
            <img
              className={style.home__image}
              src={shar}
              alt="personalProfilePhoto"
            ></img>
          </div>{" "}
          <div className={style.scroll}>
            <Scroll />
          </div>
        </div>
      </div>
    </Row>
  );
};

export default HomePage;

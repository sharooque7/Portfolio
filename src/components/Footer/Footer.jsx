import React from "react";
import { Row, Col } from "react-bootstrap";
import FavoriteIcon from "@mui/icons-material/Favorite";
import style from "./footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import product from "../../assets/product.JPG";
import chat from "../../assets/chat.JPG";
import next from "../../assets/next.JPG";
import Zaberi from "../../assets/zabri3.JPG";
import socila from "../../assets/socila.JPG";

const Footer = () => {
  return (
    <>
      <Row className={`bg-dark ${style.cess} `}>
        <hr style={{ marginTop: "10px", color: "white" }} />
        <Col sm={12} xs={12} lg={4} md={4} xl={4} className={` ${style.foot}`}>
          {" "}
          <h3 style={{ color: "white" }}>Hobbies</h3>
          <p>
            I enjoy practising sports (Vollyeball 🏐 and football ⚽), reading
            News 📰 and stock analysing 💹. sports give me the focus needed to
            maintain a good work/life balance required when working in IT.
            Globally speaking I'm always keen to learn and on finding out how to
            further improve my skills and workflows be it when doing my hobbies
            or working.
          </p>
        </Col>
        <Col sm={12} lg={4} md={4} xs={12} className={style.__pname}>
          <h3 style={{ color: "white" }}>Recent Projects</h3>
          <Row className={style.corr}>
            <Col lg={6} md={6} sm={6} xs={6} className={style.boxp}>
              <a
                rel="noreferrer"
                data-toggle="tooltip"
                data-placement="top"
                title="TravelApp"
                href="https://travel-app-gold.vercel.app/"
                target="_blank"
                className={style._alink}
                className={style.__a}
              >
                {" "}
                <img src={next} className={style.img_recent} alt="" />
              </a>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6} className={style.boxp}>
              <a
                rel="noreferrer"
                data-toggle="tooltip"
                data-placement="top"
                title="ZaberiEcommerce"
                href="https://zaberi.netlify.app/"
                target="_blank"
                className={style.__a}
              >
                <img src={Zaberi} className={style.img_recent} alt="" />
              </a>
            </Col>{" "}
            <Col lg={6} md={6} sm={6} xs={6} className={style.boxp}>
              <a
                rel="noreferrer"
                data-toggle="tooltip"
                data-placement="top"
                title="ChatApp"
                href="https://chatappsocial.netlify.app/"
                target="_blank"
                className={style.__a}
              >
                {" "}
                <img src={chat} className={style.img_recent} alt="" />
              </a>
            </Col>{" "}
            <Col lg={6} md={6} sm={6} xs={6}>
              <a
                rel="noreferrer"
                data-toggle="tooltip"
                data-placement="top"
                title="SocialLite"
                href="https://sociallite.netlify.app/"
                target="_blank"
                className={style.__a}
              >
                {" "}
                <img
                  src={socila}
                  className={`img-responsive ${style.img_recent}`}
                  alt=""
                />
              </a>
            </Col>
          </Row>
        </Col>
        <Col sm={12} lg={4} md={3} xs={12}>
          {" "}
          <div className={style.det}>
            <div className={style.det__wrapper}>
              <h3 style={{ color: "white" }}>Get In Touch </h3>
              <EmailIcon sx={{ color: "white", fontSize: "32px" }}></EmailIcon>
              <span> Mail Me</span>
              <span style={{ color: "hsl(171, 43%, 60%)" }}>
                sharooquethoufiq@gmail.com
              </span>
              <CallIcon sx={{ color: "white", fontSize: "32px" }} />{" "}
              <span>Call Me At</span>
              <span style={{ color: "hsl(171, 43%, 60%)" }}>
                +91--- 9790683688
              </span>
            </div>
          </div>
        </Col>
        <hr style={{ color: "white", marginTop: "20px" }} />
        <Row>
          <Col className="d-flex justify-content-start">
            {" "}
            <p style={{ color: "white", fontFamily: "Permanent Marker" }}>
              Powered by Mohammed Sharooque &copy; 2021
            </p>
          </Col>
          <Col className=" offset-3">
            {" "}
            <FavoriteIcon
              style={{
                fontSize: "34px",
                color: "hsl(171, 43%, 60%) ",
                marginBottom: "40px",
              }}
            />
          </Col>
          <Col className="d-flex justify-content-end">
            {" "}
            <a
              rel="noreferrer"
              data-toggle="tooltip"
              data-placement="left"
              title="GitHub Repository"
              href="https://github.com/sharooque7"
              target="_blank"
            >
              <GitHubIcon className={style.git} />
            </a>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default Footer;

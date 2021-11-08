import React from "react";
import { Row, Col } from "react-bootstrap";
import FavoriteIcon from "@mui/icons-material/Favorite";
import style from "./footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import product from "../../assets/product.JPG";
import whatsApp from "../../assets/whatsapp.JPG";
import netflix from "../../assets/netflixclone.JPG";
import Zaberi from "../../assets/zabri3.JPG";

const Footer = () => {
  return (
    <>
      <Row className={`bg-dark ${style.cess} `}>
        <Col sm={12} lg={4} md={4} className={`offset-1  ${style.foot}`}>
          {" "}
          <h3 style={{ color: "white" }}>About</h3>
          <p>
            I am a self-driven learner. Also I like working in a team. I am
            focusing all my effort on the impact I can leave on this world! and
            i love working with technologies which improves creativity
          </p>
        </Col>
        <Col sm={12} lg={3} md={4}>
          <h3 style={{ color: "white" }}>Recent Projects</h3>
          <Row className={style.corr}>
            <Col lg={6} md={6} sm={3} xs={6} className="mr-1 mt-1 mb-1">
              <a
                rel="noreferrer"
                data-toggle="tooltip"
                data-placement="top"
                title="ProductManager"
                href="https://productmanagercrud.netlify.app/"
                target="_blank"
              >
                {" "}
                <img src={product} className={style.img_recent} alt="" />
              </a>
            </Col>
            <Col lg={6} md={6} sm={3} xs={6} className="mr-1 mt-1 mb-1">
              <a
                rel="noreferrer"
                data-toggle="tooltip"
                data-placement="top"
                title="ZaberiEcommerce"
                href="https://zaberi.netlify.app/"
                target="_blank"
              >
                <img src={Zaberi} className={style.img_recent} alt="" />
              </a>
            </Col>{" "}
            <Col lg={6} md={6} sm={3} xs={6} className="mr-1 mt-1 mb-1">
              <a
                rel="noreferrer"
                data-toggle="tooltip"
                data-placement="top"
                title="whatsAppClone"
                href="https://whatsapp-clone-a8525.web.app/"
                target="_blank"
              >
                {" "}
                <img src={whatsApp} className={style.img_recent} alt="" />
              </a>
            </Col>{" "}
            <Col lg={6} md={6} sm={3} xs={6} className="mr-1 mt-1 mb-1">
              <a
                rel="noreferrer"
                data-toggle="tooltip"
                data-placement="top"
                title="NetflixClone"
                href="https://nelfiix-clone.netlify.app/"
                target="_blank"
              >
                {" "}
                <img src={netflix} className={style.img_recent} alt="" />
              </a>
            </Col>
          </Row>
        </Col>
        <Col sm={12} lg={4} md={3}>
          {" "}
          <div className={style.det}>
            <div className={style.det__wrapper}>
              <h3 style={{ color: "white" }}>Get In Touch </h3>
              <EmailIcon sx={{ color: "white", fontSize: "32px" }}></EmailIcon>
              Mail Me
              <span style={{ color: "hsl(171, 43%, 60%)" }}>
                sharooquethoufiq@gmail.com
              </span>
              <CallIcon sx={{ color: "white", fontSize: "32px" }} /> Call Me At
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
              <GitHubIcon style={{ fontSize: "35px" }} className={style.git} />
            </a>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default Footer;

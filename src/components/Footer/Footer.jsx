import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GitHub, LinkedIn, Email, Call, Twitter } from "@mui/icons-material";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`bg-dark text-white  ${style.footer}`} id="footer">
      <Row className={`bg-dark text-center  ${style.footer}`}>
        <hr style={{ color: "white" }}></hr>
        {/* Get in Touch Section */}
        <Col md={6} className={style.section}>
          <h4>Get In Touch</h4>
          <div className={style.contact}>
            <Email
              style={{ color: "#FFD700", marginRight: "5px" }}
              fontSize="large"
            />
            <a
              href="mailto:sharooquethoufiq@gmail.com"
              className={style.contactLink}
            >
              sharooquethoufiq@gmail.com
            </a>
          </div>
          {/* <div className={style.contact}>
            <Call fontSize="large" />
            <span>Phone: </span>
            <a href="tel:+919790683688" className={style.contactLink}>
              +91 97906 83688
            </a>
          </div> */}
        </Col>

        {/* Social Links Section */}
        <Col md={6} className={style.section}>
          <h4>Connect with Me</h4>
          <div className={style.socialIcons}>
            {/* <a
              href="https://github.com/sharooque7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub
                style={{ color: "#FFD700" }}
                fontSize="large"
                className={style.icon}
              />
            </a> */}
            <a
              href="https://github.com/sharooque7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter
                style={{ color: "#FFD700" }}
                fontSize="large"
                className={style.icon}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/sharooque7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn
                style={{ color: "#FFD700" }}
                fontSize="large"
                className={style.icon}
              />
            </a>
          </div>
        </Col>
      </Row>

      <Row className="bg-dark text-center">
        <Col>
          <p className={style.copyright}>
            &copy; {new Date().getFullYear()} Mohammed Sharooque | All Rights
            Reserved
          </p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;

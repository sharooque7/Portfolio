import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import style from "./project.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import data from "./projectdata";
import { Card } from "@mui/material";

const project = () => {
  return (
    <>
      <Row className={`bg-dark ${style.project} `} id="projects">
        <h3>Projects</h3>
        {data.map((p, index) => (
          <>
            <Col md={1} xs={1} lg={1} xl={1} sm={1}></Col>
            <Col
              lg={10}
              xs={10}
              md={10}
              xl={10}
              sm={10}
              className={style.__pdata}
            >
              <Row>
                <Col lg={12} xl={12} xs={12} md={12} sm={12}>
                  <div className={style.main_project}>
                    <h4>{p.title}</h4>
                    <p>{p.desc} </p>
                  </div>
                </Col>
                <Col lg={12} xl={12} xs={12} md={12} sm={12}>
                  <Card
                    key={p.id}
                    className="m-2 p-2 text-center"
                    sx={{
                      width: 400, // Smaller card width
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(5px)",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                      color: "white",
                      transition: "0.2s",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
                      },
                    }}
                  >
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                        display: "flex",
                        // flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      {/* <GitHubIcon
                        style={{ fontSize: "30px", color: "#FFD700" }}
                      /> */}
                      <GitHubIcon
                        style={{ fontSize: "1.5rem", color: "#FFD700" }}
                      />
                      <span
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          color: "rgb(190, 190, 23)",
                        }}
                      >
                        {p.title}
                      </span>
                    </a>
                  </Card>
                </Col>
              </Row>
              <Row>
                <img src={p.src} alt="smart-vehicle" />
              </Row>
              {index !== data.length - 1 && <hr style={{ color: "white" }} />}
            </Col>
            <Col md={1} xs={1} lg={1} xl={1} sm={1}></Col>
          </>
        ))}
      </Row>
    </>
  );
};

export default project;

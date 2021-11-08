import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import style from "./project.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import data from "./projectdata";

const project = () => {
  return (
    <>
      <Row className={`bg-dark ${style.project}`} id="projects">
        <h3>My Project</h3>
        {data.map((p) => (
          <>
            <Col lg={2} xs={2} md={2} sm={2}></Col>
            <Col lg={10} xs={10} md={10} xl={10}>
              <Row>
                <Col lg={4} xs={12} md={6} sm={12}>
                  <img src={p.src} alt="" className={style.main__image} />
                </Col>
                <Col lg={8} xs={12} md={6} sm={12}>
                  <div className={style.main_project}>
                    <h4>{p.title}</h4>
                    <p>{p.desc} </p>

                    <Row>
                      {p.library.map((skill) => (
                        <Col className={style.main_project_list}>{skill}</Col>
                      ))}
                    </Row>
                    <Button
                      href={p.liveApp}
                      target="_blank"
                      variant="outline-warning"
                      className={style.btn}
                    >
                      <span style={{ marginRight: "10px" }}>
                        <CloudCircleIcon />
                      </span>
                      Live Application
                    </Button>
                    <Button
                      variant="outline-warning"
                      className={style.btn}
                      href={p.Frontend}
                      target="_blank"
                    >
                      <span style={{ marginRight: "10px" }}>
                        {" "}
                        <GitHubIcon />
                      </span>
                      GitLink-Frontend
                    </Button>
                    {p.Backend !== "" && (
                      <Button
                        href={p.Backend}
                        target="_blank"
                        variant="outline-warning"
                        className={style.btn}
                      >
                        <span style={{ marginRight: "10px" }}>
                          {" "}
                          <GitHubIcon />
                        </span>
                        GitLink -backend
                      </Button>
                    )}
                  </div>
                </Col>
              </Row>
              <hr style={{ color: "white", marginTop: "40px" }} />
            </Col>
          </>
        ))}
      </Row>
    </>
  );
};

export default project;

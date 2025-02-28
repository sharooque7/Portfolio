import React from "react";
import { Row, Col } from "react-bootstrap";
import { Card } from "@mui/material";
import data from "./socialdata";

const Blogs = () => {
  return (
    <Row className="bg-dark text-white py-4" id="profiles">
      <hr style={{ color: "white" }}></hr>
      <h3 className="text-center mb-4" style={{ fontSize: "1.8rem" }}>
        🌐 Explore my profiles to learn more about me.
      </h3>

      <Col lg={12} md={12} className="d-flex flex-wrap justify-content-center">
        {data.map((p) => (
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
              <p.icon style={{ fontSize: "1.5rem", color: "#FFD700" }} />
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
        ))}
      </Col>
    </Row>
  );
};

export default Blogs;

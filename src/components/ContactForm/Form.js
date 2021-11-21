import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import style from "./form.module.css";
import emailjs from "emailjs-com";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Result = () => {
  return (
    <p
      style={{
        color: "white",
        textAlign: "center",
        marginTop: "10px",
      }}
    >
      Thanks for contacting me ! The message has been sent successfully.
    </p>
  );
};

const ContactForm = () => {
  const [state, setState] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t7lynvk",
        "template_5qj1p5i",
        e.target,
        "user_yCN4ZUcqUMIwAKwi8XAAK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setState(true);
  };
  setTimeout(() => {
    setState(false);
  }, 5000);
  return (
    <Row className="bg-dark" id="contact">
      <Col md={1} lg={1} xl={1} xs={1} sm={1}></Col>

      <Col
        md={10}
        sm={10}
        lg={10}
        xl={10}
        sm={10}
        xs={10}
        className={`mt-3  ${style.frms}`}
      >
        <h3 style={{ color: "white" }} className={style.__head}>
          Contact Me
        </h3>
        <Form
          onSubmit={sendEmail}
          className={`${style.frm}`}
          md={10}
          sm={10}
          lg={10}
          xl={10}
          sm={10}
        >
          <Form.Group
            as={Row}
            md={12}
            sm={10}
            lg={10}
            xl={10}
            sm={10}
            className={`mb-3 ${style.__forn_width} d-flex justify-content-center`}
            controlId="formPlaintextEmail"
          >
            <Form.Label
              column
              md={1}
              lg={1}
              xl={1}
              className={style.__label}
              style={{ color: "white" }}
            >
              Name
            </Form.Label>
            <Col md={9} lg={9} xl={9}>
              <Form.Control
                type="text"
                placeholder="Your name"
                name="name"
                required
                className={style.__input}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            md={12}
            lg={12}
            xl={12}
            className={`mb-3 ${style.__forn_width} d-flex justify-content-center`}
            controlId="formPlaintextEmail"
          >
            <Form.Label
              column
              md={1}
              lg={1}
              xl={1}
              className={style.__label}
              style={{ color: "white" }}
            >
              Email
            </Form.Label>
            <Col md={9} lg={9} xl={9}>
              <Form.Control
                type="email"
                name="emailid"
                placeholder="Email"
                required
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            md={12}
            lg={12}
            xl={12}
            className={`mb-3 ${style.__forn_width} d-flex justify-content-center`}
            controlId="formPlaintextEmail"
            controlId="formPlaintextEmail"
          >
            <Form.Label
              column
              md={1}
              lg={1}
              xl={1}
              className={style.__label}
              style={{ color: "white" }}
            >
              Message
            </Form.Label>
            <Col md={9} lg={9} xl={9}>
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Message"
                rows={3}
                required
              />
            </Col>
          </Form.Group>

          <Button
            type="submit"
            variant="outline-warning"
            className={` ${style.__btn}`}
          >
            <span>
              {" "}
              <ContactMailIcon sx={{ marginRight: "10px" }} />
              Contact Me
            </span>
          </Button>
        </Form>
        {state ? <Result /> : null}
      </Col>
      {/* <Row>
        <Col></Col>
        <Col lg={12}><hr style={{ color: "white" }} /></Col>
      </Row> */}
    </Row>
  );
};

export default ContactForm;

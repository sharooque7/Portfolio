import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import style from "./form.module.css";
import emailjs from "emailjs-com";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Result = () => {
  return (
    <p style={{ color: "white" }}>
      The message has been sent successfully.Please wait i will revert back
      shortly
    </p>
  );
};

const ContactForm = () => {
  const [state, setState] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Hi");

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
    <Row className="bg-dark ">
      <Col md={3} lg={3} xl={3} sm={3} xs={3}></Col>

      <Col md={6} lg={6} xl={6} sm={6} xs={6} className={`mt-3  ${style.frm}`}>
        <h3 style={{ color: "white" }}>Contact Me</h3>
        <Form
          onSubmit={sendEmail}
          className={`d-flex flex-column ${style.frm}`}
        >
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2" style={{ color: "white" }}>
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Your name"
                name="name"
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2" style={{ color: "white" }}>
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="email"
                name="emailid"
                placeholder="Email"
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2" style={{ color: "white" }}>
              Message
            </Form.Label>
            <Col sm="10">
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
            className={`offset-5 ${style.btn}`}
          >
            <ContactMailIcon sx={{ marginRight: "10px" }} />
            Contact Me
          </Button>
        </Form>
        {state ? <Result /> : null}
      </Col>
      <Row>
        <Col></Col>
        <Col lg={12}>
          <hr style={{ color: "white", marginTop: "30px" }} />
        </Col>
      </Row>
    </Row>
  );
};

export default ContactForm;

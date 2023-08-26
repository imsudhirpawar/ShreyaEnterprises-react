import React from "react";
import { BsGoogle } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "./login.css";

import { useState } from "react";
import Alert from "react-bootstrap/Alert";


function Login() {
  const [show, setShow] = useState(true);

  return (
    <Container fluid className="my-1 cont">
      {/* alert start */}

      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Website Alert: Under Construction</Alert.Heading>
        <p>
        Please note that our website is currently under construction, and the login functionality is temporarily unavailable. For orders or assistance, kindly reach out to us via WhatsApp or phone call. We appreciate your understanding.
        </p>
      </Alert>

      

      
      {/* alert end */}
      <Row className="g-0 align-items-center">
        <Col col="6">
          <Card
            className="my-5 cascading-right logInCard"
            style={{
              background: "hsla(0, 0%, 100%, 0)",
              backdropFilter: "blur(40px)",
            }}
          >
            <Card.Body className="p-5 shadow-5 text-center">
              <span className="d-flex  justify-content-center">
                {/* <img src="./OilPress/Logo-s.png" alt="" className='logoS  '/> */}
                <p className="fs-4 mt-4 p-2">Sign in now</p>
              </span>

              <Row>
                <Col col="6">
                  <Form.Control type="text" placeholder="Name" />
                </Col>

                <Col col="6">
                  <Form.Control type="text" placeholder="Last Name" />
                </Col>
              </Row>

              <Form.Control type="email" placeholder="email" className="my-3" />
              <Form.Control
                type="password"
                placeholder="password"
                className="my-3"
              />

              <Button className="w-100 mb-4 btn-success" size="md">
                Sign in
              </Button>

              <div className="text-center">
                <p>or sign in with:</p>

                <BiLogoFacebook
                  className="mx-3 fs-2"
                  style={{ color: "green" }}
                />
                <BsGoogle className="mx-3 fs-4" style={{ color: "green" }} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col col="6" className="singUpImage ">
          <img
            src="https://images.unsplash.com/photo-1539975611936-f0d1221cfd16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            className="w-100 rounded-4 shadow-4 sui"
            alt=""
            fluid
          />
        </Col>
      </Row>
    </Container>
  );

}

export default Login;

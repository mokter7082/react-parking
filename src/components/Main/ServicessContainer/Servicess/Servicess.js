import React from "react";
import { Container, Row } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import Service from "../Service/Service";
import "./Servicess.css";
const Servicess = () => {
  return (
    <>
      <h2 className="text-success text-center my-5 topHeading">
        <span style={{ color: "#27ae60", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["About Our Servicess"]}
            loop={5}
            cursor
            cursorStyle="🤘"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h2>
      <div class="col-md-8 mx-auto">
        <Container>
          <Row xs={2} sm={2} md={3} className="g-3">
            <Service />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Servicess;

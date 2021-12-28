import React from "react";
import "./Repair.css";
import { Row, Card, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Repair = () => {
  return (
    <>
      <Container>
        <div class="col-md-12 my-4">
          <div class="col-md-6 mx-auto repairContainer">
            <Row xs={1} md={2} className="g-4 p-4 mt-4">
              <Link to="" className="myLink">
                <Col className="rounded">
                  <Card className="p-4">
                    <Card.Img
                      className="w-50 mx-auto"
                      variant="top"
                      src="https://i.ibb.co/840q2SS/repair.png"
                    />
                    <Card.Body>
                      <Card.Title className="text-center">
                        Repair Car
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Link>
              <Link to="" className="myLink">
                <Col className="rounded">
                  <Card className="p-4">
                    <Card.Img
                      className="w-50 mx-auto"
                      variant="top"
                      src="https://i.ibb.co/840q2SS/repair.png"
                    />
                    <Card.Body>
                      <Card.Title className="text-center">
                        Repair Car
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Link>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Repair;

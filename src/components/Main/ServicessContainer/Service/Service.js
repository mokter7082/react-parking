import React from "react";
import "../Servicess/Servicess.css";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <>
      {/* REQUEST PARKING */}
      <Link to="/request-parking" className="serviceTitle">
        <Card className="cardContainer credentialing">
          {/* <div className="overlay">sdad</div> */}
          {/* <div className="circle"></div> */}
          <Card.Img
            variant="top"
            src="https://i.ibb.co/fGjv3pM/Request-Parking.jpg"
            className="w-50 p-3 mt-4 mx-auto iconImg"
          />
          <Card.Body>
            <Card.Title className="text-center">Request Parking</Card.Title>
          </Card.Body>
        </Card>
      </Link>
      {/* MONTHLY */}
      <Link to="/monthly" className="serviceTitle">
        <Card className="cardContainer credentialing">
          <Card.Img
            variant="top"
            src="https://i.ibb.co/0X4jdF4/Monthly.jpg"
            className="w-50 p-3 mt-4 mx-auto"
          />
          <Card.Body>
            <Card.Title className="text-center">Monthly</Card.Title>
          </Card.Body>
        </Card>
      </Link>
      {/* HOURLY */}
      <Link to="/hourly" className="serviceTitle">
        <Col>
          <Card className="cardContainer credentialing">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/rbwBzsB/Hourly.jpg"
              className="w-50 p-3 mt-4 mx-auto"
            />
            <Card.Body>
              <Card.Title className="text-center">Hourly</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Link>
      {/* REPIAIR */}
      <Link to="/repair" className="serviceTitle">
        <Col>
          <Card className="cardContainer credentialing">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/fv3RRvz/Repairing.jpg"
              className="w-50 p-3 mt-4 mx-auto"
            />
            <Card.Body>
              <Card.Title className="text-center">Repair</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Link>
      {/* INSURANCE */}
      <Link to="/insurance" className="serviceTitle">
        <Col>
          <Card className="cardContainer credentialing">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/LhYZb27/Insurance.jpg"
              className="w-50 p-3 mt-4 mx-auto"
            />
            <Card.Body>
              <Card.Title className="text-center">Insurance</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Link>
      {/* ACCESSORIES */}
      <Link to="/assessories" className="serviceTitle">
        <Col>
          <Card className="cardContainer credentialing">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/2nbpJg0/Accsesories.jpg"
              className="w-50 p-3 mt-4 mx-auto"
            />
            <Card.Body>
              <Card.Title className="text-center">Accessories</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Link>
      {/* PAYMENT */}
      <Link to="/payment" className="serviceTitle">
        <Col>
          <Card className="cardContainer credentialing">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/XCK2ssb/Payment.jpg"
              className="w-50 p-3 mt-4 mx-auto"
            />
            <Card.Body>
              <Card.Title className="text-center">Payment</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Link>
      {/* PAYMENT */}
      <Link to="/payment" className="serviceTitle">
        <Col>
          <Card className="cardContainer credentialing">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/XCK2ssb/Payment.jpg"
              className="w-50 p-3 mt-4 mx-auto"
            />
            <Card.Body>
              <Card.Title className="text-center">Payment</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Link>
    </>
  );
};

export default Service;

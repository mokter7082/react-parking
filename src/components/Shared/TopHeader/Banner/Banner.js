import React from "react";
import BannerImg from "../../../../images/Capture.JPG";
import { Col, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <a
        href="https://play.google.com/store/apps/details?id=com.parkingkoi.pk&hl=en&gl=US"
        target="_blank"
      >
        <div className="">
          <Row>
            <Col className="">
              <img className="w-100" src={BannerImg} alt="" />
            </Col>
          </Row>
        </div>
      </a>
    </>
  );
};

export default Banner;

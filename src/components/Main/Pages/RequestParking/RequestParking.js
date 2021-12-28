import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import MyNav from "../../../Shared/TopHeader/MyNav/MyNav";
import RequestParkingFrom from "./RequestParkingFrom/RequestParkingFrom";

const RequestParking = () => {
  return (
    <>
      <MyNav />
      <RequestParkingFrom />
      <Footer />
    </>
  );
};

export default RequestParking;

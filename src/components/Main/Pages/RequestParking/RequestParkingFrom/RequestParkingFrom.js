import React from "react";
import "./RequestParkingFrom.css";
import From from "./From";

const RequestParkingFrom = () => {
  return (
    <>
      <div class="col-md-6 mt-5 mx-auto">
        <div class="row my-4">
          <div class="col-md-6">
            <div class="">
              <img
                className="w-100"
                src="https://i.ibb.co/hMzBzMF/million-job.png"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-6 mt-5">
            <div class="mt-4 text-center ">
              <h2 className="reqTitle text-success">Request Parking</h2>
              <p className="mt-5" style={{ color: "gray" }}>
                Transformaing Parking Experiences Through Digitization
              </p>
            </div>
          </div>
        </div>
        <From />
      </div>
    </>
  );
};

export default RequestParkingFrom;

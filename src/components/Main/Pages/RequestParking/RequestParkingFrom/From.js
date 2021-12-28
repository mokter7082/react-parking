import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../../../../Hooks/useAuth";

const From = () => {
  const { local, setLocal } = useAuth();
  const [userInfo, setUserInfo] = useState("");

  const getDivisioin = async (e) => {
    const division = e.target.value;
    var data = { div: division };
    axios
      .post("http://parkingkoi.xyz/car-parking/getLocality.php", data)
      .then(function (response) {
        setLocal(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...userInfo };
    newInfo[field] = value;
    setUserInfo(newInfo);
    console.log(userInfo);
  };
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // collect data
    const user = {
      ...userInfo,
    };
    // console.log(user);
    axios
      .post(
        "http://parkingkoi.xyz/laravel_api/public/req-monthly-place-v2",
        user
      )
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          alert("Thank you so much for your submition !!");
          e.target.reset();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="contact-wrap formArea mt-5 rounded">
        <h4 className="text-center text-success text-uppercase my-2">
          Please fill up this form
        </h4>
        <form className="contactForm" onSubmit={handleBookingSubmit}>
          <div class="form-group mt-1">
            <label class="ms-2">Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="enter your name"
              name="name"
              onBlur={handleOnBlur}
              required
            />
          </div>
          <div class="form-group my-2">
            <label class="ms-2">Email</label>
            <input
              type="text"
              class="form-control"
              placeholder="enter your email"
              name="email"
              onBlur={handleOnBlur}
              required
            />
          </div>
          <div class="form-group my-2">
            <label class="ms-2">Contact Number</label>
            <input
              type="number"
              class="form-control"
              placeholder="enter your email"
              name="phone"
              onBlur={handleOnBlur}
              required
            />
          </div>
          <div class="form-group my-2">
            <label class="ms-2" for="division">
              Division
            </label>
            <select
              className="form-control"
              name="division"
              onChange={getDivisioin}
              onBlur={handleOnBlur}
            >
              <option disabled selected value>
                - Select -
              </option>
              <option value="Dhaka">Dhaka</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Chittagong">Chittagong</option>
            </select>
          </div>
          <div class="form-group my-2">
            <label class="ms-2" for="local">
              Locality
            </label>
            <select className="form-control" name="local" onBlur={handleOnBlur}>
              {local.map((loc) => (
                <option value={loc.local} key={loc.local}>
                  {loc.local}
                </option>
              ))}
            </select>
            <p>Result {local.length}</p>
          </div>
          <div class="form-group my-2">
            <label class="ms-2">Require Parking Location</label>
            <input
              type="text"
              class="form-control"
              placeholder="enter parking location"
              name="location"
              onBlur={handleOnBlur}
            />
          </div>
          <div class="form-group my-2">
            <label class="ms-2">Vehicle Type/ Description</label>
            <input
              type="text"
              class="form-control"
              placeholder="enter vehicle type"
              name="vehicle"
              onBlur={handleOnBlur}
            />
          </div>
          <input
            className="btn btn-primary my-2"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </>
  );
};

export default From;

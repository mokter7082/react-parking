import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../../../../../Hooks/useAuth";

const Search = () => {
  const { local, setLocal, defaultPark, setDefaultpark } = useAuth();
  const [getLocation, setGetLocatiom] = useState("");
  const getLocality = (e) => {
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
  //   reples display data
  const locationHandle = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLocation = { ...getLocation };
    newLocation[field] = value;
    setGetLocatiom(newLocation);
  };
  const SearchParking = (e) => {
    e.preventDefault();
    // console.log(getLocation);
    axios
      .post(
        "http://parkingkoi.xyz/laravel_api/public/place-search",
        getLocation
      )
      .then(function (response) {
        // setLocal(response.data);
        setDefaultpark(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div class="mt-4 text-center ">
        <h2 className="reqTitle text-success">
          Request Parking{defaultPark.length}
        </h2>
        <div class="col-md-8 mx-auto mt-4">
          <form>
            <div class="time-picker-section">
              <div class="row">
                <div class="col-6 pl-1">
                  <div class="form-group ">
                    <label>Division</label>
                    <select
                      class="form-control"
                      name="division"
                      required=""
                      onChange={getLocality}
                      onBlur={locationHandle}
                    >
                      <option disabled selected value>
                        - Select -
                      </option>
                      <option value="dhaka">Dhaka</option>
                      <option value="sylhet">Sylhet</option>
                      <option value="chittagong">Chittagong</option>
                    </select>
                  </div>
                </div>

                <div class="col-6 pr-1">
                  <div class="form-group">
                    <label>Locality</label>
                    <select
                      className="form-control"
                      name="local"
                      onBlur={locationHandle}
                    >
                      <option>- Select -</option>
                      {local.map((loc) => (
                        <option value={loc.local} key={loc.local}>
                          {loc.local}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={SearchParking}
              type="submit"
              class="btn btn-block btn-danger my-4"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;

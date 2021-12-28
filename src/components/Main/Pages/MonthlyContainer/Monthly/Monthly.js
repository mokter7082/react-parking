import React from "react";
import "./Monthly.css";
import Search from "./Search/Search";

const Monthly = () => {
  return (
    <>
      <div class="col-md-9 mt-4 mx-auto">
        <div class="row my-4 mx-auto">
          <div class="col-md-6 mt-5">
            <div class="">
              <img
                className="w-75"
                src="https://i.ibb.co/hMzBzMF/million-job.png"
                alt=""
              />
            </div>
          </div>
          {/* tttt */}
          <div class="col-md-6 mt-5 rounded searchArea">
            <Search />
          </div>
        </div>
      </div>
    </>
  );
};

export default Monthly;

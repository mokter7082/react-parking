import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import MyNav from "../../../Shared/TopHeader/MyNav/MyNav";
import TopHeader from "../../../Shared/TopHeader/TopHeader";
import Datatable from "../../Datatable/Datatable";
import Monthly from "./Monthly/Monthly";

const MonthlyContainer = () => {
  return (
    <>
      <MyNav />
      <Monthly />
      <Datatable />
      <Footer />
    </>
  );
};

export default MonthlyContainer;

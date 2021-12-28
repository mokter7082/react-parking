import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home/Home";
import { Route, Routes } from "react-router-dom";
import RequestParking from "./components/Main/Pages/RequestParking/RequestParking";
import MonthlyContainer from "./components/Main/Pages/MonthlyContainer/MonthlyContainer";
import AuthProvider from "./Context/AuthProvider";
import RepairContainer from "./components/Pages/RepairContainer/RepairContainer";
import InsuranceContainer from "./components/Pages/InsuranceContainer/InsuranceContainer";
import AssessoricesContainer from "./components/Pages/AssessoricesContainer/AssessoricesContainer";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request-parking" element={<RequestParking />} />
          <Route path="/monthly" element={<MonthlyContainer />} />
          <Route path="/repair" element={<RepairContainer />} />
          <Route path="/insurance" element={<InsuranceContainer />} />
          <Route path="/assessories" element={<AssessoricesContainer />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

import React from "react";
import useTitle from "../../../hooks/useTitle/useTitle";
import Navbar from "../../../shared/Navbar/Navbar";

const DashBoard = () => {
  useTitle("Dashboard");
  return (
    <div>
      <Navbar></Navbar>
      this is dash board
    </div>
  );
};

export default DashBoard;

import React from "react";
import useTitle from "../../../hooks/useTitle/useTitle";
import Banner from "../Banner/Banner";
import BusinessInfo from "../BusinessInfo/BusinessInfo";

const Home = () => {
  useTitle("Home");

  return (
    <div className="mx-5">
      <Banner></Banner>
      <BusinessInfo></BusinessInfo>
    </div>
  );
};

export default Home;

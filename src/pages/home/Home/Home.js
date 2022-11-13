import React from "react";
import useTitle from "../../../hooks/useTitle/useTitle";
import Terms from "../../Terms/Terms";
import Banner from "../Banner/Banner";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
import ContactForm from "../ContactForm/ContactForm";
import HomeAppointment from "../HomeAppointment/HomeAppointment";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  useTitle("Home");

  return (
    <div className="mx-5">
      <Banner></Banner>
      <BusinessInfo></BusinessInfo>
      <Services></Services>
      <Terms></Terms>
      <HomeAppointment></HomeAppointment>
      <Testimonials></Testimonials>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;

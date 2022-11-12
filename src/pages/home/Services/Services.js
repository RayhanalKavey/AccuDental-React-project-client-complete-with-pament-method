import React from "react";
import whitening from "../../../assets/images/whitening.png";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import Service from "./Service";
const Services = () => {
  const serviceDetails = [
    {
      id: 1,
      img: "",
      title: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      pic: fluoride,
    },

    {
      id: 2,
      img: "",
      title: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      pic: cavity,
    },
    {
      id: 3,
      img: "",
      title: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      pic: whitening,
    },
  ];
  return (
    <div>
      <div></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-evenly mt-32">
        {serviceDetails.map((serviceDetail) => (
          <Service
            serviceDetail={serviceDetail}
            key={serviceDetail.id}
          ></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;

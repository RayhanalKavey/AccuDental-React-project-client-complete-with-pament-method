import React from "react";
import whitening from "../../../assets/images/whitening.png";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import Service from "./Service";
import SmallHeading from "../../../shared/component/SmallHeading/SmallHeading";
import PrimaryHeading from "../../../shared/component/PrimaryHeading/PrimaryHeading";
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
    <div className=" mt-32">
      <div className="text-center mb-8">
        <SmallHeading customStyle="mb-3">Our Services</SmallHeading>
        <PrimaryHeading>Service We Provide</PrimaryHeading>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-evenly">
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

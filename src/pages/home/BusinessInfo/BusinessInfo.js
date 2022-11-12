import React from "react";
import phone from "../../../assets/icons/phone.svg";
import marker from "../../../assets/icons/marker.svg";
import clock from "../../../assets/icons/clock.svg";
import BusinessInfoCard from "./BusinessInfoCard";
const BusinessInfo = () => {
  const cards = [
    {
      id: 1,
      title: "Opening Hours",
      description: "Lorem Ipsum is simply dummy text of the pri",
      svg: clock,
      customCss: "bg-gradient-to-r from-primary to-secondary text-info",
    },
    {
      id: 2,
      title: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      svg: marker,
      customCss: "bg-accent text-info",
    },
    {
      id: 3,
      title: "Contact us now",
      description: "+000 123 345645643645",
      svg: phone,
      customCss: "bg-gradient-to-r from-primary to-secondary text-info",
    },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-evenly mt-32">
      {cards?.map((card) => (
        <BusinessInfoCard key={card.id} card={card}></BusinessInfoCard>
      ))}
    </div>
  );
};

export default BusinessInfo;

import React from "react";

const Testimonial = ({ review }) => {
  const { id, img, name, area, description } = review;
  return (
    <div className="radius-lg shadow-lg p-5">
      <div className="mb-2"> {description}</div>
      <div className="flex gap-5 align-center ">
        <img className="w-16" src={img} alt="" />
        <div>
          <h1 className="font-bold">{name}</h1>
          <p>{area}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

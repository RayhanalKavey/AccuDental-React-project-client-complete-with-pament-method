import React from "react";
import PrimaryHeading from "../../../shared/component/PrimaryHeading/PrimaryHeading";
import SmallHeading from "../../../shared/component/SmallHeading/SmallHeading";
import customer1 from "../../../assets/images/people1.png";
import customer2 from "../../../assets/images/people2.png";
import customer3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const customerReviews = [
    {
      id: 1,
      img: customer1,
      name: "Winson Herry",
      area: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 2,
      img: customer2,
      name: "Winson Herry",
      area: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 3,
      img: customer3,
      name: "Winson Herry",
      area: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div className="mb-32">
      <div className="text-center  mb-8">
        <SmallHeading customStyle={"mb-3"}>Testimonial</SmallHeading>
        <PrimaryHeading>What Our Patients Says</PrimaryHeading>
      </div>
      <div className="flex md:flex-row flex-col  gap-6 ">
        {customerReviews.map((review) => (
          <Testimonial key={review.id} review={review}></Testimonial>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

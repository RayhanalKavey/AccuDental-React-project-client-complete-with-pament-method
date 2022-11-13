import React from "react";
import treatment from "../../assets/images/treatment.png";
import ButtonMain from "../../shared/component/ButtonMain/ButtonMain";

const Terms = () => {
  return (
    <section className="card lg:card-side bg-base-100  my-32 w-4/5 mx-auto">
      <figure className=" md:w-1/2 mx-auto">
        <img className="p-6" src={treatment} alt="Album" />
      </figure>
      <div className="flex flex-col justify-center items-start gap-5 lg:w-1/2">
        <h2 className="card-title text-4xl">
          Exceptional Dental Care, on Your Terms
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div className="card-actions justify-end">
          <ButtonMain>Get Started</ButtonMain>
        </div>
      </div>
    </section>
  );
};

export default Terms;

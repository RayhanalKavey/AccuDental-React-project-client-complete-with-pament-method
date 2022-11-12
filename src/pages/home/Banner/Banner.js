import React from "react";
import chair from "../../../assets/images/chair.png";
import ButtonMain from "../../../shared/component/ButtonMain/ButtonMain";

const Banner = () => {
  return (
    <div className="hero  bg-base-100 px-[38px]">
      <div className="hero-content flex-col lg:flex-row-reverse gap-7 mt-14">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your new style start here.</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <ButtonMain>Get Started</ButtonMain>
        </div>
      </div>
    </div>
  );
};

export default Banner;

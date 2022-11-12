import React from "react";

const BusinessInfoCard = ({ card }) => {
  const { svg, title, description, customCss } = card;
  return (
    <section
      className={`card card-side   shadow-xl p-[32px] flex-col  lg:flex-row  ${customCss}`}
    >
      <figure>
        <img className="w-1/5 lg:w-full" src={svg} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">${title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default BusinessInfoCard;

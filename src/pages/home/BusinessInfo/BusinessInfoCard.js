import React from "react";

const BusinessInfoCard = ({ card }) => {
  const { svg, title, description, customCss } = card;
  return (
    <section
      className={`card card-side bg-base-100 shadow-xl p-[32px]  ${customCss}`}
    >
      <figure>
        <img src={svg} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">${title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default BusinessInfoCard;

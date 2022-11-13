import React from "react";

const Service = ({ serviceDetail }) => {
  const { id, title, description, pic, customCss } = serviceDetail;
  return (
    <section
      className={`card card-side   shadow-xl p-[32px] flex-col   ${customCss}`}
    >
      <figure>
        <img className="w-28 " src={pic} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">${title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Service;

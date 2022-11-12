import React from "react";

const ButtonMain = ({ children, customStyle, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`btn btn-secondary bg-gradient-to-r from-primary to-secondary text-info ${customStyle}`}
    >
      {children}
    </button>
  );
};

export default ButtonMain;

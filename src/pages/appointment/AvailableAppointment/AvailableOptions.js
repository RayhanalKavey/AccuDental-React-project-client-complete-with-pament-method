import React from "react";

const AvailableOptions = ({ option, setTreatment }) => {
  const { name, slots } = option;
  return (
    <div className="card  bg-base-100 shadow-xl w-full items-center">
      <div className="card-body">
        <h2 className="card-title text-primary text-2xl">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "No slot available"}</p>
        <p>
          {slots.length && slots.length} {slots.length > 1 ? "slots" : "slot"}{" "}
          available.
        </p>
        <div className="card-actions justify-center mt-2">
          {/* <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">
            Book Appointment
          </button> */}
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(option)}
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary"
            htmlFor="booking-modal"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AvailableOptions;

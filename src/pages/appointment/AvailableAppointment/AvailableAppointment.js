import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import SmallHeading from "../../../shared/component/SmallHeading/SmallHeading";
import BookingModal from "../BookingModal/BookingModal";
import AvailableOptions from "./AvailableOptions";

const AvailableAppointment = ({ selectDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);

  return (
    <section className="my-10 text-center">
      <SmallHeading>
        The selected Date is: {format(selectDate, "PP")}
      </SmallHeading>
      <div className="grid  md:grid-cols-2  lg:grid-cols-3 mx-6 gap-6 mt-4">
        {appointmentOptions.map((option) => (
          <AvailableOptions
            option={option}
            key={option._id}
            setTreatment={setTreatment}
          ></AvailableOptions>
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment}></BookingModal>}
    </section>
  );
};

export default AvailableAppointment;

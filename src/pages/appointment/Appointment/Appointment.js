import React, { useState } from "react";
import useTitle from "../../../hooks/useTitle/useTitle";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";
import BannerAppoint from "../BannerAppoint/BannerAppoint";

const Appointment = () => {
  useTitle("Appointment");
  const [selectDate, setSelectDate] = useState(new Date());
  return (
    <div>
      <BannerAppoint
        selectDate={selectDate}
        setSelectDate={setSelectDate}
      ></BannerAppoint>
      <AvailableAppointment
        selectDate={selectDate}
        setSelectDate={setSelectDate}
      ></AvailableAppointment>
    </div>
  );
};

export default Appointment;

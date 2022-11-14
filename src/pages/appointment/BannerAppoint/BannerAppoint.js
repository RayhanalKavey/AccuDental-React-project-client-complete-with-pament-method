import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../../assets/images/chair.png";
import bgImg from "../../../assets/images/bg.png";

const BannerAppoint = ({ selectDate, setSelectDate }) => {
  return (
    <header>
      <div
        style={{ background: `url(${bgImg})`, backgroundSize: "cover" }}
        className="hero"
      >
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 my-24 w-1/2">
          <img src={chair} className=" rounded-lg shadow-2xl" alt="" />
          <div className="w-1/2">
            <DayPicker
              mode="single"
              selected={selectDate}
              onSelect={setSelectDate}
            ></DayPicker>
            The selected Date is: {format(selectDate, "PP")}
          </div>
        </div>
      </div>
    </header>
  );
};

export default BannerAppoint;

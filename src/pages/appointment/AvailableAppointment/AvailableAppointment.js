import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import SmallHeading from "../../../shared/component/SmallHeading/SmallHeading";
import BookingModal from "../BookingModal/BookingModal";
import AvailableOptions from "./AvailableOptions";

const AvailableAppointment = ({ selectDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  //use query to lead data starT
  //use isLoading or set the default value of the fetching data.
  //queryKey will be searching parameter, dependencies, etc

  ///notE normal way
  // const {
  //   data: appointmentOptions = [],
  //   // isLoading,
  //   isError,
  //   error,
  // } = useQuery({
  //   queryKey: ["appointmentOptions"],
  //   queryFn: () =>
  //     fetch("http://localhost:5005/appointmentOptions").then((res) =>
  //       res.json()
  //     ),
  // });
  ///notE with async await
  const { data: appointmentOptions = [] } = useQuery({
    queryKey: ["appointmentOptions"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5005/appointmentOptions");
      const data = await res.json();
      return data;
    },
  });
  //use query to lead data enD

  // useEffect(() => {
  //   fetch("http://localhost:5005/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);

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
      {treatment && (
        <BookingModal
          selectDate={selectDate}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;

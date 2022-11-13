import React from "react";
import doctor from "../../../assets/images/doctor.png";
import ButtonMain from "../../../shared/component/ButtonMain/ButtonMain";
import SmallHeading from "../../../shared/component/SmallHeading/SmallHeading";
import appointment from "../../../assets/images/appointment.png";

const HomeAppointment = () => {
  return (
    <section
      className="mb-32 mt-40 px-12 "
      style={{ background: `url(${appointment})` }}
    >
      <div className="grid  lg:grid-cols-2 items-center justify-center   bg-inf ">
        <figure className="hidden md:block">
          <img className="-mt-40 " src={doctor} alt="Album" />
        </figure>
        <div className="flex  flex-col gap-6 text-info py-8">
          <SmallHeading>Appointment</SmallHeading>
          <h2 className=" font-semibold text-4xl">Make an appointment Today</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <div className="flex ">
            <ButtonMain>Get Appointment</ButtonMain>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAppointment;

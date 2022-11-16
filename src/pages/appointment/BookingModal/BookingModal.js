import { format } from "date-fns/esm";
import React from "react";

const BookingModal = ({ treatment, selectDate, setTreatment }) => {
  // console.log(treatment);
  const { name, slots } = treatment;
  const date = format(selectDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const patientName = form.name.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      patientName,
      slot,
      phone,
      email,
    };
    console.log(booking);
    form.reset();
    setTreatment(null);
  };
  return (
    <>
      {/* The button to open modal
      <label htmlFor="my-modal-3" className="btn">
        open modal
      </label> */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-5">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="flex flex-col m-5 gap-3"
            action=""
          >
            <input
              type="text"
              placeholder="Selected date"
              className="input input-bordered w-full "
              defaultValue={date}
              readOnly
            />
            <select
              className="select select-bordered w-full max-w-xs"
              name="slot"
            >
              {slots.map((slot, idx) => (
                <option key={idx}>{slot}</option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              placeholder="Full name"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered w-full "
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full "
            />
            <input
              className="btn btn-secondary bg-gradient-to-r from-primary to-secondary "
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

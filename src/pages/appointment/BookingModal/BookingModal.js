import React from "react";

const BookingModal = ({ treatment }) => {
  console.log(treatment);
  const { name, slots } = treatment;

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
          <form className="flex flex-col m-5 gap-3" action="">
            <input
              type="text"
              placeholder="Full name"
              className="input input-bordered w-full "
              readOnly
            />
            <input
              type="text"
              placeholder="Full name"
              className="input input-bordered w-full "
              readOnly
            />
            <input
              type="text"
              placeholder="Full name"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Phone number"
              className="input input-bordered w-full "
            />

            <input
              type="email"
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

import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
// import { useNavigation } from "react-day-picker";

import Loading from "../../../shared/component/Loading/Loading";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  const { treatment, price, slot, appointmentDate } = booking;
  // console.log("booking data", booking);
  if (navigation?.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-3xl text-center my-10">Payment</h2>
      <h3 className="text-xl font-semibold">Payment for {booking.treatment}</h3>
      <p>
        Please pay <strong>${booking.price}</strong> for you appointment on{" "}
        <strong> {appointmentDate}</strong> at <strong>{slot}</strong>{" "}
      </p>
      <div className="text-accent w-96 my-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

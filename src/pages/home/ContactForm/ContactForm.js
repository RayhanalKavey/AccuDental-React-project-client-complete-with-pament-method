import React from "react";
import PrimaryHeading from "../../../shared/component/PrimaryHeading/PrimaryHeading";
import SmallHeading from "../../../shared/component/SmallHeading/SmallHeading";

const ContactForm = () => {
  return (
    <section className="flex flex-col bg-info py-16  ">
      <div className="text-center">
        <SmallHeading customStyle={"mb-2 "}>Contact us</SmallHeading>
        <PrimaryHeading customStyle={"mb-8 text-3xl md:text-4xl"}>
          Stay connected With Us
        </PrimaryHeading>
      </div>
      <form
        className="flex flex-col px-4 w-full md:w-1/3 mx-auto gap-5"
        action=""
      >
        <input
          className="py-2 rounded px-3"
          type="text"
          name="email"
          id=""
          placeholder="Email"
        />
        <input
          className="py-2 rounded px-3"
          type="text"
          name="subject"
          id=""
          placeholder="Subject"
        />
        <textarea
          className="py-2 rounded px-3"
          name="message"
          placeholder="Your message"
        ></textarea>
      </form>
    </section>
  );
};

export default ContactForm;

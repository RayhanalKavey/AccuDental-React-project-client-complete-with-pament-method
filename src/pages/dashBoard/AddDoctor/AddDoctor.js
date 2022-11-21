import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../../shared/component/Loading/Loading";

const AddDoctor = () => {
  //------------- redirect user
  const navigate = useNavigate();

  //Hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // React query
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5005/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });
  //image bb image hosting key
  const imageHostKey = process.env.REACT_APP_imagebb_key;
  // console.log(imageHostKey);

  ///Add doctor handler notE image hosting starT
  const handleAddDoctor = (data) => {
    // console.log(data?.image[0]);
    const image = data?.image[0];
    const formData = new FormData();
    formData.append("image", image);
    // send image to the dedicated image hosting server
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const imageURL = imgData.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imageURL,
          };
          //save doctor information to the database
          fetch(`http://localhost:5005/doctors`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },

            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              // console.log(result);
              toast.success(`${data.name} is added`);
              // //Navigate user to the desired path
              navigate("/dashboard/managedoctors");
            });
        }
      });
    ///Add doctor handler notE image hosting enD
  };
  //Check loading of getting the data
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className=" w-96 flex flex-col  shadow-xl p-10 m-10 ">
      <h2 className="text-3xl text-center">Add Doctors</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        {/* daisy ui */}
        <div className="form-control w-full max-w-xs">
          {/* ParT name */}
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required !" })}
            className="input input-bordered w-full max-w-xs"
            placeholder="Your name"
          />
          {/* erroR message */}
          {errors.name && (
            <p className="text-error mt-1"> {errors.name?.message}</p>
          )}
          {/*ParT email */}
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email address is required !",
            })}
            className="input input-bordered w-full max-w-xs"
            placeholder="Your email"
          />
          {/* Show email erroRs */}
          {errors.email && (
            <p className="text-error mt-1" role="alert">
              {errors.email?.message}
            </p>
          )}{" "}
          {/* ParT Select */}
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled>Please Select a Specialty</option>
            {specialties?.map((specialty) => (
              <option
                {...register("specialty")}
                value={specialty?.name}
                key={specialty?._id}
              >
                {specialty?.name}
              </option>
            ))}
          </select>
          {/* ParT photo */}
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", { required: "Name is required !" })}
            className="file-input file-input-bordered w-full max-w-xs"
            placeholder="Your Photo"
          />
          {/* erroR message */}
          {errors.image && (
            <p className="text-error mt-1"> {errors.image?.message}</p>
          )}
        </div>

        <input
          className="btn btn-secondary w-full mt-5 mb-1"
          type="submit"
          value="Add Doctor"
        />
        {/* {signUpError && (
          <label className="label">
            <span className="label-text-alt text-error">{signUpError}</span>
          </label>
        )} */}
      </form>
    </div>
  );
};

export default AddDoctor;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle/useTitle";

const Login = () => {
  useTitle("LogIn");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-[800px]">
      <div className="w-96 p-7 shadow-2xl">
        {" "}
        <h1 className="text-3xl my-5 text-center">Login</h1>
        {/* From react hook form */}
        <form onSubmit={handleSubmit(handleLogin)}>
          {/* daisy ui */}
          <div className="form-control w-full max-w-xs">
            {/*ParT email */}
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email address is required!" })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Your email"
            />
            {/* Show email erroRs */}
            {errors.email && (
              <p className="text-error mt-1" role="alert">
                {errors.email?.message}
              </p>
            )}{" "}
            {/* ParT password */}
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Your password"
            />
            {/* Show password erroRs */}
            {errors.password && (
              <p className="text-error mt-1">{errors.password?.message}</p>
            )}{" "}
            <label className="label">
              <span className="label-text-alt">Forget password?</span>
            </label>
          </div>
          {/* daisy ui */}

          <input
            className="btn btn-secondary w-full mt-5 mb-1"
            type="submit"
            value="Login"
          />
        </form>
        <p className="text-center">
          New to AccuDental?{" "}
          <Link className="text-secondary" to={"/signup"}>
            Create new Account
          </Link>{" "}
        </p>
        <div className="divider">or</div>
        <input
          className="btn btn-secondary w-full btn-outline"
          type="submit"
          value="Sign in with Google"
        />
      </div>
    </div>
  );
};

export default Login;

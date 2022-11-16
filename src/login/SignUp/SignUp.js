import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle/useTitle";

const SignUp = () => {
  useTitle("Sign Up");
  // const [reload, setRelod] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile, googleLogin, user, setUser } =
    useContext(AuthContext);

  const [signUpError, setSignUpError] = useState();
  //==========
  //------------- redirect user
  const navigate = useNavigate();
  //------------- user location where they want to go
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //LogIn/sign up with google
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;

        toast.success(`Welcome ${user?.displayName}`);
        setUser(user);

        //Navigate user to the desired path
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  //==========
  const handleSignUp = (data) => {
    const { name, email, password, photoURL } = data;
    setSignUpError("");
    ///create user with email and password
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success(`Welcome ${user?.displayName}`);

        //Navigate user to the desired path
        navigate(from, { replace: true });

        handleUpdateUserProfile(name, photoURL);
      })
      .catch((error) => {
        setSignUpError(error.message);
      });
  };

  //reload page after create a user
  // useEffect(() => {
  //   user?.photoURL && window.location.reload();
  // }, [use]);
  //  update user when cheating.// we also update using this in the profile
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then((result) => {})
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center h-[800px]">
      <div className="w-96 p-7 shadow-2xl">
        {" "}
        <h1 className="text-3xl my-5 text-center">Sign Up</h1>
        {/* From react hook form */}
        <form onSubmit={handleSubmit(handleSignUp)}>
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
            {/* ParT photoUrl */}
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              {...register("photoURL")}
              className="input input-bordered w-full max-w-xs"
              placeholder="Your Photo"
            />
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
            {/* ParT password */}
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required !",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character or longer.",
                },
                pattern: {
                  value: /(?=.*[A-Z].*[A-Z])(?=.*[!#@$%&? "])/,
                  message:
                    "Ensure password has two uppercase and one special case letter.",
                  // value: /(?=.*[!#@$%&? "])/,
                  // message: "Ensure password has one special case letter.",
                },
                // validate: (value) => value === /(?=.*[!#@$%&? "])/,
              })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Your password"
            />
            {/* Show password erroRs */}
            {errors.password && (
              <p className="text-error mt-1" role="alert">
                {errors.password?.message}
              </p>
            )}{" "}
          </div>
          {/* daisy ui */}

          {/* <select {...register("category", { required: true })}>
            <option value="">Select...</option>
            <option value="A">Option A</option>
            <option value="B">Option B</option>
          </select> */}
          {/* <textarea {...register("aboutYou")} placeholder="About you" /> */}
          {/* <p>{data}</p> */}

          <input
            className="btn btn-secondary w-full mt-5 mb-1"
            type="submit"
            value="Sign Up"
          />
          {signUpError && (
            <label className="label">
              <span className="label-text-alt text-error">{signUpError}</span>
            </label>
          )}
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-secondary" to={"/login"}>
            Login
          </Link>{" "}
        </p>
        <div className="divider">or</div>
        <input
          onClick={handleGoogleLogin}
          className="btn btn-secondary w-full btn-outline"
          type="submit"
          value="Sign in with Google"
        />
      </div>
    </div>
  );
};

export default SignUp;

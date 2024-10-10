import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ISignUp } from "../models/ISignUp";

const SignUpPage = () => {
  const { register, handleSubmit } = useForm<ISignUp>(); // Specify ISignUp type here
  const navigate = useNavigate();
  const handleSignUp: SubmitHandler<ISignUp> = (signupCredentials) => {
    const signUp = async () => {
      try {
        console.log("Sign", signupCredentials);
        const response = await axios.post(
          "http://localhost:3001/api/v1/auth/signup",
          signupCredentials
        );
        console.log(response.data);
        navigate("/auth/login");
      } catch (err) {
        console.log(err);
      }
    };

    signUp();
  };

  return (
    <>
      <Helmet>
        <title>Sign up </title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card shadow-lg border-0">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit(handleSignUp)}>
                  <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      {...register("name", {
                        required: "Name is required",
                      })}
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Name</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <button className="btn btn-primary w-100 py-2" type="submit">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;

import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IEmployee } from "../../models/IEmployee";

const AddEmployee = () => {
  // Pass Employee interface as the generic type to useForm
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<IEmployee>({
    mode: "onChange",
  });
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  console.log(isSubmitting);
  const onAddEmployeeSubmit = (formData: IEmployee) => {
    console.log(formData);
    // send the above formData to the REST API
    /*
          1. What's the REST API Endpoint? https://jsonplaceholder.typicode.com/users
          2. What's the HTTP Method? POST
          3. What's the REST API Client? fetch API (part of JS), axios (npm i axios)
        */
    setIsSaved(false);
    setIsError(false);
    axios
      .post("https://jsonplaceholder.typicode.com/users", formData)
      .then((res: any) => {
        console.log(res);
        setIsSaved(true);
      })
      .catch((err: any) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        console.log("It is over!");
        reset();
      });
  };

  return (
    <div>
      <Helmet>
        <title>Add Employee</title>
      </Helmet>
      <h1>Add Employee</h1>
      <Link to="/employee-manager" className="btn btn-link">
        Go Back
      </Link>
      <form
        className="col-md-6 offset-md-3"
        onSubmit={handleSubmit(onAddEmployeeSubmit)}
      >
        <div className="form-group row mb-3">
          <label className="col-sm-2 col-form-label" htmlFor="nameInput">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="nameInput"
              className={errors.name? "form-control is-invalid" : "form-control"}
              {...register("name", {
                required: "Name is required",
                maxLength: {
                  value: 20,
                  message: "Name must be less than 20 characters",
                },
              })}
              placeholder="Enter Name"
            />
            <div className="invalid-feedback">{errors?.name?.message}</div>
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="phoneInput" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="phoneInput"
              className={errors.phone? "form-control is-invalid" : "form-control"}
              {...register("phone", {
                required: "Phone Number is required",
                maxLength: {
                  value: 10,
                  message: "Phone number cannot exceed beyond 10 characters",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numbers are allowed",
                },
              })}
              placeholder="Enter Phone"
            />
             <div className="invalid-feedback">{errors?.phone?.message}</div>
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="emailInput" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              id="emailInput"
              className={errors.email? "form-control is-invalid" : "form-control"}
              {...register("email", { required: "Email address is required" })}
              placeholder="Enter Email"
            />
           <div className="invalid-feedback">{errors?.email?.message}</div>
          </div>
        </div>

        {isSaved && (
          <div className="alert alert-success">Saved Successfully</div>
        )}

        {isError && (
          <div className="alert alert-danger">
            Some Error Occurred. Try again later!
          </div>
        )}

        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!isValid || isSubmitting} // Disable button when form is invalid or submitting
            >
              {isSubmitting ? "Submitting..." : "Submit"} {/* Button label */}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;

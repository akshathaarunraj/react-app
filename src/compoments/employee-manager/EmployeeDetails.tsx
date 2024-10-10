/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { IEmployee } from "../../models/IEmployee";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";


const EmployeeDetails = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [employee, setEmployee] = useState<IEmployee>();
  const { handleSubmit } = useForm<IEmployee>();
  const [updatedEmployee, setUpdatedEmployee] = useState<IEmployee>();
  //reading url params using react-router-dom  (params passed in app.tsx router should be same)

  const { employeeId } = useParams();

  const fetchUserDeatils = async () => {
    try {
      console.log(employeeId);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${employeeId}`
      );
      console.log(response);
      setEmployee(response.data);
      setUpdatedEmployee(response.data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);

      console.log("its over");
    }
  };

  const updateEmployeeDetails = async () => {
    try {
      console.log(updatedEmployee);
      if (!updatedEmployee) return;
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${employeeId}`,
        updatedEmployee
      );
      console.log("Update", response);
      toast.success(`Employee ${employeeId} details Updated successfully`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } catch (error) {
      console.log(error);
      toast.error("Unable to update the employee details !!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } finally {
      console.log("fun ended");
    }
  };

  const deletUser = async () => {
    try {
      console.log(employeeId);
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${employeeId}`
      );
      console.log(response);
      toast.success(`Employee ${employeeId} deleted successfully`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } catch (error) {
      toast.error("Unable to delete the employee !!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      console.log(error);
    } finally {
      console.log("fun ended");
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (updatedEmployee) {
      setUpdatedEmployee({
        ...updatedEmployee,
        [e.target.name]: e.target.value,
      });
    }
  };

  useEffect(() => {
    fetchUserDeatils();
  }, []);

  return (
    <>
      <Helmet>
        <title>View Employee Details</title>
      </Helmet>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/employee-manager">Employees</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Employee Details
          </li>
        </ol>
      </nav>
      <h1>Employee Details</h1>

      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {isError && (
        <div className="alert alert-danger" role="alert">
          Something went wrong! Unable to load employee details for Employee Id:{" "}
          {employeeId}
        </div>
      )}

      {employee && (
        <>
          <Link to="/employee-manager" className="btn btn-link">
            Go Back
          </Link>
          <div className="card">
            <div className="card-header">
              You are seeing details of Employee ID: {employee?.id}
            </div>
            <div className="card-body">
              <h5 className="card-title">Name: {employee.name}</h5>
              <p className="card-text">Email: {employee.email}</p>
              <p className="card-text">Phone: {employee.phone}</p>
              {/* <Link to="edit" className="btn btn-primary">
                Edit
              </Link> */}
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Edit
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Edit Employee Deatils
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <form
                        className="col-md-10 offset-md-2"
                        // onSubmit={handleSubmit(onAddEmployeeSubmit)}
                      >
                        <div className="form-group row mb-3">
                          <label
                            className="col-sm-4 col-form-label"
                            htmlFor="nameInput"
                          >
                            Name
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              id="nameInput"
                              className="form-control"
                              name="name"
                              value={updatedEmployee?.name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="form-group row mb-3">
                          <label
                            htmlFor="phoneInput"
                            className="col-sm-4 col-form-label"
                          >
                            Phone
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              id="phoneInput"
                              className="form-control"
                              name="phone"
                              value={updatedEmployee?.phone}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="form-group row mb-3">
                          <label
                            htmlFor="emailInput"
                            className="col-sm-4 col-form-label"
                          >
                            Email
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="email"
                              id="emailInput"
                              className="form-control"
                              name="email"
                              value={updatedEmployee?.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleSubmit(updateEmployeeDetails)}
                      >
                        Update Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-outline-danger"
                style={{ marginLeft: "2rem" }}
                onClick={deletUser}
              >
                Delete
              </button>
              <ToastContainer />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EmployeeDetails;

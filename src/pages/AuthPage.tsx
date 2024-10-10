import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const AuthPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { saveToken } = useAuth();
  console.log(saveToken);

  const handleLogin = (loginCredentials: any) => {
    const login = async () => {
      try {
        const response = await axios.post(
          "https://reqres.in/api/login",
          loginCredentials
        );
        console.log(response.data); // json web token (JWT) comes as response
        saveToken(response.data.token);
        // TODO: redirect to employee-manager page using react-router-dom
        navigate("/employee-manager"); // TODO: redirect to appropriate page later
      } catch (err) {
        console.log(err);
        // TODO: show error message
      }
    };

    login();
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card shadow-lg border-0">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit(handleLogin)}>
                  <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      value="eve.holt@reqres.in"
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
                      value="cityslicka"
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
                    Sign in
                  </button>

                  <div className="mt-3">
                    <p className="text-center">
                      <a href="#" className="text-muted">
                        Forgot password?
                      </a>
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className="text-center">
                    <Link  to={'/signUp'}>Sign UP</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;

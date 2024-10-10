import { Helmet } from "react-helmet-async";
import "../index.scss";

const HomePage = () => {
  return (
    <div className="my-5">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <h1 className="app">Welcome to React Bosch App</h1>
        <h2 className="appText">Demonstration of SCSS </h2>
        <p className="col-lg-8 mx-auto fs-5 red-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum nihil
          adipisci perferendis unde architecto quisquam blanditiis commodi
          assumenda nisi sit quae, ducimus vero exercitationem deserunt
          asperiores non soluta quidem atque
        </p>
        <div className="d-inline-flex gap-2 mb-5">
          <button
            className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
            type="button"
          >
            Browse Netflix
          </button>
          <button
            className="btn btn-outline-secondary btn-lg px-4 rounded-pill"
            type="button"
          >
            Manage Employees
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

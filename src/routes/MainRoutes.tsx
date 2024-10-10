import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AnnualReport from "../compoments/about/AnnualReport";
import Leadership from "../compoments/about/Leadership";
import OurHistory from "../compoments/about/OurHistory";
import AddEmployee from "../compoments/employee-manager/AddEmployee";
import EmployeeDetails from "../compoments/employee-manager/EmployeeDetails";
import AboutPage from "../pages/AboutPage";
import AuthPage from "../pages/AuthPage";

import EmployeeManagerPage from "../pages/EmployeeManagerPage";
import HomePage from "../pages/HomePage";

import ProductsPage from "../pages/ProductsPage";
import TodosPage from "../pages/TodosPage";
import ProtectedRoutes from "./ProtectedRoutes";
import SignUpPage from "../pages/SignUpPage";

// Lazy loading the components
const NetflixPage = lazy(() => import("../pages/NetflixPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));

const MainRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* The following routes are publicly accessible */}
        <Route path="/" element={<HomePage />} />
        {/* sign Up */}

        <Route path="/signUp" element={<SignUpPage />}/>
        {/* <Route path="/" element={<Navigate to="/signUp" />} /> */}
        <Route path="/netflix" element={<NetflixPage />} />
        {/* Nested Routes for about page*/}
        <Route path="/about" element={<AboutPage />}>
          <Route path="leadership" element={<Leadership />} />
          <Route path="our-history" element={<OurHistory />} />
          <Route path="annual-report" element={<AnnualReport />} />
        </Route>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/auth/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<AuthPage />} />

        {/* The following routes are protected */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/employee-manager" element={<EmployeeManagerPage />} />
          <Route path="/employee-manager/add" element={<AddEmployee />} />
          {/* Dynaminc Routing  ---- url param*/}
          <Route
            path="/employee-manager/:employeeId"
            element={<EmployeeDetails />}
          />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;

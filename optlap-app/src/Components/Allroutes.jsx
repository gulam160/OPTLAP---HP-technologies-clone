import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home";
import LoginPage from "../Pages/login";
import Products from "../Pages/Products";
import PrivateRoute from "../Context/PrivateRoutes";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route
        path="/products"
        element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Allroutes;

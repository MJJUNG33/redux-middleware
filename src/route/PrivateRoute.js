import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetailPage from "../page/ProductDetailPage";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const authenticate= useSelector(state => state.auth.authenticate)

  if (!authenticate) {
    return <Navigate to="/login" />;
  } else {
    return <ProductDetailPage />;
  }
};

export default PrivateRoute;

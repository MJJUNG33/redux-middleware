import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetailPage from "../page/ProductDetailPage";

const PrivateRoute = ({ authenticate }) => {
  if (!authenticate) {
    return <Navigate to="/login" />;
  } else {
    return <ProductDetailPage />;
  }
};

export default PrivateRoute;

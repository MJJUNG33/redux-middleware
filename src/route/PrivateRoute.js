import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetailPage from "../page/ProductDetailPage";

const PrivateRoute = ({ authenticate }) => {
  if (!authenticate) {
    console.log("authenticate", authenticate);
    return <Navigate to="/login" />;
  } else {
    console.log("authenticate", authenticate);
    return <ProductDetailPage />;
  }
};

export default PrivateRoute;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  let { id } = useParams();

  const getProductDetail = async () => {
    const url = `https://my-json-server.typicode.com/MJJUNG33/shopping-mall/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return <div></div>;
};

export default ProductDetailPage;

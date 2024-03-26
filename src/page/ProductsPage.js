import React, { useEffect, useState } from "react";
import ProductsCard from "../component/ProductsCard";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const url = "http://localhost:5000/products";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <ProductsCard products={products} />
    </div>
  );
};

export default ProductsPage;

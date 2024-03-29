// import React, { useEffect, useMemo, useState } from "react";
// import ProductsCard from "../component/ProductsCard";
// import { Container, Col, Row } from "react-bootstrap";
// import { useSearchParams } from "react-router-dom";

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [query, setQuery] = useSearchParams();

//   const getProducts = async () => {
//     const searchQuery = query.get("q") || "";
//     console.log("what os qeury?", searchQuery);
//     // const url = `https://my-json-server.typicode.com/MJJUNG33/shopping-mall/products?q=${searchQuery}`;
//     const url = `http://localhost:5000/products?q=${searchQuery}`;

//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     setProducts(data);
//   };

//   const serachProduct = useMemo(() => {
//     return products.filter((product) => {
//       product.title.toLowerCase().include(query.get("q").toLowerCase());
//     });
//   }, [products, query]);

//   useEffect(() => {
//     getProducts();
//   }, [query]);

//   return (
//     <Container className="mt-5 mb-5">
//       <Row xs={1} md={2} lg={4} className="align-items-start m-1 product-list">
//         {products.map((product, i) => {
//           return (
//             <Col key={i}>
//               <ProductsCard product={product} />
//             </Col>
//           );
//         })}
//       </Row>
//     </Container>
//   );
// };

// export default ProductsPage;

import React, { useEffect, useState, useMemo } from "react";
import ProductsCard from "../component/ProductsCard";
import { Container, Col, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [query] = useSearchParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const searchQuery = query.get("q") || "";
        console.log("Search query:", searchQuery);
        const url = `http://localhost:5000/products?q=${searchQuery}`;
        console.log("API URL:", url);
        const response = await fetch(url);
        const data = await response.json();
        console.log("API Response:", data);
        setProducts(data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };
    getProducts();
  }, [query]);

  const filteredProducts = useMemo(() => {
    const queryValue = query.get("q");
    if (!queryValue || queryValue === "") {
      return products;
    } else {
      return products.filter((product) =>
        product.title.toLowerCase().includes(queryValue.toLowerCase())
      );
    }
  }, [products, query]);

  return (
    <Container className="mt-5 mb-5">
      {filteredProducts.length === 0 ? (
        <div className="text-center">
          Sorry, there are no products for "{query.get("q")}"
        </div>
      ) : (
        <Row
          xs={1}
          md={2}
          lg={4}
          className="align-items-start m-1 product-list"
        >
          {filteredProducts.map((product, i) => (
            <Col key={i}>
              <ProductsCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};
export default ProductsPage;

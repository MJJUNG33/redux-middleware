import React, { useEffect, useState } from "react";
import ProductsCard from "../component/ProductsCard";
import { Container, Col, Row } from "react-bootstrap";

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
      <Container className="mt-5 mb-5">
        <Row
          xs={1}
          md={2}
          lg={4}
          className="align-items-start m-1 product-list"
        >
          {products.map((product, i) => {
            return (
              <Col key={i}>
                <ProductsCard product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ProductsPage;

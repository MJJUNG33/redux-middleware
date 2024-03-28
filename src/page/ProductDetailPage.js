import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const getProductDetail = async () => {
    const url = `https://my-json-server.typicode.com/MJJUNG33/shopping-mall/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center mb-2"
    >
      <Col xs={12}>
        <Image src={product.img} alt={product.title} fluid />
      </Col>
      <Col xs={12} className="d-flex flex-column align-items-start mt-2 ">
        <Row className="w-100">
          <Col xs={4} className="pe-0">
            {product.choice === true ? (
              <p className="extra-info choice">Conscious choice</p>
            ) : (
              <div className="choice"></div>
            )}
          </Col>
          <Col xs={5}>
            {product?.new === true ? (
              <p className="extra-info new-arrival">New Arrival</p>
            ) : (
              <div className="new-arrival"></div>
            )}{" "}
          </Col>
        </Row>

        <Col xs={12} className="fw-bold">
          <p className="mb-0">{product.title}</p>
          <p>${product?.price}</p>
        </Col>
        <Col xs={12}>
          <Form.Select className="w-50" aria-label="size select">
            {product.size &&
              product.size.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
          </Form.Select>
        </Col>
        <Col className="w-100 mt-3 mb-2">
          <Button className="w-100 p-2" variant="danger">
            Add to cart
          </Button>
        </Col>
      </Col>
    </Container>
  );
};

export default ProductDetailPage;

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Image, Form } from "react-bootstrap";
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
    <Container fluid>
      <Row>
        <Image className="" src={product.img} alt={product.title} fluid />
      </Row>
      <Row className="d-flex p-2">
        <Col xs={4} className="pe-0">
          {product.choice === true ? (
            <p className="extra-info choice">Conscious choice</p>
          ) : (
            <div className="choice"></div>
          )}
        </Col>
        <Col>
          {product?.new === true ? (
            <p className="extra-info new-arrival">New Arrival</p>
          ) : (
            <div className="new-arrival"></div>
          )}{" "}
        </Col>
        <Row className="fw-bold">
          <p className="mb-0">{product.title}</p>
          <p>${product?.price}</p>
        </Row>
        <Row>
          <Form.Select className="w-50 ms-2" aria-label="size select">
            {product.size &&
              product.size.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
          </Form.Select>
        </Row>
      </Row>
    </Container>
  );
};

export default ProductDetailPage;

import React from "react";
import { Card } from "react-bootstrap";

const ProductsCard = ({ product }) => {
  return (
    <Card className="mt-4 product-card">
      <Card.Img src={product?.img} alt={product.title} />
      <Card.Body className="d-flex flex-column align-items-start">
        {product?.choice === true ? (
          <Card.Text className="extra-info choice">Conscious choice</Card.Text>
        ) : (
          <div className="choice"></div>
        )}
        {product?.new === true ? (
          <>
            <Card.Text className="extra-info new-arrival">
              New Arrival
            </Card.Text>
            <Card.Title>{product?.title}</Card.Title>
          </>
        ) : (
          <Card.Title>{product?.title}</Card.Title>
        )}
        <Card.Text>${product?.price}</Card.Text>
        <Card.Text className="extra-info">
          Available size: {product?.size}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductsCard;

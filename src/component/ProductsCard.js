import React from "react";
import { Card } from "react-bootstrap";

const ProductsCard = ({ product }) => {
  return (
    <Card className="mt-2 product-card">
      <Card.Img src={product?.img} alt={product.title} />
      <Card.Body className="d-flex pt-0 flex-column align-items-start">
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
          <div>
            <div className="new-arrival"></div>
            <Card.Title>{product?.title}</Card.Title>
          </div>
        )}
        <Card.Text className="price">${product?.price}</Card.Text>
        <Card.Text className="extra-info">
          Available size: {product?.size}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductsCard;

import React from "react";
import { Card } from "react-bootstrap";

const ProductsCard = ({ product }) => {
  return (
    <Card className="gap-1 mt-4">
      <Card.Img src={product?.img} alt={product.title} />
      <Card.Body>
        {product?.choice === true ? (
          <Card.Text>Conscious choice</Card.Text>
        ) : (
          ""
        )}
        {product?.new === true ? (
          <Card.Title>{product?.title} New</Card.Title>
        ) : (
          <Card.Title>{product?.title}</Card.Title>
        )}
        <Card.Subtitle>${product?.price}</Card.Subtitle>
        <Card.Text>Available size: {product?.size}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductsCard;

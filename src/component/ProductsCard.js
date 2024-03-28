import React from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const navigate = useNavigate();
  const productDetail = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Container>
      <Card className="mt-2 product-card" onClick={productDetail}>
        <Card.Img src={product?.img} alt={product.title} />
        <Card.Body className="d-flex pt-0 flex-column align-items-start">
          {product?.choice === true ? (
            <Card.Text className="extra-info choice">
              Conscious choice
            </Card.Text>
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
            Available size:{" "}
            {product?.size.map((size, index) => (
              <span key={size}>
                {size}
                {index !== product.size.length - 1 && ", "}
              </span>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductsCard;

import React, { useEffect} from "react";
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailProduct } from "../redux/reducers/productSlice";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.product.detailProduct)
  const dispatch = useDispatch()

  const getProductDetail = () => {
    try {
      // dispatch(productAction.getDetailProduct(id))
      dispatch(fetchDetailProduct(id))

    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getProductDetail();
}, [id]);

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center mb-2 product-detail "
    >
      <Row className="w-100">
        <Col xs={12} md={6}>
          <Image src={product.img} alt={product.title} fluid />
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column align-items-start mt-2"
        >
          <Row className="w-100 ">
            <Col xs={5} md={12} lassName="pe-0">
              {product.choice === true ? (
                <p className="extra-info choice detail-choice-new">
                  Conscious choice
                </p>
              ) : (
                <div className="choice"></div>
              )}
            </Col>
            <Col xs={5} className="ps-0 detail-new">
              {product?.new === true ? (
                <p className="extra-info new-arrival detail-choice-new">
                  New Arrival
                </p>
              ) : (
                <div className="new-arrival"></div>
              )}{" "}
            </Col>
          </Row>

          <Col xs={12} className="fw-bold detail-title-price mb-2">
            <p className="detail-title-price">{product.title}</p>
            <p>${product?.price}</p>
          </Col>
          <Col xs={12} className="mb-3">
            <Form.Select className="w-100" aria-label="size select">
              <option>Available size</option>
              {product.size &&
                product.size.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
            </Form.Select>
          </Col>
          <Col className="w-100 mt-3 mb-2">
            <Button className="w-100 p-2 add-btn fw-bold" variant="danger">
              Add to cart
            </Button>
          </Col>
        </Col>
      </Row>
    </Container>
  )
      
  
  

};

export default ProductDetailPage;

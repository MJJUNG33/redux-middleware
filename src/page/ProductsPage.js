import React, { useEffect,  useMemo } from "react";
import ProductsCard from "../component/ProductsCard";
import { Container, Col, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import {productAction} from "../redux/actions/productAction"
import { useDispatch, useSelector } from "react-redux";

const ProductsPage = () => {
  const products = useSelector((state) => state.product.products);
  const [query] = useSearchParams();
  
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = () => {
      try {
        const searchQuery = query.get("q") || "";
        console.log("Search query:", searchQuery);
       dispatch(productAction.getProducts(searchQuery))
      } catch (error) {
        console.log("Error:", error);
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
        <div className="not-find-product">
          Sorry, there is no matching items with{" "}
          <p className="search-input-value">"{query.get("q")}"</p>
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

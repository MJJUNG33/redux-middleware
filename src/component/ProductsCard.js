import React from "react";

const ProductsCard = ({ products }) => {
  return (
    <div>
      {products.map((product, i) => {
        return (
          <div className="product-list" key={i}>
            <img src={product.img} alt={product.title} />
            {product.choice === true ? (
              <p className="conscious-choice-product">Conscious choice</p>
            ) : (
              ""
            )}
            {product.new === true ? (
              <p>
                {product.title} <span className="new-product">New</span>{" "}
              </p>
            ) : (
              <p className="product-title">{product.title}</p>
            )}
            <p className="product-price">${product.price}</p>
            <p className="product-size">Available size: {product.size}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsCard;

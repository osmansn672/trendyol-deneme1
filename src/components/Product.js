import React from "react";

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Sepete Ekle</button>
    </div>
  );
};

export default Product;

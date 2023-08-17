import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ShoppingCart from "./components/ShoppingCart";
import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const products = [
    {
      id: 1,
      name: "Ürün 1",
      price: 100,
      image: "ürün1.jpg" // Resim yolunu eklemelisiniz
    },
    {
      id: 2,
      name: "Ürün 2",
      price: 150,
      image: "ürün2.jpg" // Resim yolunu eklemelisiniz
    },
    {
      id: 3,
      name: "Ürün 3",
      price: 200,
      image: "ürün3.jpg" // Resim yolunu eklemelisiniz
    },

    {
      id: 4,
      name: "Ürün 4",
      price: 250,
      image: "ürün4.jpg" // Resim yolunu eklemelisiniz
    }
  ];

  return (
    <div className="app">
      <Navbar />
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
};

export default App;

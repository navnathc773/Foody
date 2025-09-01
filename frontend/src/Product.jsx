import React, { useEffect, useState } from "react";
import "../style/product.css";  

export const Product = () => {
  const storedUser = localStorage.getItem("user");
  const [data, setData] = useState([]);
  const user = storedUser ? JSON.parse(storedUser) : null;

  const addToCart = async (curelem) => {
    console.log(curelem);
    const response = await fetch("http://localhost:3000/buy/add/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        curelem,
        user,
      }),
    });

    if (response.ok) {
      alert("✅ Product added to cart");
    } else {
      alert("⚠️ Product is already in the cart");
    }
  };

  const loadedProduct = async () => {
    try {
      const res = await fetch("/api/");
      console.log(res);
      const local = await res.json();
      setData(local.msg);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    loadedProduct();
  }, []);

  return (
    <div className="product-container">
      {data.map((curelem) => (
        <div className="product-card" key={curelem.id}>
          <img src={curelem.src} alt={curelem.name} className="product-img" />
          <div className="product-info">
            <h3 className="product-title">{curelem.name}</h3>
            <p className="product-price">₹ {curelem.price}</p>
            <div className="product-actions">
              <button className="btn view-btn">View Details</button>
              <button
                className="btn cart-btn"
                onClick={() => addToCart(curelem)}
              >
                🛒 Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

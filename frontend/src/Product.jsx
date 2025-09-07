import React, { useEffect, useState } from "react";
import "../style/product.css";  
import { NavLink } from "react-router-dom";
import { StarRating } from "./StarRating";

export const Product = () => {
  const storedUser = localStorage.getItem("user");
  const [data, setData] = useState([]);
  const [visibleCount,setvisibleCount]=useState(4);
  const user = storedUser ? JSON.parse(storedUser) : null;
  const handleViewMore=()=>{
    setvisibleCount((prev)=>prev+4);
  }
  const addToCart = async (curelem) => {
    const token=localStorage.getItem('token');

    if (!token) {
    alert("⚠️ Please login to add items to your cart.");
    return;
  }

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
      const res = await fetch("/api/getAll");
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
    <div className="product-wrapper">
    <div className="product-container">
      {data.slice(0,visibleCount).map((curelem) => (
        <div className="product-card" key={curelem.id}>
          <NavLink to={`/product/${curelem.id}`}><img src={curelem.src} alt={curelem.name} className="product-img" /></NavLink>
          <NavLink to={`/product/${curelem.id}`} style={{ textDecoration: "none" }}><h3 className="product-title">{curelem.name}</h3></NavLink>
          <NavLink  to={`/product/${curelem.id}`}  style={{ textDecoration: "none" }}>
            <div>
              <StarRating />
            </div>
          </NavLink>
        <div className="product-info">

            <NavLink  to={`/product/${curelem.id}`}  style={{ textDecoration: "none" }}><p className="product-price">Offer Price: ₹ {curelem.Price}</p></NavLink>
            <div className="product-actions">
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

    {visibleCount < data.length && (
      <div className="view-more-container"> 
      <button className="btn view-more-btn" onClick={handleViewMore}>...View More</button>
      </div>
    )}
    </div>
  );
};

import { useLoaderData, NavLink } from "react-router-dom";
import { useState } from "react";
import '../style/classify.css';
import { useAuth } from "./auth/Auth.jsx";
export const Classify = () => {
  const items = useLoaderData();
  const data = items.msg;
  const [visibleCount, setVisibleCount] = useState(5);
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const {token}=useAuth();
  const addToCart = async (curelem) => {
    console.log(curelem);
    const response = await fetch("http://localhost:3000/buy/add/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization":`Bearer ${token}`,
      },
      body: JSON.stringify({
        curelem,
        user,
      }),
    });

    const result=await response.json();
    console.log('sdfdslkf',result.msg);
    if (result) {
      alert(result.msg);
    } else {
      alert("⚠️ Product is already in the cart");
    }
  };

  return (
    <div className="classify-wrapper">
      <h2 className="classify-title">✨ Explore Our Special Collection ✨</h2>
      <div className="classify-container">
        {data.slice(0, visibleCount).map((curelem) => (
          <div className="classify-card" key={curelem._id}>
            <NavLink to={`/product/${curelem.id}`}>
            <div className="classify-img-box">
              <img src={curelem.src} alt={curelem.name} className="classify-img" />
            </div>
            </NavLink>
            <div className="classify-info">
              <NavLink to={`/product/${curelem.id}`} style={{textDecoration:"none"}}>
              <h3 className="classify-name">{curelem.name}</h3>
              <p className="classify-price">₹ {curelem.Price}</p>
              </NavLink>
              <div className="classify-actions">
            <button className="classify-btn classify-cart" onClick={() => addToCart(curelem)}>🛒 Add To Cart</button>
          </div>
      </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < data.length && (
        <div className="classify-load-more">
          <button
            className="classify-btn classify-load"
            onClick={() => setVisibleCount((prev) => prev + 5)}
          >
            Load More ⬇️
          </button>
        </div>
      )}
    </div>
  );
};

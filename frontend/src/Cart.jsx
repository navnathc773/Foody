import { useAuth } from "./auth/Auth.jsx";
import "../style/cart.css";   
import { FaPlus, FaMinus } from "react-icons/fa";
import { useEffect, useState } from "react";
// import { MdDelete } from "react-icons/md";

export const Cart = () => {
  const { cartitems } = useAuth();
  const [counts, setCounts] = useState(()=>{

    const saved=localStorage.getItem("cartcounts");
        return saved ? JSON.parse(saved): {};
    });

  const handlePlus = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleMinus = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  

  useEffect(()=>{
    localStorage.setItem("cartcounts",JSON.stringify(counts));
  },[counts]);

  useEffect(()=>{
    localStorage.setItem("cartitems",JSON.stringify(cartitems));
  },[cartitems]);

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Your Cart</h1>
      {cartitems.length === 0 ? (
        <p className="empty-cart">No items in cart yet.</p>
      ) : (
        <ul className="cart-list">
          {cartitems.map((curelem) => {
            const qty = counts[curelem.id] || 0; 
            return (
              <li className="cart-item" key={curelem.id}>
                <img className="cart-img" src={curelem.src} alt={curelem.name} />
                <div className="cart-info">
                  <h2>{curelem.name}</h2>
                  <p className="cart-desc">{curelem.Description}</p>
                  
                  <div className="cart-price">
                    <span>₹{curelem.price}</span>
                    <div className="quantity-control">
                      <button 
                        onClick={() => handleMinus(curelem.id)} 
                        className="qty-btn"
                      >
                        <FaMinus />
                      </button>
                      <input type="text" value={qty} readOnly />
                      <button 
                        onClick={() => handlePlus(curelem.id)} 
                        className="qty-btn"
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <button className="buy-btn">Buy Now</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

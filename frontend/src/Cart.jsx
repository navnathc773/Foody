import { useAuth } from "./auth/Auth.jsx";
import "../style/cart.css";   

export const Cart = () => {
  const { cartitems } = useAuth();

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Your Cart</h1>
      {cartitems.length === 0 ? (
        <p className="empty-cart">No items in cart yet.</p>
      ) : (
        <ul className="cart-list">
          {cartitems.map((curelem) => {
            return (
              <li className="cart-item" key={curelem.id}>
                <img className="cart-img" src={curelem.src} alt={curelem.name} />
                <div className="cart-info">
                  <h2>{curelem.name}</h2>
                  <p className="cart-desc">{curelem.Description}</p>
                  <div className="cart-price">
                    <span>₹{curelem.price}</span>
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

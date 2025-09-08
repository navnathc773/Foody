import { useEffect, useState } from "react";
import "../style/cart.css";
import { MdDelete } from "react-icons/md";

export const Cart = () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const email = user?.email || "";
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!email) return;

    const fetchCart = async () => {
      try {
        const response = await fetch("http://localhost:3000/getData/add/cartOne", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        const data = await response.json();
        setCartItems(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    };

    fetchCart();
  }, [email]);

  const handleDelete=async(id)=>{
    console.log(id);

    const response=await fetch('http://localhost:3000/delete/cart/confirm',{
      method:"DELETE",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id}),
    })

    if(response.ok){
      const local=await response.json();
      alert(local.msg);
      setCartItems((prev)=>prev.filter((item)=>item._id!==id))
    }
  }
  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="header">
        <h4>Item</h4>
        <h4 style={{position:"relative",left:"300px"}}>Price</h4>
        <h4 style={{position:"relative",left:"120px"}}>Qty</h4>
        <h4 style={{position:"relative",right:"80px"}}>Subtotal</h4>
      </div>
      <hr />
      {cartItems.length > 0 ? (
      <div className="cart-list">
        {cartItems.map((item, index) => (
          <div key={item._id}>
            <div className="cart-card">
              <img src={item.src} alt={item.name} />
              <div className="cart-info">
                <h3>{item.name}</h3>
              </div>
              <button onClick={() => handleDelete(item._id)}>
                <MdDelete />
              </button>
            </div>
          {index !== cartItems.length - 1 && <hr />}
          </div>
        ))}
      </div>
    ) : (
        <p className="empty">🛒 Your cart is empty</p>
    )}
    </div>
  );
};

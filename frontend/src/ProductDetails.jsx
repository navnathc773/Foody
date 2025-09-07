import { useLoaderData } from "react-router-dom";
import '../style/data.css';
export const ProductDetails = () => {
  const logo = useLoaderData();
  const storedUser = localStorage.getItem("user");
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

  const data=logo.msg;
  console.log(data);
  return (
    <>
    <div className="logo">
        <a href="/"><button>Go Back</button></a>
    </div>
    <div className="movie-container">
      <div className="movie-card">
        <img className="movie-poster" src={data[0].src} alt={logo.Title} />
        <div className="movie-info">
          <h2 className="movie-title">{data[0].name}</h2>
          <p className="movie-plot">{data[0].Description}</p>
          <p className="movie-plot"><b>{data[0].Price}</b></p>
          <button
                className="cart-btn" style={{fontSize:"20px",borderRadius:"5px"}}
                onClick={() => addToCart(data[0])}
              >
                🛒 Add To Cart
              </button>
        </div>
      </div>
    </div>
    </>
  );
};

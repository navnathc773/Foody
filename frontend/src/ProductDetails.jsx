import { useLoaderData } from "react-router-dom";
import '../style/data.css';
import { useState } from "react";
export const ProductDetails = () => {
  const [reviewData,setreviewData]=useState({
    title:"",
    review:"",
  });
    const [rating, setRating] = useState(0);

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

  const handlereview=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setreviewData((prev)=>({...prev,[name]:value}));
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    console.log(reviewData);
  }
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
     <div className="feedback-container">
      <div className="feedback-card">
        <h3>You're reviewing</h3>
        <h2>{data[0].name}</h2>

        <h3>Your Rating</h3>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              style={{ color: star <= rating ? "#4CAF50" : "lightgray", cursor: "pointer" }}
            >
              ★
            </span>
          ))}
        </div>
        {/* You can put your <StarRating /> here */}
        
        <form action="" method="POST" onSubmit={handleSubmit}>
          <label>Title Your Review</label>
          <input type="text" placeholder="Enter a title..." name="title" onChange={handlereview} />

          <label>Write a Review</label>
          <textarea placeholder="What should other customers know?" name="review" onChange={handlereview}></textarea>

          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
    </>
  );
};

import { useLoaderData } from "react-router-dom";
import "../style/data.css";
import { useState } from "react";

export const ProductDetails = () => {
  const [reviewData, setReviewData] = useState({
    title: "",
    review: "",
    rating: 0, // include rating inside reviewData
  });

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

  const data = logo.msg;
  console.log(data);

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRating = (star) => {
    setReviewData((prev) => ({ ...prev, rating: star }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Submitted Review:", reviewData);

    const response=await fetch("http://localhost:3000/save/data/review",{
      method:"POST",
      headers:{
        'Content-Type':"application/json",
      },
      body:JSON.stringify(reviewData),
    })

    if(response.ok){
      alert("review submitted successfully");
    }
    else{
      alert("Something went wrong....");
    }
  };

  return (
    <>
      <div className="logo">
        <a href="/">
          <button>Go Back</button>
        </a>
      </div>

      <div className="movie-container">
        <div className="movie-card">
          <img className="movie-poster" src={data[0].src} alt={logo.Title} />
          <div className="movie-info">
            <h2 className="movie-title">{data[0].name}</h2>
            <p className="movie-plot">{data[0].Description}</p>
            <p className="movie-plot">
              <b>{data[0].Price}</b>
            </p>
            <button
              className="cart-btn"
              style={{ fontSize: "20px", borderRadius: "5px" }}
              onClick={() => addToCart(data[0])}
            >
              🛒 Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* <div className="feedback-container">
        <div className="feedback-card">
          <h3>You're reviewing</h3>
          <h2>{data[0].name}</h2>

          <h3>Your Rating</h3>
          <form onSubmit={handleSubmit}>
            <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRating(star)} 
                style={{
                  color: star <= reviewData.rating ? "#4CAF50" : "lightgray",
                  cursor: "pointer",
                  fontSize: "24px",
                }}
              required >
                ★
              </span>
            ))}
          </div>

            <label>Name</label>
            <input type="text" name="name" onChange={handleReviewChange} value={reviewData.name} placeholder="Your Name" />
            <label>Title Your Review</label>
            <input type="text" placeholder="Enter a title..." name="title" value={reviewData.name}onChange={handleReviewChange} value={reviewData.title}/>
            <label>Write a Review</label>
            <textarea placeholder="What should other customers know?" name="review" value={reviewData.review} onChange={handleReviewChange} value={reviewData.review}></textarea>
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </div> */}
    </>
  );
};

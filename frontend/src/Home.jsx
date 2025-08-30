import { useState, useEffect } from "react";
import "../style/first.css";
import { Product } from "./Product";
import { Glimpse } from "./Glimpse";
import { Accordian } from "./Accordian";
// import { Accordian } from "./Accordian";

export const Home = () => {
  const images = [
    "https://i.ibb.co/0pFM0XQP/Screenshot-2025-08-29-184401.png",
    "https://i.ibb.co/BHfkWBfj/Black-and-Orange-Pizza-Recipe-Food-You-Tube-Thumbnail.png",
    "https://i.ibb.co/wFT1Db54/Foody-cookies.png",
    "https://i.ibb.co/ZpJRnBDr/Yellow-and-Brown-Organic-Abstract-Food-You-Tube-Thumbnail-1.png",
    "https://i.ibb.co/bgLQDf5c/Pink-Colorful-Special-Donut-Promo-Banner.png"
  ];

  const [index, setIndex] = useState(0);
  const [more,setmore]=useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
    <div className="slider-container">
      <img src={images[index]} alt="slider" className="slider-image" />

      {/* Dots */}
      <div className="slider-dots">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`dot ${i === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
    <div className="product">
      <h1>Our Products</h1>
      <br />
      <Product />
    </div>
    <div>
        <h3 className="view-more">.....View More</h3>
    </div>
    <div>
      <Glimpse />
    </div>
    <div className="delivery">
  <img src="https://i.ibb.co/xt1s0nH7/Chat-GPT-Image-Aug-30-2025-10-26-18-AM.png" alt="Free Delivery" />
  <div className="delivery-text">
    <h3>🎉 Enjoy Free Delivery on Orders Over ₹999!</h3>
    <h3>🚚 Free Shipping for Orders ₹999+ – Shop More, Save More!</h3>
    <h3>Hurry! Get Free Delivery When You Spend ₹999 or More!</h3>
    <h3>🛒 Your Cart Deserves Free Delivery! Just ₹999 Away!</h3>
  </div>
</div>

    <div>
      <Accordian />
    </div>
    </>
  );
};

import { useState, useEffect } from "react";
import "../style/first.css";
import { Product } from "./Product";
import { Glimpse } from "./Glimpse";
import { Accordian } from "./Accordian";
import { GlimpseCard } from "./GlimpseCard";
import { Special } from "./Special";
import { Footer } from "./Footer";
// import { Accordian } from "./Accordian";

export const Home = () => {
  // const images = [
  //   "https://res.cloudinary.com/de0gfcyix/image/upload/v1756557333/Screenshot_2025-08-29_184401_dcriuc.png",
  //   "https://res.cloudinary.com/de0gfcyix/image/upload/v1756705759/Black_and_Orange_Pizza_Recipe_Food_YouTube_Thumbnail_xn7wma.png",
  //   "https://res.cloudinary.com/de0gfcyix/image/upload/v1756706524/Brown_and_Beige_Cookies_Illustrative_Homemade_Healthy_Cookies_YouTube_Thumbnail_yy2xq0.png",
  //   "https://res.cloudinary.com/de0gfcyix/image/upload/v1756706788/Yellow_and_Brown_Simple_Promotion_Sweet_Cake_Food_Banner_xhl7iv.png",
  //   "https://res.cloudinary.com/de0gfcyix/image/upload/v1756707488/Brown_and_Beige_Modern_Sweet_Cake_Food_YouTube_Thumbnail_zptjv9.png"
  // ];

  // const [index, setIndex] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % images.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [images.length]);

  return (
    <>
    <div className="pizza">
      <GlimpseCard />
    </div>
    {/* <div className="slider-container">
      <img src={images[index]} alt="slider" className="slider-image" />

      {/* Dots */}
      {/* <div className="slider-dots">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`dot ${i === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>  */}
    <div className="product">
      <h1>Our Products</h1>
      <br />
      <Product />
    </div>
    <div>
      <Glimpse />
    </div>
    <div>
      <Special />
    </div>
    <br />
    <br />
    <br />
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
    <div>
      <Footer />
    </div>
    </>
  );
};

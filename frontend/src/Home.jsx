import { useState, useEffect } from "react";
import "../style/first.css";
import { Product } from "./Product";
import { Glimpse } from "./Glimpse";
import { Accordian } from "./Accordian";
import { GlimpseCard } from "./GlimpseCard";
import { Special } from "./Special";
import { Footer } from "./Footer";

export const Home = () => {

  return (
    <>
    <div className="pizza">
      <GlimpseCard />
    </div>
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
    <div className="speciality">
      <img src="https://res.cloudinary.com/de0gfcyix/image/upload/v1757074372/www.foodie.com_e06pbo.png" alt="" />
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
    <div>
      <Footer />
    </div>
    </>
  );
};

import React from "react";
import data from "./Product.json";
import "../style/product.css";  // 👈 Import CSS here
import { useState } from "react";
// import { useAuth } from "./auth/Auth.jsx";

export const Product = () => {
  const storedUser = localStorage.getItem("user");

  const user=storedUser ? JSON.parse(storedUser):null;
  // const {addToCart}=useAuth();
  const addToCart=async(curelem)=>{
    console.log(curelem);

    const response=await fetch("http://localhost:3000/buy/add/cart",{
      method:"POST",
      headers:{
        'Content-Type':"application/json",
      },
      body:JSON.stringify({
        curelem,
        user
      }),
    })
  }

  return (
    <ul>
      {data.map((curelem) => {
        return (
          <li key={curelem.id}>
            <img src={curelem.src} alt={curelem.name} />
            <p>{curelem.name}</p>
            <p>{curelem.Description}</p>
            <p>{curelem.price}</p>
            <button onClick={()=>addToCart(curelem)}>Add To Cart</button>
          </li>
        );
      })}
    </ul>
  );
};

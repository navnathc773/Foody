import '../style/glimpse.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
export const Glimpse = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
    <div class="glimpse-container">
    <h2 class="glimpse-title">A Glimpse of Our Delights</h2>
  
  <div class="glimpse-row" data-aos="fade-in">
    <div class="glimpse-card">
      <div class="video-wrapper">
        <iframe class="glimpse-video" src="https://res.cloudinary.com/de0gfcyix/video/upload/v1756707606/WhatsApp_Video_2025-08-23_at_17.29.56_ad245fea_hhjmqw.mp4" allowfullscreen></iframe>
      </div>
      <div class="glimpse-content">
        <h3 class="dish-title">Carob Cake</h3>
        <p class="dish-description">A rich and wholesome treat made with natural carob, offering a healthier alternative to chocolate without compromising taste.</p>
      </div>
    </div>

     <div class="glimpse-card">
      <div class="video-wrapper">
        <iframe class="glimpse-video" src="https://res.cloudinary.com/de0gfcyix/video/upload/v1756713370/download_fj2pom.mp4" autoPlay></iframe>
      </div>
      <div class="glimpse-content">
        <h3 class="dish-title">Donuts</h3>
        <p class="dish-description">Fluffy, golden, and perfectly sweet — our donuts are crafted to bring you joy with every bite.</p>
      </div>
    </div> 
     
    <div class="glimpse-card">
      <div class="video-wrapper">
        <iframe class="glimpse-video" src="https://res.cloudinary.com/de0gfcyix/video/upload/v1756707703/biscuits_stswuw.mp4" allowfullscreen></iframe>
      </div>
      <div class="glimpse-content">
        <h3 class="dish-title">Biscuits</h3>
        <p class="dish-description">Crispy, golden biscuits baked with love — the perfect companion for your tea or coffee moments.</p>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

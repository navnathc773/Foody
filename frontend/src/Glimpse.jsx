import '../style/glimpse.css';

export const Glimpse = () => {
  return (
    <>
    <div class="glimpse-container">
  <h2 class="glimpse-title">A Glimpse of Our Delights</h2>
  
  <div class="glimpse-row">
    <div class="glimpse-card">
      <div class="video-wrapper">
        <iframe class="glimpse-video" src="https://go.screenpal.com/player/cTjUDFn2SvO?width=100%&height=100%&ff=1&title=0" allowfullscreen></iframe>
      </div>
      <div class="glimpse-content">
        <h3 class="dish-title">Carob Cake</h3>
        <p class="dish-description">A rich and wholesome treat made with natural carob, offering a healthier alternative to chocolate without compromising taste.</p>
      </div>
    </div>

    <div class="glimpse-card">
      <div class="video-wrapper">
        <iframe class="glimpse-video" src="https://go.screenpal.com/player/cTjUDUn2Sx2?width=100%&height=100%&ff=1&title=0" allowfullscreen></iframe>
      </div>
      <div class="glimpse-content">
        <h3 class="dish-title">Donuts</h3>
        <p class="dish-description">Fluffy, golden, and perfectly sweet — our donuts are crafted to bring you joy with every bite.</p>
      </div>
    </div>

    <div class="glimpse-card">
      <div class="video-wrapper">
        <iframe class="glimpse-video" src="https://go.screenpal.com/player/cTjUDyn2SxN?width=100%&height=100%&ff=1&title=0" allowfullscreen></iframe>
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

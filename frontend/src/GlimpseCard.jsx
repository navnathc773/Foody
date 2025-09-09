export const GlimpseCard = () => {
  return (
    <div className="">
      <div className="video-wrapper">
        <video
          className="glimpse-video"
          src="https://res.cloudinary.com/de0gfcyix/video/upload/v1756712408/Black_Orange_pizza_ffmnot.mp4" autoPlay muted loop playsInline
          style={{
            width: "100%",
            height: "530px",
            objectFit: "cover",
            borderRadius: "12px",
            position:"relative",
            bottom:"20px"
          }}
        />
      </div>

    </div>
  );
};

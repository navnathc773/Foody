import { useLoaderData } from "react-router-dom";
import '../style/data.css';
export const ProductDetails = () => {
  const logo = useLoaderData();

  const data=logo.msg;
  console.log(data);
  return (
    <div className="movie-container">
      <div className="movie-card">
        <img className="movie-poster" src={data[0].src} alt={logo.Title} />
        <div className="movie-info">
          <h2 className="movie-title">{data[0].name}</h2>
          <p className="movie-plot">{data[0].Description}</p>
          <button className="watch-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

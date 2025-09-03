import { useLoaderData, NavLink } from "react-router-dom";
import { useState } from "react";
import '../style/classify.css';
export const Classify = () => {
  const items = useLoaderData();
  const data = items.msg;
  const [visibleCount, setVisibleCount] = useState(5);

  return (
    <div className="classify-wrapper">
      <h2 className="classify-title">✨ Explore Our Special Collection ✨</h2>
      <div className="classify-container">
        {data.slice(0, visibleCount).map((curelem) => (
          <div className="classify-card" key={curelem._id}>
            <div className="classify-img-box">
              <img src={curelem.src} alt={curelem.name} className="classify-img" />
            </div>
            <div className="classify-info">
              <h3 className="classify-name">{curelem.name}</h3>
              <p className="classify-price">₹ {curelem.Price}</p>
              <div className="classify-actions">
                <NavLink to={`/product/${curelem.id}`}>
                  <button className="classify-btn classify-view">🔍 View Details</button>
                </NavLink>
                <button className="classify-btn classify-cart">🛒 Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < data.length && (
        <div className="classify-load-more">
          <button
            className="classify-btn classify-load"
            onClick={() => setVisibleCount((prev) => prev + 5)}
          >
            Load More ⬇️
          </button>
        </div>
      )}
    </div>
  );
};

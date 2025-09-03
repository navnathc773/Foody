import { useLoaderData, NavLink } from "react-router-dom";
import { useState } from "react";

export const Classify = () => {
  const items = useLoaderData();
  const data = items.msg;
  const [visibleCount, setVisibleCount] = useState(5);

  return (
    <div className="product-wrapper">
      <div className="product-container">
        {data.slice(0, visibleCount).map((curelem) => (
          <div className="product-card" key={curelem._id}>
            <img src={curelem.src} alt={curelem.name} className="product-img" />
            <div className="product-info">
              <h3 className="product-title">{curelem.name}</h3>
              <p className="product-price">₹ {curelem.Price}</p>
              <div className="product-actions">
                <NavLink to={`/product/${curelem.id}`}>
                  <button className="btn">View Details</button>
                </NavLink>
                <button>
                  🛒 Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* view more button */}
      {visibleCount < data.length && (
        <div className="view-more">
          <button onClick={() => setVisibleCount((prev) => prev + 5)}>
            View More
          </button>
        </div>
      )}
    </div>
  );
};

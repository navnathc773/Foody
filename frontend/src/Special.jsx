import { useEffect, useState } from 'react';
import '../style/Special.css';
import { NavLink } from 'react-router-dom';
export const Special = () => {
  const [logo, setLogo] = useState([]);

  const localdata = async () => {
    try {
      const response = await fetch('/specialapi/getAll');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setLogo(data.msg);
    } catch (err) {
      console.error("Error fetching api2 data:", err);
    }
  };

  useEffect(() => {
    localdata(); 
  }, []);

  return (
    <>
    <div className='head'>
      <h1>Special Attraction</h1>
    </div>
    <div className="special-container">
      {logo.map((item) => (
        <div className="krish-icon" key={item._id}>
          <NavLink to={`/category/${item.Category}`}>
          <img src={item.src} alt={item.Category} />
          </NavLink>
          <p>{item.Category}</p>
        </div>
      ))}
    </div>
    </>
  );
};

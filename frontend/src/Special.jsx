import { useEffect } from 'react';
import '../style/Special.css';

export const Special = () => {
  const localdata = async () => {
    try {
      const response = await fetch('/specialapi/getAll');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("Error fetching api2 data:", err);
    }
  };

  useEffect(() => {
    localdata(); 
  }, []);

  return (
    <>
      <h1>dskfk</h1>
    </>
  );
};

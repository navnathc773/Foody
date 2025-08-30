import { useState, useEffect, createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  // const [cartitems, setCartItems] = useState(() => {
  //   const saved = localStorage.getItem("cartitems");
  //   return saved ? JSON.parse(saved) : [];
  // });


  // useEffect(() => {
  //   localStorage.setItem("cartitems", JSON.stringify(cartitems));
  // }, [cartitems]);

  const storeToken = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  // const addToCart = (product) => {
  //   setCartItems((prevItems) => {
  //     const existingItem = prevItems.find((item) => item.id === product.id);
  //     if (existingItem) {
  //       alert("item is already added to cart");
  //       return prevItems.map((item) =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     } else {
  //       alert("item is added to cart");
  //       return [...prevItems, { ...product, quantity: 1 }];
  //     }
  //   });
  // };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const isLoggedIn = !!token;

  return (
    <AuthContext.Provider
      value={{ token, storeToken, logout, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const logo = useContext(AuthContext);
  if (!logo) {
    throw new Error("useAuth used outside of AuthProvider");
  }
  return logo;
};

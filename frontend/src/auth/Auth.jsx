import { useState, createContext,useContext} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const storeToken = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const isLoggedIn = !!token; // true if token exists

  return (
    <AuthContext.Provider value={{ token, storeToken, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth=()=>{
    const logo=useContext(AuthContext);

    if(!logo){
        throw new Error("useAuth used outside of the navbar");
    }
    return logo;
}

import { StrictMode, useState, createContext, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import axios from "axios";

export const cloud_server = "https://api.cloudinary.com/v1_1";
// export const server = "http://localhost:3000";
export const server = "https://goshopping-be.onrender.com";
// export const server = "https://neeraj-industries-be.onrender.com";

export const Context = createContext({
  isAuthenticated: false,
});

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [role, setRole] = useState("");
  const [cartItemCnt, setCartItemCnt] = useState(0);
  const [token, setToken] = useState("");

  return (
    <Context.Provider
      value={{
        isAuthenticated: isAuthenticated,
        setIsAuthenticated: setIsAuthenticated,
        loading,
        setLoading,
        user,
        setUser,
        role,
        setRole,
        token,
        setToken,
        cartItemCnt,
        setCartItemCnt,
      }}
    >
      <App />
    </Context.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);

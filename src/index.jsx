import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AdminProvider from "./contexts/AdminContext";
import CartProvider from "./contexts/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <AdminProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AdminProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

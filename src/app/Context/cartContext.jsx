"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

 export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [checkoutData, setCheckoutData] = useState(null);
  const [lastOrder, setLastOrder] = useState(null);

  // Load from localStorage (optional)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      const storedOrder = localStorage.getItem("lastOrder");
      if (storedCart) setCart(JSON.parse(storedCart));
      if (storedOrder) setLastOrder(JSON.parse(storedOrder));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
      if (lastOrder) {
        localStorage.setItem("lastOrder", JSON.stringify(lastOrder));
      }
    }
  }, [cart, lastOrder]);

  const addToCart = (item) => {
    setCart((prev) => {
      // If same product/color/size exists, just increase quantity
      const existingIndex = prev.findIndex(
        (p) =>
          p.id === item.id &&
          p.color === item.color &&
          p.size === item.size
      );
      if (existingIndex !== -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += item.quantity;
        return copy;
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id, color, size) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(item.id === id && item.color === color && item.size === size)
      )
    );
  };

  const clearCart = () => setCart([]);

  const saveCheckoutData = (data) => {
    setCheckoutData(data);
  };

  const saveOrder = (order) => {
    setLastOrder(order);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    checkoutData,
    saveCheckoutData,
    lastOrder,
    saveOrder,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

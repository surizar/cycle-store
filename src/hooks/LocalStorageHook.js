import { useState } from "react";

export function useLocalStorage(localCart) {
  const [cart, setCart] = useState(() => {
    try {
      const item = window.localStorage.getItem(localCart);
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.log("error: " + error);
      return [];
    }
  });

  const setValue = (newItem) => {
    try {
      const newCart = newItem instanceof Function ? newItem(cart) : [...cart];
      newCart.push(newItem);
      setCart(newCart);
      window.localStorage.setItem(localCart, JSON.stringify(newCart));
    } catch (error) {
      console.log("Set local error: " + error);
    }
  };

  return [cart, setValue];
}

import React, { useState } from "react";
const CartContext = React.createContext();

function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);
  function addToCart(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem]);
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function emptyCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{ addToCart, cartItems, setCartItems, removeFromCart, emptyCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContextProvider, CartContext };

import React from "react";
import "../Components/CartPage.css";
import { CartContext } from "../Context";
import { useContext } from "react";
import CartWithItems from "../Components/CartWithItems";
import EmptyCart from "../Components/EmptyCart";

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const products = cartItems.map((item, id) =>
    cartItems.length != 0 ? (
      <CartWithItems key={id} item={item} />
    ) : (
      <EmptyCart key={id} />
    )
  );

  return <main className="cart-page">{products}</main>;
}

export default CartPage;

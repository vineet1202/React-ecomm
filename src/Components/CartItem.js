import React from "react";
import { IconX } from "@tabler/icons-react";

const CartItem = ({
  item,
  quantity,
  increase,
  decrease,
  calcPrice,
  removeFromCart,
}) => {
  return (
    <div className="cart-item">
      <div className="cart-img">
        <img src={item.img} alt="product" />
      </div>
      <div className="cart-middle">
        <p className="cart-name">{item.description}</p>
        <div className="cart-btns">
          <button onClick={decrease}>-</button>
          <p className="quantity">{quantity}</p>
          <button onClick={increase}>+</button>
        </div>
      </div>
      <div className="cart-right">
        <p className="cart-price">{calcPrice(quantity, item.price)}.00$</p>
        <IconX onClick={() => removeFromCart(item.id)} />
      </div>
    </div>
  );
};

export default CartItem;
